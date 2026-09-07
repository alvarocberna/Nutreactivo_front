'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { StepsOverview } from "./components/steps-overview";
import { StepProgress } from "./components/step-progress";
import { PlanNutricionalStep } from "./components/plan-nutricional-step";
import { EvaluacionOnline } from "./evaluacion-online.component";
import "../../app/globals.css";
import "./style.css";

const STEP_OVERVIEW = 'overview'
const STEP_EVALUACION = 'evaluacion'
const STEP_PLAN = 'plan'

export function ConsultaOnline() {
  const [step, setStep] = useState(STEP_OVERVIEW)

  const goToStep = (nextStep) => {
    setStep(nextStep)
    window.scrollTo(0, 0)
  }

  if (step === STEP_EVALUACION) {
    return (
      <div className='d-flex flex-column' style={{ paddingTop: '60px', paddingBottom: '100px', backgroundColor: '#f8f9fc' }}>
        <div className='w-100 px-3 px-md-4 px-lg-5'>
          <StepProgress activeStep={1} />
          <EvaluacionOnline />
          <div className='d-flex justify-content-end mt-4'>
            <button
              type='button'
              onClick={() => goToStep(STEP_PLAN)}
              className='btn btn-primary text-white fw-semibold previewOnlineCtaBtnSty'
            >
              Continuar
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === STEP_PLAN) {
    return (
      <div className='w-100 d-flex flex-column' style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className='m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>
          <StepProgress activeStep={2} />
        </div>
        <PlanNutricionalStep />
        <div className='m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9' style={{ marginTop: '-60px' }}>
          <button
            type='button'
            onClick={() => goToStep(STEP_EVALUACION)}
            className='btn btn-outline-primary fw-semibold previewOnlineCtaBtnSty'
          >
            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
            Volver
          </button>
        </div>
      </div>
    )
  }

  return <StepsOverview onStart={() => goToStep(STEP_EVALUACION)} />
}
