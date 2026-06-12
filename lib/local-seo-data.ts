// ─── Typen ────────────────────────────────────────────────────────────────────
export interface ServiceItem  { icon: string; title: string; desc: string }
export interface Benefit       { title: string; desc: string }
export interface ProcessStep   { step: number; title: string; desc: string }
export interface FAQ           { question: string; answer: string }
export interface RelatedPage   { title: string; href: string }

export interface PillarPageData {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  city: string
  service: string
  intro: string
  stats: { value: string; label: string }[]
  services: ServiceItem[]
  benefits: Benefit[]
  processSteps: ProcessStep[]
  caseStudy: { result: string; description: string; m1: string; m1Label: string; m2: string; m2Label: string }
  faqs: FAQ[]
  relatedPages: RelatedPage[]
}

// ─── Pillar-Page Daten ────────────────────────────────────────────────────────
export const pillarPages: PillarPageData[] = [

  /* ── 1 · KI-Automatisierung Bremen ─────────────────────────────────────── */
  {
    slug: "ki-automatisierung-bremen",
    metaTitle: "KI-Automatisierung Bremen – Prozesse digitalisieren | Northcode",
    metaDescription: "Modernisieren Sie Ihr Unternehmen in Bremen mit KI-Automatisierung. Chatbots, Workflow-Optimierung & Business-Systeme. Kostenfreies Erstgespräch sichern!",
    h1: "KI-Automatisierung in Bremen",
    subtitle: "Smarte Prozesse. Weniger Aufwand. Mehr Wachstum.",
    city: "Bremen",
    service: "KI-Automatisierung",
    intro: "Unternehmen in Bremen stehen täglich vor denselben Herausforderungen: zeitaufwändige Routineaufgaben, langsame Kundenanfragen und manuelle Prozesse, die wertvolle Ressourcen binden. Northcode entwickelt maßgeschneiderte KI-Automatisierungslösungen – von intelligenten Chatbots bis zu vollautomatischen Workflows – die Ihr Bremer Unternehmen effizienter, schneller und wettbewerbsfähiger machen.",
    stats: [
      { value: "↑268 %", label: "Ø ROI in 3 Monaten" },
      { value: "−42 h", label: "Gesparte Arbeitszeit/Woche" },
      { value: "24/7", label: "Automatisiert aktiv" },
      { value: "<48 h", label: "Erstes Live-System" },
    ],
    services: [
      { icon: "🤖", title: "KI-Chatbots & Dialogsysteme", desc: "Intelligente Chatbots für Kundensupport, Leadgenerierung und FAQ-Beantwortung – rund um die Uhr aktiv, ohne Personalaufwand." },
      { icon: "⚙️", title: "Workflow-Automatisierung", desc: "Rechnungsbearbeitung, E-Mail-Routing, Terminplanung – wir automatisieren repetitive Prozesse und sparen Ihrem Team wertvolle Stunden." },
      { icon: "📊", title: "Datenanalyse & Reporting", desc: "Automatische Auswertungen, Dashboards und Berichte auf Knopfdruck – statt stundenlanger manueller Arbeit in Excel." },
      { icon: "🔗", title: "System-Integrationen", desc: "Verbindung Ihrer bestehenden Tools (CRM, ERP, E-Mail) mit KI-Schnittstellen – nahtlos, zuverlässig und skalierbar." },
    ],
    benefits: [
      { title: "Lokal & persönlich", desc: "Als Nordwest-Agentur kennen wir den Bremer Markt und sprechen Ihre Sprache – kein Konzern, sondern direkter Draht." },
      { title: "Schnelle Umsetzung", desc: "Erste automatisierte Prozesse gehen oft schon in 48 Stunden live – kein monatelanger Rollout." },
      { title: "Transparente Kosten", desc: "Keine versteckten Gebühren. Sie wissen vor dem Start genau, was das Projekt kostet und wann es sich amortisiert." },
      { title: "Technologie-unabhängig", desc: "Wir nutzen die beste KI für Ihren Fall – ob OpenAI, Claude, Llama oder eigene Modelle." },
    ],
    processSteps: [
      { step: 1, title: "Kostenloser Potenzial-Check", desc: "In einem 30-minütigen Gespräch analysieren wir Ihre Prozesse und zeigen konkrete Automatisierungspotenziale auf." },
      { step: 2, title: "Konzept & Roadmap", desc: "Wir erstellen einen klaren Umsetzungsplan mit Zeitrahmen, Kosten und erwarteten Einsparungen." },
      { step: 3, title: "Entwicklung & Test", desc: "Unser Team baut und testet das System – transparent, iterativ und mit Ihrem Feedback." },
      { step: 4, title: "Go-live & Support", desc: "Launch des Systems, Mitarbeiter-Einweisung und dauerhafter Support für einen reibungslosen Betrieb." },
    ],
    caseStudy: {
      result: "Bremer Dienstleister automatisiert Kundenanfragen",
      description: "Ein mittelständisches Serviceunternehmen aus Bremen erhielt täglich über 80 gleichartige Kundenanfragen per E-Mail. Nach Einführung eines KI-Chatbots werden 73 % der Anfragen vollautomatisch beantwortet – das Team spart 38 Stunden pro Woche.",
      m1: "73 %", m1Label: "Anfragen automatisch beantwortet",
      m2: "−38 h", m2Label: "Arbeitszeit gespart/Woche",
    },
    faqs: [
      { question: "Was kostet KI-Automatisierung in Bremen?", answer: "Die Kosten hängen vom Umfang ab. Einfache Chatbot-Lösungen starten ab ca. 800 €, komplexe Workflow-Automatisierungen kosten mehr. In unserem kostenlosen Erstgespräch erhalten Sie einen konkreten Preisrahmen." },
      { question: "Wie schnell ist ein KI-System einsatzbereit?", answer: "Einfache Systeme können bereits nach 48 Stunden live gehen. Umfangreichere Projekte dauern typisch 1–3 Wochen. Wir arbeiten iterativ – Sie sehen früh erste Ergebnisse." },
      { question: "Muss mein Unternehmen technisches Know-how mitbringen?", answer: "Nein. Wir begleiten Sie von der Idee bis zum fertigen System. Ihre Mitarbeiter erhalten eine verständliche Einführung ohne IT-Vorkenntnisse." },
      { question: "Welche KI-Anbieter nutzen Sie?", answer: "Wir wählen den besten Anbieter für Ihren Anwendungsfall – darunter OpenAI, Anthropic Claude, n8n, Make und eigene Modelle. Datenschutz nach DSGVO ist dabei immer gewährleistet." },
      { question: "Lohnt sich KI-Automatisierung auch für kleine Unternehmen in Bremen?", answer: "Absolut. Gerade kleine Unternehmen profitieren besonders stark, weil jede gesparte Stunde direkt den Inhabern zugutekommt. Ab ca. 5 wiederholenden Aufgaben pro Tag rechnet sich Automatisierung in der Regel innerhalb von 3 Monaten." },
    ],
    relatedPages: [
      { title: "KI für Handwerker Bremen", href: "/ki-fuer-handwerker-bremen" },
      { title: "KI für Steuerberater Bremen", href: "/ki-fuer-steuerberater-bremen" },
      { title: "KI-Kosten Bremen", href: "/ki-kosten-bremen" },
      { title: "Webdesign Bremen", href: "/webdesign-bremen" },
      { title: "Digitalisierung Bremen", href: "/digitalisierung-bremen" },
      { title: "KI-Automatisierung Oldenburg", href: "/ki-automatisierung-oldenburg" },
    ],
  },

  /* ── 2 · Webdesign Bremen ───────────────────────────────────────────────── */
  {
    slug: "webdesign-bremen",
    metaTitle: "Webdesign Bremen – Professionelle Websites für KMU | Northcode",
    metaDescription: "Professionelles Webdesign in Bremen: Conversion-optimierte Websites, Landingpages & Onlineshops. Schnell, modern, mobiloptimiert. Jetzt Angebot anfordern!",
    h1: "Webdesign in Bremen",
    subtitle: "Websites, die überzeugen – und Kunden gewinnen.",
    city: "Bremen",
    service: "Webdesign",
    intro: "Eine professionelle Website ist das wichtigste Aushängeschild Ihres Unternehmens. Northcode entwickelt Websites für Bremer Unternehmen, die nicht nur gut aussehen, sondern aktiv Kunden gewinnen: schnell ladend, mobiloptimiert, conversion-fokussiert und gefunden bei Google. Vom Einzelunternehmer bis zum mittelständischen Betrieb.",
    stats: [
      { value: "+198 %", label: "Ø Sichtbarkeit nach Relaunch" },
      { value: "+50 %", label: "Mehr Anfragen nach Launch" },
      { value: "<2 s", label: "Ladezeit (Core Web Vitals)" },
      { value: "100 %", label: "Mobiloptimiert" },
    ],
    services: [
      { icon: "💻", title: "Business-Websites", desc: "Repräsentative Unternehmenswebsites mit klarer Struktur, modernem Design und überzeugenden Texten – für nachhaltigen ersten Eindruck." },
      { icon: "🎯", title: "Landingpages & Kampagnenseiten", desc: "Conversion-optimierte Seiten für Google Ads, Social Media oder E-Mail-Kampagnen mit klaren CTAs und messbarem ROI." },
      { icon: "🛒", title: "Onlineshops & E-Commerce", desc: "Shops auf Basis von Shopify oder Next.js – benutzerfreundlich, schnell und verkaufsoptimiert für Bremer Händler." },
      { icon: "🔍", title: "SEO-Optimierung", desc: "Technisches SEO, lokale Optimierung für Suchbegriffe in Bremen und Content-Strategie für organisches Wachstum." },
    ],
    benefits: [
      { title: "Bremer Marktkenntnis", desc: "Wir kennen den lokalen Wettbewerb und optimieren Ihre Website gezielt für Bremer Suchanfragen." },
      { title: "All-in-One aus einer Hand", desc: "Design, Entwicklung, Texte, SEO und Hosting – alles bei Northcode, keine Koordination mehrerer Dienstleister." },
      { title: "Schnelle Lieferung", desc: "Erste Website-Entwürfe in 72 Stunden. Launch oft schon nach 1–2 Wochen möglich." },
      { title: "Langfristiger Partner", desc: "Kein Einmalgeschäft: Wir betreuen Ihre Website dauerhaft, aktualisieren Inhalte und optimieren kontinuierlich." },
    ],
    processSteps: [
      { step: 1, title: "Analyse & Briefing", desc: "Wir verstehen Ihr Geschäft, Ihre Zielgruppe in Bremen und Ihre Ziele – und erarbeiten gemeinsam das Konzept." },
      { step: 2, title: "Design-Entwurf", desc: "Ihnen werden 2 Design-Varianten präsentiert. Feedbackrunden inklusive – bis alles stimmt." },
      { step: 3, title: "Entwicklung & Test", desc: "Technische Umsetzung auf neuesten Standards, Leistungsoptimierung und Test auf allen Endgeräten." },
      { step: 4, title: "Launch & SEO-Setup", desc: "Website geht live, Google Analytics, Search Console und lokale SEO werden eingerichtet." },
    ],
    caseStudy: {
      result: "Handwerksunternehmen aus Bremen verdreifacht Anfragen",
      description: "Ein Sanitärbetrieb aus Bremen-Vegesack hatte eine veraltete Website, die kaum Anfragen generierte. Nach dem Relaunch mit Northcode stieg die Anzahl der Kontaktanfragen um 312 % – durch gezielte lokale SEO und eine neue, mobiloptimierte Website.",
      m1: "+312 %", m1Label: "Mehr Kontaktanfragen",
      m2: "#1", m2Label: "Google-Platzierung lokal",
    },
    faqs: [
      { question: "Was kostet eine professionelle Website in Bremen?", answer: "Einfache Business-Websites beginnen bei ca. 1.200 €, Landingpages ab 600 €, komplexe Projekte mehr. Im kostenlosen Erstgespräch erhalten Sie ein konkretes Angebot." },
      { question: "Wie lange dauert eine Website-Erstellung?", answer: "Eine Landingpage in 3–5 Tagen, eine vollständige Unternehmenswebsite typisch in 1–3 Wochen. Wir kommunizieren transparent über Zeitpläne." },
      { question: "Kann ich die Website später selbst bearbeiten?", answer: "Ja. Alle unsere Websites erhalten ein benutzerfreundliches CMS. Sie können Texte, Bilder und Preise eigenständig aktualisieren – ohne Programmierkenntnisse." },
      { question: "Übernehmt ihr auch Websites in Zusammenarbeit mit anderen Agenturen?", answer: "Wir arbeiten ausschließlich als direkte Ansprechpartner für unsere Kunden. Das hält Kommunikationswege kurz und Qualität hoch." },
      { question: "Macht Ihr auch SEO für meine Branche in Bremen?", answer: "Ja. Wir optimieren gezielt für Ihre relevanten Suchbegriffe in Bremen und Umgebung – von der technischen SEO bis zu lokalen Google-Business-Einträgen." },
    ],
    relatedPages: [
      { title: "SEO-Agentur Bremen", href: "/seo-agentur-bremen" },
      { title: "Leadgenerierung Bremen", href: "/leadgenerierung-bremen" },
      { title: "Webdesign Kosten Bremen", href: "/webdesign-kosten-bremen" },
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
      { title: "Digitalisierung Bremen", href: "/digitalisierung-bremen" },
      { title: "Webdesign Oldenburg", href: "/webdesign-oldenburg" },
    ],
  },

  /* ── 3 · Digitalisierung Bremen ─────────────────────────────────────────── */
  {
    slug: "digitalisierung-bremen",
    metaTitle: "Digitalisierung Bremen – KMU digital transformieren | Northcode",
    metaDescription: "Digitalisierung für Unternehmen in Bremen: Prozesse modernisieren, Kosten senken, Wettbewerbsfähigkeit sichern. Northcode begleitet Ihren Weg. Jetzt beraten lassen!",
    h1: "Digitalisierung in Bremen",
    subtitle: "Ihr digitaler Wandel – pragmatisch und ergebnisorientiert.",
    city: "Bremen",
    service: "Digitalisierung",
    intro: "Digitalisierung ist kein Selbstzweck – sie muss sich rechnen. Northcode begleitet kleine und mittlere Unternehmen in Bremen beim digitalen Wandel: von der Analyse der größten Potenziale über die Einführung digitaler Tools bis hin zur vollständigen Transformation von Geschäftsprozessen. Pragmatisch, budgetbewusst und auf Ihren Bremer Markt zugeschnitten.",
    stats: [
      { value: "−35 %", label: "Ø Prozesskosten nach Digitalisierung" },
      { value: "4×", label: "Schnellere Bearbeitung" },
      { value: "10+", label: "Digitalisierungsprojekte in NW-DE" },
      { value: "90 %", label: "Kundenzufriedenheit" },
    ],
    services: [
      { icon: "🗺️", title: "Digitalisierungsstrategie", desc: "Analyse Ihrer aktuellen Prozesse, Identifikation der größten Hebel und Entwicklung eines realistischen Digitalisierungsfahrplans." },
      { icon: "☁️", title: "Cloud-Migration & -Einführung", desc: "Umzug von lokalen Systemen in die Cloud – sicher, DSGVO-konform und mit klarer Kosten-Nutzen-Bilanz." },
      { icon: "📱", title: "Digitale Kundenkommunikation", desc: "Online-Buchungssysteme, digitale Formulare, automatisierte E-Mails – mehr Service mit weniger Aufwand." },
      { icon: "📂", title: "Papierloses Büro", desc: "Digitale Aktenführung, elektronische Unterschriften und automatische Archivierung für mehr Übersicht und gesetzliche Sicherheit." },
    ],
    benefits: [
      { title: "Fördermittel-Kenntnis", desc: "Wir kennen aktuelle Digitalisierungsförderprogramme für Bremer und Niedersächsische KMU und helfen beim Antrag." },
      { title: "Kein Tech-Overkill", desc: "Wir empfehlen nur, was wirklich Sinn ergibt – keine unnötigen Tools, kein aufgeblähtes Budget." },
      { title: "Mitarbeiter mitnehmen", desc: "Schulungen und klare Prozessdokumentationen sorgen dafür, dass Ihr Team die neuen Systeme schnell und gerne nutzt." },
      { title: "Messbare Ergebnisse", desc: "Klare KPIs von Anfang an: Zeit gespart, Kosten gesenkt, Fehlerquote reduziert – alles nachvollziehbar." },
    ],
    processSteps: [
      { step: 1, title: "Ist-Analyse", desc: "Wir schauen uns Ihre aktuellen Prozesse genau an und identifizieren die 3 größten Quick-Wins für Ihr Bremer Unternehmen." },
      { step: 2, title: "Digitalisierungsplan", desc: "Priorisierter Plan mit konkreten Maßnahmen, Zeitplan und Budgetschätzung – realistisch und umsetzbar." },
      { step: 3, title: "Schrittweise Umsetzung", desc: "Iterative Einführung: Erst ein Bereich, dann der nächste. So lernt Ihr Team mit und Risiken bleiben minimal." },
      { step: 4, title: "Optimierung & Begleitung", desc: "Regelmäßige Überprüfung der Ergebnisse und Anpassung des Plans – Digitalisierung ist kein Einmal-Projekt." },
    ],
    caseStudy: {
      result: "Bremer Steuerbüro digitalisiert Mandantenprozesse",
      description: "Eine Steuerkanzlei in Bremen-Mitte verwaltete Mandantenunterlagen noch komplett analog. Nach der Digitalisierung mit Northcode werden alle Dokumente digital erfasst, automatisch archiviert und sind von überall abrufbar – die Bearbeitungszeit pro Mandat sank um 60 %.",
      m1: "−60 %", m1Label: "Bearbeitungszeit pro Mandat",
      m2: "0 Papier", m2Label: "Volldigitale Aktenführung",
    },
    faqs: [
      { question: "Wo fange ich mit der Digitalisierung an?", answer: "Starten Sie dort, wo der Schmerz am größten ist – oft sind das Kundenkorrespondenz, Rechnungsbearbeitung oder Terminplanung. In unserem kostenlosen Analyse-Gespräch zeigen wir die größten Hebel für Ihr Unternehmen auf." },
      { question: "Gibt es Fördermittel für die Digitalisierung in Bremen?", answer: "Ja. Es gibt verschiedene Programme auf Bundes- und Landesebene (z.B. Digital Jetzt des BMWi, Förderprogramme der Bremer Aufbau-Bank). Wir beraten Sie gern zu aktuellen Möglichkeiten." },
      { question: "Müssen meine Mitarbeiter alles neu lernen?", answer: "Wir achten darauf, intuitive Systeme einzuführen und begleiten den Wandel mit Schulungen. Ziel ist es, dass Ihr Team die neuen Werkzeuge als Erleichterung erlebt." },
      { question: "Was wenn ein digitales System ausfällt?", answer: "Alle unsere Lösungen haben Backup-Konzepte und sind auf Ausfallsicherheit ausgelegt. Cloud-Systeme haben oft höhere Verfügbarkeit als lokale Server." },
    ],
    relatedPages: [
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
      { title: "Prozessautomatisierung Bremen", href: "/prozessautomatisierung-bremen" },
      { title: "Webdesign Bremen", href: "/webdesign-bremen" },
      { title: "Digitalisierung Oldenburg", href: "/digitalisierung-oldenburg" },
      { title: "Digitalisierung Delmenhorst", href: "/digitalisierung-delmenhorst" },
    ],
  },

  /* ── 4 · Unternehmenssysteme Bremen ────────────────────────────────────── */
  {
    slug: "unternehmenssysteme-bremen",
    metaTitle: "Unternehmenssysteme Bremen – ERP, CRM & Business-Software | Northcode",
    metaDescription: "Individuelle Business-Systeme, CRM und ERP-Lösungen für Unternehmen in Bremen. Maßgeschneiderte Software statt teurer Standardlösungen. Jetzt beraten lassen!",
    h1: "Unternehmenssysteme in Bremen",
    subtitle: "Individuelle Software für Ihren Bremer Betrieb.",
    city: "Bremen",
    service: "Unternehmenssysteme",
    intro: "Standardsoftware passt selten perfekt zum eigenen Unternehmen – und kostet trotzdem viel. Northcode entwickelt maßgeschneiderte Business-Systeme, CRM- und ERP-Lösungen für Bremer Unternehmen: genau so gebaut, wie Sie Ihre Prozesse leben. Kein unnötiger Overhead, keine Lizenzgebühren für Features, die Sie nie nutzen.",
    stats: [
      { value: "−40 %", label: "Software-Lizenzkosten" },
      { value: "3×", label: "Schnellere Prozessabläufe" },
      { value: "100 %", label: "Maßgeschneidert" },
      { value: "DSGVO", label: "Konform & sicher" },
    ],
    services: [
      { icon: "📋", title: "CRM-Systeme", desc: "Kundenmanagement maßgeschneidert: Kontakte, Deals, Aufgaben und Kommunikation zentral in einem System – ohne Schnickschnack." },
      { icon: "🏭", title: "ERP-Integrationen", desc: "Verbindung Ihrer bestehenden ERP-Lösung mit anderen Systemen oder Entwicklung einer leichtgewichtigen ERP-Alternative." },
      { icon: "📦", title: "Lagerverwaltung & Logistik", desc: "Echtzeit-Überblick über Lagerbestände, automatische Bestellvorschläge und Lieferverfolgung für Bremer Handels- und Produktionsunternehmen." },
      { icon: "🔄", title: "Workflow-Management", desc: "Digitale Abläufe für Genehmigungen, Aufgabenverteilung und Statusverfolgung – Schluss mit Chaos in der internen Kommunikation." },
    ],
    benefits: [
      { title: "Keine Lizenzkosten", desc: "Individuelle Software gehört Ihnen. Einmalige Entwicklungskosten statt monatlicher Lizenzgebühren für jede Nutzerin." },
      { title: "Nahtlose Integration", desc: "Wir verbinden neue Systeme mit Ihrer bestehenden IT-Landschaft – keine Insellösungen, keine Datenverluste." },
      { title: "Skalierbar", desc: "Ihr System wächst mit Ihrem Unternehmen. Neue Features können jederzeit ergänzt werden." },
      { title: "Volle Datenkontrolle", desc: "Ihre Daten bleiben auf Ihren Servern oder in einer definierten Cloud – keine Abhängigkeit von externen Anbietern." },
    ],
    processSteps: [
      { step: 1, title: "Prozess-Mapping", desc: "Wir dokumentieren Ihre aktuellen Abläufe und identifizieren, wo ein System echten Mehrwert schafft." },
      { step: 2, title: "Systemarchitektur", desc: "Entwurf der Systemstruktur mit klaren Schnittstellen, Datenmodell und Nutzerverwaltung." },
      { step: 3, title: "Agile Entwicklung", desc: "Iterative Entwicklung mit regelmäßigen Demo-Terminen – Sie sehen Fortschritte und können früh eingreifen." },
      { step: 4, title: "Migration & Training", desc: "Datenmigration aus Altsystemen, Schulung aller Nutzer und dokumentierte Bedienungsanleitung." },
    ],
    caseStudy: {
      result: "Bremer Großhändler ersetzt Excel durch CRM",
      description: "Ein Großhändler in Bremen verwaltete 2.400 Kundenkontakte in mehreren Excel-Tabellen. Nach der Einführung eines maßgeschneiderten CRM-Systems mit automatischen Wiedervorlagereminders stieg der Umsatz durch besseres Follow-up um 24 %.",
      m1: "+24 %", m1Label: "Umsatz durch besseres Follow-up",
      m2: "2.400", m2Label: "Kontakte zentral verwaltet",
    },
    faqs: [
      { question: "CRM kaufen oder entwickeln lassen – was ist besser?", answer: "Für viele Unternehmen ist ein maßgeschneidertes System günstiger auf 3–5 Jahre gesehen. Besonders wenn Standardlösungen Prozessanpassungen erfordern. Wir beraten ehrlich." },
      { question: "Können bestehende Daten migriert werden?", answer: "Ja. Wir migrieren Ihre Daten aus Excel, bestehenden CRMs oder anderen Systemen sicher und vollständig in das neue System." },
      { question: "Wie sicher sind maßgeschneiderte Systeme?", answer: "Sehr sicher – wir implementieren Authentifizierung, Rollenkonzepte, verschlüsselte Verbindungen und regelmäßige Backups. Alle Systeme entsprechen DSGVO-Anforderungen." },
      { question: "Was passiert, wenn ich das System erweitern möchte?", answer: "Da Sie Eigentümer des Quellcodes sind, können wir jederzeit neue Features hinzufügen. Wir empfehlen einen Wartungsvertrag für kontinuierliche Betreuung." },
    ],
    relatedPages: [
      { title: "CRM Software Bremen", href: "/crm-software-bremen" },
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
      { title: "Backend Entwicklung Bremen", href: "/backend-entwicklung-bremen" },
      { title: "Prozessautomatisierung Bremen", href: "/prozessautomatisierung-bremen" },
      { title: "Unternehmenssysteme Oldenburg", href: "/unternehmenssysteme-oldenburg" },
    ],
  },

  /* ── 5 · Backend-Entwicklung Bremen ─────────────────────────────────────── */
  {
    slug: "backend-entwicklung-bremen",
    metaTitle: "Backend-Entwicklung Bremen – APIs & Software | Northcode",
    metaDescription: "Professionelle Backend-Entwicklung in Bremen: REST-APIs, Datenbankoptimierung, Microservices & Cloud-Infrastruktur. Zuverlässig & skalierbar. Jetzt beraten!",
    h1: "Backend-Entwicklung in Bremen",
    subtitle: "Stabile Systeme im Hintergrund – für reibungslosen Betrieb.",
    city: "Bremen",
    service: "Backend-Entwicklung",
    intro: "Hinter jeder guten Applikation steckt ein robustes Backend. Northcode entwickelt skalierbare, sichere und performante Backend-Systeme für Bremer Unternehmen: von RESTful APIs über Datenbankarchitekturen bis zu vollständigen Cloud-Backends. Ob neue Anwendung oder Modernisierung bestehender Systeme.",
    stats: [
      { value: "99,9 %", label: "Ø Systemverfügbarkeit" },
      { value: "<200 ms", label: "API-Antwortzeit" },
      { value: "DSGVO", label: "Compliant by Design" },
      { value: "Skala", label: "Von Start-up bis KMU" },
    ],
    services: [
      { icon: "🔌", title: "REST & GraphQL APIs", desc: "Saubere, dokumentierte APIs als Grundlage für Web-Apps, Mobile-Apps und System-Integrationen – nach modernen Standards entwickelt." },
      { icon: "🗄️", title: "Datenbankdesign & -optimierung", desc: "Relationale und NoSQL-Datenbanken konzipiert und optimiert für hohe Performance und DSGVO-konforme Datenhaltung." },
      { icon: "☁️", title: "Cloud-Backends (AWS/Vercel/Hetzner)", desc: "Serverless Functions, Container-Deployments und Cloud-Infrastruktur mit automatischem Scaling für Bremer Projekte." },
      { icon: "🛡️", title: "Sicherheit & Authentifizierung", desc: "JWT, OAuth, RBAC und Verschlüsselung – Ihre Nutzerdaten und Geschäftsdaten sind sicher und geschützt." },
    ],
    benefits: [
      { title: "Clean Code & Dokumentation", desc: "Wir schreiben wartbaren Code und liefern vollständige Dokumentation – damit Sie auch nach unserem Einsatz jederzeit weiterarbeiten können." },
      { title: "Tech-Stack Ihrer Wahl", desc: "Node.js, Python, Go oder .NET – wir arbeiten mit den Technologien, die zu Ihrem Team und Projekt passen." },
      { title: "DevOps & CI/CD", desc: "Automatische Deployments, Testing-Pipelines und Monitoring von Anfang an – kein manueller Aufwand bei Updates." },
      { title: "Lokale Unterstützung", desc: "Als Bremer Agentur sind wir jederzeit erreichbar – kein Offshore-Team, keine Zeitzonenprobleme." },
    ],
    processSteps: [
      { step: 1, title: "Anforderungsanalyse", desc: "Wir verstehen Ihre technischen Anforderungen, vorhandene Systeme und Skalierungsziele." },
      { step: 2, title: "Architektur-Design", desc: "Entwurf der System-Architektur mit klarem Datenmodell, API-Design und Infrastrukturplan." },
      { step: 3, title: "Entwicklung & Code-Review", desc: "Iterative Entwicklung mit regelmäßigen Code-Reviews, automatisierten Tests und Dokumentation." },
      { step: 4, title: "Deployment & Monitoring", desc: "Produktivschaltung auf Ihrer Infrastruktur oder Cloud, Einrichtung von Monitoring und Alerting." },
    ],
    caseStudy: {
      result: "SaaS-Plattform für Bremer Start-up gebaut",
      description: "Ein Bremer Start-up benötigte eine skalierbare Backend-Infrastruktur für ihre B2B-Plattform. Northcode entwickelte ein Cloud-Native-Backend mit automatischem Scaling, das von 100 auf 10.000 Nutzer skalieren konnte ohne Architekturänderungen.",
      m1: "100×", m1Label: "Skalierungsfaktor ohne Umbau",
      m2: "99,97 %", m2Label: "Uptime in 12 Monaten",
    },
    faqs: [
      { question: "Welche Programmiersprachen nutzen Sie für Backends?", answer: "Primär TypeScript/Node.js und Python. Wir arbeiten aber auch mit Go, PHP oder Java – je nach Anforderung und bestehender Infrastruktur." },
      { question: "Kann Northcode bestehende Legacy-Systeme modernisieren?", answer: "Ja. Wir analysieren bestehende Systeme, identifizieren kritische Schwachstellen und modernisieren schrittweise – ohne Betriebsunterbrechungen." },
      { question: "Wie wird DSGVO bei der Datenhaltung sichergestellt?", answer: "Durch Datensparsamkeit im Datenbankdesign, verschlüsselte Verbindungen, Zugriffskontrollen, Audit-Logs und wahlweise Datenhaltung auf deutschen Servern (z.B. Hetzner)." },
      { question: "Liefert Ihr auch API-Dokumentation?", answer: "Selbstverständlich. Alle APIs werden mit OpenAPI/Swagger dokumentiert und können von Ihrem Team oder zukünftigen Entwicklern direkt weitergenutzt werden." },
    ],
    relatedPages: [
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
      { title: "Unternehmenssysteme Bremen", href: "/unternehmenssysteme-bremen" },
      { title: "Prozessautomatisierung Bremen", href: "/prozessautomatisierung-bremen" },
      { title: "Backend Entwicklung Oldenburg", href: "/backend-entwicklung-oldenburg" },
      { title: "Webdesign Bremen", href: "/webdesign-bremen" },
    ],
  },

  /* ── 6 · Imagefilm Bremen ───────────────────────────────────────────────── */
  {
    slug: "imagefilm-bremen",
    metaTitle: "Imagefilm Bremen – Unternehmensfilm & Video-Produktion | Northcode",
    metaDescription: "Imagefilm & Unternehmensvideos für Firmen in Bremen: Storytelling, das überzeugt. Professionell produziert, schnell geliefert. Jetzt unverbindlich anfragen!",
    h1: "Imagefilm in Bremen",
    subtitle: "Ihr Unternehmen im besten Licht – für digitale Kanäle.",
    city: "Bremen",
    service: "Imagefilm",
    intro: "Ein professioneller Imagefilm ist das kraftvollste Marketingwerkzeug für Bremer Unternehmen. In 60–90 Sekunden zeigen Sie, wer Sie sind, was Sie können und warum Kunden Ihnen vertrauen sollten. Northcode produziert Imagefilme, die Geschichten erzählen – für Websites, Social Media, Messen und Präsentationen.",
    stats: [
      { value: "+80 %", label: "Mehr Verweildauer mit Video" },
      { value: "4×", label: "Mehr Vertrauen durch Imagefilm" },
      { value: "72 h", label: "Erster Rohentwurf" },
      { value: "HD", label: "4K-Produktionsqualität" },
    ],
    services: [
      { icon: "🎬", title: "Imagefilme & Unternehmensporträts", desc: "Professionell produzierte Filme, die Ihre Unternehmenskultur, Leistungen und Werte authentisch vermitteln." },
      { icon: "📣", title: "Werbe- & Produktvideos", desc: "Kurze, prägnante Videos für Social-Media-Kampagnen, Google Ads oder Landing Pages – auf Conversion ausgerichtet." },
      { icon: "🎙️", title: "Erklärvideos & Tutorials", desc: "Komplexe Produkte oder Services verständlich erklärt – ideal für SaaS, Maschinenbau oder Dienstleister in Bremen." },
      { icon: "🏢", title: "Messefilme & Präsentationen", desc: "Hingucker für Ihre Messepräsenz oder Kundenpräsentationen – produziert für die Norddeutschen Leitmessen." },
    ],
    benefits: [
      { title: "Lokales Produktionsteam", desc: "Dreh in Bremen und Umgebung ohne Reisekosten und mit Kenntnis der Bremer Locations und Unternehmen." },
      { title: "Full Service", desc: "Konzept, Drehbuch, Dreh, Schnitt, Musik, Untertitel und Farbkorrektur – alles aus einer Hand." },
      { title: "Schnelle Lieferung", desc: "Erster Rohentwurf innerhalb von 72 Stunden nach dem Drehtag. Finale Version nach max. 2 Feedbackrunden." },
      { title: "Für alle Kanäle optimiert", desc: "Wir liefern Ihren Film in allen benötigten Formaten: Querformat (YouTube), Hochformat (Stories), Quadratisch (Instagram)." },
    ],
    processSteps: [
      { step: 1, title: "Briefing & Konzept", desc: "Wir verstehen Ihre Ziele, Zielgruppe und Kernbotschaft und entwickeln ein maßgeschneidertes Konzept und Drehbuch." },
      { step: 2, title: "Produktion", desc: "Professioneller Drehtag in Ihrem Unternehmen in Bremen – vorbereitet, effizient und stressfrei für Ihr Team." },
      { step: 3, title: "Post-Produktion", desc: "Schnitt, Color Grading, Sounddesign, Musik-Lizenzierung und ggf. Animationen – für einen polished Eindruck." },
      { step: 4, title: "Auslieferung & Optimierung", desc: "Finale Übergabe in allen Formaten, Optimierung für SEO (YouTube-Titel, -Beschreibung) und auf Wunsch Schnitt von Kurzversionen." },
    ],
    caseStudy: {
      result: "Bremer Maschinenbauer gewinnt 3 Neukunden mit Imagefilm",
      description: "Ein mittelständischer Maschinenbauer aus Bremen-Nord hatte keinen Imagefilm und stellte sich auf Messen nur mit Flyern vor. Nach dem Imagefilm von Northcode kamen bei der nächsten Messe 3 konkrete Kundenanfragen direkt über den QR-Code auf dem Standmonitor.",
      m1: "3", m1Label: "Neukunden-Anfragen nach Messeeinsatz",
      m2: "+150 %", m2Label: "Website-Verweildauer mit Video",
    },
    faqs: [
      { question: "Was kostet ein Imagefilm in Bremen?", answer: "Ein professioneller Imagefilm (60–90 Sek.) beginnt ab ca. 1.800 €. Der genaue Preis hängt von Drehtagen, Aufwand bei Post-Produktion und gewünschtem Umfang ab. Wir erstellen auf Anfrage ein kostenloses Angebot." },
      { question: "Wie lange dauert es, bis der Film fertig ist?", answer: "Typisch: Briefing (1 Woche), Drehtag (1 Tag), Post-Produktion (3–5 Tage). Von erstem Gespräch bis fertigem Film meist 2–3 Wochen." },
      { question: "Müssen meine Mitarbeiter schauspielern?", answer: "Nein. Wir arbeiten mit authentischen Interviews und echten Arbeitsszenen – das wirkt glaubwürdiger und ist für alle entspannter." },
      { question: "Kann ich den Film auf meiner Website und Social Media nutzen?", answer: "Ja. Sie erhalten alle Rechte am fertigen Film und dürfen ihn uneingeschränkt auf Website, YouTube, LinkedIn, Instagram und anderen Kanälen nutzen." },
    ],
    relatedPages: [
      { title: "Webdesign Bremen", href: "/webdesign-bremen" },
      { title: "Digitalisierung Bremen", href: "/digitalisierung-bremen" },
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
      { title: "Unternehmensvideo Oldenburg", href: "/unternehmensvideo-oldenburg" },
    ],
  },

  /* ── 7 · KI-Beratung Oldenburg ──────────────────────────────────────────── */
  {
    slug: "ki-beratung-oldenburg",
    metaTitle: "KI-Beratung Oldenburg – KI-Strategie für Unternehmen | Northcode",
    metaDescription: "KI-Beratung für Unternehmen in Oldenburg: Strategie, Integration und Implementierung von KI-Lösungen. DSGVO-konform & praxisnah. Jetzt Erstgespräch buchen!",
    h1: "KI-Beratung in Oldenburg",
    subtitle: "Der richtige KI-Einsatz für Oldenburger Unternehmen.",
    city: "Oldenburg",
    service: "KI-Beratung",
    intro: "Künstliche Intelligenz ist kein Trend – sie ist bereits Realität in wettbewerbsfähigen Unternehmen. Northcode berät Unternehmen in Oldenburg und der Region Weser-Ems dabei, KI sinnvoll einzusetzen: von der ersten Strategieentscheidung über die Auswahl der richtigen Werkzeuge bis zur konkreten Implementierung. Pragmatisch, DSGVO-konform und immer mit Fokus auf echten Mehrwert.",
    stats: [
      { value: "10+", label: "KI-Projekte in NW-DE" },
      { value: "3–6 Mo.", label: "Ø Amortisationszeit" },
      { value: "100 %", label: "DSGVO-konform" },
      { value: "24/7", label: "KI-Systeme aktiv" },
    ],
    services: [
      { icon: "🧭", title: "KI-Strategie & Readiness-Check", desc: "Analyse Ihrer aktuellen Prozesse und Ableitung einer realistischen KI-Roadmap mit priorisierten Use Cases für Ihr Oldenburger Unternehmen." },
      { icon: "🔧", title: "KI-Tool-Evaluation & -Einführung", desc: "Auswahl der passenden KI-Tools (GPT, Claude, spezifische Modelle) und Begleitung bei der Einführung ins Tagesgeschäft." },
      { icon: "📐", title: "Prompt Engineering & Training", desc: "Schulung Ihrer Mitarbeiter im effektiven Umgang mit KI-Tools – damit die Investition sich in der Praxis auszahlt." },
      { icon: "⚖️", title: "KI & Datenschutz (DSGVO)", desc: "Beratung zur rechtssicheren Nutzung von KI in Niedersachsen – Datenverarbeitung, Einwilligungen und EU AI Act konform." },
    ],
    benefits: [
      { title: "Vendor-unabhängige Beratung", desc: "Wir verkaufen keine Lizenzen und sind keinem Anbieter verpflichtet – unsere Empfehlungen sind objektiv und auf Ihren Fall zugeschnitten." },
      { title: "Oldenburger Marktkenntnis", desc: "Wir kennen den Wirtschaftsraum Weser-Ems und die spezifischen Herausforderungen der hiesigen Branchen." },
      { title: "Hands-on Umsetzung", desc: "Beratung ohne Umsetzung bringt nichts. Wir implementieren die erarbeiteten Strategien direkt und übergeben fertige Systeme." },
      { title: "Rechtliche Sicherheit", desc: "KI-Projekte in der EU unterliegen strengen Regeln. Wir begleiten Sie rechtssicher durch den EU AI Act und DSGVO." },
    ],
    processSteps: [
      { step: 1, title: "KI-Readiness-Assessment", desc: "30-minütiger kostenloser Check: Wo steht Ihr Unternehmen, welche Prozesse eignen sich für KI, was sind die Quick-Wins?" },
      { step: 2, title: "Strategie-Workshop", desc: "Halbtägiger Workshop mit Ihrem Führungsteam – Entwicklung einer konkreten KI-Roadmap mit Prioritäten." },
      { step: 3, title: "Pilotprojekt", desc: "Umsetzung eines ersten KI-Use-Cases als Piloten – um echte Erfahrungen zu sammeln und ROI zu messen." },
      { step: 4, title: "Skalierung", desc: "Basierend auf Pilot-Learnings: Ausweitung auf weitere Bereiche und Aufbau interner KI-Kompetenz." },
    ],
    caseStudy: {
      result: "Oldenburger Agentur spart 20 h/Woche durch KI",
      description: "Eine Marketingagentur aus Oldenburg nutzte für Content-Produktion bisher ausschließlich menschliche Texterstellung. Nach der KI-Beratung und Einführung eines strukturierten KI-Workflows spart das Team 20 Stunden pro Woche – bei gleichbleibender Qualität.",
      m1: "−20 h", m1Label: "Wöchentliche Zeitersparnis",
      m2: "+35 %", m2Label: "Mehr Projekte möglich",
    },
    faqs: [
      { question: "Für welche Unternehmensgröße lohnt sich KI-Beratung?", answer: "Ab 3 Mitarbeitern und regelmäßigen, wiederholenden Aufgaben lohnt sich KI. In Oldenburg betreuen wir Unternehmen von Einzelkämpfern bis zu 50-Personen-Teams." },
      { question: "Welche KI-Tools sind für Oldenburger Unternehmen geeignet?", answer: "Das hängt von Ihrem Use Case ab. Für Texterstellung eignen sich GPT-4 und Claude, für Prozessautomatisierung n8n oder Make, für Datenanalyse Python-basierte Lösungen. Wir empfehlen nach Analyse." },
      { question: "Ist KI in Deutschland datenschutzkonform nutzbar?", answer: "Ja, mit den richtigen Maßnahmen. Wir implementieren EU-konforme Lösungen, schließen Data Processing Agreements und nutzen wo nötig europäische Hosting-Alternativen." },
      { question: "Was kostet eine KI-Beratung in Oldenburg?", answer: "Das erste Orientierungsgespräch (30 Min.) ist kostenlos. Workshops und Beratungspakete starten ab 490 €. Wir stimmen Leistung und Budget vorab transparent ab." },
    ],
    relatedPages: [
      { title: "KI für Handwerker Oldenburg", href: "/ki-fuer-handwerker-oldenburg" },
      { title: "KI für Steuerberater Oldenburg", href: "/ki-fuer-steuerberater-oldenburg" },
      { title: "KI-Kosten Oldenburg", href: "/ki-kosten-oldenburg" },
      { title: "KI-Automatisierung Oldenburg", href: "/ki-automatisierung-oldenburg" },
      { title: "Digitalisierung Oldenburg", href: "/digitalisierung-oldenburg" },
      { title: "KI-Automatisierung Bremen", href: "/ki-automatisierung-bremen" },
    ],
  },

  /* ── 8 · Webdesign Oldenburg ────────────────────────────────────────────── */
  {
    slug: "webdesign-oldenburg",
    metaTitle: "Webdesign Oldenburg – Websites für Unternehmen | Northcode",
    metaDescription: "Professionelles Webdesign in Oldenburg: moderne, schnelle Websites für KMU in der Region Weser-Ems. SEO-optimiert & mobilfreundlich. Jetzt Angebot anfordern!",
    h1: "Webdesign in Oldenburg",
    subtitle: "Websites für Oldenburger Unternehmen, die Kunden gewinnen.",
    city: "Oldenburg",
    service: "Webdesign",
    intro: "Oldenburg ist ein starker Wirtschaftsstandort – und der erste Eindruck bei potenziellen Kunden entscheidet online. Northcode entwickelt Websites für Oldenburger Unternehmen, die in der Weser-Ems-Region und darüber hinaus Kunden gewinnen: schnell, mobiloptimiert, suchmaschinenoptimiert und auf Ihre Zielgruppe zugeschnitten.",
    stats: [
      { value: "+180 %", label: "Ø Sichtbarkeit nach Launch" },
      { value: "3–7 Tage", label: "Zeit bis Launch" },
      { value: "Google #1", label: "Lokale Suchergebnisse" },
      { value: "100 %", label: "Mobile-First Design" },
    ],
    services: [
      { icon: "🖥️", title: "Unternehmenswebsites", desc: "Repräsentative Websites für Dienstleister, Handwerk, Handel und Industrie in Oldenburg – mit starkem ersten Eindruck." },
      { icon: "🎯", title: "Landingpages", desc: "Conversion-optimierte Seiten für Kampagnen, Produkte oder Dienstleistungen – messbar mehr Anfragen." },
      { icon: "🔍", title: "Lokale SEO Oldenburg", desc: "Optimierung für Suchbegriffe in Oldenburg und der Region Weser-Ems – damit Sie gefunden werden, bevor der Wettbewerb." },
      { icon: "⚡", title: "Performance-Optimierung", desc: "Schnelle Ladezeiten (LCP < 2s), bessere Core Web Vitals und damit höhere Google-Rankings für bestehende Seiten." },
    ],
    benefits: [
      { title: "Weser-Ems Marktkenntnis", desc: "Wir kennen den Oldenburger Markt, lokale Suchtrends und die wichtigsten Wettbewerber in Ihrer Branche." },
      { title: "Schnelle Lieferung", desc: "Landingpage in 3 Tagen, vollständige Website in 1–2 Wochen – kein monatelanges Warten." },
      { title: "Eigentum am Code", desc: "Keine Lock-in-Effekte: Sie bekommen den vollständigen Quellcode und können jederzeit wechseln." },
      { title: "Laufende Betreuung", desc: "Updates, Inhaltsänderungen und SEO-Anpassungen auf Abruf – wir sind auch nach Launch für Sie da." },
    ],
    processSteps: [
      { step: 1, title: "Kickoff-Gespräch", desc: "30 Minuten, kostenlos: Wir verstehen Ihr Geschäft, Ihre Ziele und Ihre Zielgruppe in Oldenburg." },
      { step: 2, title: "Konzept & Sitemap", desc: "Wir planen Struktur, Inhalte und Navigation – optimal für Nutzer und Suchmaschinen." },
      { step: 3, title: "Design & Entwicklung", desc: "Modernes Design, das zu Ihrer Marke passt – technisch sauber auf aktuellem Stack entwickelt." },
      { step: 4, title: "Launch & SEO-Setup", desc: "Go-live, Google Search Console, Sitemap, Analytics und lokale SEO-Optimierung für Oldenburg." },
    ],
    caseStudy: {
      result: "Oldenburger Kanzlei verdoppelt Mandantenanfragen",
      description: "Eine Rechtsanwaltskanzlei aus Oldenburg hatte eine veraltete Website ohne mobile Optimierung. Nach dem Relaunch mit Northcode verdoppelten sich die Kontaktanfragen innerhalb von 6 Wochen durch verbesserte lokale SEO und eine moderne Präsentation.",
      m1: "+100 %", m1Label: "Mehr Mandantenanfragen",
      m2: "Seite 1", m2Label: "Google für 5 Ziel-Keywords",
    },
    faqs: [
      { question: "Was kostet eine Website in Oldenburg?", answer: "Einfache Seiten ab 900 €, vollständige Unternehmenswebsites ab 1.500 €. Wir erstellen immer ein transparentes Angebot vor Projektstart." },
      { question: "Arbeitet Ihr auch mit Oldenburger Unternehmen vor Ort?", answer: "Ja. Wir kommen für Briefings und Abstimmungen nach Oldenburg – oder arbeiten effizient remote über Video-Call." },
      { question: "Bekomme ich auch Content / Texte für meine neue Website?", answer: "Auf Wunsch ja. Wir bieten SEO-optimierte Texterstellung als Zusatzoption an – auch mit KI-Unterstützung für schnelle Lieferung." },
      { question: "Kann ich meine bestehende Domain behalten?", answer: "Absolut. Wir übertragen Ihre Website auf Ihre bestehende Domain mit sauberem Redirect-Management." },
    ],
    relatedPages: [
      { title: "SEO-Agentur Oldenburg", href: "/seo-agentur-oldenburg" },
      { title: "Leadgenerierung Oldenburg", href: "/leadgenerierung-oldenburg" },
      { title: "Webdesign Kosten Oldenburg", href: "/webdesign-kosten-oldenburg" },
      { title: "KI-Beratung Oldenburg", href: "/ki-beratung-oldenburg" },
      { title: "Digitalisierung Oldenburg", href: "/digitalisierung-oldenburg" },
      { title: "Webdesign Bremen", href: "/webdesign-bremen" },
    ],
  },

  /* ── 9 · Unternehmensvideo Oldenburg ────────────────────────────────────── */
  {
    slug: "unternehmensvideo-oldenburg",
    metaTitle: "Unternehmensvideo Oldenburg – Imagefilm & Firmenvideo | Northcode",
    metaDescription: "Unternehmensvideos & Imagefilme für Firmen in Oldenburg. Storytelling, das überzeugt – für Website, Social Media & Messen. Jetzt Angebot einholen!",
    h1: "Unternehmensvideo in Oldenburg",
    subtitle: "Ihr Unternehmen in Bewegung – für digitale Kanäle.",
    city: "Oldenburg",
    service: "Unternehmensvideo",
    intro: "Videos sind der wirkungsvollste Content für Oldenburger Unternehmen: Sie erzählen Geschichten, bauen Vertrauen auf und hinterlassen bleibende Eindrücke. Northcode produziert Unternehmensvideos und Imagefilme in Oldenburg – von der Idee bis zur finalen Datei. Für Website, YouTube, LinkedIn, Messen und interne Kommunikation.",
    stats: [
      { value: "+80 %", label: "Mehr Verweildauer auf Website" },
      { value: "1:30 min", label: "Ø optimale Länge Imagefilm" },
      { value: "72 h", label: "Rohentwurf nach Drehtag" },
      { value: "4K", label: "Produktionsqualität" },
    ],
    services: [
      { icon: "🎥", title: "Imagefilme", desc: "Unternehmensporträts, die Kultur, Team und Kompetenz authentisch zeigen – für nachhaltigen Eindruck bei Kunden und Bewerbern." },
      { icon: "📲", title: "Social-Media-Videos", desc: "Kurzvideos für Instagram, LinkedIn und TikTok – vertikal, prägnant und auf Ihre Zielgruppe in der Region zugeschnitten." },
      { icon: "🎙️", title: "Erklärvideos", desc: "Komplexe Produkte oder Dienstleistungen einfach erklärt – mit Animation oder realem Dreh, je nach Bedarf." },
      { icon: "👥", title: "Recruiting-Videos", desc: "Videos, die Ihre Arbeitgebermarke stärken und qualifizierte Bewerber aus der Region Weser-Ems ansprechen." },
    ],
    benefits: [
      { title: "Lokales Team in Oldenburg", desc: "Drehtag bei Ihnen in Oldenburg – kein Reisekostenaufschlag, persönliche Betreuung vor Ort." },
      { title: "Authentischer Stil", desc: "Kein Corporate-Hochglanz-Einheitsbrei. Wir finden Ihren individuellen visuellen Stil." },
      { title: "Alle Formate inklusive", desc: "Wir liefern in 16:9, 9:16 und 1:1 – damit Sie auf jedem Kanal das richtige Format haben." },
      { title: "Schnelle Umsetzung", desc: "Von Briefing bis fertigem Video in unter 3 Wochen – pünktlich zu Ihrer Kampagne oder Messe." },
    ],
    processSteps: [
      { step: 1, title: "Briefing & Konzept", desc: "Ziele, Zielgruppe und Kernbotschaft – wir entwickeln ein Konzept und Drehbuch, das Ihre Geschichte erzählt." },
      { step: 2, title: "Drehtag in Oldenburg", desc: "Professioneller Drehtag in Ihrem Unternehmen – minimal invasiv, maximal ergebnisorientiert." },
      { step: 3, title: "Post-Produktion", desc: "Schnitt, Farbanpassung, Sound, Musik und ggf. Grafik-Elemente – für professionellen Output." },
      { step: 4, title: "Auslieferung", desc: "Finale Übergabe in allen benötigten Formaten mit vollem Nutzungsrecht." },
    ],
    caseStudy: {
      result: "Oldenburger Pflegedienst gewinnt Mitarbeiter per Video",
      description: "Ein ambulanter Pflegedienst aus Oldenburg hatte große Schwierigkeiten bei der Mitarbeitergewinnung. Nach dem Recruiting-Video von Northcode – authentisch im echten Arbeitsalltag gedreht – kamen innerhalb von 4 Wochen 11 qualifizierte Bewerbungen.",
      m1: "11", m1Label: "Qualifizierte Bewerbungen in 4 Wochen",
      m2: "+60 %", m2Label: "Klickrate auf Stellenanzeige",
    },
    faqs: [
      { question: "Was kostet ein Unternehmensvideo in Oldenburg?", answer: "Ein professioneller Imagefilm (60–90 Sek.) beginnt ab ca. 1.600 €. Kurzvideos für Social Media ab 690 €. Wir erstellen ein kostenloses Angebot nach Briefing." },
      { question: "Wie viel Zeit müssen meine Mitarbeiter einplanen?", answer: "Für einen typischen Drehtag ca. 4–6 Stunden. Die Vorbereitung übernehmen wir komplett – Ihr Team muss sich nur auf den Drehtag konzentrieren." },
      { question: "Kann der Film auch für Employer Branding genutzt werden?", answer: "Ja, besonders effektiv. Wir schneiden auf Wunsch eine separate Version für Jobportale und Social Media, optimiert für die Mitarbeitergewinnung." },
      { question: "In welchen Sprachen kann das Video produziert werden?", answer: "Auf Wunsch produzieren wir auch englisch-sprachige oder mehrsprachige Versionen – für internationale Kunden oder multikulturelle Teams." },
    ],
    relatedPages: [
      { title: "Webdesign Oldenburg", href: "/webdesign-oldenburg" },
      { title: "Digitalisierung Oldenburg", href: "/digitalisierung-oldenburg" },
      { title: "KI-Beratung Oldenburg", href: "/ki-beratung-oldenburg" },
      { title: "Imagefilm Bremen", href: "/imagefilm-bremen" },
    ],
  },

  /* ── 10 · Landingpage-Agentur Delmenhorst ───────────────────────────────── */
  {
    slug: "landingpage-delmenhorst",
    metaTitle: "Landingpage-Agentur Delmenhorst – Mehr Leads & Anfragen | Northcode",
    metaDescription: "Professionelle Landingpages für Unternehmen in Delmenhorst: Conversion-optimiert, schnell geliefert & messbar wirksam. Jetzt kostenfreies Angebot anfordern!",
    h1: "Landingpage-Agentur in Delmenhorst",
    subtitle: "Mehr Leads. Mehr Anfragen. Messbar mehr Umsatz.",
    city: "Delmenhorst",
    service: "Landingpages",
    intro: "Eine Landingpage ist das effektivste Werkzeug für Delmenhorster Unternehmen, um gezielt Leads zu generieren und Werbebudget sinnvoll einzusetzen. Northcode entwickelt Landingpages, die konvertieren: klare Struktur, überzeugende Texte und technisch optimiert für Google Ads, Facebook-Kampagnen oder direkten Traffic.",
    stats: [
      { value: "+220 %", label: "Ø Conversion-Steigerung" },
      { value: "3–5 Tage", label: "Lieferzeit" },
      { value: "A/B", label: "Testing inklusive" },
      { value: "<1,8 s", label: "Ladezeit" },
    ],
    services: [
      { icon: "🎯", title: "Google Ads Landingpages", desc: "Auf Ihre Kampagnen abgestimmte Seiten mit optimaler Keyword-Dichte, klaren CTAs und hohem Quality Score." },
      { icon: "📊", title: "Lead-Generierungs-Seiten", desc: "Formulare, Kalender-Widgets und Lead-Magnets – optimiert für maximale Conversion in Delmenhorst und Region." },
      { icon: "🛍️", title: "Produkt-Landingpages", desc: "Verkaufsoptimierte Seiten für einzelne Produkte oder Dienstleistungen – von der Überschrift bis zum Kauf-Button." },
      { icon: "📱", title: "Mobile-First Design", desc: "70 % Ihrer Besucher kommen vom Smartphone. Unsere Landingpages performen auf jedem Gerät optimal." },
    ],
    benefits: [
      { title: "Schnelle Ergebnisse", desc: "Erste Conversion-Daten meist innerhalb von 48 Stunden nach Launch – kein langes Warten auf Ergebnisse." },
      { title: "Conversion-fokussiert", desc: "Wir schreiben Texte, die überzeugen, gestalten CTAs, die geklickt werden und vermeiden alles, was ablenkt." },
      { title: "A/B Testing", desc: "Wir testen verschiedene Headlines, Bilder und CTAs – und optimieren kontinuierlich basierend auf echten Daten." },
      { title: "Kampagnen-Integration", desc: "Reibungslose Integration mit Google Ads, Meta Ads, E-Mail-Tools und CRM für lückenlose Leaderfassung." },
    ],
    processSteps: [
      { step: 1, title: "Zieldefinition", desc: "Was soll die Landingpage erreichen? Wir definieren klare Conversion-Ziele und Zielgruppensegmente." },
      { step: 2, title: "Texte & Design", desc: "Conversion-optimierte Texte nach bewährten Frameworks (AIDA, PAS) und klares, ablenkungsfreies Design." },
      { step: 3, title: "Technische Umsetzung", desc: "Schnelle, saubere Entwicklung mit Tracking-Integration, Cookie-Banner und DSGVO-konformem Formular." },
      { step: 4, title: "Launch & Optimierung", desc: "Go-live, Analyse der ersten Daten und Optimierung – bis die Conversion Rate Ihre Ziele übertrifft." },
    ],
    caseStudy: {
      result: "Delmenhorster Handwerker vervierfacht Anfragen",
      description: "Ein Elektriker aus Delmenhorst schaltete Google Ads auf seine alte Homepage – mit 2 % Conversion Rate. Nach der neuen Landingpage von Northcode stieg die Conversion Rate auf 8 % – bei gleichem Werbebudget viermal mehr Anfragen.",
      m1: "8 %", m1Label: "Conversion Rate (vorher: 2 %)",
      m2: "4×", m2Label: "Mehr Anfragen, gleiches Budget",
    },
    faqs: [
      { question: "Was kostet eine Landingpage in Delmenhorst?", answer: "Landingpages beginnen ab 490 €. Komplexere Seiten mit mehreren Varianten und Tracking-Integration kosten mehr. Immer transparentes Angebot vorab." },
      { question: "Wie schnell kann eine Landingpage live gehen?", answer: "Bei klaren Vorgaben liefern wir eine vollständige Landingpage in 3–5 Werktagen. Express-Service für 48 h auf Anfrage." },
      { question: "Was ist der Unterschied zwischen Website und Landingpage?", answer: "Eine Landingpage hat ein einziges Ziel: den Besucher zu einer Aktion zu bewegen. Keine Navigation, keine Ablenkung – nur Überzeugung und CTA." },
      { question: "Benötige ich auch Google Analytics oder andere Tracking-Tools?", answer: "Wir integrieren auf Wunsch Google Analytics 4, Meta Pixel, Hotjar und andere Tools – alles DSGVO-konform konfiguriert." },
    ],
    relatedPages: [
      { title: "SEO-Agentur Delmenhorst", href: "/seo-agentur-delmenhorst" },
      { title: "Leadgenerierung Delmenhorst", href: "/leadgenerierung-delmenhorst" },
      { title: "Webdesign Kosten Delmenhorst", href: "/webdesign-kosten-delmenhorst" },
      { title: "Webdesign Delmenhorst", href: "/webdesign-delmenhorst" },
      { title: "Prozessautomatisierung Delmenhorst", href: "/prozessautomatisierung-delmenhorst" },
      { title: "Landingpage Oldenburg", href: "/landingpage-oldenburg" },
    ],
  },

  /* ── 11 · Prozessautomatisierung Delmenhorst ────────────────────────────── */
  {
    slug: "prozessautomatisierung-delmenhorst",
    metaTitle: "Prozessautomatisierung Delmenhorst – Workflows optimieren | Northcode",
    metaDescription: "Prozessautomatisierung für Unternehmen in Delmenhorst: Workflows digitalisieren, Kosten senken, Fehler vermeiden. Northcode macht Ihren Betrieb effizienter!",
    h1: "Prozessautomatisierung in Delmenhorst",
    subtitle: "Weniger Handarbeit. Mehr Effizienz. Mehr Zeit für das Wesentliche.",
    city: "Delmenhorst",
    service: "Prozessautomatisierung",
    intro: "Manuelle, wiederholende Aufgaben sind in vielen Delmenhorster Unternehmen Alltag – und kosten täglich wertvolle Zeit. Northcode automatisiert diese Prozesse: von der Auftragsbearbeitung über die Rechnungsstellung bis zur Kundenkommunikation. Mit modernen Werkzeugen wie n8n, Make oder individuellem Code.",
    stats: [
      { value: "−80 %", label: "Zeit bei Routineaufgaben" },
      { value: "0 Fehler", label: "Durch Automatisierung" },
      { value: "ROI", label: "In Ø 2,5 Monaten" },
      { value: "24/7", label: "Prozesse laufen automatisch" },
    ],
    services: [
      { icon: "📋", title: "Auftragsbearbeitung automatisieren", desc: "Von der Auftragsannahme über Auftragsbestätigung bis zur Lieferung – vollautomatische Workflows ohne manuelle Eingriffe." },
      { icon: "💌", title: "E-Mail & Kommunikations-Automatisierung", desc: "Automatische Willkommens-E-Mails, Erinnerungen, Follow-ups und Statusbenachrichtigungen – ohne manuelle Arbeit." },
      { icon: "🧾", title: "Rechnungsautomatisierung", desc: "Automatische Rechnungserstellung, -versand und Zahlungserinnerungen – DATEV- und DSGVO-konform." },
      { icon: "🔄", title: "System-zu-System-Integration", desc: "Verbindung von CRM, ERP, Shop-System und anderen Tools – Daten fließen automatisch ohne Copy-Paste." },
    ],
    benefits: [
      { title: "Keine Fehler durch Handarbeit", desc: "Automatisierte Prozesse machen keine Tippfehler, vergessen keine E-Mails und halten sich immer an die Regeln." },
      { title: "Mitarbeiter entlasten", desc: "Ihr Team kann sich auf strategische, kreative und kundenzugewandte Aufgaben konzentrieren." },
      { title: "Skalierbarkeit", desc: "100 oder 10.000 Aufgaben täglich – automatisierte Prozesse skalieren ohne Mehrkosten." },
      { title: "Schnelle Amortisation", desc: "Typisch amortisiert sich die Investition in Automatisierung bei Delmenhorster KMU in 2–4 Monaten." },
    ],
    processSteps: [
      { step: 1, title: "Prozess-Mapping", desc: "Wir zeichnen Ihre aktuellen manuellen Prozesse auf und identifizieren die größten Automatisierungshebel." },
      { step: 2, title: "Tool-Auswahl & Konzept", desc: "Auswahl der besten Automatisierungsplattform (n8n, Make, Zapier oder Custom) und Design der neuen Workflows." },
      { step: 3, title: "Entwicklung & Test", desc: "Aufbau der Automatisierungen, Test mit realen Daten und Anpassung bis alles reibungslos läuft." },
      { step: 4, title: "Übergabe & Training", desc: "Ihre Mitarbeiter lernen, wie die Automatisierungen funktionieren und wie sie bei Bedarf angepasst werden." },
    ],
    caseStudy: {
      result: "Delmenhorster Logistiker spart 30 h/Woche",
      description: "Ein Speditionsunternehmen aus Delmenhorst erstellte Lieferscheine und Auftragsbestätigungen noch manuell – 3 Mitarbeiter beschäftigten sich täglich mehrere Stunden damit. Northcode automatisierte die gesamte Auftragsbearbeitung. Ergebnis: 30 gesparte Stunden pro Woche.",
      m1: "−30 h", m1Label: "Arbeitszeit gespart pro Woche",
      m2: "0", m2Label: "Manuelle Lieferscheine noch nötig",
    },
    faqs: [
      { question: "Welche Prozesse können in Delmenhorster Unternehmen automatisiert werden?", answer: "Nahezu alle wiederkehrenden, regelbasierten Aufgaben: Rechnungsstellung, Auftragsbestätigung, E-Mail-Sortierung, Datensynchronisation, Terminplanung, Berichtserstellung und vieles mehr." },
      { question: "Muss ich n8n oder Make selbst kennen?", answer: "Nein. Wir bauen und betreuen die Automatisierungen. Sie erhalten fertige Workflows und eine Einführung in die Nutzung – technisches Vorwissen nicht nötig." },
      { question: "Was passiert, wenn eine Automatisierung ausfällt?", answer: "Alle unsere Automatisierungen haben Fehler-Monitoring und Alert-Systeme. Bei einem Fehler werden Sie sofort benachrichtigt und wir reagieren schnell." },
      { question: "Kann ich bestehende Software weiternutzen?", answer: "In den meisten Fällen ja. Wir integrieren Automatisierungen mit Ihren bestehenden Tools – egal ob Outlook, Lexware, SAP oder ein selbst entwickeltes System." },
    ],
    relatedPages: [
      { title: "KI-Automatisierung Delmenhorst", href: "/ki-automatisierung-delmenhorst" },
      { title: "Automatisierung kleine Unternehmen Delmenhorst", href: "/automatisierung-kleine-unternehmen-delmenhorst" },
      { title: "CRM-KMU Delmenhorst", href: "/crm-kmu-delmenhorst" },
      { title: "Digitalisierung Delmenhorst", href: "/digitalisierung-delmenhorst" },
      { title: "Prozessautomatisierung Bremen", href: "/prozessautomatisierung-bremen" },
    ],
  },

  /* ── 12 · Digitalisierung Ganderkesee ───────────────────────────────────── */
  {
    slug: "digitalisierung-ganderkesee",
    metaTitle: "Digitalisierung Ganderkesee – Unternehmen digital transformieren | Northcode",
    metaDescription: "Digitalisierung für Unternehmen in Ganderkesee & Umgebung: Prozesse modernisieren, online sichtbar werden, Kosten sparen. Northcode – Ihr lokaler Partner!",
    h1: "Digitalisierung in Ganderkesee",
    subtitle: "Digital durchstarten – mit dem richtigen Partner vor Ort.",
    city: "Ganderkesee",
    service: "Digitalisierung",
    intro: "Auch Unternehmen in Ganderkesee und dem Landkreis Oldenburg stehen vor den Herausforderungen der digitalen Transformation. Northcode begleitet lokale Betriebe – von Handwerk und Handel über Dienstleister bis zu Landwirtschaft und Industrie – auf dem Weg in die digitale Zukunft. Praxisnah, budgetbewusst und mit direktem Ansprechpartner.",
    stats: [
      { value: "3×", label: "Schnellere Prozesse" },
      { value: "−30 %", label: "Verwaltungsaufwand" },
      { value: "100 %", label: "Lokaler Ansprechpartner" },
      { value: "DSGVO", label: "Datenschutz sichergestellt" },
    ],
    services: [
      { icon: "🌐", title: "Digitale Sichtbarkeit", desc: "Website, Google My Business und lokale SEO – damit Sie in Ganderkesee und der Region online gefunden werden." },
      { icon: "📲", title: "Digitale Kommunikation", desc: "Online-Terminbuchung, digitale Formulare und automatisierte Kundenkommunikation – mehr Service mit weniger Aufwand." },
      { icon: "📁", title: "Digitale Büroprozesse", desc: "Papierloses Büro, digitale Aktenführung und elektronische Unterschriften für Ganderkeseer Betriebe." },
      { icon: "📊", title: "Digitales Marketing", desc: "Social Media, E-Mail-Marketing und Online-Werbung für regionale Zielgruppen im Landkreis Oldenburg." },
    ],
    benefits: [
      { title: "Regional verwurzelt", desc: "Wir kennen den Landkreis Oldenburg und die Besonderheiten der lokalen Wirtschaft in Ganderkesee und Umgebung." },
      { title: "Fördermittel nutzen", desc: "Digitalisierungsförderprogramme für Niedersächsische KMU können Ihre Investition erheblich reduzieren – wir beraten dazu." },
      { title: "Schritt für Schritt", desc: "Digitalisierung muss nicht auf einmal passieren. Wir begleiten Sie in Ihrem Tempo und Ihrem Budget." },
      { title: "Nachhaltiger Aufbau", desc: "Wir bauen auf Systemen auf, die Sie langfristig nutzen können – keine Quick-Fixes, die in 2 Jahren wieder getauscht werden." },
    ],
    processSteps: [
      { step: 1, title: "Kostenloser Check", desc: "Wir schauen uns Ihren Betrieb in Ganderkesee an und zeigen, wo die größten Potenziale für Digitalisierung liegen." },
      { step: 2, title: "Maßnahmenplan", desc: "Priorisierter Plan mit realistischen Maßnahmen, Zeitrahmen und Budgeteinschätzung – auf Ihren Betrieb zugeschnitten." },
      { step: 3, title: "Umsetzung", desc: "Schrittweise Einführung digitaler Lösungen – mit Ihnen, nicht über Sie hinweg." },
      { step: 4, title: "Begleitung", desc: "Dauerhafter Ansprechpartner für Fragen, Updates und neue Möglichkeiten – auch wenn das Projekt abgeschlossen ist." },
    ],
    caseStudy: {
      result: "Handwerksbetrieb aus Ganderkesee gewinnt online Kunden",
      description: "Ein Malerbetrieb aus Ganderkesee hatte keine Website und akquirierte ausschließlich über Empfehlungen. Nach der Erstellung einer professionellen Website mit Google My Business-Optimierung kamen im ersten Monat 7 Anfragen über das Internet.",
      m1: "7", m1Label: "Online-Anfragen im ersten Monat",
      m2: "Google", m2Label: "Platz 1 für ‚Maler Ganderkesee'",
    },
    faqs: [
      { question: "Lohnt sich Digitalisierung auch für kleine Betriebe in Ganderkesee?", answer: "Ja – besonders für kleine Betriebe, wo jede Stunde Verwaltung direkt fehlt. Schon eine einfache Website mit Online-Terminbuchung kann enorme Wirkung haben." },
      { question: "Gibt es Förderungen für Ganderkeseer Unternehmen?", answer: "Ja. Das Land Niedersachsen und der Bund bieten Programme für KMU-Digitalisierung. Wir prüfen mit Ihnen, welche Förderungen zutreffen." },
      { question: "Wie lange dauert eine Digitalisierungsmaßnahme?", answer: "Das hängt vom Umfang ab. Eine neue Website ist in 1–2 Wochen fertig. Ein größeres Digitalisierungsprojekt (z.B. digitales Büro) kann 4–8 Wochen in Anspruch nehmen." },
      { question: "Sind Ihre Lösungen für ältere Mitarbeiter bedienbar?", answer: "Ja. Wir achten auf intuitive Bedienung und führen Schulungen durch. Ziel ist immer, dass alle Mitarbeiter die neuen Systeme schnell und gerne nutzen." },
    ],
    relatedPages: [
      { title: "KI kleine Unternehmen Ganderkesee", href: "/ki-kleine-unternehmen-ganderkesee" },
      { title: "Automatisierung Handwerk Ganderkesee", href: "/automatisierung-handwerk-ganderkesee" },
      { title: "Online-Sichtbarkeit Ganderkesee", href: "/online-sichtbarkeit-ganderkesee" },
      { title: "Digitalisierung Kosten Ganderkesee", href: "/digitalisierung-kosten-ganderkesee" },
      { title: "KI-Automatisierung Ganderkesee", href: "/ki-automatisierung-ganderkesee" },
      { title: "Digitalisierung Bremen", href: "/digitalisierung-bremen" },
    ],
  },

]

// Helper: page by slug
export function getPageBySlug(slug: string): PillarPageData | undefined {
  return pillarPages.find(p => p.slug === slug)
}

// All slugs (for static generation)
export const allSlugs = pillarPages.map(p => p.slug)
