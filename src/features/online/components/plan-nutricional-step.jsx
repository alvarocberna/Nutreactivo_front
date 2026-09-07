import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faFileLines, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WHATSAPP_PHONE = '56987307068'
const AGENDAR_ONLINE_TEXT = encodeURIComponent('¡Hola! Quiero agendar una hora para consulta online')
const COMPRAR_PLAN_TEXT = encodeURIComponent('¡Hola! Quiero adquirir el plan nutricional predefinido')

export function PlanNutricionalStep() {
  return (
    <div className="col-12" style={{ marginBottom: '100px' }}>
      <div className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex flex-column">

        <div className="col-12 col-md-10 col-lg-8 m-auto text-center mb-5">
          <h2 className="h2 text-tertiary fw-bold mb-3">
            Elige tu <span className="text-primary">plan nutricional</span>
          </h2>
          <p className="text-muted mb-0">
            Selecciona la opción que mejor se ajuste a tus necesidades
          </p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-lg-6 d-flex">
            <div className="previewOnlineStepCardSty d-flex flex-column align-items-center text-center w-100">
              <span className="previewOnlinePlanIconWrapSty previewOnlinePurpleIconWrapSty">
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              <h3 className="h5 text-primary fw-bold mb-2">Consulta online con nutricionista</h3>
              <p className="text-muted mb-3">
                Atención personalizada 1 a 1, con un plan nutricional hecho a tu medida según tus objetivos.
              </p>
              <p className="h6 text-tertiary fw-semibold mb-4">$25.000 CLP</p>
              <a
                className="btn btn-primary text-white fw-semibold previewOnlineCtaBtnSty mt-auto"
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${AGENDAR_ONLINE_TEXT}`}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                Agendar hora
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex">
            <div className="previewOnlineStepCardSty d-flex flex-column align-items-center text-center w-100">
              <span className="previewOnlinePlanIconWrapSty">
                <FontAwesomeIcon icon={faFileLines} />
              </span>
              <h3 className="h5 fw-bold mb-2 previewOnlinePlanTitleSty">Plan predefinido (PDF)</h3>
              <p className="text-muted mb-3">
                Plan diseñado según tu deporte y objetivo, de entrega inmediata.
              </p>
              <p className="h6 text-tertiary fw-semibold mb-4">$6.000 CLP</p>
              <a
                className="btn btn-primary text-white fw-semibold previewOnlineCtaBtnSty mt-auto"
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${COMPRAR_PLAN_TEXT}`}
              >
                <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                Ver planes
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
