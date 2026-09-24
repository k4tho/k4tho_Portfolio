import { Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

type Contact = {
  label: string
  value: string
  href: string
  icon?: LucideIcon
  badge?: string
  external?: boolean
}

const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'katiehh04@gmail.com',
    href: 'mailto:katiehh04@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/katho4/',
    href: 'https://linkedin.com/in/katho4/',
    badge: 'in',
    external: true,
  },
  {
    label: 'Phone',
    value: '+1 (714) 933-0944',
    href: 'tel:+17149330944',
    icon: Phone,
  },
]

export function Socials() {
  return (
    <section
      className="content-section socials"
      id="socials"
      aria-labelledby="socials-title"
    >
      <SectionHeading eyebrow="Socials" title="Socials" titleId="socials-title" />
      <address className="contact-list">
        {contacts.map(({ label, value, href, icon: Icon, badge, external }) => (
          <a
            className="contact-item"
            href={href}
            key={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            <span className="contact-icon" aria-hidden="true">
              {Icon ? <Icon size={23} strokeWidth={1.8} /> : <b>{badge}</b>}
            </span>
            <span>
              <strong>{label}</strong>
              <small>{value}</small>
            </span>
          </a>
        ))}
      </address>
    </section>
  )
}
