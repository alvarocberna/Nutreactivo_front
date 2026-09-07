'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { calculateRequirements } from '@/shared/utils/requerimientos'
import { SomatotypeSelector } from './somatotype-selector'
import {
    GENEROS,
    NIVELES_ACTIVIDAD_FISICA,
    REQUERIMIENTO_MODAL_INITIAL_VALUES,
} from '../calculadora-dieciochera.constants'

export function RequerimientoModal({ isOpen, onClose, onSave }) {
    const [valores, setValores] = useState(REQUERIMIENTO_MODAL_INITIAL_VALUES)

    if (!isOpen) return null

    const handleChange = (campo, valor) => {
        setValores((prev) => ({ ...prev, [campo]: valor }))
    }

    const handleGuardar = () => {
        const requerimientos = calculateRequirements({
            weight: Number(valores.peso),
            height: Number(valores.talla),
            gender: valores.genero,
            age: Number(valores.edad),
            physicalActivityLevel: Number(valores.nivelActividadFisica),
            goal: 'mantenimiento',
            athlete: valores.esAtleta,
            somatotype: valores.somatotipo,
        })

        onSave(Math.round(requerimientos.calories))
        onClose()
    }

    return (
        <div className='dieciocheraModalOverlaySty' onClick={onClose}>
            <div className='dieciocheraModalContentSty' onClick={(e) => e.stopPropagation()}>
                <button type='button' className='dieciocheraModalCloseBtnSty' onClick={onClose} aria-label='Cerrar'>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <h4 className='text-tertiary fw-bold mb-3'>Calcular requerimiento energético</h4>

                <div className='row g-3'>
                    <div className='col-6'>
                        <label className='w-100 form-label' htmlFor='dieciochera-peso'>Peso (kg)</label>
                        <input
                            id='dieciochera-peso'
                            type='number'
                            className='w-100 form-control'
                            value={valores.peso}
                            onChange={(e) => handleChange('peso', e.target.value)}
                        />
                    </div>

                    <div className='col-6'>
                        <label className='w-100 form-label' htmlFor='dieciochera-talla'>Talla (cm)</label>
                        <input
                            id='dieciochera-talla'
                            type='number'
                            className='w-100 form-control'
                            value={valores.talla}
                            onChange={(e) => handleChange('talla', e.target.value)}
                        />
                    </div>

                    <div className='col-6'>
                        <label className='w-100 form-label' htmlFor='dieciochera-genero'>Género</label>
                        <select
                            id='dieciochera-genero'
                            className='w-100 form-select'
                            value={valores.genero}
                            onChange={(e) => handleChange('genero', e.target.value)}
                        >
                            {GENEROS.map((genero) => (
                                <option key={genero} value={genero}>{genero}</option>
                            ))}
                        </select>
                    </div>

                    <div className='col-6'>
                        <label className='w-100 form-label' htmlFor='dieciochera-edad'>Edad</label>
                        <input
                            id='dieciochera-edad'
                            type='number'
                            className='w-100 form-control'
                            value={valores.edad}
                            onChange={(e) => handleChange('edad', e.target.value)}
                        />
                    </div>

                    <div className='col-6'>
                        <label className='w-100 form-label' htmlFor='dieciochera-actividad'>Nivel de actividad física</label>
                        <select
                            id='dieciochera-actividad'
                            className='w-100 form-select'
                            value={valores.nivelActividadFisica}
                            onChange={(e) => handleChange('nivelActividadFisica', e.target.value)}
                        >
                            {NIVELES_ACTIVIDAD_FISICA.map((nivel) => (
                                <option key={nivel.value} value={nivel.value}>{nivel.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className='col-6 d-flex align-items-end'>
                        <div className='form-check'>
                            <input
                                id='dieciochera-atleta'
                                type='checkbox'
                                className='form-check-input'
                                checked={valores.esAtleta}
                                onChange={(e) => handleChange('esAtleta', e.target.checked)}
                            />
                            <label className='form-check-label' htmlFor='dieciochera-atleta'>¿Es atleta?</label>
                        </div>
                    </div>

                    <div className='col-12'>
                        <label className='w-100 form-label'>Somatotipo</label>
                        <SomatotypeSelector
                            value={valores.somatotipo}
                            onChange={(somatotipo) => handleChange('somatotipo', somatotipo)}
                            gender={valores.genero.toUpperCase()}
                        />
                    </div>
                </div>

                <div className='d-flex justify-content-end mt-4'>
                    <button type='button' className='btn dieciocheraBotonAzulSty' onClick={handleGuardar}>Guardar</button>
                </div>
            </div>
        </div>
    )
}
