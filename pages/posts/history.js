import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import React, { useState } from "react";

export default function History() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [playerTurn, setCurrentPlayer] = useState(0);

  const questions = [
    {
      text: "Who was the first American President?",
      options: [
        { Answer: 0, text: "George Washington", isCorrect: true },
        { Answer: 1, text: "James Madison", isCorrect: false },
        { Answer: 2, text: "Thomas Jefferson", isCorrect: false},
        { Answer: 3, text: "Abraham Lincoln", isCorrect: false },
      ],
    },
    {
      text: "On which city was the first atomic bomb attack?",
      options: [
        { Answer: 0, text: "Tokyo", isCorrect: false },
        { Answer: 1, text: "Hiroshima", isCorrect: true},
        { Answer: 2, text: "Osaka", isCorrect: false },
        { Answer: 3, text: "Kyoto", isCorrect: false },
      ],
    },
    {
      text: "Which era marked a switch from agricultural practies to industrial practices?",
      options: [
        { Answer: 0, text: "The Great Depression", isCorrect: false },
        { Answer: 1, text: "The Middle Ages", isCorrect: false },
        { Answer: 2, text: "Victorian Era", isCorrect: false },
        { Answer: 3, text: "The Industrial Revolution", isCorrect: true },
      ],
    },
    {
      text: "Who was the president during the Cuban Missile Crisis?",
      options: [
        { Answer: 0, text: "John F. Kennedy", isCorrect: true },
        { Answer: 1, text: "Theodore Roosevelt", isCorrect: false },
        { Answer: 2, text: "James Madison", isCorrect: false },
        { Answer: 3, text: "George Washington", isCorrect: false },
      ],
    },
    {
      text: "What was the name of the ancient trade route that connected the East with the west?",
      options: [
        { Answer: 0, text: "The Silk Road", isCorrect: true },
        { Answer: 1, text: "The Spice Route", isCorrect: false },
        { Answer: 2, text: "The Salt Route", isCorrect: false },
        { Answer: 3, text: "The Tin Route", isCorrect: false },
      ],
    },
    {
      text: "Which fabric was invented in Ancient China?",
      options: [
        { Answer: 0, text: "Denim", isCorrect: false },
        { Answer: 1, text: "Cotton", isCorrect: false },
        { Answer: 2, text: "Linen", isCorrect: false},
        { Answer: 3, text: "Silk", isCorrect: true },
      ],
    },
    {
      text: "What is the world's oldest recorded civilization?",
      options: [
        { Answer: 0, text: "Mesopotamia", isCorrect: true },
        { Answer: 1, text: "Egypt", isCorrect: false},
        { Answer: 2, text: "China", isCorrect: false },
        { Answer: 3, text: "Ancient Greece", isCorrect: false },
      ],
    },
    {
      text:"What was the Boston Tea Party?" ,
      options: [
        { Answer: 0, text: "A birthday party for the president", isCorrect: false },
        { Answer: 1, text: "A political protest against British taxation in the American colonies", isCorrect: true },
        { Answer: 2, text: "A movie", isCorrect: false },
        { Answer: 3, text: "A theater play", isCorrect: false },
      ],
    },
    {
      text: "Which was the last state to join the US in 1959?",
      options: [
        { Answer: 0, text: "Alaska", isCorrect: false },
        { Answer: 1, text: "California", isCorrect: false },
        { Answer: 2, text: "Hawaii", isCorrect: true },
        { Answer: 3, text: "Arizona", isCorrect: false },
      ],
    },
    {
      text: "The Statue of Liberty was a gift to the United States from which European country?",
      options: [
        { Answer: 0, text: "Germany", isCorrect: false },
        { Answer: 1, text: "France", isCorrect: true },
        { Answer: 2, text: "Spain", isCorrect: false },
        { Answer: 3, text: "Italy", isCorrect: false },
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
      History Questions
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

