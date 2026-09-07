import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../app/globals.css"

const LINKS = [
    { label: "Consulta nutricional", href: "/consulta-nutricional-presencial" },
    { label: "Valores",              href: "/#valores" },
    { label: "Mediciones",           href: "/antropometria" },
    { label: "Recursos",             href: "/recursos" },
    { label: "Agenda aquí",          href: "/agendar" },
]

const SOCIALES = [
    { icon: faInstagram, href: "https://www.instagram.com/nutreactivo.cl/?hl=es-la", label: "Instagram" },
    { icon: faWhatsapp,  href: "https://api.whatsapp.com/send?phone=56987307068",    label: "WhatsApp" },
    { icon: faEnvelope,  href: "mailto:nutreactivo@gmail.com",                       label: "Email" },
]

export default function Footer() {
    return (
        <footer style={{ background: '#2F1C6A', marginTop: '150px' }}>

            <div style={{ height: '4px', background: 'linear-gradient(90deg, #673DE6, #8C85FF, #02B090)' }} />

            <div className="container-fluid py-5">
                <div className="row col-11 col-md-10 col-lg-9 m-auto py-3 g-5">

                    {/* Brand */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <h2 className="fw-bold text-white mb-2">NUTREACTIVO®</h2>
                        <p className="mb-4" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            Nutrición deportiva y clínica personalizada para alcanzar tus objetivos de salud y rendimiento.
                        </p>
                        <div className="d-flex gap-2">
                            {SOCIALES.map(({ icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer"
                                    aria-label={label} className="footerSocialBtnSty">
                                    <FontAwesomeIcon icon={icon} style={{ width: '16px', height: '16px' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <p className="fw-semibold text-white mb-3"
                            style={{ letterSpacing: '0.08em', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                            Navegación
                        </p>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            {LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <Link href={href} className="footerLinkSty">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <p className="fw-semibold text-white mb-3"
                            style={{ letterSpacing: '0.08em', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                            Contacto
                        </p>
                        <div className="d-flex flex-column gap-3">
                            <a href="mailto:nutreactivo@gmail.com" className="footerLinkSty d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '15px', color: '#8C85FF' }} />
                                nutreactivo@gmail.com
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=56987307068" target="_blank" rel="noreferrer"
                                className="footerLinkSty d-flex align-items-center gap-2">
                                <FontAwesomeIcon icon={faWhatsapp} style={{ width: '15px', color: '#8C85FF' }} />
                                +56 9 8730 7068
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="col-11 col-lg-9 m-auto py-3 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} Nutreactivo. Todos los derechos reservados.
                    </p>
                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
                        Desarrollado por <a href="https://despliegalo.cl" target="_blank" rel="noopener noreferrer">despliegalo.cl</a>
                    </p>
                </div>
            </div>

        </footer>
    )
}
