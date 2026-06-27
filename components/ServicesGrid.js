import Image from 'next/image'

export default function ServicesGrid({ services }) {
  return (
    <section id="services" className="section blockLight">
      <div className="sectionHeader">
        <h2>Help you hire, your way</h2>
        <p>Start online or with a recruiter and get a practical shortlist built for your role outcomes.</p>
      </div>

      <div className="grid servicesGrid">
        {services.map((service) => (
          <article key={service.title} className="card serviceCard">
            <Image src={service.image} alt={service.title} width={560} height={340} className="serviceMedia" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact">Learn more</a>
          </article>
        ))}
      </div>
    </section>
  )
}
