import React from "react";
import "./App.css";

import SignIn from "./components/SignInComponent";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <SignIn />
      </header>
    </div>
  );
};

export default App;