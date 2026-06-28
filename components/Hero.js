import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

export default function Hero({ site, slides }) {
  const slideList = useMemo(() => slides || [], [slides])
  const [activeSlide, setActiveSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)

  useEffect(() => {
    if (slideList.length === 0) return undefined

    const timer = setInterval(() => {
      setActiveSlide((current) => {
        setPrevSlide(current)
        return (current + 1) % slideList.length
      })
    }, 6000)

    return () => clearInterval(timer)
  }, [slideList])

  return (
    <section
      id="top"
      className="hero section"
      style={{
        width: '100vw',
        maxWidth: '100vw',
        minHeight: '100vh',
        margin: 0,
        marginLeft: 'calc(50% - 50vw)',
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <div className="heroMedia heroMediaFull" style={{ width: '100%', minHeight: '100vh' }}>
        <div
          className="heroCarousel"
          aria-label="Featured hiring moments carousel"
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            borderRadius: 0,
            border: 'none',
            overflow: 'hidden'
          }}
        >
          {slideList.length > 0 ? (
            <div className="heroSlidesStage" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
              {slideList.map((slide, index) => (
                <article
                  key={slide.title}
                  className="heroSlide"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    minHeight: '100vh',
                    opacity: index === activeSlide ? 1 : 0,
                    transform:
                      index === activeSlide
                        ? 'translateX(0)'
                        : index === prevSlide
                          ? 'translateX(-8%)'
                          : 'translateX(8%)',
                    transition: 'transform 900ms ease, opacity 900ms ease',
                    zIndex: index === activeSlide ? 3 : index === prevSlide ? 2 : 1
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="100vw"
                    className="heroSlideImage"
                    priority={index === 0}
                    unoptimized
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </article>
              ))}
            </div>
          ) : (
            <>
              <Image
                src="/images/hero/ctb-hero-main.svg"
                alt="Generated workforce illustration"
                fill
                sizes="100vw"
                unoptimized
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </>
          )}

          <div className="heroGlobalShade" aria-hidden="true" />
          <div className="heroLeftGradient" aria-hidden="true" />

          <div
            className="heroDots"
            aria-label="Hero slide indicators"
            style={{
              position: 'absolute',
              right: 18,
              bottom: 18,
              zIndex: 8,
              display: 'flex',
              gap: 7
            }}
          >
            {slideList.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? 'isActive' : ''}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => {
                  setPrevSlide(activeSlide)
                  setActiveSlide(index)
                }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: index === activeSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.45)'
                }}
              />
            ))}
          </div>

          <div className="heroOverlay heroOverlayCustom">
            <h1 className="heroTitleLine">
              <span>Connecting Global Talent With Global</span>
              <span>Opportunities and Professional Training</span>
            </h1>

            <div className="heroDescriptions">
              <p>Find Solutions, Connect to Professional Individuals and Talent.</p>
              <p>We are here to Train Individuals, Corporates and Interns.</p>
              <p>Book a Meeting or Contact Us for Any Services.</p>
            </div>

            <div className="heroActions heroActionsCustom">
              <button type="button" className="heroCtaButton">
                Find a Job
              </button>
              <button type="button" className="heroCtaButton">
                Find Talent
              </button>
              <button type="button" className="heroCtaButton">
                Find Services
              </button>
            </div>
          </div>

          <span style={{ display: 'none' }} aria-hidden="true">
            {site?.heroTitle}
          </span>

          <style jsx>{`
            .heroOverlayCustom {
              position: absolute;
              z-index: 9;
              width: min(760px, 58vw);
              max-width: 760px;
              color: #ffffff;
              left: clamp(20px, 4.5vw, 64px);
              right: auto;
              top: calc(88px + 34px);
              transform: none;
              text-align: left;
              background: transparent !important;
              border: 0 !important;
              border-radius: 0 !important;
              backdrop-filter: none !important;
              padding: 0 !important;
            }

            .heroLeftGradient {
              position: absolute;
              inset: 0;
              z-index: 6;
              background: linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.45) 35%, rgba(0, 0, 0, 0) 75%);
              pointer-events: none;
            }

            .heroGlobalShade {
              position: absolute;
              inset: 0;
              z-index: 5;
              background: rgba(0, 0, 0, 0.28);
              pointer-events: none;
            }

            .heroTitleLine {
              margin: 0;
              font-size: clamp(46px, 4.7vw, 62px);
              line-height: 1.08;
              font-weight: 700;
              letter-spacing: -0.9px;
              max-width: 760px;
            }

            .heroTitleLine span {
              display: block;
              white-space: nowrap;
            }

            .heroDescriptions {
              margin-top: 22px;
              display: grid;
              gap: 0.2rem;
              max-width: 600px;
            }

            .heroDescriptions p {
              margin: 0;
              font-size: 18px;
              line-height: 1.7;
              font-weight: 400;
            }

            .heroActionsCustom {
              margin-top: 34px;
              display: flex;
              flex-wrap: wrap;
              gap: 16px;
            }

            .heroCtaButton {
              border: 1px solid #ffffff;
              color: #ffffff;
              background: transparent;
              border-radius: 8px;
              padding: 0.68rem 1.18rem;
              font-size: 0.9rem;
              font-weight: 600;
              cursor: pointer;
            }

            .heroCtaButton:first-child {
              background: #1f5eff;
              border-color: #1f5eff;
              color: #ffffff;
            }

            .heroCtaButton:hover {
              background: #1f5eff;
              border-color: #1f5eff;
              color: #ffffff;
            }

            @media (max-width: 1024px) {
              .heroOverlayCustom {
                left: clamp(20px, 4.5vw, 64px);
                top: calc(88px + 30px);
                width: min(760px, 78vw);
              }

              .heroTitleLine {
                font-size: clamp(42px, 5.6vw, 54px);
              }

              .heroDescriptions p {
                font-size: 17px;
              }
            }

            @media (max-width: 767px) {
              .heroOverlayCustom {
                left: 20px;
                right: 20px;
                width: auto;
                top: calc(88px + 20px);
              }

              .heroTitleLine {
                font-size: clamp(30px, 8.2vw, 42px);
                letter-spacing: -0.4px;
              }

              .heroTitleLine span {
                white-space: normal;
              }

              .heroDescriptions p {
                font-size: 16px;
                line-height: 1.65;
              }

              .heroActionsCustom {
                margin-top: 24px;
                gap: 10px;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
