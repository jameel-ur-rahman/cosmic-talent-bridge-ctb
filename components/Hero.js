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
    }, 1000)

    return () => clearInterval(timer)
  }, [slideList])

  return (
    <section id="top" className="hero section">
      <div className="heroMedia heroMediaFull">
        <div className="heroCarousel" aria-label="Featured hiring moments carousel">
          {slideList.length > 0 ? (
            <div className="heroSlidesStage">
              {slideList.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`heroSlide ${
                    index === activeSlide ? 'isActive' : index === prevSlide ? 'exitRight' : 'offLeft'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 940px) 100vw, 42vw"
                    className="heroSlideImage"
                    priority={index === 0}
                    unoptimized
                  />
                </article>
              ))}
            </div>
          ) : (
            <Image src="/images/hero/ctb-hero-main.svg" alt="Generated workforce illustration" width={640} height={420} unoptimized />
          )}

          <div className="heroDots" aria-label="Hero slide indicators">
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
              />
            ))}
            </div>

            <div className="heroOverlay">
              <h1>{site.heroTitle}</h1>
              <div className="heroActions">
                <a href="#jobs" className="btn primary">
                  Find a job
                </a>
                <a href="#services" className="btn secondary">
                  Find talent
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
