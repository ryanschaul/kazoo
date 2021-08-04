import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Page from "../components/Page";

describe("Page basic content rendering", () => {
    test("It should render the heading", () => {
    render(<Router><Page pageData={[]} /></Router>)
    const content = screen.getByText('Showing results', {exact: false});
    expect(content).toBeInTheDocument()
  })
})