import Image from 'next/image'

export default function ServicesGrid({ services, title, description }) {
  return (
    <section id="services" className="section blockLight">
      <div className="sectionHeader">
        <h2>{title}</h2>
        <p>{description}</p>
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
