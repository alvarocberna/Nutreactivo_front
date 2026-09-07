import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

export function InfoIconButton({ stepId, activeStepId, onSelect, label }) {
    const isActive = stepId === activeStepId
    return (
        <button
            type='button'
            className={`onlineInfoIconBtnSty ${isActive ? 'is-active bg-primary text-white border-primary' : 'bg-transparent text-primary border-primary'}`}
            onClick={() => onSelect(stepId)}
            aria-label={label || 'Ver instrucciones'}
            aria-pressed={isActive}
        >
            <FontAwesomeIcon icon={faInfo} />
        </button>
    )
}
