import { Fragment } from 'react'

const STEP_PROGRESS_ITEMS = [
  { id: 1, label: 'Evaluación online' },
  { id: 2, label: 'Plan nutricional' },
]

export function StepProgress({ activeStep }) {
  return (
    <div className="stepProgressWrapSty">
      <span className="stepProgressEyebrowSty">
        Paso {activeStep} de {STEP_PROGRESS_ITEMS.length}
      </span>
      <div className="stepProgressSty">
        {STEP_PROGRESS_ITEMS.map((item, index) => (
          <Fragment key={item.id}>
            <div className={`stepProgressItemSty ${item.id !== activeStep ? 'stepProgressItemUpcomingSty' : ''}`}>
              <span className={`stepProgressBadgeSty ${item.id === 2 ? 'stepProgressBadgeStepTwoSty' : ''}`}>
                {item.id}
              </span>
              <span className="stepProgressLabelSty">{item.label}</span>
            </div>
            {index < STEP_PROGRESS_ITEMS.length - 1 && <span className="stepProgressConnectorSty" />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
