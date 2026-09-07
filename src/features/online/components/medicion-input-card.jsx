import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from './card'
import { InfoIconButton } from './info-icon-button'

export function MedicionInputCard({ field, value, onChange, activeStepId, onSelectStep }) {
    return (
        <Card className='onlineMedicionCardSty' style={{ background: '#fbfbfc' }}>
            <div className='onlineMedicionHeaderSty'>
                <label className='onlineMedicionLabelSty' htmlFor={`online-${field.key}`}>
                    <FontAwesomeIcon icon={field.icon} className='onlineMedicionLabelIconSty' />
                    <span>{field.label} <span className='text-muted'>({field.unit})</span></span>
                </label>
                <InfoIconButton
                    stepId={field.stepId}
                    activeStepId={activeStepId}
                    onSelect={onSelectStep}
                    label={`Instrucciones: ${field.label}`}
                />
            </div>
            <input
                id={`online-${field.key}`}
                className='w-100 form-control'
                type='number'
                step='0.1'
                placeholder={field.placeholder}
                value={value}
                onChange={(e) => onChange(field.key, e.target.value)}
            />
        </Card>
    )
}
