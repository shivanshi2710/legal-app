import React, { useEffect, useState } from "react";
import "./CaseList.css";

const API = "/cases";

const CaseList = () => {
  const [cases, setCases] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: "", client_name: "", status: "" });

  const fetchCases = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => setCases(data));
  };

  useEffect(() => {
    fetchCases();
  }, []);

  // 🗑️ DELETE
  const deleteCase = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchCases();
  };

  // ✏️ START EDIT
  const startEdit = (c) => {
    setEditingId(c.id);
    setEditData(c);
  };

  // 💾 UPDATE
  const updateCase = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    setEditingId(null);
    fetchCases();
  };

  return (
    <div>
      <h2>📂 Cases</h2>

      {cases.map((c) => (
        <div key={c.id} className="case-card">

          {editingId === c.id ? (
            <>
              <input
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
              <input
                value={editData.client_name}
                onChange={(e) => setEditData({ ...editData, client_name: e.target.value })}
              />
              <input
                value={editData.status}
                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
              />

              <button onClick={() => updateCase(c.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{c.title}</h3>
              <p>👤 {c.client_name}</p>
              <span className={`status ${c.status}`}>{c.status}</span>

              <div style={{ marginTop: "10px" }}>
                <button onClick={() => startEdit(c)}>Edit</button>
                <button onClick={() => deleteCase(c.id)}>Delete</button>
              </div>
            </>
          )}

        </div>
      ))}
    </div>
  );
};

export default CaseList;