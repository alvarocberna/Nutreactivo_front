export function ModoSection({ modos, modoActivo, onCambiarModo }) {
    return (
        <div>
            <h5 className='text-tertiary fw-bold mb-3'>2. % destinado a comida dieciochera</h5>

            <div className='d-flex gap-2 flex-wrap'>
                {modos.map((modo) => {
                    const activo = modoActivo === modo.key
                    const esMuyAlto = modo.key === 'full'

                    const claseActiva = activo
                        ? esMuyAlto
                            ? 'dieciocheraBotonRojoSty'
                            : 'dieciocheraBotonAzulSty'
                        : ''

                    return (
                        <button
                            key={modo.key}
                            type='button'
                            className={`btn dieciocheraBotonAzulOutlineSty ${claseActiva}`}
                            onClick={() => onCambiarModo(modo.key)}
                        >
                            {modo.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
