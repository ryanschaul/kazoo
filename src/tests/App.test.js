import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import App from '../App';

describe("App", () => {
  test("Renders App component", () => {
    render(<Router><App /></Router>)
  })
})
