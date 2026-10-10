# Abhishek Asundi - Developer Portfolio Website

A complete, responsive, dark-themed developer portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically for software engineering recruiters and hiring managers.

---

## 🌟 Profile Summary

- **Name:** Abhishek Asundi
- **Degree:** B.Tech in Computer Science and Engineering
- **University:** SRM University (CGPA: **8.9 / 10**)
- **Location:** Chennai, India
- **Email:** `shek9949@gmail.com`
- **Headline:** Computer Science & Engineering Student | Aspiring Software Engineer
- **Target Roles:** Software Engineer, Associate Software Engineer, Programmer Analyst, Backend Developer, Full-Stack Developer

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm / yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Locally in Development Mode
Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
Create an optimized production bundle:
```bash
npm run build
```

To preview the built production bundle locally:
```bash
npm run preview
```

---

## ✏️ How to Edit Your Portfolio Data

All personal information, links, skills, projects, certifications, hackathons, and education details are centralized in a single, easily editable TypeScript file:

📍 **`src/data/portfolioData.ts`**

### Steps to update info:
1. **Personal Details & Links:** Edit `portfolioData.profile` fields (name, email, social URLs, headline, summary).
2. **Projects:** Add or edit project entries in `portfolioData.projects`. Set `isRepoVerified: true` and provide `githubUrl` when a public repository is published.
3. **Certifications:** Update `portfolioData.certifications`. Place your credential link in `credentialUrl` and set `isUrlVerified: true`.
4. **Hackathons:** Update `portfolioData.hackathons` with project titles, roles, and verified results.

### 📄 Adding Your Resume PDF
To make the "Download Resume" button download your actual resume file:
1. Place your resume PDF file in the `public/` directory as `resume.pdf`:
   ```
   portfolio/
   └── public/
       └── resume.pdf
   ```
2. The portfolio will automatically detect `public/resume.pdf` and enable direct one-click PDF downloading!

---

## 📦 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository (`https://github.com/Shek9949/portfolio`).
2. Log in to [Vercel](https://vercel.com).
3. Click **"New Project"** and import your repository.
4. Vercel automatically detects Vite framework settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Select **"Add new site"** -> **"Import an existing project"**.
3. Choose your GitHub repository.
4. Configure site settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

---

## 🎨 Tech Stack & Architecture

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism System
- **Icons:** Lucide React
- **SEO & Meta:** Open Graph metadata, semantic HTML5, keyboard accessible navigation
