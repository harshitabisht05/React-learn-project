# Todo App

[Live Link](https://harshitabisht05.github.io/React-learn-project/todo/)

A simple, fast Todo application built with React and Vite.

## About

This is a beginner-friendly React project designed to practice:

- React components and state management
- Handling user inputs and forms
- Array manipulation in state (adding, updating, and deleting items)
- Persistent browser storage with localStorage

## Features

- **Create Todos:** Add new tasks easily by typing and pressing Enter.
- **Toggle Completion:** Mark tasks as completed with a simple checkbox toggle.
- **Edit & Delete:** Update existing tasks or remove them instantly.
- **Data Persistence:** Tasks persist in-browser via localStorage so you don't lose them on refresh.
- **Clean UI:** Simple, distraction-free interface.

## Tech Stack

- React
- Vite (build tool)
- CSS for styling

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for production

```bash
npm run build
```

## Project Structure

```plaintext
todo/
├── src/
│   ├── App.jsx       - Main app component with Todo logic
│   ├── App.css       - Styling for the todo app
│   ├── main.jsx      - Entry point
│   └── assets/       - Images and static assets
├── index.html        - App entry markup
└── package.json      - Dependencies and scripts
```

## How to Use

1. Type a new task into the input field.
2. Press Enter or click the add button to add it to your list.
3. Click the complete next to a task to mark it as completed.
4. Use the Delete buttons to remove tasks from your list.

## Learning Goals

- Understand React hooks (`useState`, `useEffect` for data syncing).
- Manage forms and controlled input components in React.
- Learn how to read from and write to localStorage.
- Dynamically render lists using the `.map()` array method.

## Future Improvements

- Add task filtering (All, Active, Completed).
- Add due dates and priority levels to tasks.
- Implement smooth drag-and-drop reordering.
- Add animations for checking off or deleting items.
