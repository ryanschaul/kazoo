import { BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import Label from '../Components/Label';

describe("Label", () => {
  test("Renders Label component", () => {
    render(<Router><Label label='activerecord' /></Router>)
  })
})