
import './style.css';

const ETAPAS_PROGRESO = [
    {
        id: 'sesion-1',
        numero: 1,
        sesion: 'Primera sesión',
        desc: 'Se realiza una primera evaluación física para levantar un diagnóstico y establecer el plan a seguir.',
    },
    {
        id: 'sesion-2',
        numero: 2,
        sesion: 'Segunda sesión',
        desc: 'Alrededor del primer mes. Se da una primera mirada a la composición corporal en la búsqueda de un crecimiento armónico. El objetivo principal es evaluar y reajustar las estrategias establecidas.',
    },
    {
        id: 'sesion-3',
        numero: 3,
        sesion: 'Tercera sesión',
        desc: 'Alrededor de los 3 meses. Se proyecta lograr cambios importantes a nivel de masa muscular, pudiendo continuar en este periodo si los indicadores físicos así lo sugieren.',
    },
];

export default function MasaMuscular() {
    return (

        <div className='masaPageSty container-fluid'>

            {/* SECCION 1: TITULO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex m-auto masaHeroSty'>
                    <div>
                        <span className='masaEyebrowSty'>Objetivo · Composición corporal</span>
                        <h1 className='masaTitleSty'>
                            Trabajando la ganancia de masa muscular
                        </h1>
                    </div>
                </div>
            </div>

            {/* SECCION 2: INTRO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='masaIntroCardSty'>
                        <p className='masaIntroQuestionSty'>
                            ¿Cuándo es recomendado trabajar un periodo de ganancia de masa muscular?
                        </p>
                        <ul className='masaIntroListSty'>
                            <li>
                                <span className='masaIntroBulletSty'></span>
                                Usuarios que busquen mejorar estética corporal y que actualmente cuenten con un
                                nivel adecuado de grasa corporal.
                            </li>
                            <li>
                                <span className='masaIntroBulletSty'></span>
                                Deportistas que requieran un mejor rendimiento.
                            </li>
                            <li>
                                <span className='masaIntroBulletSty'></span>
                                Usuarios con un nivel adecuado de masa muscular cuyo deporte les exige un mayor nivel.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: RUTA DE PROGRESO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <p className='progresoTitleSty'>Ruta de progreso</p>
                    <ol className='progresoListSty'>
                        {ETAPAS_PROGRESO.map((etapa, index) => (
                            <li key={etapa.id} className='progresoStepSty'>
                                <div className='progresoNodeColSty'>
                                    <span className='progresoNodeSty'>{etapa.numero}</span>
                                    {index < ETAPAS_PROGRESO.length - 1 && (
                                        <span className='progresoConnectorSty'></span>
                                    )}
                                </div>
                                <div className='progresoCardSty'>
                                    <span className='progresoSesionSty'>{etapa.sesion}</span>
                                    <p className='progresoDescSty'>{etapa.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* SECCION 4: RESULTADOS ESPERADOS */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='masaResultadosSty'>
                        <span className='masaResultadosBlobSty'></span>
                        <span className='masaResultadosBlobSty'></span>
                        <div className='masaStatCalloutSty'>
                            <span className='masaStatNumberSty'>+1%</span>
                            <span className='masaStatLabelSty'>del peso<br />corporal / mes</span>
                        </div>
                        <div className='masaResultadosTextCol'>
                            <p className='masaResultadosTitleSty mb-2'>Resultados esperados</p>
                            <p className='masaResultadosTextSty'>
                                Al trabajar un periodo de ganancia de masa muscular la tasa de aumento dependerá del nivel de entrenamiento
                                de cada usuario
                                (iniciante, intermedio, avanzado). Sin embargo, en promedio se puede proyectar una ganancia de un 1% del peso corporal
                                por mes, lográndose cambios visibles en la composición corporal a partir de los primeros 2-3 meses en adelante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
