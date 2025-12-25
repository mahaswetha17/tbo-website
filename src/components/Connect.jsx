import React from "react";

export default function Connect() {
  return (
    <section className="section" id="connect" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#ffd700" }}>Connect With Us</h2>

      <p style={{ marginTop: "10px" }}>
        Have a story to tell? Want to perform, write, debate or make films?
        <br />
        We would love to hear from you.
      </p>

      <a
        href="https://www.instagram.com/tbomit"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "18px",
          padding: "12px 28px",
          background: "#ffd700",
          color: "black",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Connect on Instagram
      </a>
    </section>
  );
}
