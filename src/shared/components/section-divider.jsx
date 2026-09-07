import "../../app/globals.css"

export function SectionDivider({ label }) {
  return (
    <div className="sectionDividerSty" role="separator" aria-label={label}>
      <span className="sectionDividerLineSty" aria-hidden="true" />
      <span className="sectionDividerLabelSty">{label}</span>
      <span className="sectionDividerLineSty" aria-hidden="true" />
    </div>
  )
}
