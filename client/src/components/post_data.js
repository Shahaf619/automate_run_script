function Component() {
  
    function handleClick() {
      
      // Send data to the backend via POST
      fetch("http://localhost:3002/api2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data:jsonData}),
      })
        .then((r) => r.json())
        .then((doc) => {
            console.log(doc)
        });
      
    }
  
    return (
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
    );
  
  }
  
  export default  Component ;