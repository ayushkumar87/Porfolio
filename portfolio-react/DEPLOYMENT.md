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
2. **Root Directory**: Leave this as the **default** (the root of the project). Do not click "Edit".
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. Click **Deploy**.

Inside a few minutes, your portfolio will be live at a URL like `modern-portfolio.vercel.app`!

---

## ⚠️ Troubleshooting: "Could not read package.json" (ENOENT)

If you see an error like `Error: ENOENT: no such file or directory, open '/vercel/path0/package.json'`, it means Vercel is looking for your project files in the wrong place.

### How to Fix:
1. **Check Your Repository Structure**:
   - Go to your GitHub repository in your browser.
   - Do you see `package.json` immediately, or is it inside a folder called `portfolio-react`?
   
2. **Update Vercel Root Directory**:
   - In Vercel, go to your project **Settings** > **General**.
   - Look for **Root Directory**.
   - If your `package.json` is inside a folder (e.g., `portfolio-react`), click **Edit** and select that folder. 
   - If it's already at the root of the repo, ensure "Root Directory" is blank or set to `./`.

3. **Redeploy**:
   - Go to the **Deployments** tab and click **Redeploy** on the latest failed build.

---

## 🛠️ Essential Tips
- **Private Info**: Never push a `.env` file to GitHub. Add your secrets directly in the Vercel Dashboard under **Environment Variables**.
- **Custom Domains**: You can add your own domain (e.g., `www.yourname.com`) in the Vercel project settings.
