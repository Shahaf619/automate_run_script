import React, { useState } from 'react';

//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const UI = () => {
  return <Headline />;
};

const Headline = () => {

  const [project, setProject] = useState();
  const [app, setApp] = useState();
  const [script, setScript] = useState();
  const [interactive, setInteractive ] = useState();
  const [root , setRoot] = useState();

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
        <select value={project} onChange={(e) => setProject(e.target.value)}>
            <option value="LOCATION">LOCATION</option>
            <option value="EQUIFAX">EQUIFAX</option>
            <option value="MEMBER">MEMBER</option>
            <option value="ACCOUNT">ACCOUNT</option>
            <option value="MSGROUP1">MSGROUP1</option>
        </select>
        <h4>Selected Region: {project}</h4>
    </center>    
    <br/>
    <hr/>
    <center>
        <strong>Please choose application name.</strong>
        <br/>
        <br/>
        <select value={app} onChange={(e) => setApp(e.target.value)}>
            <option value="Fabric">Fabric</option>
            <option value="Cassandra">Cassandra</option>
            <option value="Kafka">Kafka</option>
        </select>
        <h4>Selected Region: {app}</h4>
    </center>   
    <br/>
    <hr/>
    <center>
        <strong>Please choose script name.</strong>
        <br/>
        <br/>
        <select value={script} onChange={(e) => setScript(e.target.value)}>
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
        <select value={interactive} onChange={(e) => setInteractive(e.target.value)}>
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
        <select value={root} onChange={(e) => setRoot(e.target.value)}>
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
    
</div>  
  );
};

export default UI;