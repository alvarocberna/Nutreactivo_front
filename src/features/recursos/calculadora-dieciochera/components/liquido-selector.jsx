import { FoodImageCarousel } from './food-image-carousel'
import { LIQUIDOS, RUTA_IMAGENES_DIECIOCHERAS } from '../calculadora-dieciochera.constants'

export function LiquidoSelector({ liquidoId, onCambiarLiquido }) {
    const indiceActual = LIQUIDOS.findIndex((liquido) => liquido.id === liquidoId)
    const liquido = LIQUIDOS[indiceActual]

    const irAlSiguiente = (offset) => {
        const siguienteIndice = (indiceActual + offset + LIQUIDOS.length) % LIQUIDOS.length
        onCambiarLiquido(LIQUIDOS[siguienteIndice].id)
    }

    const imagenSrc = `${RUTA_IMAGENES_DIECIOCHERAS}/${liquido.archivoSlug}.jpeg`

    return (
        <div className='dieciocheraSelectorSty'>
            <FoodImageCarousel
                imageSrc={imagenSrc}
                imageAlt={liquido.nombre}
                onPrev={() => irAlSiguiente(-1)}
                onNext={() => irAlSiguiente(1)}
            />

            <p className='dieciocheraFoodNombreSty text-center mt-2 mb-0'>{liquido.nombre}</p>
        </div>
    )
}
