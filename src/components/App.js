import React from "react";

function App() {
  return (
    <div className="tabs">
      <ul>
        <li className="tab" id="Home-tab">Home</li>
        <li className="tab" id="About-tab">About</li>
        <li className="tab" id="Features-tab">Features</li>
      </ul>
      <div className="viewport">Pages Go Here.</div>
    </div>
  );
}

export default App;