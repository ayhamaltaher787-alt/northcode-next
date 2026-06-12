import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – Northcode',
  description: 'Impressum der Northcode Website gemäß § 5 TMG.',
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main style={{ background: '#0a0f0d', minHeight: '100vh', padding: '80px 0 120px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <a href="/" style={{ fontSize: 13, color: 'rgba(142,197,181,0.7)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            ← Zurück zur Startseite
          </a>
          <h1 style={{ marginTop: 24, fontSize: 36, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Impressum
          </h1>
          <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Angaben */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Anbieter</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(61,139,120,0.07)', border: '1px solid rgba(61,139,120,0.2)', borderRadius: 12 }}>
            <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
              <strong style={{ color: '#fff', fontSize: 16 }}>Esmail Altaher</strong><br />
              Northcode<br />
              Bürgerstraße 50<br />
              26123 Oldenburg<br />
              Deutschland
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Kontakt</h2>
          <p style={body}>
            E-Mail:{' '}
            <a href="mailto:northcodeesmail@gmail.com" style={{ color: '#8EC5B5', textDecoration: 'none' }}>
              northcodeesmail@gmail.com
            </a>
          </p>
        </section>

        {/* Umsatzsteuer */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Umsatzsteuer</h2>
          <p style={body}>
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
            Eine Umsatzsteuer-Identifikationsnummer liegt daher nicht vor.
          </p>
        </section>

        {/* Verantwortlich für den Inhalt */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Verantwortlich für den Inhalt</h2>
          <p style={body}>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </p>
          <p style={{ ...body, marginTop: 8 }}>
            Esmail Altaher<br />
            Bürgerstraße 50<br />
            26123 Oldenburg
          </p>
        </section>

        {/* Haftung für Inhalte */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Haftung für Inhalte</h2>
          <p style={body}>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p style={body}>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        {/* Haftung für Links */}
        <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 style={h2}>Haftung für Links</h2>
          <p style={body}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p style={body}>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        {/* Urheberrecht */}
        <section style={{ marginBottom: 0 }}>
          <h2 style={h2}>Urheberrecht</h2>
          <p style={body}>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p style={body}>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

      </div>
    </main>
  );
}

const h2: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  color: '#fff',
  marginBottom: 14,
  letterSpacing: '-0.01em',
};

const body: React.CSSProperties = {
  fontSize: 15,
  color: 'rgba(255,255,255,0.55)',
  lineHeight: 1.75,
  margin: '0 0 10px',
};
