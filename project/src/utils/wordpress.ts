import type { Article } from '../types';

  const WP_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;

  export async function fetchWordPressArticles(): Promise<Article[]> {
    try {
      const response = await fetch(`${WP_API_URL}/wp/v2/posts?_embed`);
      const posts = await response.json();
      
      return posts.map(transformWordPressPost);
    } catch (error) {
      console.error('Failed to fetch WordPress articles:', error);
      return [];
    }
  }

  export async function fetchWordPressArticle(slug: string): Promise<Article | null> {
    try {
      const response = await fetch(`${WP_API_URL}/wp/v2/posts?slug=${slug}&_embed`);
      const posts = await response.json();
      
      if (posts.length === 0) return null;
      return transformWordPressPost(posts[0]);
    } catch (error) {
      console.error('Failed to fetch WordPress article:', error);
      return null;
    }
  }

  function transformWordPressPost(post: any): Article {
    return {
      title: post.title.rendered,
      description: post.excerpt.rendered,
      content: post.content.rendered,
      image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
      href: `/articles/${post.slug}`,
      date: new Date(post.date)
    };
  }
