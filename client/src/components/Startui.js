import React, { useState } from 'react';

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const UI = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div>
    <center>
        <h1>CIDS Projects</h1>
        <br/>
        <hr/>
        <strong>Please choose project name.</strong>
        <br/>
        <br/>
        <select>
            <option value="EAST">EAST</option>
            <option value="WEST">WEST</option>
        </select>
    </center>   
    <br/>
    <hr/>
    <center>
        <strong>Please choose project name.</strong>
        <br/>
        <br/>
        <select>
            <option value="LOCATION">LOCATION</option>
            <option value="EQUIFAX">EQUIFAX</option>
            <option value="MEMBER">MEMBER</option>
            <option value="ACCOUNT">ACCOUNT</option>
            <option value="MSGROUP1">MSGROUP1</option>
        </select>
    </center>    
    <br/>
    <hr/>
    <center>
        <strong>Please choose application name.</strong>
        <br/>
        <br/>
        <select>
            <option value="Fabric">Fabric</option>
            <option value="Cassandra">Cassandra</option>
            <option value="Kafka">Kafka</option>
        </select>
    </center>   
    <br/>
    <hr/>
    <center>
        <strong>Please choose script name.</strong>
        <br/>
        <br/>
        <select>
            <option value="test.sh">test.sh</option>
            <option value="test2.sh">test2.sh</option>
            <option value="test3.sh">test3.sh</option>
        </select>
    </center>   
    <br/>
    <hr/>
    <center>
        <strong>Please choose interactive mode option.</strong>
        <br/>
        <br/>
        <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </center>   
    <br/>
    <hr/>
    <center>
        <strong>Please choose root user option.</strong>
        <br/>
        <br/>
        <select>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
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