import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import QuestionDisplay from './components/QuestionDisplay';
import WelcomeDisplay from './components/WelcomeDisplay';
import CompletedDisplay from './components/CompletedDisplay';

const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

// index-0 skipped to use 1-based indexing
const INITIAL_ANSWERS = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  // for now, assume 10 questions
  const [ currNumber, setNumber ] = useState(0); // 0 for Start Page, 1 - 10 questions, 11 finish page
  const [ answers, setAnswers ] = useState(INITIAL_ANSWERS);
  const [ questions, setQuestion ] = useState([]);

  useEffect(() =>
    axios.get(url).then(res => {
      setQuestion(currNumber === 0 ? [null].concat(res.data.results) : questions);
    }
  ), [currNumber]);

  console.log(questions[0]);
  console.log(`Currently on question number ${currNumber}`);
  const clickHandler = event => {
    event.preventDefault();
    let updatedAnswers = answers.concat(); // [...answers]
    updatedAnswers[currNumber] = event.target.value;
    setAnswers(updatedAnswers);
    setNumber(questions.length ? (currNumber + 1) % 12 : currNumber);
  }

  return (
    <header className="App-header">
      {(currNumber === 0 && 
        <WelcomeDisplay clickHandler={clickHandler} />
      )}
      {(currNumber !== 11 && currNumber !== 0 && <div className="App">
        <QuestionDisplay questionData={questions[currNumber]} clickHandler={clickHandler}/>      
      </div>)}
      {(currNumber === 11 &&
        <CompletedDisplay answers={answers} clickHandler={clickHandler} />
      )}
    </header>
  );
}

export default App;
