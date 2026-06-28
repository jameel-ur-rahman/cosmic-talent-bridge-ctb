import { useEffect, useState } from 'react'

function Group({ title, items, activeSection, onClose }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="mobileGroup">
      <button className="menuAccordion" onClick={() => setOpen(!open)} aria-expanded={open} type="button">
        {title}
      </button>
      {open && (
        <nav aria-label={`${title} links`}>
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href || `#${item.id}`}
              onClick={onClose}
              className={activeSection === item.id ? 'isActive' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}

export default function MobileMenu({ isOpen, onClose, navItems, topLinks, activeSection }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <aside className="mobileMenu" aria-label="Mobile navigation menu" role="dialog" aria-modal="true">
      <div className="mobileMenuHeader">
        <div className="mobileMenuBrand" aria-label="Cosmic Talent Bridge">
          <span className="mobileMenuBrandMark" aria-hidden="true">
            CTB
          </span>
          <span className="mobileMenuBrandDivider" aria-hidden="true" />
          <strong>Cosmic Talent Bridge</strong>
        </div>
        <button className="menuClose" onClick={onClose} aria-label="Close mobile menu" type="button">
          ×
        </button>
      </div>

      <div className="mobileGroup mobileProjectionLink">
        <a
          href="#hiring-projection"
          onClick={onClose}
          className={activeSection === 'hiring-projection' ? 'isActive' : ''}
          aria-current={activeSection === 'hiring-projection' ? 'page' : undefined}
        >
          Hiring &amp; Projection
        </a>
      </div>

      <Group title="Talent Services" items={navItems.slice(0, 3)} activeSection={activeSection} onClose={onClose} />
      <Group title="Insights" items={navItems.slice(3)} activeSection={activeSection} onClose={onClose} />
      <Group title="Company" items={topLinks} activeSection={activeSection} onClose={onClose} />
    </aside>
  )
}
