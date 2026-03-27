import React from "react";
import CaseList from "./components/CaseList";
import AddCase from "./components/AddCase";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">⚖️ Legal Case Dashboard</h1>

      <div className="grid">
        <div className="card">
          <AddCase />
        </div>

        <div className="card">
          <CaseList />
        </div>
      </div>
    </div>
  );
}

export default App;