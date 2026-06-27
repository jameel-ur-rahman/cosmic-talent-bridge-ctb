import Head from 'next/head'
import Image from 'next/image'
import { Manrope, Sora } from 'next/font/google'
import styles from './index.module.css'
import siteContent from '../config/siteContent'
import { useState, useEffect } from 'react'

const headingFont = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700']
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
})

// Sticky Navbar Component
function StickyNavbar({ navigation }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        <a href="#top" className={styles.brand}>
          <Image src="/logo.svg" alt="CTB logo" width={40} height={40} priority />
          <div>
            <p>Cosmic Talent Bridge</p>
            <span>CTB</span>
          </div>
        </a>
        <nav aria-label="Main navigation" className={styles.nav}>
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.navRight}>
          <button className={styles.searchBtn} aria-label="Search">
            🔍
          </button>
          <button className={styles.menuBtn} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

// Hero Section with Background Carousel
function HeroSection({ hero, company }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hero.backgroundImages.length)
    }, 5000) // 5 seconds
    return () => clearInterval(interval)
  }, [hero.backgroundImages.length])

  return (
    <section className={styles.heroWithBackground}>
      {/* Background Image */}
      <div className={styles.heroBackgroundContainer}>
        <Image
          src={hero.backgroundImages[currentImageIndex]}
          alt="Professional staffing solutions"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextContainer}>
          <h1>
            <span className={styles.bold}>{hero.title}</span>
            <br />
            {hero.subtitle}
          </h1>
          <p className={styles.heroCopy}>{hero.description}</p>
          
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className={styles.secondaryBtn} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
            <a className={styles.tertiaryBtn} href={hero.tertiaryCta.href}>
              {hero.tertiaryCta.label}
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          {siteContent.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className={styles.carouselIndicators}>
        {hero.backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${currentImageIndex === index ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const { company, hero, stats, navigation, services, specializations, insights, trainingPrograms, process } =
    siteContent

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.siteUrl,
    logo: `${company.siteUrl}/logo.svg`,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK'
    },
    description: company.tagline,
    sameAs: []
  }

  return (
    <>
      <Head>
        <title>{`${company.name} (${company.shortName}) | Staffing, Recruiting, and Professional Training`}</title>
        <meta name="description" content={company.tagline} />
        <meta name="keywords" content="staffing, recruiting, talent acquisition, global hiring, workforce solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${company.name} | Staffing and Recruiting`} />
        <meta property="og:description" content={company.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={company.siteUrl} />
        <meta property="og:image" content={`${company.siteUrl}/logo.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${company.name} | Staffing and Recruiting`} />
        <meta name="twitter:description" content={company.tagline} />
        <link rel="canonical" href={company.siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main id="top" className={`${styles.page} ${headingFont.variable} ${bodyFont.variable}`}>
        {/* Sticky Navbar */}
        <StickyNavbar navigation={navigation} />

        {/* HERO SECTION WITH BACKGROUND CAROUSEL */}
        <HeroSection hero={hero} company={company} />

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <h2>Our Services</h2>
          <div className={styles.cards}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Hiring Trends / Insights Section */}
        <section id="insights" className={styles.sectionAlt}>
          <h2>Hiring Trends & Resources</h2>
          <div className={styles.insightsGrid}>
            {insights.map((insight, idx) => (
              <div key={insight.title} className={styles.insightCard}>
                <div className={styles.insightNumber}>{idx + 1}</div>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations Section - Clean Text Layout */}
        <section id="specializations" className={styles.section}>
          <h2>Specialized Fields</h2>
          <div className={styles.specializationGrid}>
            {specializations.map((field) => (
              <div key={field.name} className={styles.specializationItem}>
                <span className={styles.specializationIcon}>{field.icon}</span>
                <span className={styles.specializationName}>{field.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.section}>
          <h2>What Our Clients Say</h2>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {company.testimonials.map((testimonial) => (
              <div key={testimonial.name} className={styles.testimonialCard}>
                <div className={styles.testimonialPhotoWrapper}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <strong>{testimonial.name}</strong>
                <p className={styles.testimonialRole}>
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Training Programs Section */}
        <section id="training" className={styles.sectionAlt}>
          <h2>Professional Training Programs</h2>
          <ul className={styles.trainingList}>
            {trainingPrograms.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>
        </section>

        {/* Our Process Section */}
        <section className={styles.section}>
          <h2>Our Placement Process</h2>
          <ol className={styles.steps}>
            {process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* CTA Section */}
        <section id="contact" className={styles.cta}>
          <h2>Ready to hire or get placed?</h2>
          <p>
            Tell us your hiring requirement or career goal. We will respond with the next practical step.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className={styles.secondaryBtn} href={`tel:${company.phone}`}>
              {company.phone}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>{company.legalName}</p>
          <span>{`${company.location} | ${company.size}`}</span>
        </footer>
      </main>
    </>
  )
}
