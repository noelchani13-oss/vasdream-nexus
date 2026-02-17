# Auto-Deployment Setup Instructions for IT

This project is configured for **automatic deployment** to AWS whenever changes are pushed to GitHub.

## Option 1: AWS Amplify (Recommended - Easiest)

This is the simplest option - AWS Amplify handles everything automatically.

### Setup Steps:

1. **Go to AWS Amplify Console**
   - Sign in to AWS Console
   - Navigate to AWS Amplify

2. **Connect GitHub Repository**
   - Click "New app" → "Host web app"
   - Select "GitHub" as the source
   - Authorize AWS Amplify to access GitHub
   - Select repository: `noelchani13-oss/vasdream-bedbank`
   - Select branch: `main`

3. **Configure Build Settings**
   - Amplify will auto-detect the Vite build settings
   - Add environment variables:
     - `VITE_SUPABASE_PROJECT_ID` = `haqabjrtsiucvlmymnbp`
     - `VITE_SUPABASE_PUBLISHABLE_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcWFianJ0c2l1Y3ZsbXltbmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjU4NDksImV4cCI6MjA4NjkwMTg0OX0.o3z7rgi1GIh1n70kk_ug5wUXEFqJiqLGISVSY-8uxkQ`
     - `VITE_SUPABASE_URL` = `https://haqabjrtsiucvlmymnbp.supabase.co`

4. **Deploy**
   - Click "Save and deploy"
   - Amplify will build and deploy automatically
   - You'll get a URL like: `https://main.xxxxx.amplifyapp.com`

5. **Done!**
   - Every time code is pushed to GitHub (from Lovable or locally), AWS Amplify will automatically rebuild and deploy
   - No manual intervention needed!

### Optional: Custom Domain
- In Amplify Console → Domain management → Add custom domain
- Follow the prompts to configure your domain

---

## Option 2: S3 + CloudFront with GitHub Actions (More Control)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to S3 on every push to the `main` branch.

### Setup Steps:

1. **Create S3 Bucket**
   - Create an S3 bucket for static website hosting
   - Enable static website hosting
   - Set bucket policy for public read access

2. **Create IAM User** (for GitHub Actions)
   - Create IAM user with S3 write permissions
   - Save Access Key ID and Secret Access Key

3. **Configure GitHub Secrets**
   - Go to: https://github.com/noelchani13-oss/vasdream-nexus/settings/secrets/actions
   - Add these secrets:
     - `AWS_S3_BUCKET` → Your S3 bucket name
     - `AWS_ACCESS_KEY_ID` → IAM user access key
     - `AWS_SECRET_ACCESS_KEY` → IAM user secret key
     - `AWS_REGION` → Your AWS region (e.g., `us-east-1`)
     - `VITE_SUPABASE_PROJECT_ID` → `haqabjrtsiucvlmymnbp`
     - `VITE_SUPABASE_PUBLISHABLE_KEY` → `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcWFianJ0c2l1Y3ZsbXltbmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjU4NDksImV4cCI6MjA4NjkwMTg0OX0.o3z7rgi1GIh1n70kk_ug5wUXEFqJiqLGISVSY-8uxkQ`
     - `VITE_SUPABASE_URL` → `https://haqabjrtsiucvlmymnbp.supabase.co`
     - `AWS_CLOUDFRONT_DISTRIBUTION_ID` → (Optional) CloudFront distribution ID

4. **Done!**
   - GitHub Actions will automatically build and deploy on every push
   - Check the "Actions" tab on GitHub to see deployment status

### Optional: CloudFront CDN
- Create a CloudFront distribution pointing to your S3 bucket
- Add the distribution ID to GitHub secrets for automatic cache invalidation

---

## How It Works

1. **Edit in Lovable** → Changes automatically pushed to GitHub
2. **GitHub triggers deployment** → Automatic build starts
3. **Deployed to AWS** → Site updates automatically
4. **No manual work needed!**

---

## GitHub Repository

https://github.com/noelchani13-oss/vasdream-nexus

---

## Current Manual Deployment (Fallback)

If auto-deployment is not set up yet, you can still deploy manually:

1. Get the latest code: `git pull`
2. Build: `npm run build`
3. Upload the `dist` folder to your server

---

## Questions?

Contact: n.cani
