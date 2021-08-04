import React from "react";
import { Route } from "react-router-dom";
import IssuesDashboard from "./components/IssuesDashboard";

const App = () => {
  return (
    <>
      <Route path="/" exact component={IssuesDashboard} />
    </>
  );
};

export default App;
