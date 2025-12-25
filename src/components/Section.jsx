import React from "react";

export default function Section({ title, content }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p style={{ whiteSpace: "pre-line" }}>{content}</p>
    </div>
  );
}
