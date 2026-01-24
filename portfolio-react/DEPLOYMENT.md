# Deployment Guide

This guide will walk you through the process of uploading your portfolio to **GitHub** and deploying it to **Vercel**.

## 1. Uploading to GitHub

### Step 1: Create a New Repository
1. Go to [GitHub](https://github.com/) and log in.
2. Click the **+** icon in the top right and select **New repository**.
3. Give it a name (e.g., `modern-portfolio`) and click **Create repository**.

### Step 2: Push Your Code
If you haven't initialized Git locally:
```bash
git init
git add .
git commit -m "Initial commit"
```

Then link and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## 2. Deploying to Vercel

### Step 1: Connect to Vercel
1. Go to [Vercel](https://vercel.com/) and sign up with GitHub.
2. Click **Add New** > **Project**.
3. Find your repository in the list and click **Import**.

### Step 2: Configure and Deploy
1. Vercel will automatically detect that this is a **Vite** project.
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. Click **Deploy**.

Inside a few minutes, your portfolio will be live at a URL like `modern-portfolio.vercel.app`!

---

## 🛠️ Essential Tips
- **Private Info**: Never push a `.env` file to GitHub. Add your secrets directly in the Vercel Dashboard under **Environment Variables**.
- **Custom Domains**: You can add your own domain (e.g., `www.yourname.com`) in the Vercel project settings.
