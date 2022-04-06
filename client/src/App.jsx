import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "./styles/App.css";
import Main from "./components/MainComponent";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;