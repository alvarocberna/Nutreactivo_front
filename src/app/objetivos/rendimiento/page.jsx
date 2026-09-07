
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt, faGaugeHigh, faInfinity } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../shared/media/img_halterofilia.jpg';
import img2 from '../../../shared/media/img_remo2.jpeg';
import img3 from '../../../shared/media/img_atletismo.jpeg';
import './style.css';

const SISTEMAS_ENERGETICOS = [
    { id: 'alta-intensidad', label: 'Anaeróbico', icon: faBolt, accent: 'coral' },
    { id: 'mediana-resistencia', label: 'Mixto', icon: faGaugeHigh, accent: 'violeta' },
    { id: 'resistencia', label: 'Aeróbico', icon: faInfinity, accent: 'teal' },
];

export default function Rendimiento() {
    return (

        <div className='rendimientoPageSty container-fluid'>

            {/* HERO + CONTINUO ENERGÉTICO */}
            <div className='rendHeroSty'>
                <div className='rendHeroWashSty'></div>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto rendHeroContentSty'>
                    <span className='rendEyebrowSty'>Guía por sistema energético</span>
                    <h1 className='rendTitleSty'>
                        ¿Cómo trabajar el rendimiento en cada deporte?
                    </h1>
                    <p className='rendLeadSty'>
                        Cada deporte exige un <b>metabolismo energético</b> distinto y favorece una <b>composición
                            corporal</b> distinta. Ubica tu disciplina en el continuo de duración e intensidad para
                        entender qué enfoque nutricional le corresponde.
                    </p>

                    <nav className='rendContinuumSty' aria-label='Continuo de sistemas energéticos por duración'>
                        <div className='rendContinuumTrackSty'></div>
                        {SISTEMAS_ENERGETICOS.map((sistema) => (
                            <a
                                key={sistema.id}
                                href={`#${sistema.id}`}
                                className={`rendContinuumStopSty rendContinuumStopSty--${sistema.accent}`}
                            >
                                <span className='rendContinuumDotSty'>
                                    <FontAwesomeIcon icon={sistema.icon} />
                                </span>
                                <span className='rendContinuumLabelSty'>{sistema.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* SECCION 1: DEPORTES DE ALTA INTENSIDAD */}
            <section id='alta-intensidad' className='row mb-5 rendSectionSty'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='rendCardSty rendCardSty--coral'>
                        <div className='rendCardMediaSty'>
                            <Image alt='Halterofilia, deporte de alta intensidad y corta duración' src={img1} className='rendCardImgSty' />
                            <span className='rendCardBadgeSty'>
                                <FontAwesomeIcon icon={faBolt} />
                                Anaeróbico
                            </span>
                        </div>
                        <div className='rendCardBodySty'>
                            <h2 className='rendCardTitleSty'>Alta intensidad</h2>
                            <p className='rendTextSty'>
                                Al trabajar en deportes de alta intensidad y corta duración primero
                                debemos poner el foco en el <b className='rendTermSty'>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen principalmente de la vía
                                anaeróbica. Para mejorar el rendimiento de cada sistema energético
                                podemos recurrir a la suplementación, para así abastecer las fuentes de
                                energía implicadas en el deporte y extender la utilización de estas vías.
                                Conoce más sobre estos sistemas energéticos
                                en el siguiente <Link href='/'>enlace</Link>.
                            </p>
                            <p className='rendTextSty'>
                                El segundo enfoque que debemos considerar es la <b className='rendTermSty'>composición corporal</b>.
                                Muchos de estos deportes requieren realizar un desplazamiento del
                                cuerpo a alta velocidad (como 100 y 200m en atletismo), capacidad que se ve
                                beneficiada con un bajo nivel de grasa corporal. Por otro lado, en deportes
                                que se requiere desplazar objetos externos, como el caso de la halterofilia o
                                lanzamiento de bala, suele ser beneficioso tener un mayor centro de
                                gravedad, lo cual se relaciona directamente con un mayor nivel de grasa abdominal.
                                Sea cual sea el objetivo antropométrico, podemos implementar indicadores como
                                el porcentaje de grasa, somatotipo o sumatoria de pliegues para guiar nuestros
                                objetivos.
                            </p>
                            <Link href='/' className='objArrowSty rendLinkSty'>
                                Sistemas energéticos explicados
                                <span className='objArrowIconBoxSty'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCION 2: DEPORTES MEDIANA RESISTENCIA */}
            <section id='mediana-resistencia' className='row mb-5 rendSectionSty'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='rendCardSty rendCardSty--violeta rendCardSty--reverse'>
                        <div className='rendCardMediaSty'>
                            <Image src={img2} alt='Remo, deporte de mediana resistencia' className='rendCardImgSty' />
                            <span className='rendCardBadgeSty'>
                                <FontAwesomeIcon icon={faGaugeHigh} />
                                Mixto
                            </span>
                        </div>
                        <div className='rendCardBodySty'>
                            <h2 className='rendCardTitleSty'>Mediana resistencia</h2>
                            <p className='rendTextSty'>
                                En deportes de mediana intensidad, con una duración superior a 1 minuto y que pueda
                                durar varios minutos, como lo son las pruebas de 800 y 1500m del atletismo, remo y
                                natación, debemos poner el enfoque en
                                el <b className='rendTermSty'>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen de las vías anaeróbicas y aeróbicas.
                                Para mejorar el rendimiento de cada vía y sustrato utilizado
                                podemos recurrir a la suplementación para abastecer las fuentes de
                                energía implicadas y extender la utilización de estas vías de energía.
                                Además, podemos implementar estrategias como el timing nutricional, para
                                repletar nuestras reservas de energía previo a la competencia.
                                Conoce más sobre estos sistemas energéticos
                                en el siguiente <Link href='/'>enlace</Link>.
                            </p>
                            <p className='rendTextSty'>
                                El segundo enfoque que debemos considerar es la <b className='rendTermSty'>composición corporal</b>.
                                Estos deportes suelen favorecerse de ciertas características físicas específicas,
                                como un determinado nivel de grasa corporal o masa muscular. Para observar esto
                                podemos guiarnos de indicadores como el porcentaje de grasa corporal y el somatotipo
                                de cada deportista.
                            </p>
                            <Link href='/' className='objArrowSty rendLinkSty'>
                                Sistemas energéticos explicados
                                <span className='objArrowIconBoxSty'>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCION 3: DEPORTES DE RESISTENCIA */}
            <section id='resistencia' className='row mb-5 rendSectionSty'>
                <div className='col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto'>
                    <div className='rendCardSty rendCardSty--teal'>
                        <div className='rendCardMediaSty'>
                            <Image src={img3} alt='Atletismo de fondo, deporte de resistencia' className='rendCardImgSty' />
                            <span className='rendCardBadgeSty'>
                                <FontAwesomeIcon icon={faInfinity} />
                                Aeróbico
                            </span>
                        </div>
                        <div className='rendCardBodySty'>
                            <h2 className='rendCardTitleSty'>Resistencia</h2>
                            <p className='rendTextSty'>
                                En deportes de larga duración como lo son pruebas de 5 y 10K,
                                debemos poner el enfoque en
                                el <b className='rendTermSty'>metabolismo energético</b> de este tipo de
                                actividades, las cuales dependen principalmente del metabolismo aeróbico, es decir,
                                la oxidación de las reservas de grasas y carbohidratos.
                                Para mejorar el rendimiento de cada vía y sustrato utilizado
                                podemos implementar periodos de carga nutricional,
                                repletando nuestras reservas de energía previo a la competencia.
                            </p>
                            <p className='rendTextSty'>
                                El segundo enfoque que debemos considerar es la <b className='rendTermSty'>composición corporal</b>.
                                Estos deportes suelen favorecerse de ciertas características físicas específicas,
                                como un nivel de grasa corporal bajo, o una menor masa por unidad de altura.
                                Para observar esto
                                podemos guiarnos de indicadores como el porcentaje de grasa corporal y el somatotipo
                                de cada deportista.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}
