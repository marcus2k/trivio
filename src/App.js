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
  const [ loading, setLoading ] = useState(false);

  const retrieveData = () => {
    setLoading(true);
    axiosServices.getRandomQuestions(settings).then(res => {
      setQuestion([null].concat(res));
      setAnswers(INITIAL_ANSWERS(settings.numQuestions));
      setLoading(false);
    })
  }

  useEffect(() => 
    axiosServices.getCategories().then(res => setCategories(res))
  , [])

  console.log("answer is ", answers);

  console.log(questions[0]);
  console.log(`Currently on question number ${currNumber}`);

  const difficultyHandler = event => {
    setQuizSettings({...settings, difficulty: event.target.value});
  }

  const numOfQuestionsHandler = event => {
    const updatedSettings = {...settings, numQuestions: event.target.value};
    setQuizSettings(updatedSettings);
  }

  const categoryHandler = event => {
    const updatedSettings = {...settings, category: event.target.value};
    setQuizSettings(updatedSettings);
  }

  const clickHandler = event => {
    event.preventDefault();
    let updatedAnswers = [...answers];
    updatedAnswers[currNumber] = Number(event.currentTarget.value);
    if (currNumber === 0) {
      retrieveData();
    }
    setAnswers(updatedAnswers);
    setNumber((currNumber + 1) % answers.length);
  }

  return (
    <header className="App-header">
      {(!loading && currNumber === 0 && 
        <WelcomeDisplay 
        clickHandler={clickHandler} 
        categories={categories} 
        categoryHandler={categoryHandler}
        numOfQuestionsHandler={numOfQuestionsHandler}
        difficultyHandler={difficultyHandler}
        settings={settings}
        />
      )}
      {loading && <div><p>Loading...</p></div>}
      {(!loading && currNumber !== settings.numQuestions + 1 && currNumber !== 0 && <div className="App">
        <QuestionDisplay questionData={questions[currNumber]} clickHandler={clickHandler}/>      
      </div>)}
      {(!loading && currNumber === settings.numQuestions + 1 &&
        <CompletedDisplay answers={answers} clickHandler={clickHandler} />
      )}
    </header>
  );
}

export default App;
