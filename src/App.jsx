import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import Timer from "./components/timer";
import { MemoryRouter } from "react-router";

const App = () => (
  <MemoryRouter>
    <React.Fragment>
      <Header stylename="-webkit-app-region: drag" />
      <main role="main" className="container mt-3">
        <Route component={Timer} />
      </main>
    </React.Fragment>
  </MemoryRouter>
);

export default App;
