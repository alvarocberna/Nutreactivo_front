export function calcularImc(pesoEnKg, tallaEnCm) {
  const tallaEnMetros = tallaEnCm / 100;
  return pesoEnKg / (tallaEnMetros * tallaEnMetros);
}
