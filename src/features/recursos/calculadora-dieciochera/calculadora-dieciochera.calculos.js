// construye el nombre de archivo de la imagen de un sólido según sus ingredientes seleccionados,
// respetando el orden fijo pebre-mayo-ketchup usado en los nombres de archivo existentes
export function construirNombreImagenSolido(solido, ingredientesSeleccionadosIds, ingredientesDisponibles) {
    if (!solido.tieneIngredientes || ingredientesSeleccionadosIds.length === 0) {
        return `${solido.archivoSlug}.jpeg`
    }

    const slugsSeleccionados = ingredientesDisponibles
        .filter((ingrediente) => ingredientesSeleccionadosIds.includes(ingrediente.id))
        .map((ingrediente) => ingrediente.archivoSlug)

    return `${solido.archivoSlug}-${slugsSeleccionados.join('-')}.jpeg`
}

// formatea una cantidad en incrementos de 0.5 como texto legible (ej: 1.5 -> "1 ½")
export function formatearCantidadUnidad(cantidad) {
    const enteros = Math.floor(cantidad)
    const tieneMedio = cantidad % 1 !== 0

    if (enteros === 0 && tieneMedio) return '½'
    if (tieneMedio) return `${enteros} ½`
    return `${enteros}`
}
