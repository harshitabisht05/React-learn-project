# Todo — React + Vite

Simple, fast todo app built with React and Vite. This project is a minimal starter focused on clarity and developer experience: instant HMR, sensible defaults, and a small codebase you can extend.

**Contents**
- **Features:** Add, edit, complete, and remove todos; persistent in-browser storage (localStorage).
- **Tech:** React, Vite, plain CSS, ESLint.

## Getting started

Prerequisites: Node.js (16+ recommended) and npm or yarn.

Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Build for production:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

## Project structure

- `index.html` — app entry
- `src/main.jsx` — React entry point
- `src/App.jsx` — main app component
- `src`/assets — images and static assets

## Usage

- Open the app in your browser while the dev server is running.
- Create a new todo by typing in the input and pressing Enter.
- Toggle completion by clicking the checkbox.
- Edit or delete items with the UI controls.
- Todos persist to `localStorage` between sessions.

## Tests

This template doesn't include automated tests by default. To add tests, consider `vitest` for unit tests and `@testing-library/react` for UI testing.

## Contributing

Feel free to open issues or send PRs. Suggestions:
- Add filtering (active/all/completed)
- Add due dates and sorting
- Add animations and accessibility improvements

## License

Project is provided as-is. Add a license file if you plan to publish this repository.

---

If you'd like, I can also:
- Add a `CONTRIBUTING.md` and `LICENSE`.
- Add simple `vitest` tests and CI workflow.
- Implement localStorage persistence if not present in `src`.

Tell me which follow-up you'd like next.
