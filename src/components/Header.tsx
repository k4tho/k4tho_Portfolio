import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('introduction')

  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.1, 0.35] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="site-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
              className={
                activeSection === item.href.slice(1)
                  ? 'nav-link nav-link--active'
                  : 'nav-link'
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
