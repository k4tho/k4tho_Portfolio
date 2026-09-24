import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const publications = [
  {
    title:
      'CASL: A Software Framework for Gesture-Driven, Context-Aware Layout Design in Virtual Reality',
    venue:
      'International Conference on Software Engineering of Emerging Technologies (SEET 2026)',
    href: 'https://www.schweitzer-online.de/buch/Hussain/Software-Engineering-Emerging-Technologies/9783032397621/A78202036/',
  },
  {
    title:
      'User-Centered Software Engineering for VR Relaxation Applications',
    venue:
      'First International Conference on Software Engineering for Emerging Technologies (SEET 2025)',
    href: 'https://link.springer.com/chapter/10.1007/978-3-032-08977-9_24',
  },
]

export function Publications() {
  return (
    <section
      className="content-section publications"
      id="publications"
      aria-labelledby="publications-title"
    >
      <SectionHeading
        eyebrow="Publications"
        title="Publications"
        titleId="publications-title"
      />

      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication-item" key={publication.title}>
            {publication.href ? (
              <h3>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {publication.title}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </h3>
            ) : (
              <h3>{publication.title}</h3>
            )}
            <p>{publication.venue}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
