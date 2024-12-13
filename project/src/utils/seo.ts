import type { Article } from '../types';

export function generateMetaTags(article: Article) {
  const siteTitle = import.meta.env.PUBLIC_SITE_TITLE;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;

  return {
    title: `${article.title} | ${siteTitle}`,
    description: article.description,
    canonical: `${siteUrl}/articles/${article.slug}`,
    openGraph: {
      title: article.title,
      description: article.description,
      image: article.image,
      type: 'article',
      url: `${siteUrl}/articles/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      image: article.image,
    },
    schema: generateSchema(article),
  };
}

function generateSchema(article: Article) {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const siteName = import.meta.env.PUBLIC_SITE_TITLE;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date?.toISOString(),
    dateModified: article.date?.toISOString(),
    author: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/articles/${article.slug}`,
    },
  };
}
