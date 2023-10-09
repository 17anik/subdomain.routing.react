import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { getApp } from "./utils/helper";

const App: FC = () => {
  const CurrentApp = getApp();
  return (
    <div className="App">
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
