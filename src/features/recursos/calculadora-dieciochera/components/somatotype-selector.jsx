'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

//opciones ordenadas de izquierda a derecha: ecto, meso-ecto, meso, meso-endo, endo, endo-ecto
const SOMATOTYPE_OPTIONS = [
    {
        value: 'ECTO',
        maleFile: 'hombre-ecto.png',
        femaleFile: 'mujer-ecto.png',
        info: 'Ectomorfo: Contextura delgada. Bajo o leve nivel de masa muscular y grasa corporal.',
    },
    {
        value: 'MESOECTO',
        maleFile: 'hombre-meso-ecto.png',
        femaleFile: 'mujer-meso-ecto.png',
        info: 'Meso-Ectomorfo: Contextura delgada musculosa. Moderado nivel de masa muscular y bajo nivel de grasa corporal.',
    },
    {
        value: 'MESO',
        maleFile: 'hombre-meso.png',
        femaleFile: 'mujer-meso.png',
        info: 'Mesomorfo: Contextura musculosa predominante. No predomina ni la delgadez ni la grasa corporal.',
    },
    {
        value: 'MESOENDO',
        maleFile: 'hombre-meso-endo.png',
        femaleFile: 'mujer-meso-endo.png',
        info: 'Meso-Endomorfo: Contextura robusta. Hay predominancia tanto de masa muscular como grasa corporal.',
    },
    {
        value: 'ENDO',
        maleFile: 'hombre-endo.png',
        femaleFile: 'mujer-endo.png',
        info: 'Endomorfo: Contextura redondeada. Mayor presencia de grasa corporal, con niveles bajos de masa muscular.',
    },
    {
        value: 'ENDOECTO',
        maleFile: 'hombre-endo-ecto.png',
        femaleFile: 'mujer-endo-ecto.png',
        info: 'Endo-Ectomorfo: Contextura delgada adiposa. Predomina la delgadez con leve-moderado nivel de grasa corporal y baja masa muscular.',
    },
]

export function SomatotypeSelector({ value, onChange, gender, loading = false }) {
    const isFemale = gender === 'FEMENINO'

    return (
        <div className='somatotypeSelectorSty'>
            <div className='somatotypeGridSty'>
                {loading && SOMATOTYPE_OPTIONS.map((option) => (
                    <div key={option.value} className='somatotypeCardSty'>
                        <div className='somatotypeSkeletonSty' />
                    </div>
                ))}
                {!loading && SOMATOTYPE_OPTIONS.map((option) => {
                    const file = isFemale ? option.femaleFile : option.maleFile
                    const inputId = `somatotipo-${option.value}`

                    return (
                        <div key={option.value} className='somatotypeOptionSty'>
                            <div className='somatotypeInfoTriggerSty'>
                                <FontAwesomeIcon icon={faCircleInfo} className='somatotypeInfoIconSty' />
                                <div className='somatotypeInfoTooltipSty'>{option.info}</div>
                            </div>

                            <input
                                type='radio'
                                id={inputId}
                                name='somatotype'
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange?.(option.value)}
                                className='somatotypeRadioSty'
                            />
                            <label
                                htmlFor={inputId}
                                className={`somatotypeCardSty${value === option.value ? ' somatotypeCardCheckedSty' : ''}`}
                            >
                                <Image
                                    src={`/images/somatotipo/${file}`}
                                    alt={option.value}
                                    width={347}
                                    height={520}
                                    className='somatotypeImageSty'
                                />
                            </label>
                        </div>
                    )
                })}
            </div>
            <div className='somatotypeHelpSty'>
                Elige la opción que más se parezca a tu contextura actual. Si ninguna imagen te representa, revisa la descripción de cada imagen para orientarte mejor.
            </div>
        </div>
    )
}
