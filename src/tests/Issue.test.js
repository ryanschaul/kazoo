import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Issue from '../Components/Issue';

describe("Issue", () => {
  test("Renders Issue component", () => {
    render(<Router><Issue issue={{id: 1, labels: [], user: {author: 'person'}, comments: [], created_at: "", updated_at: "", html_url: '', body: ''}} /></Router>)
  })
})