import { CalculadoraDieciochera } from '@/features/recursos/calculadora-dieciochera/calculadora-dieciochera.component'

export default function CalculadoraDiecioheraPage() {
    return (
        <div className='w-100 d-flex flex-column py-5' style={{ backgroundColor: '#f8f9fc' }}>
            <div className='m-auto d-flex flex-column col-10 col-sm-8 col-md-8 col-lg-7 col-xl-6'>
                <CalculadoraDieciochera />
            </div>
        </div>
    )
}
