import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import IssuesDashboard from "../components/IssuesDashboard";

describe("Issues dashboard basic content rendering", () => {
  test("It should render the heading", () => {
    render(<Router><IssuesDashboard /></Router>)
    const content = screen.getByText('Rails Repository Issues On GitHub');
    expect(content).toBeInTheDocument()
  })
})

describe("Sort order control functionality", () => {
  let result;

  beforeEach(() => {
    render(<Router><IssuesDashboard /></Router>)
    result = screen.getByLabelText('Select A Sort Order');
  })

  test("It should select Title option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('Title')
    ])
    expect(screen.getByRole('option', { name: 'Title' }).selected).toBe(true)
  })

  test("It should select Date Created option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('Date Created')
    ])

    expect(screen.getByRole('option', { name: 'Date Created' }).selected).toBe(true)
  })

  test("It should select Last Updated option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('Last Updated')
    ])

    expect(screen.getByRole('option', { name: 'Last Updated' }).selected).toBe(true)
  })

  test("It should select Comment Count option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('Comment Count')
    ])

    expect(screen.getByRole('option', { name: 'Comment Count' }).selected).toBe(true)
  })
})

describe("Filtering control functionality", () => {
  let result;

  beforeEach(() => {
    render(<Router><IssuesDashboard /></Router>)
    result = screen.getByLabelText('Filter By Issues');
  })

  test("It should select All Issues option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('All Issues')
    ])

    expect(screen.getByRole('option', { name: 'All Issues' }).selected).toBe(true)
  })

  test("It should select Issues With Labels option", () => {
    userEvent.selectOptions(result, [
      screen.getByText('Issues With Labels')
    ])

    expect(screen.getByRole('option', { name: 'Issues With Labels' }).selected).toBe(true)
  })
})
