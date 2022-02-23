import * as React from "react";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/home';


const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </>
    </Router>
  );
};

export { AppRouter };
