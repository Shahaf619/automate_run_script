import React from "react";
import logo from './logo.svg';
import './App.css';

function App() 
{

  const [data, setData] = React.useState(0);

  // Get the shell output data
  function getapi() 
  {
    fetch("http://localhost:3002/api")
    .then((res) => res.json())
    .then((dataapi) => setData(dataapi.data) );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="display-linebreak">{data}</h3>
        <button onClick={getapi}>click</button>
      </header>
    </div>
  );
}

export default App;
