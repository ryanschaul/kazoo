import '../normalize.css';
import '../style.css';
import { useState, useEffect } from 'react';
import Controls from './Controls';
import Page from './Page';
import Pagination from './Pagination';
import sortPageData from '../util/sortPageData';
import fetchPage from '../util/fetchPage';
import findTotalPages from '../util/findTotalPages';
import useQuery from "../util/query";

const IssuesDashboard = () =>  {
  const query = useQuery();
  const [pageNumber, setPageNumber] = useState(query.get("page") || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [issuesFilter, setIssuesFilter] = useState('All Issues');

  useEffect(() => {
    fetchPage(pageNumber).then(result => {
      setPageData(result.data);

      if (!totalPages) findTotalPages(setTotalPages, result);
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

export default IssuesDashboard;
