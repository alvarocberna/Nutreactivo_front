import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    section: { marginBottom: 16 },
    title: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
    row: { flexDirection: 'row', marginBottom: 4 },
    colMetrica: { flex: 1 },
    colValor: { flex: 1 },
    colInterpretacion: { flex: 2 },
    label: { color: '#555555' },
    value: { fontWeight: 'bold' },
})

export function IndicesPdfSection({ indices }) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>2. Índices</Text>
            <View style={styles.row}>
                <Text style={[styles.colMetrica, styles.label]}>IMC</Text>
                <Text style={[styles.colValor, styles.value]}>{indices.imc.valor.toFixed(2)}</Text>
                <Text style={styles.colInterpretacion}>{indices.imc.interpretacion}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.colMetrica, styles.label]}>ICC</Text>
                <Text style={[styles.colValor, styles.value]}>{indices.icc.valor.toFixed(2)}</Text>
                <Text style={styles.colInterpretacion}>{indices.icc.interpretacion}</Text>
            </View>
        </View>
    )
}
