import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/users`)
      .then((response) => {
        setData(response.data)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {!data ? "is Loading..." : data} </p>
      </header>
    </div>
  );
}

export default App;