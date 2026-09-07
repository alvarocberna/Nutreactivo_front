import Image from 'next/image'
import { formatearCantidadUnidad } from '../calculadora-dieciochera.calculos'

export function ResultadoCard({ resultado, onEditarSeleccion }) {
    const descripcionConsumo = resultado.alimentos
        .map((alimento) => `${formatearCantidadUnidad(alimento.cantidadUnidades)} ${alimento.nombre}`)
        .join(' y ')

    return (
        <div>
            <p className='text-center h3 fw-semibold mb-4'>
                ¡Felicidades! Tu consumo estimado es de {descripcionConsumo}.
            </p>

            <div className='row g-4'>
                {resultado.alimentos.map((alimento) => (
                    <div className='col-6' key={alimento.nombre}>
                        <div className='dieciocheraCarouselImageWrapSty'>
                            <Image
                                src={alimento.imagenSrc}
                                alt={alimento.nombre}
                                fill
                                sizes='(max-width: 768px) 40vw, 200px'
                                className='dieciocheraCarouselImageSty'
                            />
                        </div>
                        <p className='dieciocheraFoodNombreSty text-center mt-2 mb-1'>{alimento.nombre}</p>
                        <p className='dieciocheraResultCantidadSty text-center mb-0'>
                            {formatearCantidadUnidad(alimento.cantidadUnidades)}
                        </p>
                        <p className='text-muted text-center mb-0'>unidades</p>
                    </div>
                ))}
            </div>

            <p className='text-muted text-center mt-4 mb-3'>
                {Math.round(resultado.totalCalorias)} kcal consumidas de {Math.round(resultado.presupuestoCalorico)} kcal
                {' '}destinadas ({Math.round(resultado.adecuacion * 100)}% de adecuación)
            </p>

            <div className='d-flex justify-content-center'>
                <button type='button' className='btn dieciocheraBotonAzulOutlineSty' onClick={onEditarSeleccion}>
                    Modificar selección
                </button>
            </div>
        </div>
    )
}
