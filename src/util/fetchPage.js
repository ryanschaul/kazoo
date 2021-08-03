import axios from 'axios';

const fetchPage = async (pageNumber) => {
  const mainUrl = 'https://api.github.com/repos/rails/rails/issues';
  const pageUrl = `https://api.github.com/repositories/8514/issues?page=${pageNumber}`

  const fetchUrl = pageNumber === 1 ? mainUrl : pageUrl

  let result;
  try {
    result = await axios.get(fetchUrl);
  } catch (error) {
    console.log(error);
  }

  return result;
}

export default fetchPage;