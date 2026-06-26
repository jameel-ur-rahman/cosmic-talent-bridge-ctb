import Head from 'next/head'
import { Manrope, Space_Grotesk } from 'next/font/google'
import styles from './index.module.css'

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '700']
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
})

const services = [
  {
    title: 'Executive Search',
    text: 'Leadership hiring for founders, growth teams, and global operations.'
  },
  {
    title: 'Project-Based Talent',
    text: 'Rapid deployment of vetted specialists for short and mid-term projects.'
  },
  {
    title: 'Career Mobility',
    text: 'Career guidance, CV optimization, and interview preparation for professionals.'
  }
]

const processSteps = [
  'Discover role outcomes and culture fit',
  'Curate high-intent candidate shortlists',
  'Coordinate interviews and assessments',
  'Support onboarding for 90-day success'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosmic Talent Bridge | Global Hiring and Career Growth</title>
        <meta
          name="description"
          content="Cosmic Talent Bridge connects companies with high-performing talent and helps professionals grow through training and placement support."
        />
      </Head>

      <main className={`${styles.page} ${headingFont.variable} ${bodyFont.variable}`}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Global Recruitment and Talent Growth</p>
          <h1>Build teams that move faster than the market.</h1>
          <p className={styles.heroCopy}>
            Cosmic Talent Bridge helps companies hire with confidence and helps professionals
            unlock better opportunities through practical guidance and strategic placement.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryBtn} href="#contact">
              Book a Consultation
            </a>
            <a className={styles.secondaryBtn} href="#services">
              Explore Services
            </a>
          </div>
          <div className={styles.stats}>
            <div>
              <strong>120+</strong>
              <span>Roles Filled</span>
            </div>
            <div>
              <strong>18</strong>
              <span>Industry Verticals</span>
            </div>
            <div>
              <strong>92%</strong>
              <span>Client Retention</span>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2>Services Built for Growth</h2>
          <div className={styles.cards}>
            {services.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Our Hiring Process</h2>
          <ol className={styles.steps}>
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2>Sectors We Support</h2>
          <p className={styles.inlineText}>
            Technology, logistics, financial services, customer operations, healthcare support,
            education, retail, and remote-first digital teams.
          </p>
        </section>

        <section id="contact" className={styles.cta}>
          <h2>Ready to hire or grow your career?</h2>
          <p>Send your requirement and our team will contact you within one business day.</p>
          <a className={styles.primaryBtn} href="mailto:hello@cosmictalentbridge.com">
            hello@cosmictalentbridge.com
          </a>
        </section>
      </main>
    </>
  )
}