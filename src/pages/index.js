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

// Sticky Header Component
function StickyHeader({ hamburgerMenu, company }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <Image src="/logo.svg" alt="CTB logo" width={40} height={40} priority />
            <span>{company.name}</span>
          </a>
          <div className={styles.headerRight}>
            <button className={styles.searchBtn} aria-label="Search">🔍</button>
            <button 
              className={styles.hamburgerBtn} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Hamburger Menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileMenu}>
          {hamburgerMenu.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}

// Hero Section with Carousel
function HeroSection({ hero }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % hero.backgroundImages.length)
    }, 6000) // 6 seconds
    return () => clearInterval(interval)
  }, [hero.backgroundImages.length])

  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
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
        <h1>
          {hero.title}
          <br />
          {hero.subtitle}
        </h1>
        <p className={styles.heroDescription}>{hero.description}</p>
        
        <div className={styles.heroActions}>
          <a className={styles.btn} href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className={styles.btnSecondary} href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
          <a className={styles.btnOutline} href={hero.tertiaryCta.href}>
            {hero.tertiaryCta.label}
          </a>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className={styles.carouselDots}>
        {hero.backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentImageIndex === index ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// Hiring & Projection Carousel
function HiringProjectionSection({ cards }) {
  const [currentCard, setCurrentCard] = useState(0)

  return (
    <section id="hiring-projection" className={styles.hiringSection}>
      <h2>Hiring & Projection</h2>
      
      <div className={styles.carouselContainer}>
        <div className={styles.cardWrapper}>
          <div className={styles.carouselCard}>
            <div className={styles.cardImage}>
              <Image
                src={cards[currentCard].image}
                alt={cards[currentCard].title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>{cards[currentCard].title}</h3>
            <p>{cards[currentCard].description}</p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.paginationDots}>
        {cards.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationDot} ${currentCard === index ? styles.active : ''}`}
            onClick={() => setCurrentCard(index)}
            aria-label={`Card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// Why CTB Section
function WhyCTBSection({ cards, mission }) {
  return (
    <section id="why-ctb" className={styles.whyCTBSection}>
      <h2>Why Choose Cosmic Talent Bridge (CTB)</h2>
      
      <div className={styles.missionBox}>
        <h3>Our Mission</h3>
        <p>{mission}</p>
      </div>

      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.ctbCard}>
            <div className={styles.cardIcon}>{card.icon}</div>
            <div className={styles.cardNumber}>{card.number}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const { company, hamburgerMenu, hero, hiringProjection, whyCTB, services, specializations, insights, trainingPrograms, process } = siteContent

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
        <title>{`${company.name} (${company.shortName}) | Global Staffing & Recruitment`}</title>
        <meta name="description" content={company.tagline} />
        <meta name="keywords" content="staffing, recruiting, talent acquisition, global hiring, workforce solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${company.name} | Global Staffing & Recruitment`} />
        <meta property="og:description" content={company.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={company.siteUrl} />
        <meta property="og:image" content={`${company.siteUrl}/logo.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${company.name} | Global Staffing & Recruitment`} />
        <meta name="twitter:description" content={company.tagline} />
        <link rel="canonical" href={company.siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main id="top" className={`${styles.page} ${headingFont.variable} ${bodyFont.variable}`}>
        {/* Sticky Header */}
        <StickyHeader hamburgerMenu={hamburgerMenu} company={company} />

        {/* Hero Section */}
        <HeroSection hero={hero} />

        {/* Hiring & Projection Section */}
        <HiringProjectionSection cards={hiringProjection} />

        {/* Why CTB Section */}
        <WhyCTBSection cards={whyCTB} mission={company.mission} />

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
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

        {/* Specializations Section */}
        <section id="specializations" className={styles.section}>
          <h2>Specialized Fields</h2>
          <div className={styles.specializationGrid}>
            {specializations.map((field) => (
              <div key={field.name} className={styles.specializationItem}>
                <span className={styles.icon}>{field.icon}</span>
                <span>{field.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contactSection}>
          <h2>Ready to get started?</h2>
          <p>Book a meeting or contact us to learn more about our services.</p>
          <div className={styles.contactActions}>
            <a className={styles.btn} href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className={styles.btnSecondary} href={`tel:${company.phone}`}>
              {company.phone}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2026 {company.legalName}. All rights reserved.</p>
          <p>{company.location} | {company.size}</p>
        </footer>
      </main>
    </>
  )
}
