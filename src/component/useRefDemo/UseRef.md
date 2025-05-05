## React `useRef()` Hook — Demo & Explanation
This example demonstrates how the `useRef()` hook can be used to **persist values across renders** without causing the component to re-render.

### Why use `useRef()`?
- [`useRef()`](https://react.dev/reference/react/useRef) lets you keep a **mutable value** that doesn't trigger a re-render when it changes.
- It’s perfect for things like:
  - Storing timer IDs
  - Keeping previous values
  - Managing DOM references
  - Avoiding unnecessary renders

### What This Demo Shows
[Demo Code](./UseRefDemo.js)

This example compares **three variables**:

| Variable | React Hook | Re-renders on change? | Value persists across renders? |
|----------|------------|------------------------|----------------------------------|
| `x`      | `let`      | ❌ No                  | ❌ No                            |
| `yValue` | `useState` | ✅ Yes                 | ✅ Yes                           |
| `ref`    | `useRef`   | ❌ No                  | ✅ Yes                           |


### What You'll Observe
- **`x` (let)** gets reset to `0` on every render — its value doesn't persist.
- **`yValue` (state)** updates the UI and re-renders the component.
- **`ref.current` (useRef)** **retains its value across renders**, but **doesn't trigger a re-render** when updated.

Check the console logs to see how they behave behind the scenes!

### Key Takeaways

- `let` variables reset on every render.
- `useState` triggers re-renders.
- `useRef` keeps values across renders **without causing a re-render**.
- `useRef` is ideal when you want to **persist values silently** or **reference DOM nodes**.

