import { View, Text, Svg, Rect, Path, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    section: { marginBottom: 16 },
    title: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
    chartsRow: { flexDirection: 'row', justifyContent: 'space-around' },
    chartBlock: { alignItems: 'center' },
    chartLabel: { fontSize: 10, fontWeight: 'bold', marginBottom: 6 },
    legendRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
    legendSwatch: { width: 8, height: 8, marginRight: 4 },
    legendText: { fontSize: 8 },
})

const COLOR_PESO = '#198754'
const COLOR_MASA_MUSCULAR = '#dc3545'
const COLOR_MASA_GRASA = '#ffc107'
const COLOR_OTROS = '#adb5bd'

const ALTURA_GRAFICO_BARRAS = 100
const ANCHO_BARRA = 30
const ESPACIO_ENTRE_BARRAS = 20
const RADIO_TORTA = 45

function convertirPolarACartesiano(centroX, centroY, radio, anguloEnGrados) {
    const anguloEnRadianes = ((anguloEnGrados - 90) * Math.PI) / 180
    return {
        x: centroX + radio * Math.cos(anguloEnRadianes),
        y: centroY + radio * Math.sin(anguloEnRadianes),
    }
}

function crearRutaSectorTorta(centroX, centroY, radio, anguloInicio, anguloFin) {
    const puntoInicio = convertirPolarACartesiano(centroX, centroY, radio, anguloFin)
    const puntoFin = convertirPolarACartesiano(centroX, centroY, radio, anguloInicio)
    const esArcoGrande = anguloFin - anguloInicio <= 180 ? '0' : '1'

    return `M ${centroX} ${centroY} L ${puntoInicio.x} ${puntoInicio.y} A ${radio} ${radio} 0 ${esArcoGrande} 0 ${puntoFin.x} ${puntoFin.y} Z`
}

function GraficoBarras({ barras }) {
    const valorMaximo = Math.max(...barras.map((barra) => barra.valor))
    const ancho = (ANCHO_BARRA + ESPACIO_ENTRE_BARRAS) * barras.length

    return (
        <Svg width={ancho} height={ALTURA_GRAFICO_BARRAS}>
            {barras.map((barra, indice) => {
                const alturaBarra = (barra.valor / valorMaximo) * ALTURA_GRAFICO_BARRAS
                const x = indice * (ANCHO_BARRA + ESPACIO_ENTRE_BARRAS)
                const y = ALTURA_GRAFICO_BARRAS - alturaBarra

                return <Rect key={barra.etiqueta} x={x} y={y} width={ANCHO_BARRA} height={alturaBarra} fill={barra.color} />
            })}
        </Svg>
    )
}

function GraficoTorta({ sectores }) {
    let anguloAcumulado = 0

    const rutas = sectores.map((sector) => {
        const anguloInicio = anguloAcumulado
        const anguloFin = anguloAcumulado + (sector.valor / 100) * 360
        anguloAcumulado = anguloFin

        return { ...sector, ruta: crearRutaSectorTorta(RADIO_TORTA, RADIO_TORTA, RADIO_TORTA, anguloInicio, anguloFin) }
    })

    return (
        <Svg width={RADIO_TORTA * 2} height={RADIO_TORTA * 2}>
            {rutas.map((sector) => (
                <Path key={sector.etiqueta} d={sector.ruta} fill={sector.color} />
            ))}
        </Svg>
    )
}

function Leyenda({ items }) {
    return (
        <View>
            {items.map((item) => (
                <View style={styles.legendRow} key={item.etiqueta}>
                    <View style={[styles.legendSwatch, { backgroundColor: item.color }]} />
                    <Text style={styles.legendText}>
                        {item.etiqueta}: {item.valor.toFixed(1)}
                        {item.unidad}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export function ComposicionCorporalPdfSection({ mediciones, composicion }) {
    const masaMuscularPorcentaje = composicion.relativa.masaMuscularPorcentaje.valor
    const masaGrasaPorcentaje = composicion.relativa.masaGrasaPorcentaje.valor
    const otrosPorcentaje = Math.max(0, 100 - masaMuscularPorcentaje - masaGrasaPorcentaje)

    const barras = [
        { etiqueta: 'Peso', valor: mediciones.peso, unidad: ' kg', color: COLOR_PESO },
        { etiqueta: 'Masa muscular', valor: composicion.absoluta.masaMuscularKg, unidad: ' kg', color: COLOR_MASA_MUSCULAR },
        { etiqueta: 'Masa grasa', valor: composicion.absoluta.masaGrasaKg, unidad: ' kg', color: COLOR_MASA_GRASA },
    ]

    const sectores = [
        { etiqueta: 'Masa muscular', valor: masaMuscularPorcentaje, unidad: '%', color: COLOR_MASA_MUSCULAR },
        { etiqueta: 'Masa grasa', valor: masaGrasaPorcentaje, unidad: '%', color: COLOR_MASA_GRASA },
        { etiqueta: 'Otros', valor: otrosPorcentaje, unidad: '%', color: COLOR_OTROS },
    ]

    return (
        <View style={styles.section}>
            <Text style={styles.title}>4. Composición corporal</Text>
            <View style={styles.chartsRow}>
                <View style={styles.chartBlock}>
                    <Text style={styles.chartLabel}>Peso y composición (kg)</Text>
                    <GraficoBarras barras={barras} />
                    <Leyenda items={barras} />
                </View>
                <View style={styles.chartBlock}>
                    <Text style={styles.chartLabel}>Composición relativa (%)</Text>
                    <GraficoTorta sectores={sectores} />
                    <Leyenda items={sectores} />
                </View>
            </View>
        </View>
    )
}
