import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import Confetti from "react-confetti";

function App(){
  
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [secretNumber, setSecretNumber ] = useState("");
  const [gameover, setGameover] = useState(false);
  const [won, setWon] = useState(false);
  const [lastGuess, setLastGuess] = useState("");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  useEffect(() => {
    generateSecretNumber();
  }, []);
  console.log(secretNumber);

  const userGuess = Number(guess);

  function generateSecretNumber(){
    let newnumber= 0;
    newnumber = Math.floor(Math.random() * 100) + 1;

    return(setSecretNumber(newnumber));
  }

  function checkGuess() {
    if (guess === "") {
      setMessage("Please enter a number");
      return;
    }

    setAttempts(attempts + 1);
    setLastGuess(userGuess);

    if (userGuess < secretNumber) {
      setMessage("Too Low ⬇️");
      setMin(userGuess);
    } 
    else if (userGuess > secretNumber) {
      setMessage("Too High ⬆️");
      setMax(userGuess);
    } 
    else {
      setMessage("Correct 🎉 You won in " + (attempts + 1) + " attempts!");
      setWon(true);
      setGameover(true);
    }
  }

  function reset(){
    setGuess("");
    setMessage("");
    setAttempts(0);
    setGameover(false);
    generateSecretNumber();
    setWon(false);
    setMin(1);
    setMax(100);
  }


  return (

    <div className="page-wrapper">

      {won && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🏆 Congratulations!</h2>
            <p>You guessed the number correctly!</p>
            <p>Total Attempts: {attempts}</p>

            <button onClick={reset}>
              Play Again
            </button>
          </div>
        </div>
      )}

      {won && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} />}
      <div className="game-container">
        <h1>Guess Number</h1>
      <p>Guess number between 1 and 100!</p>
      
      <input 
      type= "number" 
      placeholder="type your guess..."
      value= {guess}
      onChange={(e) => setGuess(e.target.value)}
      disabled ={gameover}
      />
      <button onClick={checkGuess} disabled = {gameover}>Guess</button>
      <p className="range">My number is between {min} - {max}</p>
      <p >Your Guess:{guess}</p>
      <p className="message"> Last Guess: {lastGuess}<br/>{message}</p>

      <p className="attempts">Attempts:{attempts}</p>


      <button onClick={reset}>Play Again</button>
    </div>
    </div>
  )
}

export default App;