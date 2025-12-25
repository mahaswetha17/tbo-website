import React from "react";

export default function Domains() {
  const domains = [
    "Theatre & Drama",
    "Literature & Poetry",
    "Debates & Public Speaking",
    "Acting & Performance",
    "Film Making & Direction",
    "Scriptwriting & Storytelling"
  ];

  return (
    <section className="section" id="domains">
      <h2 style={{ color: "#ffd700" }}>Our Domains</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {domains.map((name, i) => (
          <div
            key={i}
            style={{
              background: "transparent",     // no color
              padding: "22px",
              borderRadius: "8px",
              textAlign: "center",
              color: "#ffd700",              // gold text
              fontWeight: "800",
              fontSize: "17px",
              border: "2px solid #ffd700",   // just gold outline
              transition: "0.25s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.background = "rgba(255, 215, 0, 0.08)"; // faint gold glow
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
