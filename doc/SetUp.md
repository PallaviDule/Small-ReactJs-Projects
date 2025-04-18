# 🚀 React + Parcel Setup Guide (with Tailwind)

We are building this project **from scratch**, without using a project generator like `create-react-app` (which uses Webpack under the hood). Instead, we’re using [Parcel](https://parceljs.org) — a zero-config bundler — for a faster, modern setup.

###  Installation & Setup
1. Initialize npm project
    ```bash
    npm init -y
    ```
    This creates a `package.json`. You'll get `package-lock.json` and `node_modules/` once you install packages.

2. Install Parcel as a dev dependency
    ```bash
    npm install --save-dev parcel
    ```
    We are using [Parcel](./Parcel.md) as the build tool and bundler.

3. Install React and ReactDOM
    ```bash
    npm install react react-dom
    ```
4. Set up Tailwind CSS  
Follow [Parcel’s Tailwind setup guide here](https://tailwindcss.com/docs/installation/framework-guides/parcel)

    > **Summary:**
    > - `npm install tailwindcss @tailwindcss/postcss` 
    > - Create `.postcssrc`  
    > - Add Tailwind directives in your `index.css`  
    > - Import `index.css` in your React entry file

5. Run your app with Parcel     
Parcel starts from your HTML file. Use this command to run the project:
    ```bash
    npx parcel index.html
    ```

    **ERROR**: If you get an error related to `main: 'index.js'` in `package.json`:

    - The `"main"` field is meant for libraries, not apps.
    - Parcel doesn't use `main` because it starts from `index.html`, not `index.js`.
    - It scans the `<script type="module" src="src/index.js">` in [index.html](./index.html.md) and builds from there.

6. Add a start script in `package.json`
    ```json
    "scripts": {
    "start": "parcel index.html"
    }
    ```
    Now you can run the app using: `npm start` or `npm run start`

7. Create `.gitignore`  
Ignore folders that shouldn't be committed:
    ```
    node_modules
    dist
    .parcel-cache
    .env
    ```

## Connect to GitHub : If you are creating your own new project
1. Initialize Git (if not already):

    ```bash
    git init
    ```
2. Commit your code:

    ```bash
    git add .
    git commit -m "Initial commit - React + Parcel setup"
    ```
3. Create a new repo on GitHub (https://github.com/new)
4. Link your local repo:
    ```bash
    git remote add origin https://github.com/your-username/your-repo-name.git
    git push origin main 
    ```

### ✅ Done!

You now have a fast, modern React setup with:
- ⚡ Parcel for bundling
- 💨 Tailwind for styling
- 🔄 Live reload and zero config
- 📂 GitHub version control

