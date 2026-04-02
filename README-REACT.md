# Raising Queens Foundation - React TypeScript

This is the refactored version of the Raising Queens Foundation website, built with React and TypeScript.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **React Router** for client-side routing
- **Vite** for fast development and building
- **EmailJS** integration for contact form
- Fully responsive design
- Modern component-based architecture

## 📁 Project Structure

```
Raising-Queens-Website/
├── src/
│   ├── components/
│   │   ├── Header/          # Navigation header
│   │   ├── Footer/          # Footer component
│   │   └── ProgressBar/     # Scroll progress indicator
│   ├── pages/
│   │   ├── Home/            # Homepage with all sections
│   │   ├── Events/          # Events listing and calendar
│   │   ├── Gallery/         # Photo gallery
│   │   ├── Donate/          # Donation options
│   │   └── BankDetails/     # Banking information
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/
│   ├── images/              # Static images
│   ├── gallery/             # Gallery photos
│   └── Images/              # Testimonial images
├── index-react.html         # HTML template for React
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 🛠️ Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📦 Preview Production Build

```bash
npm run preview
```

## 🔧 Key Technologies

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **React Router** - Page routing
- **EmailJS** - Email service for contact form
- **Font Awesome** - Icons
- **Google Fonts (Poppins)** - Typography

## 📝 Important Notes

### File Organization

**Important**: You need to rename `index-react.html` to `index.html` for Vite to work properly:

```bash
# On Windows (PowerShell):
Move-Item index-react.html index.html -Force

# On Mac/Linux:
mv index-react.html index.html
```

Alternatively, you can keep both and just ensure the old `index.html` is either renamed to something like `index-old.html` or deleted.

### Public Assets

Make sure these folders are in the `public/` directory:
- `images/` - Logo, team photos, partner logos, etc.
- `gallery/` - Event photos for the gallery page
- `Images/` - Testimonial photos (note the capital 'I')

If they're currently in the root, move them:

```bash
# Create public folder if it doesn't exist
mkdir public

# Move asset folders
Move-Item images public/
Move-Item gallery public/
Move-Item Images public/
```

### EmailJS Configuration

The contact form uses EmailJS. The credentials are already configured in the code:
- Service ID: `service_qn9px3t`
- Template ID: `template_kd1xsga`
- Public Key: `QPhdOZQufzjykyAq8`

If you need to change these, update them in:
- `src/pages/Home/components/ContactForm.tsx`

## 🎨 Customization

### Changing Colors

The main brand color (`#c6a291`) is used throughout. To change it, search and replace in CSS files.

### Modifying Routes

Routes are defined in `src/App.tsx`. To add new pages:

1. Create a new component in `src/pages/`
2. Add a new `<Route>` in `App.tsx`
3. Update navigation links in `Header.tsx` and `Footer.tsx`

## 🐛 Common Issues

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Images Not Loading

Ensure images are in the `public/` folder and referenced with `/` prefix:
```tsx
<img src="/images/logo.png" alt="Logo" />
```

### TypeScript Errors

If you see TypeScript errors, make sure all dependencies are installed:
```bash
npm install
```

## 📄 Scripts Reference

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

Currently, all API keys are in the code. For production, consider using environment variables:

1. Create `.env` file
2. Add: `VITE_EMAILJS_PUBLIC_KEY=your_key`
3. Use: `import.meta.env.VITE_EMAILJS_PUBLIC_KEY`

## 📞 Support

For issues or questions about the codebase, please contact the development team.

## 🎉 Deployment

The built files (in `dist/`) can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Azure Static Web Apps

Simply upload the contents of the `dist/` folder after running `npm run build`.

---

**Built with ❤️ for Raising Queens Foundation**
