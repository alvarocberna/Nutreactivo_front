import {
    faWeightScale,
    faRulerVertical,
    faRulerHorizontal,
    faBolt,
} from '@fortawesome/free-solid-svg-icons'

export const PLACEHOLDER_VIDEO_SRC = 'https://www.youtube.com/embed/w5tOpQVNeOQ'

export const PERSONAL_FIELDS = [
    { key: 'nombreCompleto', label: 'Nombre completo', type: 'text', placeholder: 'Ej: Juan Pérez López' },
    { key: 'fechaNacimiento', label: 'Fecha de nacimiento', type: 'date', defaultValue: '1995-06-15' },
    { key: 'sexo', label: 'Sexo', type: 'select', options: ['Masculino', 'Femenino', 'Otro'], defaultValue: 'Masculino' },
]

export const MEDICIONES_FIELDS = [
    { key: 'peso', stepId: 'peso', label: 'Peso corporal', unit: 'kg', icon: faWeightScale, placeholder: 'Ej: 70.5' },
    { key: 'talla', stepId: 'talla', label: 'Talla', unit: 'cm', icon: faRulerVertical, placeholder: 'Ej: 170' },
    { key: 'brazo', stepId: 'brazo', label: 'Circunferencia de brazo', unit: 'cm', icon: faRulerHorizontal, placeholder: 'Ej: 32.5' },
    { key: 'cintura', stepId: 'cintura', label: 'Circunferencia de cintura', unit: 'cm', icon: faRulerHorizontal, placeholder: 'Ej: 80' },
    { key: 'cadera', stepId: 'cadera', label: 'Circunferencia de cadera', unit: 'cm', icon: faRulerHorizontal, placeholder: 'Ej: 95' },
    { key: 'muslo', stepId: 'muslo', label: 'Circunferencia de muslo', unit: 'cm', icon: faRulerHorizontal, placeholder: 'Ej: 55' },
    { key: 'pantorrilla', stepId: 'pantorrilla', label: 'Circunferencia de pantorrilla', unit: 'cm', icon: faRulerHorizontal, placeholder: 'Ej: 36' },
]

export const BIOIMPEDANCIA_FIELDS = [
    { key: 'masaGrasa', label: 'Masa grasa', unit: '%', placeholder: 'Ej: 18.5' },
    { key: 'masaMuscular', label: 'Masa muscular', unit: '%', placeholder: 'Ej: 45' },
]

export const BIOIMPEDANCIA_ICON = faBolt

export const STEPS = [
    {
        id: 'mediciones',
        title: 'Mediciones',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Antes de comenzar, reúne los materiales necesarios y sigue las instrucciones de cada medición para obtener resultados precisos.',
        pasos: [
            'Reúne los materiales: pesa digital, huincha antropométrica flexible y un espejo o ayudante.',
            'Usa ropa liviana y quítate el calzado antes de pesarte.',
            'Realiza las mediciones en ayunas o antes de entrenar, para mayor precisión.',
            'Registra cada valor en el formulario apenas lo obtengas.',
        ],
    },
    {
        id: 'peso',
        title: 'Peso corporal',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'El peso corporal es la base de la mayoría de los indicadores antropométricos.',
        pasos: [
            'Párate en la pesa digital, descalzo y con ropa liviana.',
            'Distribuye tu peso equitativamente en ambos pies.',
            'Espera a que el valor se estabilice antes de leerlo.',
            'Registra el peso en kilogramos, con un decimal de precisión.',
        ],
    },
    {
        id: 'talla',
        title: 'Talla (estatura)',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'La talla se mide de pie, en la posición anatómica estándar.',
        pasos: [
            'Ponte de pie, descalzo, con los talones juntos contra la pared.',
            'Mantén la vista al frente, en el plano de Frankfort.',
            'Inhala profundo y mantente erguido al momento de medir.',
            'Registra la altura en centímetros.',
        ],
    },
    {
        id: 'brazo',
        title: 'Circunferencia de brazo',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Se mide en el punto medio del brazo, con el músculo relajado.',
        pasos: [
            'Ubica el punto medio entre el hombro y el codo, con el brazo relajado.',
            'Rodea el brazo con la huincha sin comprimir la piel.',
            'Verifica que la huincha quede horizontal y ajustada.',
            'Registra el valor en centímetros.',
        ],
    },
    {
        id: 'cintura',
        title: 'Circunferencia de cintura',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Se mide en el punto medio entre la última costilla y la cresta ilíaca.',
        pasos: [
            'Ubica el punto medio entre la última costilla y la cresta ilíaca.',
            'Rodea la cintura con la huincha, manteniéndola horizontal.',
            'Realiza la medición al final de una espiración normal.',
            'Registra el valor en centímetros.',
        ],
    },
    {
        id: 'cadera',
        title: 'Circunferencia de cadera',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Se mide en el punto de mayor circunferencia de los glúteos.',
        pasos: [
            'Ubica el punto de mayor circunferencia de los glúteos.',
            'Rodea la cadera con la huincha manteniéndola horizontal.',
            'Evita comprimir la ropa o la piel al momento de medir.',
            'Registra el valor en centímetros.',
        ],
    },
    {
        id: 'muslo',
        title: 'Circunferencia de muslo',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Se mide en el punto medio del muslo, con la pierna relajada.',
        pasos: [
            'Ubica el punto medio entre el pliegue glúteo y la línea de la rodilla.',
            'Rodea el muslo con la huincha, con la pierna relajada y el peso distribuido.',
            'Mantén la huincha perpendicular al eje del muslo.',
            'Registra el valor en centímetros.',
        ],
    },
    {
        id: 'pantorrilla',
        title: 'Circunferencia de pantorrilla',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Se mide en el punto de mayor circunferencia de la pantorrilla.',
        pasos: [
            'Ubica el punto de mayor circunferencia de la pantorrilla.',
            'Rodea la pantorrilla con la huincha mientras estás de pie.',
            'Mantén la huincha horizontal y sin comprimir la piel.',
            'Registra el valor en centímetros.',
        ],
    },
    {
        id: 'bioimpedancia',
        title: 'Bioimpedancia (opcional)',
        videoSrc: PLACEHOLDER_VIDEO_SRC,
        description: 'Si cuentas con una balanza de bioimpedancia, puedes agregar estos valores para complementar tu evaluación. Este dato es opcional.',
        pasos: [
            'Utiliza la balanza de bioimpedancia en ayunas y sin haber entrenado.',
            'Párate descalzo sobre los electrodos, según las instrucciones del equipo.',
            'Espera a que el equipo entregue el resultado de masa grasa y masa muscular.',
            'Registra ambos valores en el formulario; puedes dejarlos vacíos si no cuentas con este dato.',
        ],
    },
]
