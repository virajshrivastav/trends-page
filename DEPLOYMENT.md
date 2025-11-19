# Deployment Guide

This guide explains how to deploy the Business Trends Dashboard to Vercel.

## Prerequisites

- Node.js 18+ installed
- A Vercel account (free tier works fine)
- Vercel CLI installed globally: `npm i -g vercel`

## Quick Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **trends-page** (or your preferred name)
   - In which directory is your code located? **./** (press Enter)
   - Want to override the settings? **N**

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `virajshrivastav/trends-page`
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"

## Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:
- Correct build output directory (`dist`)
- SPA routing works correctly (all routes redirect to `index.html`)
- Vite framework is properly detected

## Environment Variables

This project doesn't require any environment variables. All data is loaded from the static CSV file in the `public` directory.

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Updating the Deployment

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push origin master
```

If you connected Vercel to your GitHub repository, it will automatically deploy on every push to master.

Or manually deploy:

```bash
vercel --prod
```

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18+
- Check build logs in Vercel dashboard

### 404 Errors

- Verify `vercel.json` rewrites configuration is present
- Check that `dist` directory is being generated correctly

### Data Not Loading

- Ensure `public/business-trends-data.csv` exists
- Check browser console for fetch errors
- Verify CSV file is being copied to `dist/business-trends-data.csv` during build

## Performance Optimization

The deployment is optimized with:
- Vite's production build (minification, tree-shaking)
- Code splitting for better load times
- Static asset caching
- Vercel's global CDN

## Monitoring

View deployment logs and analytics in the Vercel Dashboard:
- Real-time logs
- Performance metrics
- Error tracking
- Traffic analytics

## Support

For issues with:
- **Vercel deployment**: Check [Vercel Documentation](https://vercel.com/docs)
- **Application bugs**: Open an issue on GitHub
- **Data updates**: Replace the CSV file and redeploy

