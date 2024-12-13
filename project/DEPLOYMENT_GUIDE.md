# Deployment and WordPress Integration Guide

This guide provides step-by-step instructions to deploy your Astro website to Netlify and connect it to your WordPress site for content.

## Prerequisites

Before you begin, make sure you have the following:

1. **A Netlify account:** If you don't have one, sign up at [https://www.netlify.com/](https://www.netlify.com/).
2. **A WordPress website:** This guide assumes you have a WordPress site set up and running.
3. **A GitHub account:** We'll use GitHub to store your website's code. If you don't have an account, create one at [https://github.com/](https://github.com/).
4. **Basic familiarity with Git:** You should know how to commit changes and push them to a remote repository.

## Step 1: Prepare Your Code

### 1.1 Environment Variables

*   **What are they?** Environment variables store sensitive information (like API keys) or settings that might change between different environments (like development and production).
*   **How to use them:**
    1. You should have a file named `.env` in your project's root directory. It should look like this:

        ```
        PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
        PUBLIC_SITE_URL=https://your-site.com
        PUBLIC_SITE_TITLE="Your Site Title"
        PUBLIC_SITE_DESCRIPTION="Your site description"
        ```

    2. Replace `https://your-wordpress-site.com/wp-json` with your WordPress site's API URL.
    3. Replace `https://your-site.com` with your website's domain name.
    4. Update `PUBLIC_SITE_TITLE` and `PUBLIC_SITE_DESCRIPTION` with your website's title and description.
    5. **Important:** Do not commit your `.env` file to your public Git repository. It's already in the `.gitignore` file, so it will be excluded.

### 1.2 API Calls

*   **What are they?** API calls are how your Astro site fetches content from your WordPress site.
*   **How to check them:**
    1. Open the file `src/utils/wordpress.ts`.
    2. Make sure the `WP_API_URL` variable is using `import.meta.env.PUBLIC_WORDPRESS_API_URL`. It should look like this:

        ```typescript
        const WP_API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL;
        ```

    3. Ensure that the functions `fetchWordPressArticles` and `fetchWordPressArticle` are using this `WP_API_URL` to make requests.

## Step 2: Set up Netlify

### 2.1 Connect to GitHub

1. Log in to your Netlify account.
2. Click on "Add a new site" and select "Import an existing project".
3. Choose "GitHub" as your Git provider.
4. Authorize Netlify to access your GitHub account.
5. Select your project's repository from the list.

### 2.2 Configure Build Settings

1. **Branch to deploy:** Choose the branch you want to deploy (usually `main` or `master`).
2. **Build command:** Enter `npm run build`.
3. **Publish directory:** Enter `dist`.

### 2.3 Set Environment Variables

1. Go to "Site settings" -> "Build & deploy" -> "Environment".
2. Click "Edit variables".
3. Add a new variable:
    *   Key: `PUBLIC_WORDPRESS_API_URL`
    *   Value: Your WordPress API URL (e.g., `https://your-wordpress-site.com/wp-json`)
4. Repeat for any other environment variables you have in your `.env` file, such as `PUBLIC_SITE_URL`, `PUBLIC_SITE_TITLE`, and `PUBLIC_SITE_DESCRIPTION`.
5. Click "Save".

## Step 3: Deploy Your Site

1. Click on "Deploy site".
2. Netlify will start building and deploying your site. This might take a few minutes.
3. Once the deployment is complete, you'll see a "Site is live" message.
4. Click on the provided link to visit your deployed site.

## Step 4: Verify WordPress Integration

1. Visit your deployed site.
2. Check if the articles from your WordPress site are being displayed correctly.
3. If you see any errors, double-check your environment variables and API calls.

## Step 5: Set up a Custom Domain (Optional)

1. Go to "Site settings" -> "Domain management".
2. Click "Add custom domain".
3. Enter your domain name and follow the instructions to configure your DNS settings.
4. Enable HTTPS for your domain.

## Troubleshooting

*   **Content not updating:**
    *   Clear your browser cache.
    *   Wait a few minutes for the changes to propagate.
    *   Check if your WordPress API is accessible.
*   **Deployment errors:**
    *   Review the deployment logs in Netlify for error messages.
    *   Make sure your build command and publish directory are correct.
*   **API call errors:**
    *   Verify that your `PUBLIC_WORDPRESS_API_URL` is correct.
    *   Check if your WordPress site allows API access.

## Further Assistance

If you encounter any issues or need further assistance, please provide the following information:

*   Error messages you're seeing
*   Screenshots of the issue
*   Steps you've already taken
*   Your Netlify site name or URL
*   Your WordPress site URL

I'll be happy to help you troubleshoot and resolve any problems.

Now, regarding what I can directly assist you with:

1. **Reviewing Code:** I can review your `wordpress.ts` file and other relevant parts of your code to ensure they are correctly configured for fetching data from the WordPress API.
2. **Checking Configuration:** I can check your `netlify.toml` file to make sure the build settings and redirects are set up properly.
3. **Troubleshooting Errors:** If you encounter any errors during the deployment or integration process, I can help you diagnose and fix them.

I cannot, however, directly access or modify your Netlify account or your WordPress site. You'll need to perform those actions yourself using the instructions provided in the guide.

Please let me know when you're ready to proceed with the review or if you have any questions about the deployment guide.
