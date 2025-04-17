## index.html
In index.html, you will need `<script type="module" src="index.js"></script>`
    
- It tells the browser: “This script is an ES Module.”
- Without type="module", the browser will throw an error like:
    > "Uncaught SyntaxError: Cannot use import statement outside a module"
- In modern setups (like Vite, Parcel, or barebones setups), you often work with ES Modules directly in the browser during development.

### Where this react app render ? 

You will notice how the original HTML content from index.html is preserved, but your own NavigationBar React component now appears inside the <nav id="navigation"> from your HTML.

```html index.html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <p>This paragraph is a part of HTML.</p>
    <nav id="navigation"></nav>
    <p>This paragraph is also a part of HTML.</p>
  </body>
</html>
```

```js
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```