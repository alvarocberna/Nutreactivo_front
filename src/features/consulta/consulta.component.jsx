import "../../app/globals.css"
import "./style.css"
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { SectionDivider } from "@/shared/components/section-divider";

export function Consulta() {
  return (
    <>
      <SectionDivider label="Consulta presencial" />
      <div className="col-12 d-flex sectionHeightSty" style={{ marginBottom: '100px', marginTop: '-80px' }}>
        <div className="d-flex flex-column-reverse flex-md-row m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9">
          <div className='consultaHomeVideoCardSty m-auto me-lg-5 mt-3'>
            <div className='consultaHomeVideoRatioSty'>
              <iframe
                src="https://d3da4wrv5yauea.cloudfront.net/consulta-nutricional.mp4"
                title='Video Consulta Nutricional Nutricionista deportivo Álvaro Cañete'>
              </iframe>
            </div>
          </div>
          <div className="m-auto col-12 col-sm-10 col-md-6 col-lg-8 d-flex flex-column justify-content-center">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary mb-3" style={{ fontSize: '40px', width: '50px' }} />
            <p className="h3 text-tertiary mb-3" style={{ textAlign: 'justify' }}>
              Las necesidades de cada usuario son  diferentes, según su disciplina y <span className="text-primary">objetivos</span>.
              La consulta nutricional tiene como fin establecer las <span className="text-primary">estrategias nutricionales</span> adecuadas para lograr estos objetivos.
            </p>
            <hr></hr>
            <Link className="h5 fw-bold text-primary" href='/nutricionistas' style={{ textDecoration: 'none' }}>
              Álvaro Cañete Nutricionista
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}