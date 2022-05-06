import React, { useState } from 'react';

//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const UI = () => {
  return <Headline />;
};

const Headline = () => {

  // Define variables for the command to run in the shell
  const [cmd , setCmd] = useState("./run_script");

  // Define variables for the seleceted dropdown options  
  const [project, setProject] = useState();
  const [app, setApp] = useState();
  const [script, setScript] = useState();
  const [interactive, setInteractive ] = useState();
  const [root , setRoot] = useState();

  function handleClick() {
   // Send data to the backend via POST
  
   fetch("http://localhost:3002/api2", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ data:cmd}),
   })
     .then((r) => r.json())
     .then((doc) => {
         console.log(doc)
     });
 }

  return (
   <div>
      <center>
         <h1>CIDS Projects</h1>
         <br/>
         <hr/>
      </center>
      <br/>
      <hr/>
      <center>
         <strong>Please choose project name.</strong>
         <br/>
         <br/>
         <select value={project} onChange={(e) =>
            setProject(e.target.value)}>
            <option value="location">Location</option>
            <option value="equifax">Equifax</option>
            <option value="member">Member</option>
            <option value="account">Account</option>
            <option value="msgroup1">MsGroup1</option>
         </select>
         <h4>Selected Region: {project}</h4>
      </center>
      <br/>
      <hr/>
      <center>
         <strong>Please choose application name.</strong>
         <br/>
         <br/>
         <select value={app} onChange={(e) =>
            setApp(e.target.value)}>
            <option value="fabric">Fabric</option>
            <option value="cassandra">Cassandra</option>
            <option value="kafka">Kafka</option>
         </select>
         <h4>Selected Region: {app}</h4>
      </center>
      <br/>
      <hr/>
      <center>
         <strong>Please choose script name.</strong>
         <br/>
         <br/>
         <select value={script} onChange={(e) =>
            setScript(e.target.value)}>
            <option value="test.sh">test.sh</option>
            <option value="test2.sh">test2.sh</option>
            <option value="test3.sh">test3.sh</option>
         </select>
         <h4>Selected Region: {script}</h4>
      </center>
      <br/>
      <hr/>
      <center>
         <strong>Please choose interactive mode option.</strong>
         <br/>
         <br/>
         <select value={interactive} onChange={(e) =>
            setInteractive(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
         </select>
         <h4>Selected Region: {interactive}</h4>
      </center>
      <br/>
      <hr/>
      <center>
         <strong>Please choose root user option.</strong>
         <br/>
         <br/>
         <select value={root} onChange={(e) =>
            setRoot(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
         </select>
         <h4>Selected Region: {root}</h4>
      </center>
      <br/>
      <hr/>
      <br/>
      <br/>
      <br/>

      <div className="App">  
         <button onClick={handleClick} style={{
            textAlign: 'center',
            width: '100px',
            border: '1px solid gray',
            borderRadius: '5px'
            }}>
            Send data to backend
         </button>
      </div>
   </div>
  );
};



export default UI;

