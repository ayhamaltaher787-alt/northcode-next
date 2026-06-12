import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Northcode',
  description: 'Datenschutzerklärung der Northcode Website gemäß DSGVO.',
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <main style={{ background: '#0a0f0d', minHeight: '100vh', padding: '80px 0 120px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <a href="/" style={{ fontSize: 13, color: 'rgba(142,197,181,0.7)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            ← Zurück zur Startseite
          </a>
          <h1 style={{ marginTop: 24, fontSize: 36, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Datenschutz&shy;erklärung
          </h1>
          <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
            Stand: Juni 2025 · gemäß DSGVO und TDDDG
          </p>
        </div>

        <Section title="1. Verantwortlicher">
          <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <div style={{ marginTop: 14, padding: '16px 20px', background: 'rgba(61,139,120,0.07)', border: '1px solid rgba(61,139,120,0.2)', borderRadius: 12 }}>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              <strong style={{ color: '#fff' }}>Esmail Altaher – Northcode</strong><br />
              Bremen, Deutschland<br />
              E-Mail: <a href="mailto:northcodeesmail@gmail.com" style={{ color: '#8EC5B5' }}>northcodeesmail@gmail.com</a>
            </p>
          </div>
        </Section>

        <Section title="2. Hosting">
          <p>
            Diese Website wird gehostet bei <strong style={{ color: '#fff' }}>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA. Beim Aufruf der Website werden automatisch Verbindungsdaten (IP-Adresse, Datum und Uhrzeit, aufgerufene URL, übertragene Datenmenge, Browsertyp) in Server-Logfiles gespeichert. Diese Daten sind technisch notwendig und werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website). Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#8EC5B5' }}>vercel.com/legal/privacy-policy</a>
          </p>
        </Section>

        <Section title="3. Potenzialanalyse (Kontaktformular)">
          <p>
            Auf dieser Website bieten wir eine kostenlose Potenzialanalyse an. Dabei erheben wir folgende Daten:
          </p>
          <ul>
            <li>Name und E-Mail-Adresse</li>
            <li>Angaben zum Unternehmen (Branche, Mitarbeiterzahl, Umsatz)</li>
            <li>Antworten auf Fragen zu digitalen Prozessen, Marketing und Automatisierung</li>
          </ul>
          <p>
            Diese Daten werden verwendet, um eine personalisierte Auswertung zu erstellen und Ihnen das Ergebnis per E-Mail zuzusenden. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>

          <Subheading>Drittdienste bei der Potenzialanalyse</Subheading>

          <p><strong style={{ color: '#fff' }}>Airtable (Datenspeicherung)</strong><br />
          Die eingegebenen Daten werden in Airtable Inc., 799 Market St, San Francisco, CA 94103, USA gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Airtable ist nach dem EU-US Data Privacy Framework zertifiziert. Datenschutzerklärung: <a href="https://www.airtable.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#8EC5B5' }}>airtable.com/privacy</a></p>

          <p><strong style={{ color: '#fff' }}>OpenRouter / Claude KI (Analyse)</strong><br />
          Zur Erstellung der KI-gestützten Auswertung werden die Antworten anonymisiert an OpenRouter Inc. (openrouter.ai) übermittelt, die das Sprachmodell Claude von Anthropic nutzen. Es werden keine personenbezogenen Daten wie Name oder E-Mail weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>

          <p><strong style={{ color: '#fff' }}>Resend (E-Mail-Versand)</strong><br />
          Das Ergebnis der Analyse wird per E-Mail über Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA versendet. Dabei wird Ihre E-Mail-Adresse und Ihr Name an Resend übermittelt. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Datenschutzerklärung: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#8EC5B5' }}>resend.com/legal/privacy-policy</a></p>
        </Section>

        <Section title="4. Speicherdauer">
          <p>
            Personenbezogene Daten aus der Potenzialanalyse werden in Airtable gespeichert, solange ein berechtigtes geschäftliches Interesse besteht oder bis Sie die Löschung verlangen. Server-Logfiles werden nach spätestens 30 Tagen automatisch gelöscht.
          </p>
        </Section>

        <Section title="5. Ihre Rechte als betroffene Person">
          <p>Sie haben nach der DSGVO folgende Rechte gegenüber uns:</p>
          <ul>
            <li><strong style={{ color: '#fff' }}>Auskunft</strong> (Art. 15 DSGVO) – Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.</li>
            <li><strong style={{ color: '#fff' }}>Berichtigung</strong> (Art. 16 DSGVO) – Sie können die Berichtigung unrichtiger Daten verlangen.</li>
            <li><strong style={{ color: '#fff' }}>Löschung</strong> (Art. 17 DSGVO) – Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht entgegensteht.</li>
            <li><strong style={{ color: '#fff' }}>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong style={{ color: '#fff' }}>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong style={{ color: '#fff' }}>Widerspruch</strong> (Art. 21 DSGVO) – Sie können der Verarbeitung auf Basis berechtigter Interessen jederzeit widersprechen.</li>
            <li><strong style={{ color: '#fff' }}>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO) – Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
          </ul>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an: <a href="mailto:northcodeesmail@gmail.com" style={{ color: '#8EC5B5' }}>northcodeesmail@gmail.com</a>
          </p>
        </Section>

        <Section title="6. Beschwerderecht bei der Aufsichtsbehörde">
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde für Bremen ist:
          </p>
          <div style={{ marginTop: 14, padding: '16px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
            <p style={{ margin: 0, lineHeight: 1.8, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
              <strong style={{ color: '#fff' }}>Die Landesbeauftragte für Datenschutz und Informationsfreiheit<br />der Freien Hansestadt Bremen</strong><br />
              Arndtstraße 1, 27570 Bremerhaven<br />
              Telefon: +49 471 596-2010<br />
              E-Mail: <a href="mailto:office@datenschutz.bremen.de" style={{ color: '#8EC5B5' }}>office@datenschutz.bremen.de</a><br />
              Web: <a href="https://www.datenschutz.bremen.de" target="_blank" rel="noopener noreferrer" style={{ color: '#8EC5B5' }}>www.datenschutz.bremen.de</a>
            </p>
          </div>
        </Section>

        <Section title="7. Cookies und Tracking">
          <p>
            Diese Website verwendet keine Tracking-Cookies und setzt kein Analytics-Tool ein. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind (z. B. für die sichere Übertragung). Es findet kein Tracking über Werbenetzwerke statt.
          </p>
        </Section>

        <Section title="8. SSL-Verschlüsselung">
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
          </p>
        </Section>

        <Section title="9. Aktualität und Änderungen">
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder durch geänderte gesetzliche Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Version ist stets unter <a href="/datenschutz" style={{ color: '#8EC5B5' }}>/datenschutz</a> abrufbar.
          </p>
        </Section>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ marginTop: 20, marginBottom: 8, fontSize: 13, fontWeight: 700, color: 'rgba(142,197,181,0.8)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
      {children}
    </p>
  );
}
