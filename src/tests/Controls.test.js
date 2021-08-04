import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from "../components/Controls";

describe("Sort order control basic content", () => {
  beforeEach(() => render(<Router><Controls /></Router>))

  test("It should render the select label for sorting", () => {
    const result = screen.getByLabelText('Select A Sort Order');
    expect(result).toBeInTheDocument()
  })

  test("It should render the option for Title", () => {
    const result = screen.getByText('Title');
    expect(result).toBeInTheDocument()
  })

  test("It should render the option for Date Created", () => {
    const result = screen.getByText('Date Created');
    expect(result).toBeInTheDocument()
  })

  test("It should render the option for Last Updated", () => {
    const result = screen.getByText('Last Updated');
    expect(result).toBeInTheDocument()
  })

  test("It should render the option for Comment Count", () => {
    const result = screen.getByText('Comment Count');
    expect(result).toBeInTheDocument()
  })
})

describe("Filtering control basic content", () => {
  beforeEach(() => render(<Router><Controls /></Router>))

  test("It should render the select label for filtering", () => {
    const content = screen.getByLabelText('Filter By Issues');
    expect(content).toBeInTheDocument()
  })

  test("It should render the option for All Issues", () => {
    const content = screen.getByText('All Issues');
    expect(content).toBeInTheDocument()
  })

  test("It should render the option for Issues With Labels", () => {
    const content = screen.getByText('Issues With Labels');
    expect(content).toBeInTheDocument()
  })
})