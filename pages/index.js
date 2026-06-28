import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MobileMenu from '../components/MobileMenu'
import ServicesGrid from '../components/ServicesGrid'
import Testimonials from '../components/Testimonials'
import mockData from '../data/mockData.json'
import { PRIMARY_NAV, SITE, SPECIALIZATIONS, STATS, TOP_LINKS } from '../data/siteConfig'

function FeatureCards({ id, title, items }) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <h2>{title}</h2>
      </div>

      <div className="grid three">
        {items.map((item) => (
          <article key={item.title} className="card featureCard">
            <Image src={item.image} alt={item.title} width={560} height={340} className="featureMedia" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutBlock() {
  return (
    <section id="about" className="section aboutBlock">
      <div className="aboutMedia">
        <Image src="/about-global-reach.jpg.jpeg" alt="Cosmic Talent Bridge team collaboration" width={720} height={520} className="aboutPhoto" />
      </div>

      <div>
        <h2>{mockData.pageCopy.about.title}</h2>
        <p>{mockData.pageCopy.about.description}</p>
        <div className="statsGrid">
          {STATS.map((stat) => (
            <article key={stat.label} className="statCard">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecializationBlock({ cards }) {
  return (
    <section id="consulting" className="section blockLight">
      <div className="sectionHeader">
        <h2>{mockData.pageCopy.specialization.title}</h2>
      </div>

      <div className="specializationTabs" role="tablist" aria-label="Specializations">
        {SPECIALIZATIONS.map((item) => (
          <button key={item} className="specTab" type="button" aria-label={item}>
            {item}
          </button>
        ))}
      </div>

      <div className="specializationPanel">
        <Image src="/specialization-marketing.jpg.jpeg" alt="Specialization hiring overview" width={720} height={520} className="aboutPhoto" />
        <div>
          <h3>{mockData.pageCopy.specialization.panelTitle}</h3>
          <p>{mockData.pageCopy.specialization.panelDescription}</p>
          <ul>
            {mockData.pageCopy.specialization.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid three specializationCards">
        {cards.map((card) => (
          <article key={card.title} className="card featureCard">
            <Image src={card.image} alt={card.title} width={560} height={340} className="featureMedia" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function HiringProjectionSection() {
  useEffect(() => {
    const cards = document.querySelectorAll('.projectionCard')
    if (!cards.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      value: '20+',
      title: 'Global Recruiters',
      description: 'Experienced recruitment professionals serving worldwide.'
    },
    {
      value: '100+',
      title: 'Happy Clients',
      description: 'Trusted by organizations and professionals across industries.'
    },
    {
      value: '5+',
      title: 'Strategic Partners',
      description: 'Building long-term partnerships with technology and SaaS companies.'
    },
    {
      value: '24/7',
      title: 'Global Support',
      description: 'Continuous assistance across multiple time zones.'
    }
  ]

  const cards = [
    {
      title: 'Team Growth',
      image: '/service-permanent.jpg.jpg',
      description:
        'Build stronger organizations with highly skilled permanent, contract and project-based professionals. Our recruitment specialists help businesses scale quickly while maintaining quality, collaboration and long-term success.'
    },
    {
      title: 'Talent Pipeline',
      image: '/service-onboarding.jpg.jpg',
      description:
        'Our structured recruitment process identifies, screens and connects qualified professionals efficiently, reducing hiring time while improving candidate quality and organizational fit.'
    },
    {
      title: 'Market Demand',
      image: '/specialization-technology.jpg.jpeg',
      description:
        'Stay informed with hiring trends, workforce demand and industry insights that help businesses plan recruitment strategies and professionals prepare for emerging opportunities.'
    },
    {
      title: 'Compensation Trends',
      image: '/specialization-finance.jpg.jpeg',
      description:
        'Compare salary benchmarks, understand market movements and develop competitive compensation strategies that attract and retain top talent across global markets.'
    }
  ]

  return (
    <section id="hiring-projection" className="hiringProjection section">
      <div className="hiringProjectionHeader">
        <h2>Hiring &amp; Projection</h2>
        <p>
          Market insights, hiring trends and workforce projections helping businesses and professionals
          make better hiring decisions.
        </p>
      </div>

      <div className="projectionStatsGrid">
        {stats.map((stat) => (
          <article key={stat.title} className="projectionStat">
            <h3>{stat.value}</h3>
            <h4>{stat.title}</h4>
            <p>{stat.description}</p>
          </article>
        ))}
      </div>

      <div className="projectionCardsGrid">
        {cards.map((card) => (
          <article key={card.title} className="projectionCard">
            <div className="projectionImageWrap">
              <Image src={card.image} alt={card.title} width={560} height={340} className="projectionImage" />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('services')
  const [scrollDirection, setScrollDirection] = useState('up')

  const sectionIds = useMemo(() => PRIMARY_NAV.map((item) => item.id), [])

  useEffect(() => {
    let lastY = 0

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setScrollDirection(y > lastY ? 'down' : 'up')
      lastY = y

      const midpoint = y + window.innerHeight * 0.32
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (midpoint >= top && midpoint < bottom) {
          setActiveSection(id)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return (
    <>
      <Head>
        <title>{`${SITE.brand} | Staffing, Recruitment and Job Search`}</title>
        <meta name="description" content={SITE.heroSubtitle} />
        <meta property="og:title" content={`${SITE.brand} | Staffing, Recruitment and Job Search`} />
        <meta property="og:description" content={SITE.heroSubtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.siteUrl} />
        <meta property="og:site_name" content={SITE.brand} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.brand} | Staffing, Recruitment and Job Search`} />
        <meta name="twitter:description" content={SITE.heroSubtitle} />
        <link rel="canonical" href={SITE.siteUrl} />
      </Head>

      <Header
        brand={SITE.brand}
        topLinks={TOP_LINKS}
        navItems={PRIMARY_NAV}
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollDirection={scrollDirection}
        onToggleMenu={() => setMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={PRIMARY_NAV}
        topLinks={TOP_LINKS}
        activeSection={activeSection}
      />

      <main id="mainContent">
        <Hero site={SITE} slides={mockData.heroSlides} />
        <HiringProjectionSection />
        <FeatureCards id="hiring-trends" title={mockData.pageCopy.hiringTrends.title} items={mockData.hiringTrends} />
        <AboutBlock />
        <ServicesGrid services={mockData.services} title={mockData.pageCopy.services.title} description={mockData.pageCopy.services.description} />
        <SpecializationBlock cards={mockData.specializationCards} />
        <section id="jobs" className="section">
          <div className="sectionHeader">
            <h2>{mockData.pageCopy.jobs.title}</h2>
            <p>{mockData.pageCopy.jobs.description}</p>
          </div>
        </section>
        <FeatureCards id="resources" title={mockData.pageCopy.resources.title} items={mockData.resources} />
        <Testimonials testimonials={{ title: mockData.pageCopy.testimonials.title, items: mockData.testimonials }} date={SITE.date} />
      </main>

      <Footer site={SITE} />

      {/* TODO: attach backend API here */}
    </>
  )
}
