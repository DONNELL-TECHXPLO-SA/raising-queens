# Raising Queens React Migration - Quick Setup Guide

## Quick Start (5 Minutes)

### Step 1: Rename the HTML file
The React app needs `index.html` in the root. Rename the React HTML file:

**PowerShell (Windows):**
```powershell
Move-Item -Path "index-react.html" -Destination "index.html" -Force
```

**Or manually:**
1. Rename `index-react.html` to `index.html`
2. Rename the old `index.html` to `index-old.html` (for backup)

### Step 2: Organize Assets
The `images`, `gallery`, and `Images` folders need to be in a `public` directory:

**PowerShell (Windows - run from project root):**
```powershell
# Create public directory if it doesn't exist
if (!(Test-Path "public")) { New-Item -ItemType Directory -Path "public" }

# Move asset folders to public (only if they exist in root)
if (Test-Path "images" -and !(Test-Path "public/images")) { Move-Item -Path "images" -Destination "public/" }
if (Test-Path "gallery" -and !(Test-Path "public/gallery")) { Move-Item -Path "gallery" -Destination "public/" }
if (Test-Path "Images" -and !(Test-Path "public/Images")) { Move-Item -Path "Images" -Destination "public/" }

Write-Host "Assets organized! ✓" -ForegroundColor Green
```

**Manually:**
1. Create a `public` folder if it doesn't exist
2. Move `images`, `gallery`, and `Images` folders into `public/`

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run the Dev Server
```bash
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173)

## That's It! 🎉

Your React app should now be running. All pages are converted to React components with TypeScript.

## What Changed?

### New Structure
```
src/
├── components/       # Shared components (Header, Footer, ProgressBar)
├── pages/           # Page components (Home, Events, Gallery, Donate, BankDetails)
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point
```

### Features
- ✅ All HTML pages converted to React components
- ✅ TypeScript for type safety
- ✅ React Router for navigation
- ✅ Component-based architecture
- ✅ Proper state management
- ✅ Modern build system (Vite)

### Old Files (Can be archived or deleted)
- `index.html` (original)
- `Donate.html`
- `Events.html`
- `Gallery.html`
- `bank-details.html`
- `script.js`
- `script_donate.js`
- `script_gallery.js`
- `styles.css` (styles are now in component folders)
- `styles_*.css` files

## Troubleshooting

**Images not loading?**
- Make sure images are in `public/images/`, `public/gallery/`, and `public/Images/`

**Port already in use?**
- Vite will auto-select another port. Check the terminal output.

**Can't find module errors?**
- Run `npm install` again

**TypeScript errors?**
- These are warnings to help you. The app will still run.

## Next Steps

- Read `README-REACT.md` for full documentation
- Test all pages to ensure everything works
- Deploy to production using `npm run build`

Need help? Check the detailed README-REACT.md file.
