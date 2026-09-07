
import './style.css';
import Link from 'next/link';

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
        desc: 'Alrededor del primer mes. Se da una primera mirada de los avances y se reajustan las estrategias establecidas.',
    },
    {
        id: 'sesion-3',
        numero: 3,
        sesion: 'Tercera sesión',
        desc: 'Sesión final. Se realiza una última evaluación y se da paso al trabajo de nuevos objetivos como rendimiento o ganancia de masa muscular.',
    },
];

export default function Definicion() {
    return (

        <div className='defiPageSty container-fluid'>

            {/* SECCION 1: TITULO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex m-auto defiHeroSty'>
                    <div>
                        <span className='defiEyebrowSty'>Objetivo · Composición corporal</span>
                        <h1 className='defiTitleSty'>
                            Trabajando la pérdida de grasa corporal
                        </h1>
                    </div>
                </div>
            </div>

            {/* SECCION 2: INTRO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='defiIntroCardSty'>
                        <p className='defiIntroQuestionSty'>
                            ¿Cuándo es recomendado trabajar un periodo de pérdida de grasa corporal?
                        </p>
                        <ul className='defiIntroListSty'>
                            <li>
                                <span className='defiIntroBulletSty'></span>
                                Usuarios con alto nivel de grasa corporal que busquen mejorar estética y/o salud.
                            </li>
                            <li>
                                <span className='defiIntroBulletSty'></span>
                                Deportistas que requieran mejor rendimiento y lograr una mayor explosividad.
                            </li>
                            <li>
                                <span className='defiIntroBulletSty'></span>
                                Usuarios con un nivel adecuado de grasa corporal cuyo deporte les exige un menor nivel.
                            </li>
                            <li>
                                <span className='defiIntroBulletSty'></span>
                                Meses previos a una competencia que requiera pesaje.
                            </li>
                            <li>
                                <span className='defiIntroBulletSty'></span>
                                En la preparación antes de iniciar un periodo competitivo.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: RUTA DE PROGRESO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <p className='defiProgresoTitleSty'>Ruta de progreso</p>
                    <ol className='defiProgresoListSty'>
                        {ETAPAS_PROGRESO.map((etapa, index) => (
                            <li key={etapa.id} className='defiProgresoStepSty'>
                                <div className='defiProgresoNodeColSty'>
                                    <span className='defiProgresoNodeSty'>{etapa.numero}</span>
                                    {index < ETAPAS_PROGRESO.length - 1 && (
                                        <span className='defiProgresoConnectorSty'></span>
                                    )}
                                </div>
                                <div className='defiProgresoCardSty'>
                                    <span className='defiProgresoSesionSty'>{etapa.sesion}</span>
                                    <p className='defiProgresoDescSty'>{etapa.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* SECCION 4: RESULTADOS ESPERADOS */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='defiResultadosSty'>
                        <span className='defiResultadosBlobSty'></span>
                        <span className='defiResultadosBlobSty'></span>
                        <div className='defiStatCalloutSty'>
                            <span className='defiStatNumberSty'>-2kg</span>
                            <span className='defiStatLabelSty'>del peso<br />corporal / mes</span>
                        </div>
                        <div className='defiResultadosTextCol'>
                            <p className='defiResultadosTitleSty mb-2'>Resultados esperados</p>
                            <p className='defiResultadosTextSty'>
                                Al trabajar un periodo de pérdida de grasa corporal se proyecta una disminución de
                                2 kg por mes, considerando que el usuario cumpla con todos los factores necesarios para llevar a
                                cabo este periodo de manera efectiva. Para esto debemos tener en consideración
                                los <Link href='/Recursos/Trabajando-perdida-de-grasa-corporal' className='defiResultadosLinkSty'>3 aspectos clave en la pérdida de grasa corporal.</Link>
                            </p>
                            <p className='defiResultadosTextSty'>
                                Este periodo puede durar en promedio entre 1 a 3 meses, aunque todo dependerá de los objetivos del
                                usuario y su adherencia al entrenamiento y nutrición.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
