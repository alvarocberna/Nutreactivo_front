import { Card } from './card'
import { InfoIconButton } from './info-icon-button'
import { BIOIMPEDANCIA_FIELDS } from '../online.constants'

export function BioimpedanciaSection({ values, onChange, activeStepId, onSelectStep }) {
    return (
        <Card className='onlineSectionCardSty'>
            <div className='onlineSectionTitleSty'>
                <h4 className='mb-0'>Bioimpedancia (opcional)</h4>
                <InfoIconButton
                    stepId='bioimpedancia'
                    activeStepId={activeStepId}
                    onSelect={onSelectStep}
                    label='Instrucciones: Bioimpedancia'
                />
            </div>

            <div className='row g-3'>
                {BIOIMPEDANCIA_FIELDS.map((field) => (
                    <div className='col-12 col-md-6' key={field.key}>
                        <label className='w-100 form-label' htmlFor={`online-${field.key}`}>
                            {field.label} <span className='text-muted'>({field.unit})</span>
                        </label>
                        <input
                            id={`online-${field.key}`}
                            className='w-100 form-control'
                            type='number'
                            step='0.1'
                            placeholder={field.placeholder}
                            value={values[field.key]}
                            onChange={(e) => onChange(field.key, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </Card>
    )
}
