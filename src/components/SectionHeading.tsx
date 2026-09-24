type SectionHeadingProps = {
  eyebrow: string
  title?: string
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      {title ? <h2 id={titleId}>{title}</h2> : null}
    </div>
  )
}
