import React, { useState } from "react";
import "./AddCase.css";

const AddCase = () => {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://ec2-15-135-112-131.ap-southeast-2.compute.amazonaws.com/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        client_name: client,
        status: "Open",
      }),
    });

    alert("Case Added ✅");
    window.location.reload();
  };

  return (
    <div>
      <h2>➕ Add Case</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Case Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Client Name"
          onChange={(e) => setClient(e.target.value)}
          required
        />
        <button type="submit">Add Case</button>
      </form>
    </div>
  );
};

export default AddCase;