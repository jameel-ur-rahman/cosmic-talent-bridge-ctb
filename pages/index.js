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
        <h2>Why Cosmic Talent Bridge</h2>
        <p>
          We blend recruiter expertise, practical role understanding, and AI-assisted workflows to
          connect talent and employers faster while maintaining quality and fit.
        </p>
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
        <h2>Add specialized talent across your organization</h2>
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
          <h3>Built for high-demand roles</h3>
          <p>
            From entry specialists to leadership hires, our recruitment and consulting support scales
            with your workforce goals.
          </p>
          <ul>
            <li>Shortlist creation aligned with role outcomes</li>
            <li>Flexible hiring support for contract and permanent placements</li>
            <li>Candidate readiness pathways for faster onboarding</li>
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
        <FeatureCards id="hiring-trends" title="Hiring trends and insights" items={mockData.hiringTrends} />
        <AboutBlock />
        <ServicesGrid services={mockData.services} />
        <SpecializationBlock cards={mockData.specializationCards} />
        <section id="jobs" className="section">
          <div className="sectionHeader">
            <h2>Find jobs aligned to your strengths</h2>
            <p>
              Search role paths in finance, technology, legal, and support tracks with coaching that
              helps you stand out.
            </p>
          </div>
        </section>
        <FeatureCards id="resources" title="Resources and training" items={mockData.resources} />
        <Testimonials testimonials={mockData.testimonials} date={SITE.date} />
      </main>

      <Footer site={SITE} />

      {/* TODO: attach backend API here */}
    </>
  )
}
