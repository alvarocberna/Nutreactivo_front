import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { InstructionsPanel } from './instructions-panel'

export function InstructionsModalMobile({ step, isOpen, onClose, onPrev, onNext }) {
    useEffect(() => {
        if (!isOpen) return
        const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className='onlineMobileModalOverlaySty d-lg-none' onClick={onClose}>
            <div className='onlineMobileModalContentSty' onClick={(e) => e.stopPropagation()}>
                <button type='button' className='onlineMobileModalCloseBtnSty' onClick={onClose} aria-label='Cerrar instrucciones'>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <InstructionsPanel step={step} onPrev={onPrev} onNext={onNext} />
            </div>
        </div>
    )
}
