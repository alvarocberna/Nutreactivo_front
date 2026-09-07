import { View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    section: { marginBottom: 16 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    texto: { fontWeight: 'bold' },
})

function formatearFecha(fecha) {
    const dia = String(fecha.getDate()).padStart(2, '0')
    const mes = String(fecha.getMonth() + 1).padStart(2, '0')
    const anio = String(fecha.getFullYear()).slice(-2)
    return `${dia}/${mes}/${anio}`
}

export function InformacionPersonalPdfSection({ informacionPersonal }) {
    const fechaActual = formatearFecha(new Date())

    return (
        <View style={styles.section}>
            <View style={styles.row}>
                <Text style={styles.texto}>
                    {informacionPersonal.nombre} - {informacionPersonal.edad}a
                </Text>
                <Text style={styles.texto}>{fechaActual}</Text>
            </View>
        </View>
    )
}
