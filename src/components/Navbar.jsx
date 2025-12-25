import React from "react";

export default function Navbar() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      background: "#0a0a0a",
      borderBottom: "2px solid #7a0619",
      padding: "18px 50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

      <h1
        onClick={() => scrollTo("hero")}
        style={{
          color: "#d4af37",
          cursor: "pointer",
          letterSpacing: "1px"
        }}
      >
        TBO – MIT
      </h1>
      

      <div>
        {["about", "domains", "connect"].map((item) => (
          <span
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              color: "white",
              marginLeft: "25px",
              cursor: "pointer",
              paddingBottom: "3px",
              borderBottom: "2px solid transparent",
              transition: ".3s",
            }}
            onMouseEnter={(e) => (e.target.style.borderBottom = "2px solid #d4af37")}
            onMouseLeave={(e) => (e.target.style.borderBottom = "2px solid transparent")}
          >
            {item.toUpperCase()}
          </span>
          
        ))}

        <a
          href="https://www.instagram.com/tbomit"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#d4af37",
            marginLeft: "20px",
            textDecoration: "none"
          }}
        >
          INSTAGRAM
        </a>
      </div>
    </nav>
  );
}
