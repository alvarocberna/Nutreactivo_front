'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Bar from './bar';
import BarMaratonVina from './bar-maraton-vina';
import "../../app/globals.css";

export default function Navbar() {
    const navRef = useRef(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const navEl = navRef.current;
        if (!navEl) return;

        const updateHeight = () => {
            document.documentElement.style.setProperty('--navbar-height', `${navEl.offsetHeight}px`);
        };

        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        observer.observe(navEl);
        return () => observer.disconnect();
    }, []);

    return (
        <nav ref={navRef} className="navbar navbar-expand-lg w-100 d-flex flex-column py-0 px-0"
            style={{ position: 'fixed', top: '0px', borderBottom: '1px solid #EFEFEF', zIndex: '1030'}}>

            {isHome ? <BarMaratonVina/> : <Bar/>}

            <div className="container-fluid d-flex align-items-center px-0" style={{ background: 'white', height: '60px' }}>
                {/* Logo  */}
                <Link className="navbar-brand ms-3" href="/">
                    <h1 className="fw-bold h2 mb-0">
                        NUTREACTIVO®
                    </h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menu de opciones */}
                <div className="collapse navbar-collapse" id="navbarNav" style={{ background: 'white' }} >
                    <ul className="navbar-nav w-100 d-flex justify-content-end">
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold "
                                href="/consulta-nutricional-presencial">
                                Consulta Presencial
                            </Link>
                        </li>
                        {/* <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold "
                                href="/consulta-nutricional-online">
                                Consulta Online
                            </Link>
                        </li> */}
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold " href="/#valores">
                                Valores
                            </Link>
                        </li>
                        <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                            <Link className="nav-link h-100 d-flex align-items-center justify-content-center fw-semibold" href="/recursos">
                                Recursos
                            </Link>
                        </li>
                        <li className="nav-item col-12 col-lg-2 d-flex align-items-center " style={{ height: '60px' }}>
                            <Link className="d-flex align-items-center justify-content-center fw-semibold btnAgendarSty"
                                aria-current="page" href="/agendar">
                                Agenda aquí
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}