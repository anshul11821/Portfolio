# Portfolio Deployment Instructions

Since you've chosen to use **GitHub + Vercel**, follow these exact steps to get your site live:

## 1. Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `modern-portfolio`).
3. Keep it **Public** (recommended for portfolios) or **Private**.
4. **DO NOT** initialize with a README, license, or gitignore (we already have them).
5. Click **Create repository**.

## 2. Push Your Code to GitHub
Open your terminal in the `portfolio-app` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Professional Portfolio with 3D and EmailJS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```
> [!IMPORTANT]
> Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.

## 3. Connect to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your new GitHub repository.
4. **Environment Variables**: Under the "Environment Variables" section, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**.

## 4. Updates
From now on, every time you `git push`, Vercel will automatically redeploy your site with the latest changes!
