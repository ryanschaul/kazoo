import React from 'react';
import Label from './Label';

const Issue = ({issue}) => {
  return (
    <li>
      <a href={issue.url}>{issue.title}</a>
      <p>Description: {issue.body}</p>
      <p>Author: {issue.user.login}</p> {/* they want author here. talk about in README */}
      <p>Comment Count: {issue.comments}</p>
      <p>Date Created: {new Date(issue.created_at).toDateString()}</p>
      <p>Last Updated: {new Date(issue.updated_at).toDateString()}</p>
      <p>Labels:</p>
      <ol>
        {issue.labels.map(label => <Label key={label.id} label={label} />)}
      </ol>
    </li>
  )
}

export default Issue
