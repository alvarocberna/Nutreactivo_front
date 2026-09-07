import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

export function InstructionsPanel({ step, onPrev, onNext }) {
    if (!step) return null

    return (
        <div className='onlineInstructionsPanelSty'>
            <div className='onlineInstructionsNavSty'>
                <button type='button' className='onlineInstructionsNavBtnSty' onClick={onPrev} aria-label='Instrucción anterior'>
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>
                <h5 className='mb-0 text-tertiary'>{step.title}</h5>
                <button type='button' className='onlineInstructionsNavBtnSty' onClick={onNext} aria-label='Siguiente instrucción'>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
            </div>

            <div className='onlineVideoCardSty'>
                <div className='onlineVideoRatioSty'>
                    <iframe src={step.videoSrc} title={step.title} allowFullScreen />
                </div>
            </div>

            <p className='onlineInstructionsDescSty'>{step.description}</p>

            <h6 className='onlineInstructionsSubtitleSty'>Pasos para una medición correcta</h6>
            <ol className='onlineStepListSty'>
                {step.pasos.map((paso, index) => (
                    <li className='onlineStepItemSty' key={paso}>
                        <span className='onlineStepNumberSty'>{index + 1}</span>
                        <span className='onlineStepTextSty'>{paso}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}
