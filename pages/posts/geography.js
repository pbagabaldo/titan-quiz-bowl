import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Router from 'next/router'
import React, { useState } from "react";

export default function Geography() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [playerTurn, setCurrentPlayer] = useState(0);
  
    const questions = [
      {
        text: "Which is the tallest mountain on Earth?",
        options: [
          { Answer: 0, text: "Mount Everest", isCorrect: true },
          { Answer: 1, text: "Mount Washington", isCorrect: false },
          { Answer: 2, text: "Mount Whitney", isCorrect: false},
          { Answer: 3, text: "Mount St. Helens", isCorrect: false },
        ],
      },
      {
        text: "What are areas of the Earth that are bigger than just countries called?",
        options: [
          { Answer: 0, text: "Regions", isCorrect: false },
          { Answer: 1, text: "Counties", isCorrect: false},
          { Answer: 2, text: "Islands", isCorrect: false },
          { Answer: 3, text: "Continents", isCorrect: true },
        ],
      },
      {
        text: "Which is the biggest continent?",
        options: [
          { Answer: 0, text: "Africa", isCorrect: false },
          { Answer: 1, text: "Europe", isCorrect: false },
          { Answer: 2, text: "Asia", isCorrect: true },
          { Answer: 3, text: "Australia", isCorrect: false },
        ],
      },
      {
        text: "Which of these countries is a group of islands off the coast of Asia?",
        options: [
          { Answer: 0, text: "Britain", isCorrect: false },
          { Answer: 1, text: "Germany", isCorrect: false },
          { Answer: 2, text: "Spain", isCorrect: false },
          { Answer: 3, text: "Japan", isCorrect: true },
        ],
      },
      {
        text: "Which is the largest country in the world?",
        options: [
          { Answer: 0, text: "Russia", isCorrect: true },
          { Answer: 1, text: "China", isCorrect: false },
          { Answer: 2, text: "North America", isCorrect: false },
          { Answer: 3, text: "India", isCorrect: false },
        ],
      },
      {
        text: "Which is the largest desert in the world?",
        options: [
          { Answer: 0, text: "Arabian", isCorrect: false },
          { Answer: 1, text: "Sahara", isCorrect: true },
          { Answer: 2, text: "Gobi", isCorrect: false},
          { Answer: 3, text: "Mojave", isCorrect: false },
        ],
      },
      {
        text: "Which is the longest river in the world?",
        options: [
          { Answer: 0, text: "Amazon", isCorrect: false },
          { Answer: 1, text: "Mississippi", isCorrect: false},
          { Answer: 2, text: "Missouri", isCorrect: false },
          { Answer: 3, text: "Nile", isCorrect: true },
        ],
      },
      {
        text:"What is the largest US state by land area?" ,
        options: [
          { Answer: 0, text: "California", isCorrect: false },
          { Answer: 1, text: "Alaska", isCorrect: true },
          { Answer: 2, text: "Texas", isCorrect: false },
          { Answer: 3, text: "Hawaii", isCorrect: false },
        ],
      },
      {
        text: "What is the capital city of Japan?",
        options: [
          { Answer: 0, text: "Berlin", isCorrect: false },
          { Answer: 1, text: "Tokyo", isCorrect: true },
          { Answer: 2, text: "Dublin", isCorrect: false },
          { Answer: 3, text: "Paris", isCorrect: false },
        ],
      },
      {
        text: "What is the largest natural rainforst in the world?",
        options: [
          { Answer: 0, text: "The Amazon Rainforest", isCorrect: true },
          { Answer: 1, text: "The Congo Rainforest", isCorrect: false },
          { Answer: 2, text: "Southeast Asian Rainforest", isCorrect: false },
          { Answer: 3, text: "Daintree Rainforest", isCorrect: false },
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
        Geography Questions
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
  

