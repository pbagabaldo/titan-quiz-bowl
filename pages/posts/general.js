import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import React, { useState } from "react";

export default function General() {
  const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [playerTurn, setCurrentPlayer] = useState(0);
  
    const questions = [
      {
        text: "What planet is closest to the sun?",
        options: [
          { Answer: 0, text: "Mercury", isCorrect: true },
          { Answer: 1, text: "Pluto", isCorrect: false },
          { Answer: 2, text: "Earth", isCorrect: false},
          { Answer: 3, text: "Venus", isCorrect: false },
        ],
      },
      {
        text: "What is 5 * 100?",
        options: [
          { Answer: 0, text: "5", isCorrect: false },
          { Answer: 1, text: "500", isCorrect: true},
          { Answer: 2, text: "5000", isCorrect: false },
          { Answer: 3, text: "50", isCorrect: false },
        ],
      },
      {
        text: "What process do most plants use to absorb energy?",
        options: [
          { Answer: 0, text: "Eating other organisms", isCorrect: false },
          { Answer: 1, text: "Hunting", isCorrect: false },
          { Answer: 2, text: "Photosynthesis", isCorrect: true },
          { Answer: 3, text: "Cooking", isCorrect: false },
        ],
      },
      {
        text: "What are the primary colors?",
        options: [
          { Answer: 0, text: "Red, Yellow, and Blue", isCorrect: true },
          { Answer: 1, text: "Green, Pink, and Brown", isCorrect: false },
          { Answer: 2, text: "Orange, Black, and Red", isCorrect: false },
          { Answer: 3, text: "Red, Yellow, and Green", isCorrect: false },
        ],
      },
      {
        text: "What is the largest mammal?",
        options: [
          { Answer: 0, text: "Elephant", isCorrect: false },
          { Answer: 1, text: "Bear", isCorrect: false },
          { Answer: 2, text: "Giraffe", isCorrect: false },
          { Answer: 3, text: "Blue Whale", isCorrect: true },
        ],
      },
      {
        text: "Name a shape with ten sides",
        options: [
          { Answer: 0, text: "Hexagon", isCorrect: false },
          { Answer: 1, text: "Decagon", isCorrect: true },
          { Answer: 2, text: "Triangle", isCorrect: false},
          { Answer: 3, text: "Octagon", isCorrect: false },
        ],
      },
      {
        text: "Whats a group of crows called?",
        options: [
          { Answer: 0, text: "A Pack", isCorrect: false },
          { Answer: 1, text: "A Murder", isCorrect: true},
          { Answer: 2, text: "A Pride", isCorrect: false },
          { Answer: 3, text: "A Gaggle", isCorrect: true },
        ],
      },
      {
        text:"What baby farm animal is referred to as a 'kid'?" ,
        options: [
          { Answer: 0, text: "A baby cow", isCorrect: false },
          { Answer: 1, text: "A baby goat", isCorrect: true },
          { Answer: 2, text: "A baby chicken", isCorrect: false },
          { Answer: 3, text: "A baby horse", isCorrect: false },
        ],
      },
      {
        text: "What is the force that draws objects towrds the center of Earth?",
        options: [
          { Answer: 0, text: "Centrifugal Force", isCorrect: false },
          { Answer: 1, text: "Magnetic Force", isCorrect: false },
          { Answer: 2, text: "Frictional Force", isCorrect: false },
          { Answer: 3, text: "Gravitational Force", isCorrect: true },
        ],
      },
      {
        text: "What is the famous formula that physicist Albert Einstein discovered?",
        options: [
          { Answer: 0, text: "E = mc^2", isCorrect: true },
          { Answer: 1, text: "F = ma", isCorrect: false },
          { Answer: 2, text: "a^2 + b^2 = c^2", isCorrect: false },
          { Answer: 3, text: "E = hf", isCorrect: false },
        ],
      },
    ];
    const optionClicked = (isCorrect) => {
      // Increment the score
      if (isCorrect && currentQuestion + 1 < questions.length) {
        let correct = new Audio ("/New Recording 13.m4a");
        correct.play();
        
  
        setTimeout(function() {
        setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1);
        }, 3000);
      }
      else if (!isCorrect) {
        let myAudio = new Audio ("/New-Recording-12.mp3");
        myAudio.play();
        setCurrentPlayer(playerTurn + 1);
        setCurrentQuestion(currentQuestion);
      }
        else {
        setShowResults(true);
      }
    };
  
  
  
    /* Resets the game back to default */
    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
    };
  
    return (
      <div className="App">
        {/* 1. Header  */}
        <h1 className={styles.title}>
        General Questions
        </h1>
        {/* 3. Show results or show the question game  */}
        player1score: {score} <center>player2score: {score}</center>
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <main className={styles.main}>
           <div className={styles.grid}>
            {/* Current Question  */}
            <h1>
              Question: {currentQuestion + 1} out of {questions.length}
            </h1>
  
            <h1>{questions[currentQuestion].text}</h1>
  
            {/* List of possible answers  */}
              {questions[currentQuestion].options.map((option) => {
                return (
  
                  <a className={styles.card}
                    key={option.Answer}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </a>
                );
              })}
          </div>
          {/* Back to home screen*/}
          <a className={styles.card}> 
              <div onClick={() => Router.back()}> 
                <h2>Home Screen</h2> 
              </div> 
             </a>
          </main>
        )}
        <footer className={styles.footer}>
        <a>
          Titan-Quiz-Bowl
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
      </div>
    );
}
