import { useEffect, useState } from 'react'

export default function Header({ brand, topLinks, navItems, activeSection, isScrolled, scrollDirection, onToggleMenu }) {
  const [isPastThreshold, setIsPastThreshold] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsPastThreshold(window.scrollY > 50)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shouldShowSolidHeader = isPastThreshold || isScrolled

  const headerClass = [
    'siteHeader',
    shouldShowSolidHeader ? 'isScrolled' : '',
    scrollDirection === 'up' ? 'scrollUp' : 'scrollDown'
  ]
    .join(' ')
    .trim()

  return (
    <header
      className={headerClass}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 80,
        background: shouldShowSolidHeader ? '#ffffff' : 'transparent',
        borderBottom: shouldShowSolidHeader ? '1px solid #e9e9e9' : '0',
        boxShadow: shouldShowSolidHeader ? '0 8px 30px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease'
      }}
    >
      <div className="headerInner">
        <a className="brand brandWithLogo" href="#top" aria-label={`${brand} home`}>
          <span className="ctbMark" aria-hidden="true">
            CTB
          </span>
          <span className="ctbDivider" aria-hidden="true" />
          <span className="brandText">Cosmic Talent Bridge</span>
        </a>

        <nav aria-label="Top utility navigation" className="headerHiddenNav" aria-hidden="true">
          {topLinks.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="desktopNav headerHiddenNav" aria-label="Primary navigation" aria-hidden="true">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'isActive' : ''}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
              <span aria-hidden="true">▾</span>
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <button type="button" aria-label="Search" className="searchIconButton">
            <span aria-hidden="true" className="headerIcon">
              🔍
            </span>
          </button>

          <button className="menuButton headerMenuButton" aria-label="Open mobile menu" type="button" onClick={onToggleMenu}>
            <span aria-hidden="true" className="headerIcon">
              ☰
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .headerInner {
          min-height: 88px;
          max-width: 1400px;
          margin: 0 auto;
          padding-left: clamp(20px, 4.5vw, 64px);
          padding-right: clamp(20px, 4.5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brandWithLogo {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
        }

        .ctbMark {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: #0a1f47;
        }

        .ctbDivider {
          width: 1px;
          height: 24px;
          background: ${shouldShowSolidHeader ? '#111111' : 'rgba(255, 255, 255, 0.92)'};
        }

        .brandText {
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.2px;
          color: ${shouldShowSolidHeader ? '#111111' : '#ffffff'};
          line-height: 1;
        }

        .headerActions {
          display: inline-flex;
          align-items: center;
          gap: 32px;
        }

        .searchIconButton,
        .headerMenuButton {
          border: 0;
          background: transparent;
          padding: 0;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .headerIcon {
          font-size: 30px;
          line-height: 1;
          color: ${shouldShowSolidHeader ? '#111111' : '#ffffff'};
        }

        @media (max-width: 1024px) {
          .brandText {
            font-size: 22px;
          }
        }

        @media (max-width: 767px) {
          .headerInner {
            min-height: 78px;
          }

          .brandText {
            font-size: 16px;
          }

          .ctbMark {
            width: 24px;
            height: 24px;
            font-size: 8px;
          }

          .headerActions {
            gap: 20px;
          }

          .headerIcon {
            font-size: 24px;
          }
        }
      `}</style>
    </header>
  )
}
