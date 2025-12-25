import React from "react";

export default function Gallery() {
  const photos = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg"
  ];

  return (
    <section className="section" id="photos">
      <h2 style={{ color: "#ffd700" }}>Photo Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "18px",
          marginTop: "15px"
        }}
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="TBO Event"
            style={{
              width: "100%",
              height: "230px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "2px solid #ffd700",
              transition: ".3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        ))}
      </div>
    </section>
  );
}
