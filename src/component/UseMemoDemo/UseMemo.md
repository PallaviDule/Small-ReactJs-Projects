## 🧠 React `useMemo()` Hook — Visual & Practical Example

This example demonstrates how `useMemo()` can be used to **optimize performance** by memoizing the result of an expensive calculation.

### Why use `useMemo()`?
- When your React component re-renders, all the functions inside it get executed again — even expensive ones. If that heavy computation doesn't need to run every time, `useMemo()` helps you **cache** the result **until the dependencies change**.

### What This Demo Does
- Simulates a slow function (`slowFunction`) that mimics an expensive calculation.
- Uses `useMemo()` to only recalculate the result when the `count` changes.
- Includes a second button (`Toggle Other State`) to show how `useMemo()` avoids recalculating when unrelated state changes.

### What You'll See in Console
- Clicking **"Increment Count"** triggers the slow function (you’ll see `"⏳ Slow function is running..."`).
- Clicking **"Toggle Other State"** **does not** re-run the slow function (since `count` hasn't changed).

### Key Takeaways
- `useMemo(fn, [deps])` will **recompute `fn()` only if one of the `deps` changes**.
- Useful for **performance optimization**, especially with **expensive computations** or **preventing re-renders** of child components.
- Don't overuse it — use it when there's real slowness or unnecessary recalculations happening.
