import "./App.css";
import { useState } from "react";

function QuizApp({ Questions }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [currentAns, setCurrentAns] = useState(null);

  function handleClick() {
    if (index < Questions.length) {
      setIndex(index + 1);
    }
    setLock(false);
    setCurrentAns(null);
  }

  function handleOption(ans, i) {
    if (lock === true) {
      return;
    }
    const currentQuestion = Questions[index];
    if (currentQuestion.answer === ans) {
      setCount(count + 1);
    }
    setCurrentAns(i);
    setLock(true);
  }


  function handleReset() {
    setCount(0);
    setCurrentAns(null);
    setLock(false);
    setIndex(0);
  }

  const question = Questions[index];

  if (index === Questions.length) {
    return (
      <div className="result">
        <h3>Thank you for playing the Quiz</h3>
        <h1>
          {count} / {Questions.length} are Correct.
        </h1>

        <button className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  } else {
    return (
      <div className="box">
        <h1>Quiz App</h1>
        <hr />

        <h3>
          {index + 1}. {question.question}
        </h3>
        <ul>
          {question.options.map((option, i) => (
            <li
              key={option}
              onClick={() => handleOption(option, i)}
              
              className={
                currentAns === i
                  ? option === question.answer
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {option}
            </li>
          ))}
        </ul>

        <button className="btn" onClick={handleClick}>
          Next
        </button>
        <h4>
          {index + 1} of {Questions.length} question
        </h4>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="main">
      <QuizApp Questions={quizQuestions} />
    </div>
  );
}

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1912", "1905", "1920", "1931"],
    answer: "1912",
  },
];
