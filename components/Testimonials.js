export default function Testimonials({ testimonials, date }) {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="sectionHeader">
        <h2>What clients and candidates say</h2>
        <p>Updated: {date}</p>
      </div>

      <div className="grid two">
        {testimonials.map((item, idx) => (
          <article key={`${item.name}-${idx}`} className="card quoteCard">
            <p>&ldquo;{item.quote}&rdquo;</p>
            <h3>{item.name}</h3>
            <small>{item.role}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
