const INCREMENTO_UNIDAD = 0.5
const ADECUACION_MINIMA = 0.9
const MAX_ITERACIONES = 500

export class AdecuacionAlimentariaService {
    // agrega alimentos de a medias unidades (primero los del array en orden, completando una unidad
    // antes de pasar al siguiente) hasta cubrir al menos el porcentaje de adecuación mínimo.
    calcularAdecuacion({ requerimientoEnergetico, porcentaje, alimentos }) {
        const presupuestoCalorico = requerimientoEnergetico * porcentaje
        const detalle = alimentos.map((alimento) => ({ ...alimento, medioUnidades: 0 }))

        let totalCalorias = 0
        let adecuacion = 0

        const hayAlimentosValidos = detalle.some((alimento) => alimento.calorias > 0)

        if (presupuestoCalorico > 0 && hayAlimentosValidos) {
            let indiceActual = 0
            let iteraciones = 0

            while (adecuacion < ADECUACION_MINIMA && iteraciones < MAX_ITERACIONES) {
                const alimento = detalle[indiceActual % detalle.length]

                if (alimento.calorias > 0) {
                    alimento.medioUnidades += 1
                    totalCalorias += alimento.calorias * INCREMENTO_UNIDAD
                    adecuacion = totalCalorias / presupuestoCalorico
                }

                if (alimento.medioUnidades % 2 === 0) {
                    indiceActual += 1
                }

                iteraciones += 1
            }
        }

        return {
            presupuestoCalorico,
            totalCalorias,
            adecuacion,
            alimentos: detalle.map(({ medioUnidades, ...alimento }) => ({
                ...alimento,
                cantidadUnidades: medioUnidades * INCREMENTO_UNIDAD,
            })),
        }
    }
}
