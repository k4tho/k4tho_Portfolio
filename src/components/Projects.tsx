import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const projects = [
  {
    category: 'Game Development',
    title: 'Evacuate',
    result: 'IEEE GameSIG 2025 Semi-Finalist',
    description:
      'A survival-horror game combining exploration, puzzle solving, resource management, and combat within an abandoned science facility. Waking up with no memory of how they got there, the player must navigate the zombie-infested facility, strategically manage their inventory, solve puzzles to unlock new areas, and uncover clues about what happened while searching for a way to escape. Production is still underway',
    role: 'Lead Programmer & Team Lead',
    contributions: [
      'Led development of a survival-horror game from initial concept through milestone delivery.',
      'Prototyped the core gameplay mechanics and coordinated a five-person development team.',
      'Managed Git version control, integrated team contributions, and delivered milestone builds on schedule.',
      'Designed and implemented inventory systems, environmental interactions, AI-controlled characters, and player-stat management.',
    ],
    href: 'https://store.steampowered.com/app/3747610/Evacuate/',
    visual: 'game',
    visualLabel: 'Evacuate game environment',
  },
  {
    category: 'Data Engineering',
    title: 'Database App',
    result: '3,000+ records migrated',
    description:
      'A desktop application that centralizes business data for a local company that previously relied on disconnected Excel spreadsheets. The system replaces inefficient manual workflows with a single, accessible source of truth, improving data consistency, integration, and reporting.',
    role: 'Desktop Application Developer',
    contributions: [
      'Built the desktop interface in C# and WPF with a MySQL backend for centralized data management.',
      'Developed Python ETL scripts to clean, validate, and migrate more than 3,000 Excel records into a relational database.',
      'Implemented backend logic for data validation, record retrieval, and business reporting.',
    ],
    visual: 'database',
    visualLabel: 'Extract, transform, load workflow',
  },
]

function ProjectVisual({
  type,
  label,
}: {
  type: string
  label: string
}) {
  if (type === 'automation') {
    return (
      <div className={`project-visual project-visual--${type}`} role="img" aria-label={label}>
        <span className="browser-card browser-card--back" />
        <span className="browser-card browser-card--middle" />
        <span className="browser-card browser-card--front">
          <i />
          <i />
          <i />
        </span>
        <strong>Collecting data…</strong>
      </div>
    )
  }

  if (type === 'gesture') {
    return (
      <div className={`project-visual project-visual--${type}`} role="img" aria-label={label}>
        <div className="gesture-points" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => <i key={index} />)}
        </div>
        <div className="signal-lines" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
      </div>
    )
  }

  if (type === 'game') {
    return (
      <div className={`project-visual project-visual--${type}`} role="img" aria-label={label}>
        <span className="game-sun" />
        <span className="game-ruin game-ruin--left" />
        <span className="game-ruin game-ruin--right" />
        <span className="game-character" />
      </div>
    )
  }

  return (
    <div className={`project-visual project-visual--${type}`} role="img" aria-label={label}>
      <div className="data-checks" aria-hidden="true">
        <span>✓ <b>Extract</b></span>
        <span>✓ <b>Transform</b></span>
        <span>✓ <b>Load</b></span>
      </div>
      <div className="code-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div>
    </div>
  )
}

type Project = (typeof projects)[number]

function ProjectCard({ project }: { project: Project }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const actionLabel = isDescriptionVisible
    ? `Return to the ${project.title} project overview`
    : `Read the ${project.title} project description`

  return (
    <article
      className={
        isDescriptionVisible
          ? 'project-card project-card--description'
          : 'project-card'
      }
    >
      <button
        className="project-card-toggle"
        type="button"
        aria-expanded={isDescriptionVisible}
        aria-label={actionLabel}
        onClick={() => setIsDescriptionVisible((isVisible) => !isVisible)}
      />

      {isDescriptionVisible ? (
        <>
          <ArrowLeft className="project-arrow project-arrow--back" size={24} aria-hidden="true" />
          <div className="project-description">
            <p className="project-category">{project.category}</p>
            <div className="project-description-heading">
              <h3>{project.title}</h3>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on Steam`}
                >
                  Steam
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
            <p className="project-description-text">{project.description}</p>
            {project.contributions ? (
              <div className="project-role">
                <h4>Role &amp; Contributions</h4>
                <p>{project.role}</p>
                <ul>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <ProjectVisual type={project.visual} label={project.visualLabel} />
          <div className="project-copy">
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-result">{project.result}</p>
          </div>
          <ArrowRight className="project-arrow" size={24} aria-hidden="true" />
        </>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <section
      className="content-section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow="Selected Projects"
        title="Featured Projects"
        titleId="projects-title"
      />

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}
