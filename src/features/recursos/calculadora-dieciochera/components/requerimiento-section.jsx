export function RequerimientoSection({ value, onChange, onAbrirModal }) {
    return (
        <div>
            <h5 className='text-tertiary fw-bold mb-1'>1. Ingresa tu requerimiento energético diario</h5>
            <p className='text-muted mb-2'>
                Si no sabes tu requerimiento calculalo con el botón &quot;Calcular requerimiento&quot;
            </p>

            <div className='d-flex flex-column flex-sm-row gap-2'>
                <input
                    type='number'
                    className='w-100 form-control'
                    placeholder='Ingresar requerimiento energético'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button type='button' className='btn dieciocheraBotonAzulOutlineSty text-nowrap' onClick={onAbrirModal}>
                    Calcular requerimiento
                </button>
            </div>
        </div>
    )
}
