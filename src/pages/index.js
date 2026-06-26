import Head from 'next/head'
import Image from 'next/image'
import { Manrope, Sora } from 'next/font/google'
import styles from './index.module.css'
import siteContent from '../config/siteContent'

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
        <title>{`${company.name} | Staffing, Recruiting, and Professional Training`}</title>
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
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="#top" className={styles.brand}>
              <Image src="/logo.svg" alt={`${company.name} logo`} width={54} height={54} priority />
              <div>
                <p>{company.name}</p>
                <span>{company.industry}</span>
              </div>
            </a>
            <nav aria-label="Main navigation" className={styles.nav}>
              {navigation.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className={styles.hero}>
          <p className={styles.kicker}>{company.location}</p>
          <h1>{hero.title}</h1>
          <p className={styles.heroCopy}>{hero.subtitle}</p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className={styles.secondaryBtn} href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2>Core Services</h2>
          <div className={styles.cards}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="specializations" className={styles.sectionAlt}>
          <h2>Specialized Fields</h2>
          <ul className={styles.pills}>
            {specializations.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </section>

        <section id="insights" className={styles.section}>
          <h2>Market Insights and Hiring Resources</h2>
          <div className={styles.cards}>
            {insights.map((insight) => (
              <article key={insight.title} className={styles.card}>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="training" className={styles.sectionAlt}>
          <h2>Professional Training Programs</h2>
          <ul className={styles.trainingList}>
            {trainingPrograms.map((program) => (
              <li key={program}>{program}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Our Process</h2>
          <ol className={styles.steps}>
            {process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="contact" className={styles.cta}>
          <h2>Ready to hire or get placed?</h2>
          <p>
            Tell us your hiring requirement or career goal. We will respond with the next practical
            step.
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

        <footer className={styles.footer}>
          <p>{company.legalName}</p>
          <span>{`${company.location} | ${company.size}`}</span>
        </footer>
      </main>
    </>
  )
}