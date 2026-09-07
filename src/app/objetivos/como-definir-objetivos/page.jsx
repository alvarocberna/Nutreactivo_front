
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faPercent } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function DefinirObjetivos() {
    return (

        <div className='defObjPageSty container-fluid'>

            {/* SECCION 1: TITULO */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex m-auto defObjHeroSty'>
                    <div>
                        <span className='defObjEyebrowSty'>Objetivo · Fundamentos</span>
                        <h1 className='defObjTitleSty'>
                            ¿Cómo definir mis objetivos deportivos?
                        </h1>
                    </div>
                </div>
            </div>

            {/* SECCION 2: VIDEO + LEAD */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column flex-lg-row m-auto justify-content-between'>
                    <div className='col-12 col-lg-5 mb-4 mb-lg-0'>
                        <div className='defObjVideoCardSty'>
                            <iframe
                                className='defObjVideoFrameSty'
                                src='https://www.youtube.com/embed/j301_jhzz8c'
                                title='Cómo definir mis objetivos deportivos'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 d-flex align-items-center'>
                        <p className='defObjLeadSty'>
                            Para orientar nuestros objetivos deportivos, es importante prestar atención
                            a los indicadores obtenidos en la evaluación física.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECCION 3: FORK DE DECISIÓN */}
            <div className='row mb-5'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <p className='defObjForkLabelSty'>Tu objetivo depende de dónde pongas el foco</p>

                    <div className='defObjForkConnectorSty' aria-hidden='true'>
                        <span className='defObjForkDropSty defObjForkDropSty--left'></span>
                        <span className='defObjForkDropSty defObjForkDropSty--right'></span>
                    </div>

                    <div className='defObjPathsSty'>
                        <div className='defObjPathCardSty defObjPathCardSty--violeta'>
                            <span className='defObjPathIconSty'>
                                <FontAwesomeIcon icon={faGaugeHigh} />
                            </span>
                            <h2 className='defObjPathTitleSty'>Rendimiento</h2>
                            <p className='defObjPathDescSty'>
                                Para deportes donde el foco está puesto en el rendimiento, podemos guiarnos
                                con el somatotipo.
                            </p>
                            <span className='defObjPathIndicatorSty'>Indicador clave: Somatotipo</span>
                        </div>

                        <div className='defObjPathCardSty defObjPathCardSty--coral'>
                            <span className='defObjPathIconSty'>
                                <FontAwesomeIcon icon={faPercent} />
                            </span>
                            <h2 className='defObjPathTitleSty'>Composición corporal</h2>
                            <p className='defObjPathDescSty'>
                                Si tu objetivo va por el lado de trabajar la composición corporal, debemos
                                prestar especial atención al nivel de grasa corporal.
                            </p>
                            <span className='defObjPathIndicatorSty'>Indicador clave: % Grasa corporal</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
