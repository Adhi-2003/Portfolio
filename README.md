git add README.md
git commit -m "Add project documentation in README"
git push origin main
# React Portfolio Website Documentation

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Production Build](#production-build)
- [Deployment (Vercel)](#deployment-vercel)
- [Challenges Faced](#challenges-faced)
- [Live Site & Repository](#live-site--repository)

---

## Overview
This is a **React-based portfolio website** to showcase projects, skills, resume, and contact information. It's built using modern React features such as routing, lazy loading, and modular components. The app is styled using Tailwind CSS.

## Project Structure
```
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── tailwind.config.js
```

## Features
- 📄 About Me section
- 💼 Projects with details and tech used
- 🛠️ Skills listed clearly
- 📄 Resume section (PDF or text)
- 📬 Contact form (frontend only)
- 🔄 Lazy loading of components
- 📱 Responsive across all devices
- ⚙️ Optimized production build

---

## Getting Started

### Prerequisites
- Node.js v16+
- Git

### Installation
```bash
git clone https://github.com/Adhi-2003/Portfolio.git
cd Portfolio
npm install
```

### Start Development Server
```bash
npm start
```
Access the app at: `http://localhost:3000`

---

## Development
- Components are lazy-loaded using `React.lazy()` and `Suspense`.
- Routing handled by `react-router-dom`
- Tailwind CSS is used for responsive styling.

**App.jsx**:
Handles routes and wraps lazy-loaded components:
```jsx
<Route path="/projects" element={<Projects />} />
```

**Navbar**:
Includes links to About, Projects, Skills, Resume, and Contact sections.

---

## Testing
Testing is set up using **Jest** and **React Testing Library**.

### Example Command:
```bash
npm test
```

Tests written for:
- Project gallery display
- Contact form submission validation

Coverage goal: **>80%**

---

## Production Build
To optimize the app:
```bash
npm run build
```
This generates a `build/` folder with optimized assets:
- Minified JS and CSS
- Pre-rendered HTML
- Lazy-loaded chunks

---

## Deployment (Vercel)

### Steps:
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Click **"Add New Project"** > Import your GitHub repo
4. Framework preset: **Create React App**
5. Build command: `npm run build`
6. Output directory: `build`
7. Click **Deploy**

#### Custom Domain
1. Go to Project > Settings > Domains
2. Add a domain and configure DNS
3. Enable SSL certificate

---

## Challenges Faced
- `react-scripts not found` error in Vercel due to missing `package-lock.json`
- Solved by deleting `node_modules`, regenerating lock file, and committing it
- Ensured Tailwind CSS was responsive by adding breakpoints
- Contact form was not functional due to no backend — noted as a future improvement

---

## Live Site & Repository
- 🔗 **Live Website**: https://adhi-portfolio.vercel.app
- 📦 **GitHub Repository**: https://github.com/Adhi-2003/Portfolio

---

> Made by Adhiyamaan N S
