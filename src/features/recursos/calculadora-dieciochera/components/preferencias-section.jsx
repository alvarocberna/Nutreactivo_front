'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { SolidoSelector } from './solido-selector'
import { LiquidoSelector } from './liquido-selector'
import { SOLIDOS, LIQUIDOS, INGREDIENTES, RUTA_IMAGENES_DIECIOCHERAS } from '../calculadora-dieciochera.constants'
import { alimentosFiestasPatrias } from '../calculadora-dieciochera.data'
import { construirNombreImagenSolido } from '../calculadora-dieciochera.calculos'

function buscarCaloriasPorId(id) {
    return alimentosFiestasPatrias.find((alimento) => alimento.id === id)?.calorias ?? 0
}

export function PreferenciasSection({ onCalcular }) {
    const [solidoId, setSolidoId] = useState(SOLIDOS[0].id)
    const [ingredientesIds, setIngredientesIds] = useState([])
    const [liquidoId, setLiquidoId] = useState(LIQUIDOS[0].id)

    const handleCambiarSolido = (nuevoId) => {
        setSolidoId(nuevoId)
        setIngredientesIds([])
    }

    const handleToggleIngrediente = (ingredienteId) => {
        setIngredientesIds((prev) =>
            prev.includes(ingredienteId) ? prev.filter((id) => id !== ingredienteId) : [...prev, ingredienteId]
        )
    }

    const solido = SOLIDOS.find((s) => s.id === solidoId)
    const liquido = LIQUIDOS.find((l) => l.id === liquidoId)

    const nombreSolido = [
        solido.nombre,
        ...INGREDIENTES.filter((ingrediente) => ingredientesIds.includes(ingrediente.id)).map((i) => i.nombre),
    ].join(' + ')

    const caloriasSolido =
        buscarCaloriasPorId(solido.id) + ingredientesIds.reduce((acc, id) => acc + buscarCaloriasPorId(id), 0)
    const caloriasLiquido = buscarCaloriasPorId(liquido.id)

    const imagenSolidoSrc = `${RUTA_IMAGENES_DIECIOCHERAS}/${construirNombreImagenSolido(solido, ingredientesIds, INGREDIENTES)}`
    const imagenLiquidoSrc = `${RUTA_IMAGENES_DIECIOCHERAS}/${liquido.archivoSlug}.jpeg`

    const handleCalcular = () => {
        onCalcular([
            { tipo: 'solido', nombre: nombreSolido, calorias: caloriasSolido, imagenSrc: imagenSolidoSrc },
            { tipo: 'liquido', nombre: liquido.nombre, calorias: caloriasLiquido, imagenSrc: imagenLiquidoSrc },
        ])
    }

    return (
        <div>
            <h5 className='text-tertiary fw-bold mb-3'>3. Configura tus preferencias</h5>

            <div className='row g-4'>
                <div className='col-12 col-md-6'>
                    <SolidoSelector
                        solidoId={solidoId}
                        ingredientesIds={ingredientesIds}
                        onCambiarSolido={handleCambiarSolido}
                        onToggleIngrediente={handleToggleIngrediente}
                    />
                </div>

                <div className='col-12 col-md-6'>
                    <LiquidoSelector liquidoId={liquidoId} onCambiarLiquido={setLiquidoId} />
                </div>
            </div>

            <div className='d-flex justify-content-center mt-4'>
                <button type='button' className='btn dieciocheraBotonRojoSty' onClick={handleCalcular}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className='me-2' />
                    Calcular
                </button>
            </div>
        </div>
    )
}
