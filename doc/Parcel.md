Great question! 🔍

### 📦 Parcel is a **bundler** (also considered a build tool).
Read more on Parcel here: [React+Parcel](https://parceljs.org/recipes/react/)

## ✅ Parcel is:
- **Primarily a Bundler**: It **bundles your JS, CSS, HTML, images**, etc. into optimized output files for production.
- **Also a Build Tool**: Because it handles things like:
  - Transpiling (via Babel or SWC)
  - Minification
  - Asset optimization
  - Dev server with HMR (Hot Module Replacement)
  - Tree-shaking
  - Code splitting

###
> **Bundler** is a more specific term.  
> **Build Tool** is broader — Parcel is both, but **its core job is bundling**.

### 🆚 Compared to others:

| Tool     | Bundler | Build Tool | Notes                             |
|----------|---------|------------|-----------------------------------|
| Webpack  | ✅      | ✅         | Very customizable but config-heavy |
| Vite     | ✅      | ✅         | Uses **esbuild**/Rollup internally |
| Parcel   | ✅      | ✅         | Zero-config, smart defaults       |
| esbuild  | ✅      | ✅         | Extremely fast (written in Go)    |
| Rollup   | ✅      | ✅         | Great for libraries/modules       |
