import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Card } from './card'
import { PERSONAL_FIELDS } from '../online.constants'

export function PersonalInfoSection({ values, onChange }) {
    return (
        <Card className='onlineSectionCardSty'>
            <div className='onlineSectionTitleSty'>
                <span className='onlineSectionIconWrapSty'>
                    <FontAwesomeIcon icon={faUser} />
                </span>
                <h4 className='mb-0'>Información personal</h4>
            </div>

            <div className='row g-3 onlinePersonalRowSty'>
                {PERSONAL_FIELDS.map((field) => (
                    <div className='col-12 col-md-4' key={field.key}>
                        <label className='w-100 form-label' htmlFor={`online-${field.key}`}>{field.label}</label>
                        {field.type === 'select' ? (
                            <select
                                id={`online-${field.key}`}
                                className='w-100 form-select'
                                value={values[field.key]}
                                onChange={(e) => onChange(field.key, e.target.value)}
                            >
                                {field.options.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                id={`online-${field.key}`}
                                className='w-100 form-control'
                                type={field.type}
                                placeholder={field.placeholder}
                                value={values[field.key]}
                                onChange={(e) => onChange(field.key, e.target.value)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </Card>
    )
}
