import {useState} from 'react';
import './App.css';
function App() {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const choices = ["Rock", "Paper", "Scissors"];

  function playgame(userChoice){
    setChoice(userChoice);

    const ramdomIndex = Math.floor(Math.random()*3);
    const computer = choices[ramdomIndex];

    setComputerChoice(computer);

    if (userChoice === computer){
      setResult("Draw");
    }else if(
      (userChoice === "Rock" && computer === "Scissors") ||
      (userChoice === "Paper" && computer === "Rock") ||
      (userChoice === "Scissors" && computer === "Paper")
    ){
      setResult("You win ")
      setScore(score + 1);
    }else{
      setResult("You Lose")
      setScore(score -1);
    }
  }

  function resetgame(){
    setChoice("");
    setComputerChoice("");
    setResult("");
    setScore(0);
  }
  return (
    <div>
      <h1>Rock Paper Scissors</h1>

      <button onClick={() => playgame("Rock")}>ROCK</button>
      <button onClick={() => playgame("Paper")}>PAPER</button>
      <button onClick={() => playgame("Scissors")}>SCISSORS</button>
    
    <p>Your Choice:  {choice}</p>
    <p>Computer Choice:  {computerChoice}</p>

    <p>Result: {result}</p>
    <p>Score: {score}</p>
    <button onClick={resetgame}>Reset Game</button>
    </div>
  );
}

export default App;