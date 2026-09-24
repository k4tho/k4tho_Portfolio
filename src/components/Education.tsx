import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const educationItems = [
  {
    school: 'University of Southern California',
    degree: 'Master of Science, Computer Science (Data Science)',
    date: 'August 2026 - (Expected) May 2028',
  },
  {
    school: 'Chapman University',
    degree: 'Bachelor of Computer Science',
    detail: 'Game Development Programming & Analytics Minor',
    date: 'August 2021 - August 2025',
  },
]

export function Education() {
  return (
    <section
      className="content-section education"
      id="education"
      aria-labelledby="education-title"
    >
      <SectionHeading
        eyebrow="Academic Background"
        title="Education"
        titleId="education-title"
      />

      <ol className="education-list">
        {educationItems.map((item) => (
          <li className="education-item" key={item.school}>
            <div className="education-icon" aria-hidden="true">
              <GraduationCap size={25} strokeWidth={1.8} />
            </div>
            <div className="education-copy">
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                {item.detail ? <p>{item.detail}</p> : null}
              </div>
              <p className="education-date">{item.date}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
