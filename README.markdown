# Konten Otomatis Landing Page

A landing page for Konten Otomatis, built with HTML, TailwindCSS, and JavaScript.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build TailwindCSS**:
   ```bash
   npm run build:css
   ```

3. **Serve the Page**:
   - Use a local server (e.g., `npx serve src`) or open `src/index.html` in a browser.
   - Ensure images in `assets/images/` are correctly placed.

## Folder Structure

- `assets/css/`: CSS files (Tailwind input and custom styles).
- `assets/js/`: JavaScript files (main logic and app).
- `assets/images/`: Images used in the landing page.
- `src/`: HTML source files.
- `tailwind.config.js`: TailwindCSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `package.json`: Project dependencies and scripts.
- `.gitignore`: Files/folders to ignore in Git.

## Notes

- Fonts are loaded from Bunny Fonts CDN.
- Animate.css, Livewire, and SweetAlert2 are loaded via CDN.
- Ensure `assets/js/app.js` contains the actual application logic from the original `/js/app-eMHK6VFw.js`.