import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer'
import { InformacionPersonalPdfSection } from './components/informacion-personal-section'
import { MedicionesPdfSection } from './components/mediciones-section'
import { IndicesPdfSection } from './components/indices-section'
import { PhantomPdfSection } from './components/phantom-section'
import { ComposicionCorporalPdfSection } from './components/composicion-corporal-section'

const styles = StyleSheet.create({
    page: { padding: 32, fontSize: 11 },
    titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
})

export function InformePdf({ evaluacionFisica }) {
    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={styles.titulo}>Informe Físico</Text>

                <InformacionPersonalPdfSection informacionPersonal={evaluacionFisica.informacionPersonal} />
                <MedicionesPdfSection mediciones={evaluacionFisica.mediciones} />
                <IndicesPdfSection indices={evaluacionFisica.indices} />
                <PhantomPdfSection phantom={evaluacionFisica.phantom} />
                <ComposicionCorporalPdfSection
                    mediciones={evaluacionFisica.mediciones}
                    composicion={evaluacionFisica.composicion}
                />
            </Page>
        </Document>
    )
}
