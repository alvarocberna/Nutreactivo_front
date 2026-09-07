import { View, Text, Svg, Rect, Path, StyleSheet } from '@react-pdf/renderer'

const ANCHO_PAGINA_A4 = 595.28
const PADDING_PAGINA = 32
const ANCHO_COLUMNA_ETIQUETAS = 100
const ANCHO_GRAFICO = ANCHO_PAGINA_A4 - PADDING_PAGINA * 2 - ANCHO_COLUMNA_ETIQUETAS

const styles = StyleSheet.create({
    section: { marginBottom: 16 },
    title: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
    chartRow: { flexDirection: 'row' },
    labelsColumn: { width: ANCHO_COLUMNA_ETIQUETAS },
    labelRow: {
        height: 24,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    labelText: { fontSize: 9, color: '#555555' },
    interpretacion: { fontSize: 8, color: '#555555', marginTop: 8 },
})

const TEXTO_INTERPRETACION =
    'Interpretación: Este indicador cuantifica cada medición corporal en base a la propia proporcionalidad del individuo, siendo proporcionalmente grande aquello que esté a la derecha de la línea central, y proporcionalmente pequeño aquello que esté a la izquierda.'

const COLOR_LINEA_CERO = '#333333'
const COLOR_GRILLA = '#dddddd'
const COLOR_BORDE_FILA = '#e9ecef'
const COLOR_PUNTO = '#6f42c1'

const ALTO_FILA = 24
const ESCALA_MAXIMA = 5
const RADIO_PUNTO = 4
const GROSOR_LINEA_CERO = 1
const GROSOR_LINEA_GRILLA = 0.5
const GROSOR_BORDE_FILA = 1

const VALORES_GRILLA = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]

const CAMPOS_PHANTOM = [
    { key: 'phPeso', label: 'Peso' },
    { key: 'phCircunferenciaBrazoTension', label: 'Brazo' },
    { key: 'phCircunferenciaCintura', label: 'Cintura' },
    { key: 'phCircunferenciaCadera', label: 'Cadera' },
    { key: 'phCircunferenciaMusloMedio', label: 'Muslo' },
    { key: 'phCircunferenciaPantorrilla', label: 'Pantorrilla' },
]

function calcularPosicionX(valor) {
    const valorAcotado = Math.max(-ESCALA_MAXIMA, Math.min(ESCALA_MAXIMA, valor))
    return ANCHO_GRAFICO / 2 + (valorAcotado / ESCALA_MAXIMA) * (ANCHO_GRAFICO / 2)
}

function crearRutaCirculo(centroX, centroY, radio) {
    return `M ${centroX - radio} ${centroY} A ${radio} ${radio} 0 1 0 ${centroX + radio} ${centroY} A ${radio} ${radio} 0 1 0 ${centroX - radio} ${centroY} Z`
}

export function PhantomPdfSection({ phantom }) {
    const altoGrafico = ALTO_FILA * CAMPOS_PHANTOM.length

    return (
        <View style={styles.section}>
            <Text style={styles.title}>3. Phantom</Text>
            <View style={styles.chartRow}>
                <View style={styles.labelsColumn}>
                    {CAMPOS_PHANTOM.map(({ key, label }) => (
                        <View style={styles.labelRow} key={key}>
                            <Text style={styles.labelText}>{label}</Text>
                        </View>
                    ))}
                </View>

                <Svg width={ANCHO_GRAFICO} height={altoGrafico}>
                    {CAMPOS_PHANTOM.map((_, indice) => (
                        <Rect
                            key={`borde-${indice}`}
                            x={0}
                            y={(indice + 1) * ALTO_FILA - GROSOR_BORDE_FILA}
                            width={ANCHO_GRAFICO}
                            height={GROSOR_BORDE_FILA}
                            fill={COLOR_BORDE_FILA}
                        />
                    ))}

                    {VALORES_GRILLA.map((valor) => (
                        <Rect
                            key={`grilla-${valor}`}
                            x={calcularPosicionX(valor) - GROSOR_LINEA_GRILLA / 2}
                            y={0}
                            width={GROSOR_LINEA_GRILLA}
                            height={altoGrafico}
                            fill={COLOR_GRILLA}
                        />
                    ))}

                    <Rect
                        x={ANCHO_GRAFICO / 2 - GROSOR_LINEA_CERO / 2}
                        y={0}
                        width={GROSOR_LINEA_CERO}
                        height={altoGrafico}
                        fill={COLOR_LINEA_CERO}
                    />

                    {CAMPOS_PHANTOM.map(({ key }, indice) => (
                        <Path
                            key={key}
                            d={crearRutaCirculo(calcularPosicionX(phantom[key]), indice * ALTO_FILA + ALTO_FILA / 2, RADIO_PUNTO)}
                            fill={COLOR_PUNTO}
                        />
                    ))}
                </Svg>
            </View>
            <Text style={styles.interpretacion}>{TEXTO_INTERPRETACION}</Text>
        </View>
    )
}
