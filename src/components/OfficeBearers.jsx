import React from "react";
import secretary from "/office/secretary.jpg";
import joint_secretary from "/office/joint_secretary.jpg";
import treasurer from "/office/treasurer.jpg";
import actitude_head from "/office/actitude_head.jpg";
import lit_head from "/office/lit_head.jpg";
import pr_head from "/office/pr_head.jpg";
import design_head from "/office/design_head.jpg";



export default function OfficeBearers() {
  const members = [
  { name: "Manaswini", role: "Secretary", img: "/office/secretary.jpg" },
  { name: "Kumaraguru", role: "Joint Secretary", img: "/office/joint_secretary.jpg" },
  { name: "Niteesh", role: "Treasurer", img: "/office/treasurer.jpg" },
  { name: "Infant", role: "Head of Actitude", img: "/office/actitude_head.jpg" },
  { name: "Surjeeth", role: "Head of Public Relations", img: "/office/pr_head.jpg" },
  { name: "Mahaswetha", role: "Head of LiT", img: "/office/lit_head.jpg" },
  { name: "Hitesh", role: "Head of Design", img: "/office/design_head.jpg" }
];




  return (
    <section className="section" id="office">
      <h2 style={{ color: "#ffd700" }}>Office Bearers</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          marginTop: "20px"
        }}
      >
        {members.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              border: "2px solid #ffd700",
              borderRadius: "12px",
              padding: "15px",
              transition: ".3s"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={m.img}
              alt={m.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #ffd700",
                marginBottom: "10px"
              }}
            />

            <h3 style={{ color: "#ffd700" }}>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
