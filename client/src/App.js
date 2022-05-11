import React from "react";
import logo from './logo.svg';
import './App.css';

function App() 
{

  const [data, setData] = React.useState(0);

  // Get the shell output data
  function getapi() 
  {//http://localhost:3002
    fetch("/api", { 
      method: "GET",
      headers: { "Content-Type": "application/json"} })
    .then((res) => res.json())
    .then((dataapi) => setData(dataapi.data) );
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Click submit to see script's manual first, then click submit again to exectute it</h2>
        <h3 className="display-linebreak">{data}</h3>
        <button onClick={getapi}>Submit</button>
      </header>
    </div>
  );
}

export default App;
