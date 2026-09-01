'use client'

import { useState } from 'react'
import { RequerimientoModal } from './components/requerimiento-modal'
import { RequerimientoSection } from './components/requerimiento-section'
import { ModoSection } from './components/modo-section'
import { PreferenciasSection } from './components/preferencias-section'
import { ResultadoCard } from './components/resultado-card'
import { SectionCard } from './components/section-card'
import { MODOS_CONSUMO } from './calculadora-dieciochera.constants'
import { AdecuacionAlimentariaService } from './services/adecuacion-alimentaria.service'
import './style.css'

const adecuacionAlimentariaService = new AdecuacionAlimentariaService()
const DURACION_SPINNER_MS = 500

export function CalculadoraDieciochera() {
    const [requerimientoEnergetico, setRequerimientoEnergetico] = useState('')
    const [modoActivo, setModoActivo] = useState(MODOS_CONSUMO[0].key)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCalculando, setIsCalculando] = useState(false)
    const [resultado, setResultado] = useState(null)

    const modo = MODOS_CONSUMO.find((m) => m.key === modoActivo)

    const handleGuardarRequerimiento = (calorias) => {
        setRequerimientoEnergetico(String(calorias))
    }

    const handleCalcular = (alimentosSeleccionados) => {
        setIsCalculando(true)

        setTimeout(() => {
            const resultadoCalculo = adecuacionAlimentariaService.calcularAdecuacion({
                requerimientoEnergetico: Number(requerimientoEnergetico) || 0,
                porcentaje: modo.porcentaje,
                alimentos: alimentosSeleccionados,
            })
            setResultado(resultadoCalculo)
            setIsCalculando(false)
        }, DURACION_SPINNER_MS)
    }

    const handleEditarSeleccion = () => {
        setResultado(null)
    }

    const mostrandoResultado = isCalculando || Boolean(resultado)

    return (
        <div className='dieciocheraContainerSty'>
            <h1 className='h1 mb-2 text-tertiary fw-bold'>
                Calculadora dieciochera
                <span className='dieciocheraTituloIconWrapSty' aria-hidden='true'>
                    <span className='dieciocheraTituloEmojiSty'>🎉</span>
                </span>
            </h1>
            <p className='text-muted mb-4'>
                Calcula tu consumo de choripanes, empanadas y terremoto para este{' '}
                <span className='dieciocheraRojoChileSty'>18</span>
            </p>

            <div className='d-flex flex-column gap-4'>
                {!mostrandoResultado && (
                    <>
                        <SectionCard>
                            <RequerimientoSection
                                value={requerimientoEnergetico}
                                onChange={setRequerimientoEnergetico}
                                onAbrirModal={() => setIsModalOpen(true)}
                            />
                        </SectionCard>

                        <SectionCard>
                            <ModoSection modos={MODOS_CONSUMO} modoActivo={modoActivo} onCambiarModo={setModoActivo} />
                        </SectionCard>

                        <SectionCard>
                            <PreferenciasSection onCalcular={handleCalcular} />
                        </SectionCard>
                    </>
                )}

                {isCalculando && (
                    <SectionCard className='text-center py-5'>
                        <div className='spinner-border text-tertiary' role='status'>
                            <span className='visually-hidden'>Calculando...</span>
                        </div>
                    </SectionCard>
                )}

                {!isCalculando && resultado && (
                    <SectionCard>
                        <ResultadoCard resultado={resultado} onEditarSeleccion={handleEditarSeleccion} />
                    </SectionCard>
                )}
            </div>

            <RequerimientoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleGuardarRequerimiento}
            />
        </div>
    )
}
