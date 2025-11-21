# Quick Start Guide

## Immediate Next Steps

### 1. Run the Development Server

```bash
cd portfolio-website
npm run dev
```

Then open your browser to `http://localhost:5173` to see your portfolio!

### 2. Customize Your Information

**Priority Files to Update:**

#### [Hero.jsx](src/components/Hero.jsx)
- Line 39: Replace "Your Name" with your actual name
- Lines 71-86: Update social media links and email

#### [About.jsx](src/components/About.jsx)
- Line 17-22: Update your skills and proficiency levels
- Lines 25-28: Update your statistics (years, projects, clients, reach)
- Lines 135-138: Update education details and years

#### [Contact.jsx](src/components/Contact.jsx)
- Lines 46-64: Update email, phone, location
- Lines 66-70: Update social media links

### 3. Add Your Projects

Edit [Portfolio.jsx](src/components/Portfolio.jsx) starting at line 11:

Replace the sample projects with your actual work:
```javascript
{
  id: 1,
  title: 'Your Project Title',
  category: 'social-media', // or 'video', 'reels'
  image: 'YOUR_IMAGE_URL',
  description: 'Brief project description',
  stats: { reach: '500K+', engagement: '12%', duration: '3 months' }
}
```

### 4. Customize Colors (Optional)

Edit [index.css](src/index.css) lines 7-18:
```css
:root {
  --primary: #6366f1;    /* Change to your brand color */
  --secondary: #ec4899;   /* Accent color */
  --accent: #f59e0b;      /* Highlight color */
}
```

## Deploy to GitHub Pages

### Step 1: Update package.json
Line 14: Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

### Step 2: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: `gh-pages` branch
4. Save

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website/`

## Common Customizations

### Change Font
In [index.css](src/index.css) line 22:
```css
font-family: 'YourFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

### Add Google Fonts
In [index.html](index.html), add in the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Change Hero Background Animation
Edit [Hero.css](src/components/Hero.css) lines 25-54 to modify the gradient orbs

### Modify Service Cards
Edit [Services.jsx](src/components/Services.jsx) starting at line 18 to add/remove services

## Testing

### Local Testing
```bash
npm run dev
```

### Build Testing
```bash
npm run build
npm run preview
```

### Production Build
```bash
npm run build
```
The optimized files will be in the `dist/` folder.

## Tips

1. **Images**: Use high-quality images for your projects
   - Recommended size: 800x600px or larger
   - Use [Unsplash](https://unsplash.com) for temporary placeholders
   - Compress images with [TinyPNG](https://tinypng.com)

2. **Social Media**: Make sure all social media links are active
   - Update Instagram, LinkedIn, Twitter URLs
   - Test all links before deploying

3. **Contact Form**: The form currently shows a success message
   - To connect to a real backend, update the `handleSubmit` function in Contact.jsx
   - Consider using services like Formspree, EmailJS, or Netlify Forms

4. **SEO**: Update the title and meta tags in [index.html](index.html)

5. **Mobile Testing**: Always test on mobile devices or use browser dev tools

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review component files for inline comments
- Test locally before deploying

## File Structure Quick Reference

```
src/
├── components/
│   ├── Navbar.jsx/css   → Navigation & Menu
│   ├── Hero.jsx/css     → Landing section with your intro
│   ├── About.jsx/css    → Skills, stats, education
│   ├── Services.jsx/css → What you offer
│   ├── Portfolio.jsx/css→ Project showcase
│   └── Contact.jsx/css  → Contact form & info
├── App.jsx              → Main component (imports all sections)
├── index.css            → Global styles & colors
└── main.jsx             → Entry point
```

## Checklist Before Deployment

- [ ] Updated your name in Hero section
- [ ] Changed all social media links
- [ ] Updated email and contact information
- [ ] Added your real projects
- [ ] Updated statistics and achievements
- [ ] Customized colors (if desired)
- [ ] Tested on mobile view
- [ ] Tested all navigation links
- [ ] Tested contact form
- [ ] Updated package.json with your GitHub username
- [ ] Created GitHub repository
- [ ] Committed all changes

## After Deployment

1. Share your portfolio URL on social media
2. Add the URL to your resume
3. Update regularly with new projects
4. Monitor GitHub Pages status in repository settings

Happy showcasing! 🚀
