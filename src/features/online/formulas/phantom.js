const ESTATURA_MODELO_PHANTOM = 170.18;

const EXPONENTE_LINEAL = 1;
const EXPONENTE_PESO = 3;

const REFERENCIAS_PHANTOM = {
  peso: { P: 64.58, S: 8.6, d: EXPONENTE_PESO },
  brazoFlexionado: { P: 29.41, S: 2.37, d: EXPONENTE_LINEAL },
  cintura: { P: 71.91, S: 4.45, d: EXPONENTE_LINEAL },
  cadera: { P: 94.67, S: 5.58, d: EXPONENTE_LINEAL },
  musloMedio: { P: 53.2, S: 4.56, d: EXPONENTE_LINEAL },
  pantorrilla: { P: 35.25, S: 2.3, d: EXPONENTE_LINEAL },
};

function calcularZScorePhantom(valorMedido, estaturaEnCm, referencia) {
  const { P, S, d } = referencia;
  return (1 / S) * (valorMedido * (ESTATURA_MODELO_PHANTOM / estaturaEnCm) ** d - P);
}

export function calcularZScorePeso(pesoEnKg, estaturaEnCm) {
  return calcularZScorePhantom(pesoEnKg, estaturaEnCm, REFERENCIAS_PHANTOM.peso);
}

export function calcularZScoreBrazoFlexionado(circunferenciaBrazoEnCm, estaturaEnCm) {
  return calcularZScorePhantom(circunferenciaBrazoEnCm, estaturaEnCm, REFERENCIAS_PHANTOM.brazoFlexionado);
}

export function calcularZScoreCintura(circunferenciaCinturaEnCm, estaturaEnCm) {
  return calcularZScorePhantom(circunferenciaCinturaEnCm, estaturaEnCm, REFERENCIAS_PHANTOM.cintura);
}

export function calcularZScoreCadera(circunferenciaCaderaEnCm, estaturaEnCm) {
  return calcularZScorePhantom(circunferenciaCaderaEnCm, estaturaEnCm, REFERENCIAS_PHANTOM.cadera);
}

export function calcularZScoreMusloMedio(circunferenciaMusloMedioEnCm, estaturaEnCm) {
  return calcularZScorePhantom(circunferenciaMusloMedioEnCm, estaturaEnCm, REFERENCIAS_PHANTOM.musloMedio);
}

export function calcularZScorePantorrilla(circunferenciaPantorrillaEnCm, estaturaEnCm) {
  return calcularZScorePhantom(circunferenciaPantorrillaEnCm, estaturaEnCm, REFERENCIAS_PHANTOM.pantorrilla);
}
