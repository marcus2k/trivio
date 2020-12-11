import React, { useState, useEffect } from 'react';
import './App.css';
import QuestionDisplay from './components/QuestionDisplay';
import WelcomeDisplay from './components/WelcomeDisplay';
import CompletedDisplay from './components/CompletedDisplay';
import axiosServices from './services/opentdb';

// index-0 skipped to use 1-based indexing
const INITIAL_ANSWERS = (numQuestions) => new Uint8Array(numQuestions + 2);

function App() {
  const [ currNumber, setNumber ] = useState(0); 
  const [ questions, setQuestion ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ settings, setQuizSettings ] = useState({difficulty: "any", numQuestions: 10, category: -1});
  const [ answers, setAnswers ] = useState(INITIAL_ANSWERS(settings.numQuestions));

  useEffect(() => {
    if (currNumber === 0) {
      axiosServices.getRandomQuestions(settings).then(res => {
        setQuestion([null].concat(res))
        setAnswers(INITIAL_ANSWERS(settings.numQuestions));
        console.log("retrieving"); // it runs even before settings is ready
      });
    } else if (currNumber === settings.numQuestions + 1) {
      setQuestion([]);
    }
  }, [currNumber, settings]);

  useEffect(() => 
    axiosServices.getCategories().then(res => setCategories(res))
  , [])

  console.log("answer is ", answers);

  console.log(questions[0]);
  console.log(`Currently on question number ${currNumber}`);

  const difficultyHandler = event => {
    setQuizSettings({...settings, difficulty: event.target.value});
  }

  // for number of questions AND category
  const settingsHandler = event => {
    const label = event.target.name;
    let updatedSettings;
    if (label === "numQuestions") {
      updatedSettings = {...settings, numQuestions: event.target.value};
    } else if (label === "category") {
      updatedSettings = {...settings, category: event.target.value};
    }
    setQuizSettings(updatedSettings);
  }

  const clickHandler = event => {
    event.preventDefault();
    let updatedAnswers = [...answers];
    updatedAnswers[currNumber] = Number(event.currentTarget.value);
    setAnswers(updatedAnswers);
    setNumber(questions.length || currNumber ? (currNumber + 1) % answers.length : currNumber);
  }

  return (
    <header className="App-header">
      {(currNumber === 0 && 
        <WelcomeDisplay 
        clickHandler={clickHandler} 
        categories={categories} 
        settingsHandler={settingsHandler}
        difficultyHandler={difficultyHandler}
        settings={settings}
        />
      )}
      {/*console.log("length of question is ", questions.length)*/}
      {(currNumber !== settings.numQuestions + 1 && currNumber !== 0 && <div className="App">
        <QuestionDisplay questionData={questions[currNumber]} clickHandler={clickHandler}/>      
      </div>)}
      {(currNumber === settings.numQuestions + 1 &&
        <CompletedDisplay answers={answers} clickHandler={clickHandler} />
      )}
    </header>
  );
}

export default App;
