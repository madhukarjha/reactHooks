import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { appRoutes } from './route';
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        {appRoutes}
      </BrowserRouter>

    </div>
  );
}

export default App;
