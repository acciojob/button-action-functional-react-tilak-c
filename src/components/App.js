import React, {Component, useState} from "react";
import "../styles/App.css";

function App() {
  const [show,setShow]=useState(false);
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      {show && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button onClick={()=>setShow(!show)}>Show</button>
    </div>
  );
}


export default App;
