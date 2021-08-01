import React from 'react';
import Issue from './Issue';

const Page = ({pageData}) => {
  return (
    <>
    <h2>Showing {pageData.length} results</h2>
    <ol>
      {pageData.map(issue => {
        return <Issue key={issue.id} issue={issue} />
      })}
    </ol>
    </>
  )
}

export default Page
