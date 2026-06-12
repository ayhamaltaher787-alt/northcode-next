import { PillarPageData } from './local-seo-data';

/**
 * 2 Delmenhorst Money Pages (Pillar / BOFU):
 *   - unternehmenssysteme-delmenhorst
 *   - unternehmensvideo-delmenhorst
 *
 * Ton: pragmatisch, direkt, KMU/Handwerk, schnelle Conversion
 * Stil: Northcode SEO-Schreibstil – kein KI-Buzzword-Kauderwelsch
 */
export const delmenhorstMoneyPages: PillarPageData[] = [

  /* ── 1. UNTERNEHMENSSYSTEME ──────────────────────────────────────────── */
  {
    slug: 'unternehmenssysteme-delmenhorst',
    service: 'Unternehmenssysteme',
    city: 'Delmenhorst',
    metaTitle: 'Unternehmenssysteme Delmenhorst – CRM, ERP & digitale Tools | Northcode',
    metaDescription: 'Die richtigen Systeme für Ihr Unternehmen in Delmenhorst: CRM, ERP, Projektmanagement & mehr. Auswahl, Einrichtung, Schulung – alles aus einer Hand.',
    h1: 'Unternehmenssysteme in Delmenhorst',
    subtitle: 'Die richtigen Tools. Sauber eingerichtet. Tatsächlich genutzt.',
    intro: 'Viele Betriebe in Delmenhorst haben Software im Einsatz, die theoretisch gut sein könnte – aber in der Praxis kaum genutzt wird. Zu kompliziert, zu wenig eingerichtet, oder einfach das falsche Produkt. Ein Unternehmenssystem hilft nur dann, wenn es wirklich zu den Abläufen des Betriebs passt.',
    stats: [
      { value: '1–2 Tage', label: 'Einführung inkl. Schulung' },
      { value: 'ab 800 €', label: 'CRM-Einrichtung komplett' },
      { value: '100 %', label: 'neutrale Systemempfehlung' },
      { value: '0 €', label: 'Erstgespräch & Systemcheck' },
    ],
    services: [
      { icon: '👥', title: 'CRM-Systeme', desc: 'Kunden- und Auftragsverwaltung, die Ihr Team tatsächlich nutzt. Empfehlung, Einrichtung und Schulung.' },
      { icon: '🗂️', title: 'Projektmanagement-Tools', desc: 'Aufgaben, Fristen und Zuständigkeiten auf einen Blick – für Teams jeder Größe.' },
      { icon: '📊', title: 'Reporting & Dashboards', desc: 'Umsatz, offene Angebote und wichtige Kennzahlen – sichtbar ohne Stunden in Excel.' },
      { icon: '🔗', title: 'System-Integration', desc: 'Buchhaltung, CRM und E-Mail sprechen miteinander. Keine doppelte Datenpflege mehr.' },
    ],
    benefits: [
      { title: 'Neutral beraten', desc: 'Northcode empfiehlt kein System aus Provisionsinteressen – sondern das, was für Ihren Betrieb sinnvoll ist.' },
      { title: 'Wirklich genutzt', desc: 'Wir richten nur ein, was Ihr Team auch versteht und täglich benutzt.' },
      { title: 'Schnell einsatzbereit', desc: 'In der Regel laufen erste Systeme nach 1–2 Tagen produktiv. Kein monatelanger Rollout.' },
      { title: 'Schulung inklusive', desc: 'Jedes System kommt mit einer praxisnahen Einweisung für Sie und Ihr Team.' },
    ],
    processSteps: [
      { step: 1, title: 'Anforderungsaufnahme', desc: 'Was soll das System können? Welche Prozesse soll es abdecken? Welche Systeme sind bereits im Einsatz?' },
      { step: 2, title: 'Empfehlung & Auswahl', desc: 'Northcode schlägt 1–2 passende Systeme vor. Vergleich, Kosten, Vor- und Nachteile – transparent dargelegt.' },
      { step: 3, title: 'Einrichtung & Datenmigration', desc: 'Das System wird vollständig konfiguriert. Bestehende Kontakte und Daten werden übertragen.' },
      { step: 4, title: 'Schulung & Übergabe', desc: 'Ihr Team wird eingewiesen. Northcode bleibt für Rückfragen erreichbar.' },
    ],
    caseStudy: {
      result: 'Sanitärbetrieb Delmenhorst – CRM eingeführt, 6 Stunden Suchaufwand pro Woche eliminiert',
      description: 'Ein Sanitär- und Heizungsbetrieb aus Delmenhorst verwaltete Kundenkontakte in Outlook, Aufträge in Excel, Termine im Papierkalender. Northcode richtete ein schlankes CRM ein. Ergebnis: Alle Informationen an einem Ort, Reaktionszeit auf Anfragen halbiert.',
      m1: '−6 h', m1Label: 'Suchaufwand pro Woche',
      m2: '−50 %', m2Label: 'Reaktionszeit auf Anfragen',
    },
    faqs: [
      {
        question: 'Welches CRM-System empfehlen Sie für kleine Betriebe in Delmenhorst?',
        answer: 'Das hängt von der Größe und dem Vertriebsprozess ab. Für die meisten Handwerks- und Dienstleistungsbetriebe in Delmenhorst empfehlen wir schlanke, günstige Systeme – keine Enterprise-Software. Im Gespräch finden wir gemeinsam die passende Option.',
      },
      {
        question: 'Muss ich meine bestehenden Daten neu eingeben?',
        answer: 'Nein. Northcode übernimmt die Datenmigration aus Excel, Outlook oder Ihrem bisherigen System. Kein manueller Aufwand für Sie.',
      },
    ],
    relatedPages: [
      { title: 'Digitalisierung Delmenhorst', href: '/digitalisierung-delmenhorst' },
      { title: 'Prozessautomatisierung Delmenhorst', href: '/prozessautomatisierung-delmenhorst' },
      { title: 'CRM KMU Delmenhorst', href: '/crm-kmu-delmenhorst' },
    ],
  },

  /* ── 2. UNTERNEHMENSVIDEO ────────────────────────────────────────────── */
  {
    slug: 'unternehmensvideo-delmenhorst',
    service: 'Unternehmensvideo',
    city: 'Delmenhorst',
    metaTitle: 'Unternehmensvideo Delmenhorst – Imagefilm für Ihren Betrieb | Northcode',
    metaDescription: 'Professionelle Unternehmensvideos für Betriebe in Delmenhorst: Imagefilm, Leistungsvideos & Social-Media-Clips. Authentisch, schnell produziert, lokal.',
    h1: 'Unternehmensvideo in Delmenhorst',
    subtitle: 'Zeigen Sie, was Ihr Betrieb kann – bevor der erste Anruf kommt.',
    intro: 'Ein Besucher auf Ihrer Website entscheidet in wenigen Sekunden, ob er bleibt oder weiterklickt. Text liest er vielleicht. Ein Video schaut er sich an. Für lokale Betriebe in Delmenhorst ist ein gutes Unternehmensvideo oft der stärkste Vertrauensträger – weil es zeigt, wer dahintersteckt.',
    stats: [
      { value: '2–3×', label: 'längere Verweildauer auf der Website' },
      { value: '1 Tag', label: 'Drehtag vor Ort in Delmenhorst' },
      { value: 'ab 890 €', label: 'fertiges Unternehmensvideo' },
      { value: '0 €', label: 'Erstgespräch & Konzeptskizze' },
    ],
    services: [
      { icon: '🎬', title: 'Imagefilm', desc: 'Ein kurzes, professionelles Video, das Ihren Betrieb, Ihre Leistungen und Ihr Team vorstellt.' },
      { icon: '📱', title: 'Social-Media-Clips', desc: 'Kurze Videoclips für Instagram, LinkedIn oder Facebook – abgestimmt auf die jeweilige Plattform.' },
      { icon: '🏗️', title: 'Leistungsvideos', desc: 'Zeigen Sie, wie Ihre Arbeit in der Praxis aussieht – für mehr Vertrauen bei potenziellen Kunden.' },
      { icon: '🎙️', title: 'Mitarbeitervideos', desc: 'Authentische Videos, die zeigen, wer in Ihrem Betrieb arbeitet. Hilfreich bei der Mitarbeitergewinnung.' },
    ],
    benefits: [
      { title: 'Lokal produziert', desc: 'Northcode kommt zu Ihnen nach Delmenhorst. Kein Versenden von Material, kein Aufwand für Sie.' },
      { title: 'Kein Drehbuch nötig', desc: 'Wir führen das Gespräch, stellen die Fragen – Sie müssen keinen Text auswendig lernen.' },
      { title: 'Schnelle Lieferung', desc: 'Fertiges Video in der Regel innerhalb von 7–10 Werktagen nach dem Drehtag.' },
      { title: 'Mehrfach verwertbar', desc: 'Ein Drehtag liefert Material für Website, Social Media und Bewerbungsunterlagen.' },
    ],
    processSteps: [
      { step: 1, title: 'Kurze Vorbesprechung', desc: 'Was soll das Video aussagen? Welche Botschaft, welche Zielgruppe, welcher Kanal?' },
      { step: 2, title: 'Drehtag in Delmenhorst', desc: 'Wir kommen zu Ihnen, filmen Ihren Betrieb, Ihre Arbeit und Ihr Team. Kein Aufwand Ihrer Seite.' },
      { step: 3, title: 'Schnitt & Vertonung', desc: 'Das Videomaterial wird geschnitten, mit Musik unterlegt und optisch aufbereitet.' },
      { step: 4, title: 'Übergabe & Einbindung', desc: 'Sie erhalten das fertige Video – auf Wunsch auch direkt in Ihre Website eingebunden.' },
    ],
    caseStudy: {
      result: 'Elektriker Delmenhorst – Bewerberzahl verdreifacht nach Mitarbeitervideo',
      description: 'Ein Elektrobetrieb aus Delmenhorst suchte seit Monaten einen Gesellen. Nach einem eintägigen Dreh und einem 90-Sekunden-Mitarbeitervideo auf LinkedIn: 14 Bewerbungen in 6 Wochen. Drei davon wurden eingestellt.',
      m1: '14', m1Label: 'Bewerbungen in 6 Wochen',
      m2: '3×', m2Label: 'mehr als vorher in 6 Monaten',
    },
    faqs: [
      {
        question: 'Muss ich für das Video etwas vorbereiten?',
        answer: 'Nein. Northcode übernimmt die Gesprächsführung und das Konzept. Sie müssen nichts auswendig lernen und kein Skript schreiben. Wir stellen die richtigen Fragen – der Rest ergibt sich.',
      },
      {
        question: 'Kann ich das Video auch für Mitarbeitergewinnung nutzen?',
        answer: 'Ja – und das ist einer der häufigsten Einsatzzwecke. Gerade für Handwerksbetriebe in Delmenhorst ist ein authentisches Teamvideo auf LinkedIn oder Indeed ein effektiver Weg, Fachkräfte anzusprechen.',
      },
      {
        question: 'Was kostet ein Unternehmensvideo in Delmenhorst?',
        answer: 'Ein einfaches Imagefilm-Paket (1 Drehtag, 90–120 Sek. Video) ab 890 €. Mit Social-Media-Versionen und zusätzlichen Clips: ab 1.400 €.',
      },
    ],
    relatedPages: [
      { title: 'Webdesign Delmenhorst', href: '/webdesign-delmenhorst' },
      { title: 'Imagefilm Delmenhorst', href: '/imagefilm-delmenhorst' },
      { title: 'Leadgenerierung Delmenhorst', href: '/leadgenerierung-delmenhorst' },
    ],
  },
];

export const delmenhorstMoneySlugs = delmenhorstMoneyPages.map(p => p.slug);
