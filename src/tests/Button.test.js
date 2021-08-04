import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Button from '../Components/Button';

describe("Button", () => {
  test("Renders Button component", () => {
    render(<Router><Button /></Router>)
  })
})