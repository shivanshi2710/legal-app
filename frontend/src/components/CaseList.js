import React, { useEffect, useState } from "react";
import "./CaseList.css";

const CaseList = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("/cases")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div>
      <h2>📂 Cases</h2>
      {cases.map((c) => (
        <div key={c.id} className="case-card">
          <h3>{c.title}</h3>
          <p>👤 {c.client_name}</p>
          <span className={`status ${c.status}`}>
            {c.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CaseList;