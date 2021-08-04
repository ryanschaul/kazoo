import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  test("Renders Pagination component", () => {
    render(<Router><Pagination /></Router>)
  })
})