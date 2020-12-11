import axios from 'axios';

const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

const categoriesUrl = "https://opentdb.com/api_category.php";

const getRandomQuestions = () => axios.get(url).then(res => res.data.results);

const getCategories = () => axios.get(categoriesUrl).then(res => res.data.trivia_categories)

export default { getRandomQuestions, getCategories };