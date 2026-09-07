import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUserGroup, faFileLines, faAppleWhole } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Card } from "./card";
import { MEDICIONES_FIELDS, PLACEHOLDER_VIDEO_SRC } from '../online.constants'

const MEDICIONES_PREVIEW_KEYS = ['peso', 'talla']
const MEDICIONES_PREVIEW_FIELDS = MEDICIONES_FIELDS.filter((field) => MEDICIONES_PREVIEW_KEYS.includes(field.key))

export function StepsOverview({ onStart } = {}) {
  return (
    <div className="col-12" style={{ marginBottom: '100px' }}>
      <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column">

        <div className="col-12 col-md-10 col-lg-8 m-auto text-center mb-5">
          <h2 className="h2 text-tertiary fw-bold mb-3">
            Tu plan nutricional personalizado de forma <span className="text-primary">online</span>
          </h2>
          <p className="text-muted mb-0">
            Un proceso simple de 2 pasos para obtener el plan que mejor se adapte a ti
          </p>
        </div>

        <div className="row g-4">

          {/* Paso 1: Evaluación física */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="previewOnlineStepCardSty d-flex flex-column w-100">
              <div className="previewOnlineStepHeaderSty">
                <span className="previewOnlineStepBadgeSty">1</span>
                <div>
                  <h3 className="h5 text-primary fw-bold mb-1">Evaluación física</h3>
                  <p className="text-muted previewOnlineStepDescSty mb-0">
                    Obtén tu informe físico a través de una autoevaluación guiada, práctica y fácil.
                  </p>
                </div>
              </div>

              <div className="previewOnlineSubSectionSty mt-0">
                <div className="previewOnlineMedicionesRowSty">
                  <div className="previewOnlineMedicionesColSty">
                    <Card>
                      <h4 className="h6 text-tertiary fw-bold mb-3">Mediciones corporales</h4>
                      <div className="d-flex flex-column" style={{ gap: '14px' }}>
                        {MEDICIONES_PREVIEW_FIELDS.map((field) => (
                          <div key={field.key}>
                            <label className="onlineMedicionLabelSty">
                              <FontAwesomeIcon icon={field.icon} className="onlineMedicionLabelIconSty" />
                              <span>{field.label} <span className="text-muted">({field.unit})</span></span>
                            </label>
                            <input
                              className="w-100 form-control"
                              type="number"
                              placeholder={field.placeholder}
                              readOnly
                              tabIndex={-1}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="previewOnlineMedicionesMoreSty">
                        <span className="previewOnlineMedicionesMoreBadgeSty">+6</span>
                        mediciones adicionales
                      </div>
                    </Card>
                  </div>
                  <div className="previewOnlineVideoColSty">
                    <div className="onlineVideoCardSty mb-0">
                      <div className="onlineVideoRatioSty previewOnlineVideoSquareSty">
                        <iframe src={PLACEHOLDER_VIDEO_SRC} title="Evaluación física online" allowFullScreen />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="previewOnlineSubSectionSty d-flex align-items-center" style={{ gap: '16px' }}>
                <span className="previewOnlinePlanIconWrapSty previewOnlinePurpleIconWrapSty mb-0 flex-shrink-0">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <p className="mb-0 text-tertiary fw-semibold">
                  Obtén un informe físico de forma rápida y fiable, de forma gratuita.
                </p>
              </div>
            </div>
          </div>

          {/* Paso 2: Plan nutricional */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="previewOnlineStepCardSty d-flex flex-column w-100">
              <div className="previewOnlineStepHeaderSty">
                <span className="previewOnlineStepBadgeSty previewOnlinePlanBadgeSty">2</span>
                <div>
                  <h3 className="h5 fw-bold mb-1 previewOnlinePlanTitleSty">Plan nutricional</h3>
                  <p className="text-muted previewOnlineStepDescSty mb-0">
                    Elige entre una consulta online personalizada o un plan predefinido según tu deporte y objetivo.
                  </p>
                </div>
              </div>

              <div className="previewOnlinePlanRowSty">
                <div className="previewOnlinePlanColCardSty">
                  <span className="previewOnlinePlanIconWrapSty">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </span>
                  <h4 className="h6 text-tertiary fw-bold mb-2">Consulta online con nutricionista</h4>
                  <p className="text-muted small mb-3">Atención personalizada 1 a 1 con plan a medida</p>
                  <span className="previewOnlinePlanTagSty">100% personalizado</span>
                </div>
                <div className="previewOnlinePlanColCardSty">
                  <span className="previewOnlinePlanIconWrapSty">
                    <FontAwesomeIcon icon={faFileLines} />
                  </span>
                  <h4 className="h6 text-tertiary fw-bold mb-2">Plan predefinido (PDF)</h4>
                  <p className="text-muted small mb-3">Planes diseñados según tu deporte y objetivo</p>
                  <span className="previewOnlinePlanTagSty">Entrega inmediata</span>
                </div>
              </div>

              <div className="previewOnlinePlanSubSectionSty d-flex align-items-center" style={{ gap: '16px' }}>
                <span className="previewOnlinePlanIconWrapSty mb-0 flex-shrink-0">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <p className="mb-0 text-tertiary fw-semibold">
                  Elige la opción que mejor se ajuste a tus necesidades.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="previewOnlineCtaCardSty d-flex align-items-center justify-content-between flex-wrap mt-5" style={{ gap: '16px' }}>
          <div className="d-flex align-items-center" style={{ gap: '16px' }}>
            <span className="previewOnlinePlanIconWrapSty previewOnlinePurpleIconWrapSty mb-0 flex-shrink-0">
              <FontAwesomeIcon icon={faAppleWhole} />
            </span>
            <p className="mb-0 text-tertiary fw-semibold">
              Inicia tu evaluación online
            </p>
          </div>
          {onStart ? (
            <button
              type='button'
              onClick={onStart}
              className='btn btn-primary text-white fw-semibold previewOnlineCtaBtnSty'
            >
              Iniciar
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          ) : (
            <Link href='/consulta-nutricional-online' className='btn btn-primary text-white fw-semibold previewOnlineCtaBtnSty'>
              Iniciar
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}
