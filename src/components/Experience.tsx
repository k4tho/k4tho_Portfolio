import { SectionHeading } from './SectionHeading'

const experienceItems = [
  {
    company: 'Annenberg Media',
    role: 'Web Team Developer',
    dates: 'August 2026 - Current',
    descriptions: [
    ],
  },
  {
    company: 'Xilo',
    role: 'Tech Support Engineer',
    dates: 'December 2025 - August 2026',
    descriptions: [
      'Configure and deploy JavaScript/TypeScript automation logic for a browser extension that automates insurance data entry and quoting workflows across approximately 100 carrier websites, increasing agent efficiency by 50%+.',
      'Build, test, and debug 25+ carrier integrations using reusable field mappings and validation logic to support differences in website structure and input requirements.',
      'Contribute to an AI-powered quoting agent by testing LLM prompts and configurations to automate insurance form completion, eliminate reliance on manual field mapping, and enable agents to run 4+ quotes simultaneously.',
      'Lead client-facing technical meetings to troubleshoot platform issues, debug configuration errors, and guide clients through platform adoption while translating business requirements into scalable automation workflows.',
    ],
  },
  {
    company: 'Progressify',
    role: 'Frontend Developer & Data Analytics Intern',
    dates: 'June 2025 - August 2025',
    descriptions: [
      'Conducted exploratory data analysis on platform usage and engagement data using SQL and Azure-based analytics tools to inform usability improvements such as identifying underused features and unintuitive navigation patterns.',
      'Developed and deployed responsive React components (TypeScript, Redux) from Figma prototypes, integrated with backend APIs to ensure scalable and maintainable UI/UX.',
      'Automated builds and QA test pipelines via Azure DevOps, ensuring fast and reliable CI/CD processes with quality gates and unit test coverage.',
    ],
  },
  {
    company: 'VRelax',
    role: 'Research Assistant',
    dates: 'May 2023 - June 2025',
    descriptions: [
      'Developed immersive Virtual Reality interfaces in Unity that enable users to manipulate objects using non-predefined gestures, supporting 12 variations of common VR gestures to improve interaction intuitiveness and user experience.',
      'Developed Python-based data processing pipelines using Pandas, NumPy, and Plotly to clean, analyze, and visualize movement patterns and interaction behaviors across 40 research subjects.',
      'Engineered machine learning pipelines to classify users unconstrained gestures based on motion characteristics such as movement, speed, duration, and curvature, achieving 88-95% classification accuracy. ',
    ],
  },
  {
    company: 'Code Ninjas',
    role: 'Tutor',
    dates: 'July 2022 - March 2024',
    descriptions: [
      'Mentored ~40 students weekly in JavaScript, C#, Lua, and Unity, guiding full-stack game development projects.',
      'Created tailored lesson plans to support object-oriented programming, game logic, and interactive learning outcomes.',
    ],
  },
]

export function Experience() {
  return (
    <section
      className="content-section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        eyebrow="Professional Experience"
        title="Professional Experience"
        titleId="experience-title"
      />

      <ol className="timeline">
        {experienceItems.map((item) => (
          <li className="timeline-item" key={item.company}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-heading">
                <h3>{item.company}</h3>
                <p className="timeline-date">{item.dates}</p>
              </div>
              <p className="timeline-role">{item.role}</p>
              <ul className="timeline-descriptions">
                {item.descriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
