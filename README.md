# Portfolio Website - Nikhil Chavhan

Personal Portfolio Website built using React, Vite, and modern web technologies to showcase projects, skills, and achievements with enhanced animations and interactions.

## 🚀 Live Site
https://nikhil7353.github.io/

## 📁 Project Structure
```
Portfolio-Nikhil Chavhan/
├── index.html          # React build output
├── assets/            # Optimized CSS and JS bundles
│   ├── index-*.css    # Minified styles
│   └── index-*.js     # Minified JavaScript
├── images/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── Nikhil_Chavhan.pdf # Resume
├── portfolio-react/   # React source code
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md          # Documentation
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.0** - Component-based UI framework
- **Vite 7.2.4** - Build tool and dev server
- **React Bootstrap 2.10.10** - UI component library

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Glassmorphism** - Modern design system
- **Custom CSS** - Advanced animations and effects

### Icons & Media
- **React Icons** - Icon library (FontAwesome, Simple Icons)
- **React Type Animation** - Dynamic text animations
- **Lazy Loading** - Optimized image loading

### Development Tools
- **ESLint** - Code quality and linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS compatibility

## 📝 Features
- **🎨 Modern Design** - Glassmorphism with gradient effects
- **⚡ Advanced Animations** - Framer Motion powered interactions
- **📱 Fully Responsive** - Mobile-first responsive design
- **🔍 SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **♿ Accessible** - WCAG compliant with ARIA labels
- **🎯 Skill Filtering** - Interactive category-based skill showcase
- **📊 Project Cards** - Enhanced with hover effects and dual buttons
- **📧 Contact Form** - Functional contact integration
- **🚀 Performance** - Lazy loading, code splitting, optimized bundles

## 🔧 GitHub Pages Setup

If you're getting a 404 error, follow these steps:

### Step 1: Verify Repository Settings
1. Go to your repository: `https://github.com/Nikhil7353/Nikhil7353.github.io`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main` (or `master` if that's your default branch)
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 2: Verify Repository is Public
- Your repository must be **public** (unless you have GitHub Pro)
- Go to Settings > General > scroll to "Danger Zone" to change visibility

### Step 3: Verify Branch Name
- Your default branch should be `main` or `master`
- Check in Settings > Branches

### Step 4: Verify Files are Committed
Make sure all files are committed and pushed:
```bash
git add .
git commit -m "Deploy React portfolio with enhanced features"
git push origin main
```

### Step 5: Wait for Deployment
- GitHub Pages can take 1-10 minutes to deploy
- Check Actions tab for deployment status
- You'll see a green checkmark when it's ready

### Step 6: Clear Browser Cache
- Hard refresh: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
- Or try incognito/private browsing mode

## 🐛 Common Issues

### 404 Error
- **Cause**: GitHub Pages not enabled or wrong branch selected
- **Fix**: Follow Step 1 above

### Site Shows "Coming Soon" or Old Content
- **Cause**: Cache issue or deployment in progress
- **Fix**: Wait 5-10 minutes, then hard refresh browser

### Images Not Loading
- **Cause**: Case-sensitive file paths
- **Fix**: Ensure image filenames match exactly (case-sensitive)

### CSS/JS Not Loading
- **Cause**: Incorrect file paths
- **Fix**: Verify paths in `index.html` match your folder structure

### Animations Not Working
- **Cause**: JavaScript loading issues
- **Fix**: Check browser console for errors, ensure all assets load properly

## 🔄 Development

### Local Development
```bash
cd portfolio-react
npm install
npm run dev
```

### Production Build
```bash
cd portfolio-react
npm run build
```

### Deployment
```bash
# Build and copy to root
npm run build
# Copy dist/* to repository root
# Commit and push changes
git add .
git commit -m "Deploy React portfolio"
git push origin main
```

## 📧 Contact
- Email: nikhilchavan063@gmail.com
- GitHub: [@Nikhil7353](https://github.com/Nikhil7353)

## 📄 License
All rights reserved 2025 Nikhil Chavhan

