import { FoodImageCarousel } from './food-image-carousel'
import { SOLIDOS, INGREDIENTES, RUTA_IMAGENES_DIECIOCHERAS } from '../calculadora-dieciochera.constants'
import { construirNombreImagenSolido } from '../calculadora-dieciochera.calculos'

export function SolidoSelector({ solidoId, ingredientesIds, onCambiarSolido, onToggleIngrediente }) {
    const indiceActual = SOLIDOS.findIndex((solido) => solido.id === solidoId)
    const solido = SOLIDOS[indiceActual]

    const irAlSiguiente = (offset) => {
        const siguienteIndice = (indiceActual + offset + SOLIDOS.length) % SOLIDOS.length
        onCambiarSolido(SOLIDOS[siguienteIndice].id)
    }

    const imagenSrc = `${RUTA_IMAGENES_DIECIOCHERAS}/${construirNombreImagenSolido(solido, ingredientesIds, INGREDIENTES)}`

    return (
        <div className='dieciocheraSelectorSty'>
            <FoodImageCarousel
                imageSrc={imagenSrc}
                imageAlt={solido.nombre}
                onPrev={() => irAlSiguiente(-1)}
                onNext={() => irAlSiguiente(1)}
            />

            <p className='dieciocheraFoodNombreSty text-center mt-2 mb-2'>{solido.nombre}</p>

            {solido.tieneIngredientes && (
                <div className='dieciocheraIngredientesSty'>
                    {INGREDIENTES.map((ingrediente) => {
                        const activo = ingredientesIds.includes(ingrediente.id)
                        return (
                            <button
                                key={ingrediente.id}
                                type='button'
                                className={`btn btn-sm ${activo ? 'dieciocheraBotonAzulSty' : 'dieciocheraBotonAzulOutlineSty'}`}
                                onClick={() => onToggleIngrediente(ingrediente.id)}
                            >
                                {ingrediente.nombre}
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
