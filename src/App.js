import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MainDisplay from './components/MainDisplay';

const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

const INITIAL_ANSWERS = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  // for now, assume 10 questions
  const [ currNumber, setNumber ] = useState(0); // 0 for Start Page, 1 - 10 questions, 11 finish page
  const [ answers, setAnswers ] = useState(INITIAL_ANSWERS);
  const [ questions, setQuestion ] = useState([]);

  useEffect(() =>
    axios.get(url).then(res => setQuestion([null].concat(res.data.results))), []);

  console.log(questions);
  console.log(`Currently on question number ${currNumber}`);
  const clickHandler = event => {
    event.preventDefault();
    let updatedAnswers = answers.concat(); // [...answers]
    updatedAnswers[currNumber] = event.target.value;
    setAnswers(updatedAnswers);
    setNumber(currNumber === 10 ? 0 : currNumber + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainDisplay questionData={questions[currNumber]} clickHandler={clickHandler}/>
      </header>
    </div>
  );
}

export default App;
