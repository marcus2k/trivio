import axios from 'axios';

const url = 'https://opentdb.com/api.php?type=multiple&encode=base64'

const setCategory = (category) => category === -1 ? '' : `category=${category}`;

const setDifficulty = (difficulty) => difficulty === "any" ? '' : `difficulty=${difficulty}`;

const setUrl = (url, amount, category, difficulty) => 
    url + `&amount=${amount}&${setCategory(category)}&${setDifficulty(difficulty)}`;

const categoriesUrl = "https://opentdb.com/api_category.php";

const getRandomQuestions = (settings) => {
    const { difficulty, numQuestions, category } = settings;
    const customUrl = setUrl(url, numQuestions, category, difficulty);
    console.log(customUrl);
    return axios.get(customUrl).then(res => res.data.results);
}

const getCategories = () => axios.get(categoriesUrl).then(res => res.data.trivia_categories)

export default { getRandomQuestions, getCategories };