import { PillarPageData } from './local-seo-data';

/**
 * 2 additional Oldenburg money pages (BOFU pillar):
 *   - ki-automatisierung-oldenburg
 *   - landingpage-oldenburg
 * Brings Oldenburg to the full 7-money-page quota.
 */
export const oldenburgMoneyPages: PillarPageData[] = [

  {
    slug: 'ki-automatisierung-oldenburg',
    service: 'KI-Automatisierung',
    city: 'Oldenburg',
    metaTitle: 'KI-Automatisierung Oldenburg – Premium KI-Lösungen für den Mittelstand | Northcode',
    metaDescription: 'KI-Automatisierung für Unternehmen in Oldenburg: Industrie, Produktion & IT-Dienstleister. Chatbots, Workflow-Automatisierung & intelligente Systeme. Jetzt anfragen!',
    h1: 'KI-Automatisierung in Oldenburg',
    subtitle: 'Premium KI-Lösungen für Oldenburger Mittelstand und Industrieunternehmen.',
    intro: 'Oldenburger Unternehmen – vom Produktionsbetrieb bis zum IT-Dienstleister – stehen unter konstantem Effizienz- und Kostendruck. KI-Automatisierung ist die wirkungsvollste Antwort: Northcode entwickelt maßgeschneiderte KI-Systeme für Unternehmen in Oldenburg, die messbaren ROI liefern – keine Experimente, sondern erprobte Lösungen.',
    stats: [
      { value: '↑312 %', label: 'Ø ROI in 6 Monaten' },
      { value: '−48 h', label: 'gesparte Arbeitszeit/Woche' },
      { value: '24/7', label: 'KI-Systeme aktiv' },
      { value: '< 3 Wo', label: 'erster Pilot live' },
    ],
    services: [
      { icon: '🤖', title: 'KI-Chatbots & Assistenten', desc: 'Intelligente Kundenservice- und Vertriebssysteme, die rund um die Uhr für Oldenburger Mittelständler arbeiten.' },
      { icon: '⚙️', title: 'Produktions-Automatisierung', desc: 'KI-gestützte Qualitätskontrolle, Predictive Maintenance und Fertigungsoptimierung für Industriebetriebe.' },
      { icon: '📊', title: 'KI-Analyse & Reporting', desc: 'Automatische Auswertungen, Forecasting und Echtzeit-Dashboards aus Ihren Betriebs- und Kundendaten.' },
      { icon: '🔄', title: 'Workflow-Intelligenz', desc: 'KI übernimmt Routing, Klassifizierung, Priorisierung und Eskalation in Ihren Geschäftsprozessen.' },
    ],
    benefits: [
      { title: 'Industrieerfahrung', desc: 'Northcode versteht Produktions- und Mittelstandsprozesse – keine generischen IT-Lösungen, sondern branchenerprobte KI.' },
      { title: 'Messbarer ROI', desc: 'Jede KI-Implementierung wird mit klaren KPIs begleitet – Sie sehen exakt, was die Investition bringt.' },
      { title: 'DSGVO-konform', desc: 'Alle KI-Systeme laufen datenschutzkonform – wahlweise auf Servern in Deutschland.' },
      { title: 'Skalierbar', desc: 'Von der ersten Automatisierung bis zum unternehmensweiten KI-System – Northcode begleitet jeden Schritt.' },
    ],
    processSteps: [
      { step: 1, title: 'KI-Potenzial-Audit', desc: 'Systematische Analyse Ihrer Oldenburger Betriebsprozesse auf KI-Automatisierungspotenzial mit ROI-Prognose.' },
      { step: 2, title: 'Pilot-Definition', desc: 'Auswahl des Use-Cases mit dem besten ROI/Risiko-Verhältnis als erstes Pilotprojekt.' },
      { step: 3, title: 'Entwicklung & Integration', desc: 'Bau des KI-Systems mit nahtloser Integration in Ihre bestehende IT-Infrastruktur.' },
      { step: 4, title: 'Live-Schaltung & Scaling', desc: 'Inbetriebnahme, Monitoring und schrittweiser Ausbau auf weitere Prozesse und Standorte.' },
    ],
    caseStudy: {
      result: 'Oldenburger Produktionsbetrieb – KI-Qualitätskontrolle spart 38 % Ausschuss',
      description: 'Ein Produktionsunternehmen aus Oldenburg mit 120 Mitarbeitern kämpfte mit hoher Ausschussrate und manueller Qualitätskontrolle. Northcode implementierte ein KI-Bilderkennungssystem – Ausschussrate sank um 38 %, der Prozess läuft vollautomatisch.',
      m1: '−38 %', m1Label: 'Ausschussrate Produktion',
      m2: '3,2×', m2Label: 'ROI nach 4 Monaten',
    },
    faqs: [
      { question: 'Eignet sich KI-Automatisierung für Industrieunternehmen in Oldenburg?',
        answer: 'Absolut. Gerade für Produktions- und Fertigungsbetriebe in Oldenburg bietet KI enorme Potenziale: Qualitätskontrolle, Predictive Maintenance, Lagerverwaltung und Auftragsplanung sind ideal automatisierbar.' },
      { question: 'Was kostet KI-Automatisierung für den Mittelstand in Oldenburg?',
        answer: 'Pilotprojekte starten ab 2.000–4.000 €. Vollständige Systeme für mittelständische Unternehmen in Oldenburg: 5.000–20.000 €. Durch "Digital Jetzt"-Förderung (15–40 %) sinkt Ihre Eigeninvestition erheblich.' },
      { question: 'Wie lange bis das erste KI-System in Oldenburg produktiv ist?',
        answer: 'Ein schlankes Pilotprojekt (z.B. KI-Chatbot oder automatisiertes Reporting) geht typisch in 2–3 Wochen live. Umfangreichere Systeme in 4–8 Wochen.' },
      { question: 'Können Bestandssysteme (ERP, MES, SAP) integriert werden?',
        answer: 'Ja. Northcode hat Erfahrung mit SAP, DATEV, verschiedenen MES-Systemen und proprietären ERP-Lösungen. Wir integrieren nahtlos ohne Ihre bestehende Infrastruktur zu ersetzen.' },
    ],
    relatedPages: [
      { title: 'KI-Automatisierung Bremen', href: '/ki-automatisierung-bremen' },
      { title: 'KI für Industrieunternehmen Oldenburg', href: '/ki-fuer-industrieunternehmen-oldenburg' },
      { title: 'KI-Chatbots Kundenservice Oldenburg', href: '/ki-chatbots-kundenservice-oldenburg' },
      { title: 'Automatisierung Produktionsbetriebe Oldenburg', href: '/automatisierung-produktionsbetriebe-oldenburg' },
      { title: 'KI für Handwerker Oldenburg', href: '/ki-fuer-handwerker-oldenburg' },
      { title: 'KI für Kanzleien Oldenburg', href: '/ki-fuer-kanzleien-oldenburg' },
    ],
  },

  {
    slug: 'landingpage-oldenburg',
    service: 'Landingpage Agentur',
    city: 'Oldenburg',
    metaTitle: 'Landingpage Agentur Oldenburg – Conversion-optimierte Seiten | Northcode',
    metaDescription: 'Professionelle Landingpages für Unternehmen in Oldenburg: Conversion-optimiert, A/B-getestet & messbar erfolgreich. Mehr Leads aus Ihrem Werbebudget. Jetzt anfragen!',
    h1: 'Landingpage Agentur in Oldenburg',
    subtitle: 'Mehr Leads aus jedem Euro Werbebudget.',
    intro: 'Eine durchschnittliche Landingpage konvertiert 1–3 % der Besucher. Northcodes Landingpages für Oldenburger Unternehmen erreichen 8–15 % – durch konsequente Conversion-Optimierung, präzises Copywriting und A/B-Testing. Das Ergebnis: mehr Kundenanfragen aus demselben Werbebudget.',
    stats: [
      { value: '8–15 %', label: 'Ø Conversion Rate unserer LP' },
      { value: '3×', label: 'mehr Leads bei gleichem Budget' },
      { value: '72 h', label: 'bis zum ersten Entwurf' },
      { value: '0 €', label: 'Erstgespräch & LP-Analyse' },
    ],
    services: [
      { icon: '🎯', title: 'B2B-Leadgenerierungs-LP', desc: 'Landingpages für Google Ads, LinkedIn und E-Mail-Kampagnen – optimiert für Oldenburger B2B-Entscheider.' },
      { icon: '💻', title: 'Produkt-Landingpages', desc: 'Überzeugende Produktseiten mit starker Headline, Social Proof und klarem CTA für maximale Conversion.' },
      { icon: '🔍', title: 'SEO-Landingpages', desc: 'Organisch rankende Seiten für „Service + Oldenburg"-Keywords – Traffic ohne laufende Werbekosten.' },
      { icon: '🔄', title: 'A/B-Testing & CRO', desc: 'Kontinuierliche Optimierung mit echten Daten – jede Änderung messbar, kein Bauchgefühl.' },
    ],
    benefits: [
      { title: 'Conversion-Fokus', desc: 'Jede Designentscheidung dient einem Ziel: die Conversion Rate maximieren – kein Design um des Designs willen.' },
      { title: 'Oldenburger Marktkenntnis', desc: 'Wir kennen die Entscheidungsstrukturen und Sprache des Oldenburger Mittelstands und B2B-Marktes.' },
      { title: 'Schnelle Lieferung', desc: 'Erster Entwurf in 72 Stunden. Live-Schaltung in 1 Woche. Keine Monatewartezeiten.' },
      { title: 'Messbar', desc: 'Tracking, Heatmaps und Conversion-Berichte ab Tag 1 – Sie sehen genau, was Ihre Landingpage leistet.' },
    ],
    processSteps: [
      { step: 1, title: 'CRO-Analyse', desc: 'Analyse Ihrer Zielgruppe, Wettbewerber-LPs und besten Keywords für den Oldenburger Markt.' },
      { step: 2, title: 'Strategie & Wireframe', desc: 'Conversion-Struktur, Headline-Varianten und CTA-Strategie – bevor eine Zeile Code geschrieben wird.' },
      { step: 3, title: 'Design & Entwicklung', desc: 'Professionelles Design mit Conversion-Elementen, mobiloptimiert und blitzschnell.' },
      { step: 4, title: 'A/B-Test & Optimierung', desc: 'Testlauf mit echtem Traffic, Auswertung und iterative Optimierung bis zur Ziel-Conversion-Rate.' },
    ],
    caseStudy: {
      result: 'Oldenburger B2B-Dienstleister – Conversion Rate von 1,8 % auf 11,4 % gesteigert',
      description: 'Ein B2B-Softwareanbieter aus Oldenburg schaltete Google Ads mit 1.500 €/Monat Budget – aber nur 1,8 % der Besucher fragten an. Northcode erstellte eine neue Landingpage mit A/B-Testing. Nach 6 Wochen: Conversion Rate 11,4 %, Kosten pro Lead sanken von 83 € auf 13 €.',
      m1: '11,4 %', m1Label: 'Conversion Rate (von 1,8 %)',
      m2: '−84 %', m2Label: 'Kosten pro Lead',
    },
    faqs: [
      { question: 'Was kostet eine professionelle Landingpage in Oldenburg?',
        answer: 'Einfache Landingpage (1 Ziel, keine Integrationen): ab 600 €. Vollständige B2B-Leadgenerierungs-LP mit A/B-Testing und CRM-Integration: 1.200–2.500 €. Im Erstgespräch erhalten Sie ein transparentes Festpreisangebot.' },
      { question: 'Wie lange dauert es, bis meine Oldenburg-Landingpage live ist?',
        answer: 'Erster Entwurf: 72 Stunden. Live-Schaltung: 5–7 Werktage. Für dringende Kampagnen auch in 48 Stunden möglich.' },
      { question: 'Wie unterscheidet sich eine Landingpage von meiner Website?',
        answer: 'Eine Landingpage hat ein einziges Ziel (Anfrage, Demo-Buchung, Download) und eliminiert alle Ablenkungen. Websites haben viele Seiten und Ziele. LPs konvertieren Werbetraffic bis zu 10× besser als Startseiten.' },
    ],
    relatedPages: [
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'Leadgenerierung B2B Oldenburg', href: '/leadgenerierung-b2b-oldenburg' },
      { title: 'SEO für Firmen Oldenburg', href: '/seo-fuer-firmen-oldenburg' },
      { title: 'Website Optimierung Oldenburg', href: '/website-optimierung-oldenburg' },
      { title: 'Landingpage Delmenhorst', href: '/landingpage-delmenhorst' },
    ],
  },
];

export const oldenburgMoneySlugs = oldenburgMoneyPages.map(p => p.slug);
