import { calcularEdad } from '@/shared/utils/calcular-edad'
import { calcularImc } from '../formulas/imc'
import { calcularIcc } from '../formulas/icc'
import { calcularKgMasaMuscular, calcularKgGrasaCorporal } from '../formulas/composicion-corporal'
import {
    calcularZScorePeso,
    calcularZScoreBrazoFlexionado,
    calcularZScoreCintura,
    calcularZScoreCadera,
    calcularZScoreMusloMedio,
    calcularZScorePantorrilla,
} from '../formulas/phantom'
import { interpretarImc, interpretarIcc } from './interpretacion-indices.service'

export class EvaluacionFisicaService {
    crearEvaluacionFisica(valoresFormulario) {
        const pesoEnKg = Number(valoresFormulario.peso)
        const tallaEnCm = Number(valoresFormulario.talla)
        const circunferenciaBrazoTension = Number(valoresFormulario.brazo)
        const circunferenciaCintura = Number(valoresFormulario.cintura)
        const circunferenciaCadera = Number(valoresFormulario.cadera)
        const circunferenciaMusloMedio = Number(valoresFormulario.muslo)
        const circunferenciaPantorrilla = Number(valoresFormulario.pantorrilla)
        const masaMuscularPorcentaje = Number(valoresFormulario.masaMuscular)
        const masaGrasaPorcentaje = Number(valoresFormulario.masaGrasa)

        const edad = calcularEdad(valoresFormulario.fechaNacimiento)
        const sexo = valoresFormulario.sexo

        const valorImc = calcularImc(pesoEnKg, tallaEnCm)
        const valorIcc = calcularIcc(circunferenciaCintura, circunferenciaCadera)

        // Pendiente: reglas de interpretación aún no definidas por el usuario.
        const interpretacionPendiente = null

        return {
            informacionPersonal: {
                nombre: valoresFormulario.nombreCompleto,
                edad: String(edad),
                sexo,
            },
            mediciones: {
                peso: pesoEnKg,
                talla: tallaEnCm,
                circunferenciaBrazoTension,
                circunferenciaCintura,
                circunferenciaCadera,
                circunferenciaMusloMedio,
                circunferenciaPantorrilla,
            },
            indices: {
                imc: { valor: valorImc, interpretacion: interpretarImc(valorImc) },
                icc: { valor: valorIcc, interpretacion: interpretarIcc(valorIcc, sexo, edad) },
            },
            phantom: {
                phPeso: calcularZScorePeso(pesoEnKg, tallaEnCm),
                phCircunferenciaBrazoTension: calcularZScoreBrazoFlexionado(circunferenciaBrazoTension, tallaEnCm),
                phCircunferenciaCintura: calcularZScoreCintura(circunferenciaCintura, tallaEnCm),
                phCircunferenciaCadera: calcularZScoreCadera(circunferenciaCadera, tallaEnCm),
                phCircunferenciaMusloMedio: calcularZScoreMusloMedio(circunferenciaMusloMedio, tallaEnCm),
                phCircunferenciaPantorrilla: calcularZScorePantorrilla(circunferenciaPantorrilla, tallaEnCm),
            },
            composicion: {
                relativa: {
                    masaMuscularPorcentaje: { valor: masaMuscularPorcentaje, interpretacion: interpretacionPendiente },
                    masaGrasaPorcentaje: { valor: masaGrasaPorcentaje, interpretacion: interpretacionPendiente },
                },
                absoluta: {
                    masaMuscularKg: calcularKgMasaMuscular(masaMuscularPorcentaje, pesoEnKg),
                    masaGrasaKg: calcularKgGrasaCorporal(masaGrasaPorcentaje, pesoEnKg),
                },
            },
        }
    }
}
