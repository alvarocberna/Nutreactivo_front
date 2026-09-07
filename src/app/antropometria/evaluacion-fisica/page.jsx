'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { InfoIndicadores } from './datos';
import './style.css';

function Indicador({ titulo, img, cuerpo }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`evalIndicadorCardSty ${open ? 'is-open' : ''}`}>
            <div className='evalFlipSceneSty'>
                <div className='evalFlipCardSty'>
                    <div className='evalFlipFaceSty evalFlipFrontSty'>
                        <Image src={img} alt={titulo} width={220} height={220} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className='evalFlipFaceSty evalFlipBackSty'>
                        <p className='evalIndicadorDescSty'>{cuerpo}</p>
                    </div>
                </div>
            </div>
            <h3 className='evalIndicadorTitleSty'>{titulo}</h3>
            <button type='button' className='evalIndicadorToggleBtn' onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                {open ? 'Ver imagen' : 'Ver detalles'}
                <FontAwesomeIcon icon={faChevronDown} className='evalChevronSty' />
            </button>
        </div>
    )
}

export default function EvaluacionFisica() {
    return (
        <div className='w-100 d-flex flex-column py-5'>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ gap: '48px' }}>

                <div className='evalHeaderSty'>
                    <h1 className='h1 mb-2 text-tertiary fw-bold'>Evaluación física</h1>
                    <p className='text-muted mb-0'>
                        Conoce en qué consiste nuestra evaluación antropométrica y todos los indicadores
                        deportivos que obtendrás en tu informe de resultados.
                    </p>
                </div>

                <div className='evalIntroRow'>
                    <div className='evalIntroVideo'>
                        <div className='evalVideoCardSty'>
                            <div className='evalVideoRatioSty'>
                                <iframe
                                    src='https://d3da4wrv5yauea.cloudfront.net/evaluacion-fisica.mp4'
                                    title='En qué consiste la evaluación física'
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                    <div className='evalIntroText'>
                        <h2 className='h3'>¿En qué consiste la evaluación?</h2>
                        <p>
                            Durante la evaluación física el nutricionista realizará la toma de mediciones
                            corporales como lo son los pliegues, perímetros, diámetros óseos, peso y talla,
                            todo según el estándar internacional ISAK I. Esta evaluación tiene una duración de
                            10 minutos.
                        </p>
                        <p>
                            Al finalizar la evaluación se le entrega al usuario un informe con los resultados
                            de sus mediciones, los cuales incluyen:
                        </p>
                        <ul className='evalChecklistSty'>
                            <li>
                                <span className='evalChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                <span>Composición corporal (masa muscular y grasa corporal)</span>
                            </li>
                            <li>
                                <span className='evalChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                <span>Indicadores de uso deportivo como somatotipo y modelo phantom</span>
                            </li>
                            <li>
                                <span className='evalChecklistIconSty'><FontAwesomeIcon icon={faCheck} /></span>
                                <span>Indicadores de proporcionalidad, entre otros</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='evalResultadosIntroSty'>
                    <h2 className='h3 mb-3'>Resultados mediciones</h2>
                    <p>
                        La evaluación física o antropométrica nos entrega como resultado una gran variedad de
                        indicadores de interés deportivo y de salud, como lo son los componentes corporales,
                        somatotipo, índice de masa corporal, entre otros indicadores físicos.
                    </p>
                </div>

                <div className='evalIndicadorGridSty'>
                    <Indicador {...InfoIndicadores.componentesPorc} />
                    <Indicador {...InfoIndicadores.componentesKg} />
                    <Indicador {...InfoIndicadores.somatocarta} />
                    <Indicador {...InfoIndicadores.phantom} />
                    <Indicador {...InfoIndicadores.imc} />
                    <Indicador {...InfoIndicadores.ffmi} />
                    <Indicador {...InfoIndicadores.pliegues} />
                    <Indicador {...InfoIndicadores.perimetros} />
                    <Indicador {...InfoIndicadores.sumatorias} />
                    <Indicador {...InfoIndicadores.indiceCormico} />
                    <Indicador {...InfoIndicadores.indiceEsquelico} />
                    <Indicador {...InfoIndicadores.envergadura} />
                </div>

            </div>
        </div>
    )
}
