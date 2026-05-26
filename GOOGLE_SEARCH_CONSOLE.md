# Google Search Console setup

1. Go to Google Search Console.
2. Add the site as a URL Prefix property:
   https://mfk-analytics-v2.vercel.app/
3. Download the HTML verification file from Google.
4. Upload that verification file into the `public/` folder.
5. Commit to GitHub and let Vercel deploy.
6. In Search Console, click Verify.
7. Submit sitemap:
   https://mfk-analytics-v2.vercel.app/sitemap.xml

## Custom domain ready

When a custom domain is purchased, update these files:
- `index.html` canonical URL
- `public/sitemap.xml`
- `public/robots.txt`
