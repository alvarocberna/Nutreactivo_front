import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    section: { marginBottom: 16 },
    title: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
    label: { color: '#555555' },
    value: { fontWeight: 'bold' },
})

const CAMPOS_MEDICIONES = [
    { key: 'peso', label: 'Peso', unidad: 'kg' },
    { key: 'talla', label: 'Talla', unidad: 'cm' },
    { key: 'circunferenciaBrazoTension', label: 'Circunferencia de brazo', unidad: 'cm' },
    { key: 'circunferenciaCintura', label: 'Circunferencia de cintura', unidad: 'cm' },
    { key: 'circunferenciaCadera', label: 'Circunferencia de cadera', unidad: 'cm' },
    { key: 'circunferenciaMusloMedio', label: 'Circunferencia de muslo medio', unidad: 'cm' },
    { key: 'circunferenciaPantorrilla', label: 'Circunferencia de pantorrilla', unidad: 'cm' },
]

export function MedicionesPdfSection({ mediciones }) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>1. Mediciones</Text>
            {CAMPOS_MEDICIONES.map(({ key, label, unidad }) => (
                <View style={styles.row} key={key}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>
                        {mediciones[key]} {unidad}
                    </Text>
                </View>
            ))}
        </View>
    )
}
