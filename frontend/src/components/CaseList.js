import React, { useEffect, useState } from "react";
import "./CaseList.css";

const CaseList = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("http://ec2-15-135-112-131.ap-southeast-2.compute.amazonaws.com:30007/cases")
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