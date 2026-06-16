# Rock Paper Scissors Game
[Live Link](https://harshitabisht05.github.io/React-learn-project/rockpapersci/)

A simple Rock Paper Scissors game built with React and Vite.

## About

This is a beginner-friendly React project to practice:
- React components and state management
- Conditional rendering
- Event handling
- User interaction and game logic

## Features

- Play Rock Paper Scissors against the computer
- Score tracking
- Simple and clean UI
- Real-time game results

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

```
src/
├── App.jsx       - Main game component
├── App.css       - Styling
├── main.jsx      - Entry point
├── index.css     - Global styles
└── assets/       - Images and other assets
```

## How to Play

1. Choose Rock, Paper, or Scissors
2. The computer makes a random choice
3. The winner is determined by the rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. Score is tracked and updated after each round

## Learning Goals

- Understand React hooks (useState)
- Handle user clicks and button events
- Implement game logic
- Display dynamic content based on state
- Style React components with CSS

## Future Improvements

- Add animations
- Implement best-of-N rounds
- Add difficulty levels
- Improve UI/UX design
- Add sound effects
