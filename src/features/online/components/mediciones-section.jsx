import { Card } from './card'
import { InfoIconButton } from './info-icon-button'
import { MedicionInputCard } from './medicion-input-card'
import { MEDICIONES_FIELDS } from '../online.constants'

export function MedicionesSection({ values, onChange, activeStepId, onSelectStep }) {
    return (
        <Card className='onlineSectionCardSty'>
            <div className='onlineSectionTitleSty'>
                <h4 className='mb-0'>Mediciones</h4>
                <InfoIconButton
                    stepId='mediciones'
                    activeStepId={activeStepId}
                    onSelect={onSelectStep}
                    label='Instrucciones: Mediciones'
                />
            </div>

            <div className='row g-3 onlineMedicionesGridSty'>
                {MEDICIONES_FIELDS.map((field) => (
                    <div className='col-12 col-md-6' key={field.key}>
                        <MedicionInputCard
                            field={field}
                            value={values[field.key]}
                            onChange={onChange}
                            activeStepId={activeStepId}
                            onSelectStep={onSelectStep}
                        />
                    </div>
                ))}
            </div>
        </Card>
    )
}
