import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import EvFisica from '../antropometria/evaluacion-fisica/page.jsx';
import { Valores } from '@/features';
import './style.css';

export default function ConsultaNutricional() {
    return (
        <div className='w-100 d-flex flex-column'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 py-5' style={{ gap: '48px' }}>

                <div className='consultaHeaderSty'>
                    <h1 className='h1 mb-2 text-tertiary fw-bold'>Consulta Nutricional</h1>
                    <p className='text-muted mb-0'>
                        Un plan a tu medida, diseñado para ayudarte a alcanzar tus objetivos deportivos y de salud.
                    </p>
                </div>

                <div className='consultaIntroRow'>
                    <div className='consultaIntroVideo'>
                        <div className='consultaVideoCardSty'>
                            <div className='consultaVideoRatioSty'>
                                <iframe
                                    src='https://d3da4wrv5yauea.cloudfront.net/consulta-nutricional.mp4'
                                    title='Consulta nutricional Nutreactivo'
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                    <div className='consultaIntroText'>
                        <h2 className='h3'>Estableciendo un plan para alcanzar tus objetivos</h2>
                        <p>
                            La consulta nutricional tiene como objetivo establecer las estrategias nutricionales
                            más adecuadas para el logro de los objetivos de cada persona, ya sean estos orientados
                            al rendimiento deportivo, composición corporal o salud.
                        </p>
                        <Link href='/objetivos/como-definir-objetivos' className='objArrowSty consultaLinkSty'>
                            ¿Cómo definir mis objetivos?
                            <span className='objArrowIconBoxSty'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='consultaPlanSty'>
                    <h2 className='h3 mb-4'>Plan nutricional personalizado</h2>
                    <div className='consultaPlanRow'>
                        <div className='consultaPlanText'>
                            <p>
                                El plan de alimentación está planificado en base a las características individuales
                                de cada deportista, considerando su gasto de energía diario, y pensado para ser aplicado
                                con facilidad en el día a día.
                            </p>
                            <p className='fw-bold mb-2'>¿Qué incluye cada plan?</p>
                            <ul className='consultaChecklistSty'>
                                <li>
                                    <span className='consultaChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                    <span>Requerimientos energéticos y de macronutrientes como proteínas, carbohidratos y lípidos diarios.</span>
                                </li>
                                <li>
                                    <span className='consultaChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                    <span>Prescripción de alimentos por tiempo de comida, junto a 5 ejemplos de preparaciones.</span>
                                </li>
                                <li>
                                    <span className='consultaChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                    <span>Prescripción de recomendaciones deportivas para diferentes días de entrenamiento y días de competencias.</span>
                                </li>
                                <li>
                                    <span className='consultaChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                    <span>Material complementario como videos explicativos.</span>
                                </li>
                            </ul>
                        </div>
                        <div className='consultaPlanImgWrap'>
                            <Image
                                src='/media/img_plan_nutricional.png'
                                alt='Ejemplo de plan nutricional personalizado'
                                width={495}
                                height={700}
                                className='consultaPlanImgSty'
                            />
                        </div>
                    </div>
                </div>

            </div>

            <EvFisica />
            <Valores />
        </div>
    );
}
