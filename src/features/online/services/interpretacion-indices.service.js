const IMC_LIMITE_BAJOPESO = 18.5
const IMC_LIMITE_NORMOPESO = 25
const IMC_LIMITE_SOBREPESO = 30

const COMENTARIO_IMC_POCO_SENSIBLE =
    'Recuerda que el IMC es un indicador poco sensible, que puede aparecer elevado en individuos con alta masa muscular.'

export function interpretarImc(valorImc) {
    const estadoNutricional = determinarEstadoNutricionalImc(valorImc)
    const requiereComentario = estadoNutricional === 'Sobrepeso' || estadoNutricional === 'Obesidad'

    return requiereComentario ? `${estadoNutricional}. ${COMENTARIO_IMC_POCO_SENSIBLE}` : estadoNutricional
}

function determinarEstadoNutricionalImc(valorImc) {
    if (valorImc < IMC_LIMITE_BAJOPESO) return 'Bajopeso'
    if (valorImc < IMC_LIMITE_NORMOPESO) return 'Normopeso'
    if (valorImc < IMC_LIMITE_SOBREPESO) return 'Sobrepeso'
    return 'Obesidad'
}

// Clasificación de riesgo por ICC según sexo y edad (tabla de Heyward).
const TABLA_ICC_POR_SEXO = {
    Masculino: [
        { edadMin: 20, edadMax: 29, bajoMax: 0.83, moderadoMax: 0.88, altoMax: 0.94 },
        { edadMin: 30, edadMax: 39, bajoMax: 0.84, moderadoMax: 0.91, altoMax: 0.96 },
        { edadMin: 40, edadMax: 49, bajoMax: 0.88, moderadoMax: 0.95, altoMax: 1.0 },
        { edadMin: 50, edadMax: 59, bajoMax: 0.9, moderadoMax: 0.96, altoMax: 1.02 },
        { edadMin: 60, edadMax: 69, bajoMax: 0.91, moderadoMax: 0.98, altoMax: 1.03 },
    ],
    Femenino: [
        { edadMin: 20, edadMax: 29, bajoMax: 0.71, moderadoMax: 0.77, altoMax: 0.82 },
        { edadMin: 30, edadMax: 39, bajoMax: 0.72, moderadoMax: 0.78, altoMax: 0.84 },
        { edadMin: 40, edadMax: 49, bajoMax: 0.73, moderadoMax: 0.79, altoMax: 0.87 },
        { edadMin: 50, edadMax: 59, bajoMax: 0.74, moderadoMax: 0.81, altoMax: 0.88 },
        { edadMin: 60, edadMax: 69, bajoMax: 0.75, moderadoMax: 0.83, altoMax: 0.9 },
    ],
}

export function interpretarIcc(valorIcc, sexo, edad) {
    const rangoEtario = buscarRangoIcc(sexo, edad)
    if (!rangoEtario) return null

    const nivelRiesgo = determinarNivelRiesgoIcc(valorIcc, rangoEtario)
    return `${nivelRiesgo} riesgo de alteraciones metabólicas en base a ICC`
}

function buscarRangoIcc(sexo, edad) {
    const tablaSexo = TABLA_ICC_POR_SEXO[sexo]
    if (!tablaSexo) return null

    return tablaSexo.find((rango) => edad >= rango.edadMin && edad <= rango.edadMax) || null
}

function determinarNivelRiesgoIcc(valorIcc, rangoEtario) {
    if (valorIcc < rangoEtario.bajoMax) return 'Bajo'
    if (valorIcc <= rangoEtario.moderadoMax) return 'Moderado'
    if (valorIcc <= rangoEtario.altoMax) return 'Alto'
    return 'Muy alto'
}
