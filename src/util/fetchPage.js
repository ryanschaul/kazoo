import axios from 'axios';

const savedPages = {};

const fetchPage = async (pageNumber) => {
  const savedPageData = savedPages[pageNumber];

  if (savedPageData) {
    return savedPageData;
  }

  const mainUrl = 'https://api.github.com/repos/rails/rails/issues';
  const pageUrl = `https://api.github.com/repositories/8514/issues?page=${pageNumber}`

  const fetchUrl = pageNumber === 1 ? mainUrl : pageUrl

  let result;
  try {
    result = await axios.get(fetchUrl);
  } catch (error) {
    console.log(error);
  }

  savedPages[pageNumber] = result;
  return result;
}

export default fetchPage;
