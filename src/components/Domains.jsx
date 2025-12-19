const domains = [
  "Theatre & Drama",
  "Literature & Poetry",
  "Debate & Oratory",
  "Acting & Performance",
  "Cinema & Filmmaking"
]

export default function Domains() {
  return (
    <section>
      <h2>Our Domains</h2>
      <div className="domain-grid">
        {domains.map((d, i) => (
          <div key={i} className="domain-card">
            {d}
          </div>
        ))}
      </div>
    </section>
  )
}
