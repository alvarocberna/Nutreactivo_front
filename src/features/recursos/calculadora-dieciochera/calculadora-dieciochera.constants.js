export const MODOS_CONSUMO = [
    { key: 'defecto', label: 'Normal (50%)', porcentaje: 0.5, descripcion: '50% de tu requerimiento diario' },
    { key: 'intermedio', label: 'Alto (75%)', porcentaje: 0.75, descripcion: '75% de tu requerimiento diario' },
    { key: 'full', label: 'Muy alto (100%)', porcentaje: 1, descripcion: '100% de tu requerimiento diario' },
]

export const GENEROS = ['Masculino', 'Femenino']

export const NIVELES_ACTIVIDAD_FISICA = [
    { value: '1.4', label: 'Sedentario' },
    { value: '1.55', label: 'Activo' },
]

export const REQUERIMIENTO_MODAL_INITIAL_VALUES = {
    peso: '',
    talla: '',
    genero: GENEROS[0],
    edad: '',
    nivelActividadFisica: NIVELES_ACTIVIDAD_FISICA[0].value,
    esAtleta: false,
    somatotipo: 'MESO',
}

export const RUTA_IMAGENES_DIECIOCHERAS = '/images/imgs-dieciocheras'

// orden fijo: coincide con el orden de los nombres de archivo de las combinaciones (choripan-pebre-mayo-ketchup.jpeg)
export const INGREDIENTES = [
    { id: 'pebre', nombre: 'Pebre', archivoSlug: 'pebre' },
    { id: 'mayonesa', nombre: 'Mayonesa', archivoSlug: 'mayo' },
    { id: 'ketchup', nombre: 'Ketchup', archivoSlug: 'ketchup' },
]

export const SOLIDOS = [
    { id: 'choripan', nombre: 'Choripán', archivoSlug: 'choripan', tieneIngredientes: true },
    { id: 'empanada-pino', nombre: 'Empanada de pino', archivoSlug: 'empanada', tieneIngredientes: false },
]

export const LIQUIDOS = [
    { id: 'terremoto', nombre: 'Terremoto', archivoSlug: 'terremoto' },
    { id: 'chicha', nombre: 'Chicha chilena', archivoSlug: 'chicha' },
]
