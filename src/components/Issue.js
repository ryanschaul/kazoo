import React, { useState } from 'react';
import Label from './Label';
import ReactMarkdown from 'react-markdown'

const Issue = ({ issue, sortOrder }) => {
  const [showDescription, setShowDescription] = useState(false);

  const showDescriptionHandler = () => {
    setShowDescription((prevState) => {
      return !prevState;
    })
  }

  return (
    <li>
      <div className='issue-header'>
        <div className='issue-attributes'>
          <div className='issue-labels'>
            <ol>
              {issue.labels.map(label => <Label key={label.id} label={label} />)}
            </ol>
          </div>
          <p><strong>Author:</strong> {issue.user.login}</p> {/* they want author here. talk about in README */}
          <p className={sortOrder === 'Comment Count' ? 'sort-highlight': ''}><strong>Comments:</strong> {issue.comments}</p>
          <p className={sortOrder === 'Date Created' ? 'sort-highlight': ''}><strong>Date Created:</strong> {new Date(issue.created_at).toDateString()}</p>
          <p className={sortOrder === 'Last Updated' ? 'sort-highlight': ''}><strong>Last Updated:</strong> {new Date(issue.updated_at).toDateString()}</p>
        </div>

        <div className='issue-main'>
          <div className={`issue-title ${sortOrder === 'Title' ? 'sort-highlight': ''}`}>
            <a href={issue.url}>{issue.title}</a>
          </div>

          <button 
            onClick={showDescriptionHandler}
            className='description-button'>{showDescription ? 'Hide Description' : 'Show Description'}
          </button>
          
          {showDescription && <ReactMarkdown>{issue.body}</ReactMarkdown>}
        </div>

      </div>
    </li>
  )
}

export default Issue
