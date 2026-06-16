# Guess the Number Game

A fun number guessing game built with React and Vite.

## About

This is a beginner-friendly React project to practice:
- React components and state management
- User input handling
- Conditional logic
- Game mechanics and feedback
- React hooks (useState)

## Features

- Guess a random number between 1 and 100
- Get feedback if your guess is too high or too low
- Track the number of attempts
- Reset the game and play again
- Simple and interactive UI

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

1. The game generates a random number between 1 and 100
2. Enter your guess in the input field
3. Get feedback:
   - "Too high" if your guess is higher than the number
   - "Too low" if your guess is lower than the number
   - "You got it!" if you guess correctly
4. The game tracks how many attempts you took
5. Play again by clicking the reset button

## Learning Goals

- Use useState hook for state management
- Handle form input and button clicks
- Implement conditional rendering
- Build game logic
- Style React components with CSS
- Improve debugging skills

## Future Improvements

- Add difficulty levels (different number ranges)
- Add a timer for speed challenges
- Implement a hint system
- Add animations and sound effects
- Track and display best score
- Responsive design for mobile
