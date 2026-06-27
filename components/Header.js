import SearchBar from './SearchBar'

export default function Header({ brand, topLinks, navItems, activeSection, isScrolled, scrollDirection, onToggleMenu }) {
  const headerClass = [
    'siteHeader',
    isScrolled ? 'isScrolled' : '',
    scrollDirection === 'up' ? 'scrollUp' : 'scrollDown'
  ]
    .join(' ')
    .trim()

  return (
    <header className={headerClass}>
      <div className="topBar">
        <div className="container topBarInner">
          <span>{brand}</span>
          <nav aria-label="Top utility navigation">
            {topLinks.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mainBar">
        <a className="brand" href="#top" aria-label={`${brand} home`}>
          {brand}
        </a>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'isActive' : ''}>
              {item.label}
              <span aria-hidden="true">▾</span>
            </a>
          ))}
        </nav>

        <SearchBar className="headerSearch" label="Header search" />

        <button className="menuButton" aria-label="Open mobile menu" type="button" onClick={onToggleMenu}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
