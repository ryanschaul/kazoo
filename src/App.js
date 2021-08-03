import './normalize.css';
import './style.css';
import { useState, useEffect } from 'react';
import Controls from './components/Controls';
import Page from './components/Page';
import Pagination from './components/Pagination';
import sortPageData from './util/sortPageData';
import fetchPage from './util/fetchPage';
import findTotalPages from './util/findTotalPages';

function App() {
  // const [allPages, setAllPages] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [issuesFilter, setIssuesFilter] = useState('All Issues');

  useEffect(() => {
    fetchPage(pageNumber).then(result => {
      setPageData(result.data);
      findTotalPages(totalPages, setTotalPages, result);
      console.log(result); // remove this when done
    })

  }, [pageNumber, totalPages]);

  sortPageData(sortOrder, pageData);

  return (
    <div className='wrapper'>
      <h1>Rails Repository Issues On GitHub</h1>
      <Pagination 
        totalPages={totalPages} 
        setPageNumber={setPageNumber} 
        currentPageNumber={pageNumber} 
      />
      <Controls 
        setSortOrder={setSortOrder} 
        setIssuesFilter={setIssuesFilter}
      />
      <Page 
        pageData={issuesFilter === 'All Issues' ? pageData : pageData.filter(page => page.labels.length > 0)} 
        sortOrder={sortOrder}
      />
      <Pagination
        totalPages={totalPages} 
        setPageNumber={setPageNumber} 
        currentPageNumber={pageNumber} 
      />
    </div>
  );
}

export default App;

// const getIssues = async () => {
    //   try {
    //     if (pageNumber === 1) {
    //       fetchPage(pageNumber);
    //       return await axios.get('https://api.github.com/repos/rails/rails/issues');
    //     } else {
    //       // consider changing this hard-coded 8514, and instead pull this URL off from the Link attribute from the first GET.
    //       return await axios.get(`https://api.github.com/repositories/8514/issues?page=${pageNumber}`);
    //     }

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // getIssues().then(result => {
    //   setPageData(result.data);
    //   if (!totalPages) {
    //     setTotalPages(result.headers.link.split(',')[1].split(/[=>]/)[1]); // take another look at this to make sure this is clean enough
    //   }
    //   console.log(result);
    // })




  // const addPage = (pageNumber, pageData) => {
  //   setAllPages((prevState) => {
  //     return { ...prevState, pageNumber: pageData}
  //   })
  // }


      // setPageData(allPages[pageNumber]);
    // if (pageData) return;