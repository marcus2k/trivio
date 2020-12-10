import axios from 'axios';

const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=base64';

const getRandomQuestions = () => axios.get(url).then(res => res.data);

export default { getRandomQuestions };