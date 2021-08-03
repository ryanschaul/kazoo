import React from 'react';
import Issue from './Issue';

const Page = ({pageData, sortOrder}) => {
  return (
    <>
    <h2>Showing <u>{pageData.length}</u> results</h2>
    <ul>
      {pageData.map(issue => {
        return <Issue key={issue.id} issue={issue} sortOrder={sortOrder} />
      })}
    </ul>
    </>
  )
}

export default Page
