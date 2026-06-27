import { useState } from 'react'

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
  if (!isOpen) return null

  return (
    <aside className="mobileMenu" aria-label="Mobile navigation menu">
      <div className="mobileMenuHeader">
        <strong>Menu</strong>
        <button className="menuClose" onClick={onClose} aria-label="Close mobile menu" type="button">
          Close
        </button>
      </div>

      <Group title="Talent Services" items={navItems.slice(0, 3)} activeSection={activeSection} onClose={onClose} />
      <Group title="Insights" items={navItems.slice(3)} activeSection={activeSection} onClose={onClose} />
      <Group title="Company" items={topLinks} activeSection={activeSection} onClose={onClose} />
    </aside>
  )
}
