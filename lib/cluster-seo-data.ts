import { FAQ } from './local-seo-data';

/* ── Types ───────────────────────────────────────────────────────────────────── */
export type ClusterIntent  = 'BOFU' | 'MOFU' | 'TOFU';
export type ClusterType    = 'support' | 'cost' | 'education' | 'trust';

export interface ClusterSection { heading: string; body: string }

export interface ClusterPageData {
  slug:            string;
  parentSlug:      string;       // links to parent pillar money page
  metaTitle:       string;
  metaDescription: string;
  h1:              string;
  subtitle:        string;
  city:            string;
  service:         string;
  intent:          ClusterIntent;
  type:            ClusterType;
  keywordPriority: 1 | 2 | 3;   // 1 = highest (BOFU)
  intro:           string;
  sections:        ClusterSection[];
  faqs:            FAQ[];
  relatedClusters: { title: string; href: string }[];
}

/* ════════════════════════════════════════════════════════════════════════════
   BREMEN – 7 Cluster-Seiten
   ════════════════════════════════════════════════════════════════════════════ */
const bremenClusters: ClusterPageData[] = [

  {
    slug: 'ki-fuer-handwerker-bremen', parentSlug: 'ki-automatisierung-bremen',
    metaTitle: 'KI für Handwerksbetriebe Bremen – Automatisierung & Effizienz | Northcode',
    metaDescription: 'KI-Automatisierung speziell für Handwerker in Bremen: Angebote, Rechnungen & Terminplanung automatisieren. Jetzt kostenloses Erstgespräch sichern!',
    h1: 'KI für Handwerksbetriebe in Bremen', subtitle: 'Weniger Büroarbeit – mehr Zeit für das Handwerk.',
    city: 'Bremen', service: 'KI für Handwerker', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Bremer Handwerksbetriebe verlieren täglich Stunden mit Angeboten, Rechnungen und Terminplanung – Zeit, die im Betrieb fehlt. KI-Automatisierung löst genau diese Probleme: schneller, günstiger und ohne IT-Abteilung.',
    sections: [
      { heading: 'Typische Zeitfresser im Handwerk – und wie KI hilft',
        body: 'Angebotsschreiben, Auftragsbestätigungen, Mahnungen und Terminreminder sind in vielen Bremer Handwerksbetrieben noch vollständig manuell. Mit KI-gestützten Systemen lassen sich diese Aufgaben zu 70–80 % automatisieren – innerhalb weniger Tage eingerichtet.' },
      { heading: 'KI-Angebotserstellung für Bremer Handwerker',
        body: 'Northcode entwickelt KI-Systeme, die aus Ihren Eckdaten (Material, Stunden, Aufwand) automatisch professionelle Angebote generieren. Das Ergebnis: Ein Angebot in Minuten statt Stunden – und Ihr Büro kann gleichzeitig andere Aufgaben erledigen.' },
      { heading: 'Automatische Rechnungsstellung & Mahnwesen',
        body: 'Nach Auftragsabschluss erstellt das System die Rechnung automatisch, versendet sie per E-Mail und erinnert säumige Zahler nach definierten Intervallen. Kein manuelles Nachfassen mehr – der Cashflow verbessert sich messbar.' },
      { heading: 'Terminplanung per KI-Chatbot',
        body: 'Kunden buchen Termine selbst über einen intelligenten Chat auf Ihrer Website oder WhatsApp. Das System prüft die Verfügbarkeit Ihres Teams, bestätigt automatisch und erinnert beide Seiten – rund um die Uhr, auch am Wochenende.' },
    ],
    faqs: [
      { question: 'Lohnt sich KI-Automatisierung für einen kleinen Handwerksbetrieb in Bremen?',
        answer: 'Ja – besonders für kleine Betriebe in Bremen mit 1–10 Mitarbeitern. Wenn Sie täglich mehr als 1–2 Stunden mit Papierkram verbringen, amortisiert sich die Investition typisch in 2–4 Monaten.' },
      { question: 'Muss ich technische Kenntnisse haben?',
        answer: 'Nein. Northcode richtet alles ein, erklärt die Bedienung in einer kurzen Schulung und ist dauerhaft als Ansprechpartner erreichbar. Ihr Team muss keine Software programmieren.' },
      { question: 'Was kostet KI-Automatisierung für Handwerksbetriebe in Bremen?',
        answer: 'Einfache Systeme (z.B. automatische Angebotsvorlagen + Terminbuchung) starten ab ca. 600–800 €. Im kostenlosen Erstgespräch erhalten Sie eine genaue Kalkulation für Ihren Betrieb.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Bremen', href: '/ki-automatisierung-bremen' },
      { title: 'Prozessautomatisierung Bremen', href: '/prozessautomatisierung-bremen' },
      { title: 'KI für Steuerberater Bremen', href: '/ki-fuer-steuerberater-bremen' },
    ],
  },

  {
    slug: 'ki-fuer-steuerberater-bremen', parentSlug: 'ki-automatisierung-bremen',
    metaTitle: 'KI für Steuerberater Bremen – Effizienz & Automatisierung | Northcode',
    metaDescription: 'KI-Lösungen für Steuerberatungskanzleien in Bremen: Mandantenkommunikation, Dokumentenverarbeitung & Fristen automatisieren. Jetzt beraten lassen!',
    h1: 'KI für Steuerberater in Bremen', subtitle: 'Mehr Mandanten, weniger Verwaltung.',
    city: 'Bremen', service: 'KI für Steuerberater', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Steuerberatungskanzleien in Bremen kämpfen mit steigendem Mandantenvolumen, komplexen Fristen und wachsendem Dokumentenaufwand. KI-Systeme von Northcode helfen gezielt: Routineaufgaben werden automatisiert, damit Ihre Berater sich auf wertschöpfende Beratung konzentrieren können.',
    sections: [
      { heading: 'Automatisierte Mandantenkommunikation',
        body: 'Standardanfragen, Dokumentenanforderungen und Fristenreminder können vollständig automatisiert werden. Ein KI-System erkennt eingehende E-Mails, sortiert sie nach Dringlichkeit und antwortet auf Routinefragen ohne manuelle Eingriffe.' },
      { heading: 'Intelligente Dokumentenverarbeitung',
        body: 'Belege, Kontoauszüge und Verträge lassen sich per KI automatisch erkennen, klassifizieren und in Ihre Buchhaltungssoftware übertragen. Das spart bei einer mittelgroßen Kanzlei in Bremen bis zu 20 Stunden pro Woche.' },
      { heading: 'KI-gestützte Fristenverwaltung',
        body: 'Steuererklärungsfristen, Einspruchsfristen und Mandantenvorlagen werden automatisch überwacht. Erinnerungen gehen rechtzeitig an Mandanten und Kanzleimitarbeiter – keine vergessene Frist mehr.' },
    ],
    faqs: [
      { question: 'Ist KI in der Steuerberatung datenschutzrechtlich zulässig?',
        answer: 'Ja, mit den richtigen Maßnahmen. Northcode implementiert DSGVO-konforme Lösungen mit Datenverarbeitungsverträgen und – auf Wunsch – mit Datenhaltung auf deutschen Servern.' },
      { question: 'Welche Systeme können integriert werden?',
        answer: 'Wir integrieren mit DATEV, Lexware, ADDISON und anderen Kanzleisoftware-Lösungen, die in Bremer Kanzleien verbreitet sind.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Bremen', href: '/ki-automatisierung-bremen' },
      { title: 'KI für Handwerker Bremen', href: '/ki-fuer-handwerker-bremen' },
      { title: 'Digitalisierung Bremen', href: '/digitalisierung-bremen' },
    ],
  },

  {
    slug: 'crm-software-bremen', parentSlug: 'unternehmenssysteme-bremen',
    metaTitle: 'CRM Software Bremen – Individuelle CRM-Systeme für KMU | Northcode',
    metaDescription: 'Maßgeschneiderte CRM-Systeme für Unternehmen in Bremen: Kundenverwaltung, Sales Pipeline & Automatisierung. Kein teures Standard-CRM – effizient & günstig!',
    h1: 'CRM Software für Unternehmen in Bremen', subtitle: 'Mehr Umsatz durch besseres Kundenmanagement.',
    city: 'Bremen', service: 'CRM Software', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Viele Unternehmen in Bremen verwalten ihre Kunden noch mit Excel-Tabellen oder überteuerten Standard-CRM-Systemen, die nicht zum eigenen Prozess passen. Northcode entwickelt individuelle CRM-Lösungen, die exakt Ihren Vertriebsprozess abbilden – schlank, effizient und ohne monatliche Lizenzkosten.',
    sections: [
      { heading: 'Warum Standard-CRM oft nicht passt',
        body: 'Salesforce, HubSpot und andere bekannte CRM-Systeme kosten pro Nutzer 80–300 € monatlich und erzwingen oft Anpassungen Ihrer Prozesse an die Software statt umgekehrt. Für Bremer KMU mit 5–50 Mitarbeitern ist ein maßgeschneidertes System oft günstiger und besser.' },
      { heading: 'Was ein individuelles CRM für Bremen-Unternehmen leistet',
        body: 'Kontaktverwaltung, Deal-Pipeline, Aufgaben, E-Mail-Integration, Angebotserstellung und Reporting – alles auf Ihren Prozess zugeschnitten. Ihre Mitarbeiter arbeiten effizienter, weil sie keine unnötigen Felder oder Funktionen umgehen müssen.' },
      { heading: 'Integration mit bestehenden Tools',
        body: 'Northcode verbindet Ihr CRM mit E-Mail (Outlook, Gmail), Buchhaltung (Lexware, DATEV), Telefonie und anderen Tools, die Sie bereits nutzen. Kein manuelles Copy-Paste mehr zwischen Systemen.' },
    ],
    faqs: [
      { question: 'Wie lange dauert die Entwicklung eines CRM-Systems in Bremen?',
        answer: 'Ein Basis-CRM (Kontakte, Deals, Aufgaben) ist in 2–3 Wochen fertig. Komplexere Systeme mit Integrationen dauern 4–8 Wochen. Wir starten iterativ – erste Features gehen früh live.' },
      { question: 'Was kostet ein individuelles CRM?',
        answer: 'Ab ca. 2.500 € für ein einfaches System. Verglichen mit 3 Jahren SaaS-Lizenzkosten (z.B. 3 Nutzer × 100 €/Monat = 3.600 €) amortisiert sich die individuelle Lösung schnell und gehört dann Ihnen.' },
    ],
    relatedClusters: [
      { title: 'Unternehmenssysteme Bremen', href: '/unternehmenssysteme-bremen' },
      { title: 'Digitalisierung Bremen', href: '/digitalisierung-bremen' },
      { title: 'CRM Software Oldenburg', href: '/crm-software-oldenburg' },
    ],
  },

  {
    slug: 'seo-agentur-bremen', parentSlug: 'webdesign-bremen',
    metaTitle: 'SEO Agentur Bremen – Lokale Suchmaschinenoptimierung | Northcode',
    metaDescription: 'Professionelle SEO-Optimierung für Unternehmen in Bremen: lokale Keywords, technisches SEO & Content-Strategie. Mehr Kunden durch Google. Jetzt starten!',
    h1: 'SEO-Agentur in Bremen', subtitle: 'Auf Seite 1 bei Google – für Ihre Bremer Zielgruppe.',
    city: 'Bremen', service: 'SEO Optimierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Wenn Ihre Kunden in Bremen nach Ihren Leistungen suchen, sollte Ihr Unternehmen auf den ersten Google-Plätzen stehen. Northcode entwickelt gezielte SEO-Strategien für Bremer Unternehmen – technisch sauber, lokal optimiert und messbar erfolgreich.',
    sections: [
      { heading: 'Lokale SEO für Bremen – was wirklich funktioniert',
        body: 'Lokal-SEO in Bremen bedeutet: Google My Business optimieren, lokale Keywords mit Stadtbezug in Content und Meta-Daten einbauen, Backlinks von regionalen Partnern aufbauen und technische Fehler beheben. Northcode übernimmt alle Aspekte.' },
      { heading: 'Technisches SEO – die unsichtbare Grundlage',
        body: 'Seitengeschwindigkeit (Core Web Vitals), korrekte Indexierung, mobile Optimierung und strukturierte Daten (JSON-LD) sind Grundvoraussetzung für gute Rankings. Northcode führt eine vollständige technische Analyse durch und behebt alle Schwachstellen.' },
      { heading: 'Content-Strategie für Bremer Unternehmen',
        body: 'Gut positionierter Content beantwortet genau die Fragen, die Ihre Zielkunden in Bremen bei Google eingeben. Wir recherchieren die relevanten Keywords, erstellen einen Content-Plan und produzieren SEO-optimierte Texte – auch mit KI-Unterstützung.' },
    ],
    faqs: [
      { question: 'Wann sieht man erste SEO-Ergebnisse für ein Bremer Unternehmen?',
        answer: 'Für lokale Keywords in Bremen sind erste Ranking-Verbesserungen typisch nach 4–8 Wochen sichtbar. Stabile Top-3-Platzierungen erreichen wir meist nach 3–6 Monaten kontinuierlicher Arbeit.' },
      { question: 'Was kostet SEO-Betreuung in Bremen?',
        answer: 'Einmalige Analyse + Optimierung ab 800 €. Laufende SEO-Betreuung ab 350 €/Monat je nach Umfang. Im Erstgespräch erhalten Sie ein transparentes Angebot.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Bremen', href: '/webdesign-bremen' },
      { title: 'Leadgenerierung Bremen', href: '/leadgenerierung-bremen' },
      { title: 'SEO Agentur Oldenburg', href: '/seo-agentur-oldenburg' },
    ],
  },

  {
    slug: 'leadgenerierung-bremen', parentSlug: 'webdesign-bremen',
    metaTitle: 'Leadgenerierung Bremen – Mehr Kundenanfragen für Ihr Unternehmen | Northcode',
    metaDescription: 'Systematische Leadgenerierung für Bremer Unternehmen: Landingpages, Funnel & Automatisierung. Mehr qualifizierte Anfragen, weniger Streuverlust. Jetzt starten!',
    h1: 'Leadgenerierung für Unternehmen in Bremen', subtitle: 'Qualifizierte Anfragen – systematisch und skalierbar.',
    city: 'Bremen', service: 'Leadgenerierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Die meisten Bremer Unternehmen gewinnen neue Kunden durch Empfehlungen – ein instabiler Kanal. Northcode baut systematische Leadgenerierungs-Systeme: Conversion-optimierte Landingpages, automatisierte Follow-up-Sequenzen und messbare Ergebnisse statt Zufallsanfragen.',
    sections: [
      { heading: 'Der Leadgenerierungs-Funnel für Bremer KMU',
        body: 'Ein funktionierender Funnel besteht aus drei Stufen: Aufmerksamkeit (Traffic durch SEO, Ads oder Social), Interesse (Landingpage mit überzeugendem Angebot) und Conversion (Formular, Telefon oder Kalender-Buchung). Northcode baut und optimiert alle drei Stufen.' },
      { heading: 'Conversion-optimierte Landingpages',
        body: 'Statt Traffic auf die Startseite zu schicken, leiten wir ihn auf spezifische Landingpages mit einem einzigen Ziel: die Anfrage. Northcode entwickelt Seiten mit bewährten Conversion-Elementen – Headline, Vertrauen, Beweis, CTA – und testet kontinuierlich.' },
      { heading: 'Automatisiertes Lead-Nurturing',
        body: 'Nach der ersten Anfrage begleitet ein automatisiertes E-Mail-System potenzielle Kunden mit relevanten Informationen bis zur Kaufentscheidung. So verwandeln sich auch "Ich überlege noch"-Kontakte in Aufträge – ohne manuellen Aufwand.' },
    ],
    faqs: [
      { question: 'Wie viele Leads kann ich in Bremen monatlich erwarten?',
        answer: 'Das hängt von Ihrer Branche, Ihrem Budget und dem Wettbewerb ab. Realistische Benchmarks zeigen: 10–50 qualifizierte Anfragen pro Monat sind mit einem guten System in Bremen möglich. Im Erstgespräch analysieren wir Ihr Potenzial.' },
      { question: 'Funktioniert Leadgenerierung auch ohne Werbebudget?',
        answer: 'Ja – über organische SEO und Content-Marketing. Das dauert länger (3–6 Monate), ist aber nachhaltig und kostengünstiger als Dauerbuchen von Ads. Northcode kombiniert beide Ansätze für optimale Ergebnisse.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Bremen', href: '/webdesign-bremen' },
      { title: 'SEO Agentur Bremen', href: '/seo-agentur-bremen' },
      { title: 'Landingpage Delmenhorst', href: '/landingpage-delmenhorst' },
    ],
  },

  {
    slug: 'webdesign-kosten-bremen', parentSlug: 'webdesign-bremen',
    metaTitle: 'Webdesign Kosten Bremen 2026 – Preise & Übersicht | Northcode',
    metaDescription: 'Was kostet eine professionelle Website in Bremen? Transparente Preise für Landingpages, Business-Websites & Onlineshops. Kein Überraschungsangebot!',
    h1: 'Webdesign Kosten in Bremen – transparente Preisübersicht', subtitle: 'Was kostet eine professionelle Website wirklich?',
    city: 'Bremen', service: 'Webdesign Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Die Kosten für eine professionelle Website variieren in Bremen stark – von 300 € bei Baukastensystemen bis zu 50.000 € bei komplexen Individualprojekten. Diese Übersicht zeigt Ihnen, was Sie für welches Budget realistisch erwarten dürfen.',
    sections: [
      { heading: 'Webdesign-Preistabelle für Bremen',
        body: 'Einfache Visitenkartenseite (1–3 Seiten): 500–900 €. Professionelle Business-Website (5–10 Seiten): 1.200–3.500 €. Landingpage mit CRO: 600–1.500 €. Onlineshop (Shopify): 1.800–5.000 €. Individuelle Web-App: ab 5.000 €. Alle Preise verstehen sich als Einmalkosten ohne laufende Hosting-Gebühren.' },
      { heading: 'Was bestimmt den Preis einer Website in Bremen?',
        body: 'Haupttreiber sind: Anzahl der Seiten, Designaufwand (Template vs. individuell), benötigte Funktionen (Buchungssystem, Shop, Mehrsprachigkeit), gewünschter CMS-Zugang und Textproduktion. Northcode klärt alle Punkte im kostenlosen Briefing-Gespräch.' },
      { heading: 'Freelancer vs. Agentur vs. Baukasten – Preisvergleich Bremen',
        body: 'Baukästen (Wix, Squarespace) kosten 15–50 €/Monat, liefern aber generische Ergebnisse ohne SEO-Power. Freelancer (800–2.500 €) gut für einfache Projekte. Agenturen wie Northcode (1.200–5.000 €) bieten Full-Service: Konzept, Design, Entwicklung, SEO, Texte.' },
    ],
    faqs: [
      { question: 'Gibt es versteckte Kosten bei einer Website in Bremen?',
        answer: 'Bei Northcode nicht. Wir nennen Ihnen vor Projektstart alle Kosten: Entwicklung, Hosting (10–25 €/Monat empfohlen), Domain (10–15 €/Jahr) und optionale Wartung. Keine Überraschungen.' },
      { question: 'Kann ich eine günstige Website mit guten SEO-Ergebnissen bekommen?',
        answer: 'Begrenzt. Für lokale SEO in Bremen reicht eine saubere, technisch optimierte Website ab 1.200 €. Für konkurrenziertere Keywords brauchen Sie mehr – Northcode zeigt Ihnen den optimalen Weg für Ihr Budget.' },
      { question: 'Was kostet die laufende Betreuung einer Website in Bremen?',
        answer: 'Optionale Wartungsverträge ab 49 €/Monat: Updates, kleine Änderungen, Monitoring. Oder Sie verwalten Inhalte selbst über das CMS – kostenlos.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Bremen', href: '/webdesign-bremen' },
      { title: 'KI Kosten Bremen', href: '/ki-kosten-bremen' },
      { title: 'Webdesign Kosten Oldenburg', href: '/webdesign-kosten-oldenburg' },
    ],
  },

  {
    slug: 'ki-kosten-bremen', parentSlug: 'ki-automatisierung-bremen',
    metaTitle: 'KI Automatisierung Kosten Bremen 2026 – Preise & ROI | Northcode',
    metaDescription: 'Was kostet KI-Automatisierung für Unternehmen in Bremen? Ehrliche Preise, ROI-Kalkulation & typische Amortisationszeiten. Jetzt informieren!',
    h1: 'KI-Automatisierung Kosten in Bremen – was Sie wirklich zahlen', subtitle: 'Transparente Preise, ehrlicher ROI.',
    city: 'Bremen', service: 'KI Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'KI-Automatisierung klingt teuer – ist sie oft aber nicht. Für viele Bremer KMU amortisiert sich die Investition bereits innerhalb von 2–4 Monaten. Diese Übersicht zeigt realistische Kosten und gibt Ihnen eine ROI-Kalkulation für Ihren Betrieb.',
    sections: [
      { heading: 'KI-Preistabelle für Bremer Unternehmen',
        body: 'Einfacher KI-Chatbot (FAQ-Beantwortung): 600–1.200 €. Workflow-Automatisierung (3–5 Prozesse): 1.500–3.000 €. Komplettes KI-Business-System: 3.000–8.000 €. KI-Beratung & Strategie-Workshop: 490–1.500 €. Monatliche Systemwartung: 50–200 €.' },
      { heading: 'ROI-Kalkulation: Wann lohnt sich KI in Bremen?',
        body: 'Beispiel: Ihr Team verbringt täglich 2 Stunden mit Routineaufgaben (Angebote, E-Mails, Terminplanung). Bei 25 €/Stunde Personalkosten sind das 1.250 €/Monat. Eine Automatisierung für 2.000 € amortisiert sich in unter 2 Monaten – und spart danach dauerhaft.' },
      { heading: 'Typische Amortisationszeiten nach Branche',
        body: 'Handwerk (Angebote/Rechnungen): 2–3 Monate. Dienstleister (Terminplanung/Support): 1–2 Monate. Handel (Bestellverarbeitung/Kundenservice): 3–4 Monate. Kanzleien (Dokumentenverarbeitung): 2–3 Monate. Die genaue Kalkulation für Ihren Betrieb erstellen wir im kostenlosen Erstgespräch.' },
    ],
    faqs: [
      { question: 'Gibt es Fördermittel für KI-Investitionen in Bremen?',
        answer: 'Ja. Das Bundesministerium für Wirtschaft fördert KI-Einführungen in KMU (Programm "Digital Jetzt"). Die Förderquote liegt bei 15–40 %. Northcode unterstützt Sie beim Förderantrag.' },
      { question: 'Wie vergleichen sich die Kosten mit einem zusätzlichen Mitarbeiter?',
        answer: 'Ein zusätzlicher Teilzeitmitarbeiter in Bremen kostet ca. 1.500–2.000 €/Monat inkl. Lohnnebenkosten. Ein KI-System kostet einmalig 1.500–4.000 € und arbeitet rund um die Uhr ohne Urlaub oder Krankheit.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Bremen', href: '/ki-automatisierung-bremen' },
      { title: 'Webdesign Kosten Bremen', href: '/webdesign-kosten-bremen' },
      { title: 'KI Kosten Oldenburg', href: '/ki-kosten-oldenburg' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   OLDENBURG – 7 Cluster-Seiten
   ════════════════════════════════════════════════════════════════════════════ */
const oldenburgClusters: ClusterPageData[] = [

  {
    slug: 'ki-fuer-handwerker-oldenburg', parentSlug: 'ki-beratung-oldenburg',
    metaTitle: 'KI für Handwerker Oldenburg – Automatisierung im Betrieb | Northcode',
    metaDescription: 'KI-Automatisierung für Handwerksbetriebe in Oldenburg: Angebote, Termine & Rechnungen automatisieren. Kostenfreie Erstberatung sichern!',
    h1: 'KI für Handwerksbetriebe in Oldenburg', subtitle: 'Mehr Aufträge, weniger Büroarbeit.',
    city: 'Oldenburg', service: 'KI für Handwerker', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Oldenburger Handwerksbetriebe stehen vor denselben Herausforderungen wie überall: zu viel Zeit mit Verwaltung, zu wenig Zeit für das eigentliche Handwerk. Northcode automatisiert die wichtigsten Büroutgaben mit praxiserprobten KI-Lösungen – speziell für die Weser-Ems-Region.',
    sections: [
      { heading: 'Die 3 größten Zeitfresser im Oldenburger Handwerk',
        body: 'Angebotsschreiben (Ø 45 Min. pro Angebot), Terminkoordination (täglich 30–60 Min.) und Rechnungsstellung mit Mahnwesen (wöchentlich 2–4 Std.) kosten die meisten Betriebe zusammen über 10 Stunden pro Woche. KI reduziert diesen Aufwand um bis zu 80 %.' },
      { heading: 'KI-Chatbot für Terminbuchung in Oldenburg',
        body: 'Kunden aus der Region Weser-Ems buchen Termine direkt über Ihre Website oder WhatsApp – automatisch, rund um die Uhr. Das System prüft Verfügbarkeit, bestätigt und erinnert beide Seiten. Kein Telefonieren mehr für einfache Terminabfragen.' },
      { heading: 'Automatische Angebote in Minuten statt Stunden',
        body: 'Northcode entwickelt ein KI-gestütztes Angebotssystem, das aus Ihren Stammdaten (Stundensätze, Materialpreise) fertige, professionelle Angebote generiert. Per Knopfdruck – in Minuten statt Stunden. Inklusive Folgemail und Wiedervorlage.' },
    ],
    faqs: [
      { question: 'Funktioniert das auch für Handwerker in Oldenburgischen Kleinstädten?',
        answer: 'Ja. Northcode betreut Betriebe in der gesamten Region Weser-Ems – persönlich vor Ort in Oldenburg oder per Video-Call. Entfernung ist kein Problem.' },
      { question: 'Wie schnell ist das System einsatzbereit?',
        answer: 'Einfache Systeme (Terminbuchung + Bestätigungs-E-Mails) gehen innerhalb von 48–72 Stunden live. Komplexere Angebotssysteme dauern 1–2 Wochen.' },
    ],
    relatedClusters: [
      { title: 'KI-Beratung Oldenburg', href: '/ki-beratung-oldenburg' },
      { title: 'KI für Handwerker Bremen', href: '/ki-fuer-handwerker-bremen' },
      { title: 'Leadgenerierung Oldenburg', href: '/leadgenerierung-oldenburg' },
    ],
  },

  {
    slug: 'ki-fuer-steuerberater-oldenburg', parentSlug: 'ki-beratung-oldenburg',
    metaTitle: 'KI für Steuerberater Oldenburg – Kanzleiautomatisierung | Northcode',
    metaDescription: 'KI-Lösungen für Steuerberatungskanzleien in Oldenburg: Mandantenmanagement, Dokumentenverarbeitung & Fristen automatisieren. DSGVO-konform.',
    h1: 'KI für Steuerberater in Oldenburg', subtitle: 'Mehr Mandanten – ohne mehr Mitarbeiter.',
    city: 'Oldenburg', service: 'KI für Steuerberater', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Steuerberatungskanzleien in Oldenburg und der Region Weser-Ems stehen unter wachsendem Druck: mehr Mandanten, komplexere Anforderungen, aber kaum mehr qualifiziertes Personal. KI-Automatisierung ist der Ausweg – und Northcode baut die passenden Systeme.',
    sections: [
      { heading: 'Mandantenkommunikation automatisieren',
        body: 'Routineanfragen ("Wann ist meine Steuererklärung fertig?", Belegeinreichung, Terminabfragen) werden von einem KI-System vollautomatisch beantwortet. Ihre Berater erhalten nur komplexe, beratungsintensive Anfragen.' },
      { heading: 'Digitale Belegerfassung mit KI',
        body: 'Belege, Quittungen und Kontoauszüge werden per App oder E-Mail eingereicht und von der KI automatisch klassifiziert, sortiert und in Ihr Buchhaltungssystem übertragen. Kein manuelles Eintippen mehr.' },
      { heading: 'Fristenmanagement für Oldenburger Kanzleien',
        body: 'Das System überwacht alle relevanten Fristen, sendet automatische Erinnerungen an Mandanten und Mitarbeiter und erstellt Prioritätslisten für das Team. Keine vergessene Frist, keine Last-Minute-Stress-Situationen mehr.' },
    ],
    faqs: [
      { question: 'Welche Kanzleisoftware wird in Oldenburg typischerweise verwendet?',
        answer: 'Hauptsächlich DATEV und Addison. Northcode integriert KI-Systeme nahtlos in beide Umgebungen – ohne Ihren bestehenden Workflow zu verändern.' },
      { question: 'Wie sichern wir Mandantendaten bei KI-Nutzung?',
        answer: 'Durch End-to-End-Verschlüsselung, Datenhaltung in deutschen Rechenzentren (auf Wunsch Hetzner Nürnberg/Falkenstein) und schriftliche Datenverarbeitungsverträge. Vollständig DSGVO-konform.' },
    ],
    relatedClusters: [
      { title: 'KI-Beratung Oldenburg', href: '/ki-beratung-oldenburg' },
      { title: 'KI für Steuerberater Bremen', href: '/ki-fuer-steuerberater-bremen' },
      { title: 'Digitalisierung Oldenburg', href: '/digitalisierung-oldenburg' },
    ],
  },

  {
    slug: 'crm-software-oldenburg', parentSlug: 'webdesign-oldenburg',
    metaTitle: 'CRM Software Oldenburg – Individuelle Kundenverwaltung | Northcode',
    metaDescription: 'Maßgeschneiderte CRM-Software für Unternehmen in Oldenburg: Kundenverwaltung, Pipeline & Automatisierung. Kein teures Abo – eigene Lösung!',
    h1: 'CRM Software für Unternehmen in Oldenburg', subtitle: 'Kundendaten im Griff – Umsatz im Blick.',
    city: 'Oldenburg', service: 'CRM Software', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Oldenburger Unternehmen in der Weser-Ems-Region verlieren täglich Umsatz, weil Kundendaten über Excel, E-Mails und Notizzettel verteilt sind. Ein sauber implementiertes CRM-System zentralisiert alles – und Northcode baut es exakt nach Ihren Prozessen.',
    sections: [
      { heading: 'Die häufigsten CRM-Probleme in Oldenburg',
        body: 'Doppelte Kontaktpflege in mehreren Systemen, fehlende Wiedervorlagen, kein Überblick über den Angebotsstatus und keine History beim Kundengespräch – diese Probleme sind in Oldenburger KMU die Regel, nicht die Ausnahme.' },
      { heading: 'Individuelles CRM vs. Standard (HubSpot, Pipedrive)',
        body: 'HubSpot und Pipedrive kosten 50–300 €/Nutzer/Monat. Bei 5 Nutzern über 3 Jahre sind das 9.000–54.000 €. Northcode entwickelt ein maßgeschneidertes CRM für Einmalkosten von 3.000–6.000 € – ohne monatliche Lizenzgebühren und ohne unnötige Funktionen.' },
      { heading: 'Integrationen für den Oldenburger Markt',
        body: 'Verbindung mit Outlook, Teams, DATEV, Shopify oder anderen Tools, die in Ihrem Betrieb eingesetzt werden. Daten fließen automatisch – kein Copy-Paste, keine Fehler.' },
    ],
    faqs: [
      { question: 'Kann ich meine alten Kundendaten migrieren?',
        answer: 'Ja. Northcode migriert Ihre Daten aus Excel, CSV, altem CRM oder anderen Quellen vollständig und sicher in das neue System.' },
      { question: 'Wie lange dauert die CRM-Entwicklung in Oldenburg?',
        answer: 'Basis-CRM: 2–3 Wochen. Mit Integrationen und kundenspezifischen Funktionen: 4–8 Wochen. Wir arbeiten iterativ – erste Features gehen früh live.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'CRM Software Bremen', href: '/crm-software-bremen' },
      { title: 'Unternehmenssysteme Oldenburg', href: '/unternehmenssysteme-oldenburg' },
    ],
  },

  {
    slug: 'seo-agentur-oldenburg', parentSlug: 'webdesign-oldenburg',
    metaTitle: 'SEO Agentur Oldenburg – Lokale Suchmaschinenoptimierung | Northcode',
    metaDescription: 'Professionelle SEO-Optimierung für Unternehmen in Oldenburg: lokale Keywords, technisches SEO & Content. Mehr Kunden durch Google. Jetzt anfragen!',
    h1: 'SEO-Agentur in Oldenburg', subtitle: 'Sichtbar für Ihre Zielkunden in der Weser-Ems-Region.',
    city: 'Oldenburg', service: 'SEO Optimierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Wenn Oldenburger Kunden bei Google nach Ihren Leistungen suchen, wer taucht auf? Wenn nicht Sie, dann Ihr Wettbewerber. Northcode entwickelt gezielte SEO-Strategien für Unternehmen in Oldenburg und der Region Weser-Ems – und bringt Sie dauerhaft auf Seite 1.',
    sections: [
      { heading: 'Lokale SEO für den Oldenburger Markt',
        body: 'Oldenburg hat spezifische Suchtrends und Wettbewerbsstrukturen. Northcode analysiert die Suchlandschaft in Ihrer Branche, identifiziert die wertvollsten Keywords und optimiert Ihre Website gezielt dafür.' },
      { heading: 'Google My Business für Oldenburg',
        body: 'Ein vollständig optimiertes Google-Unternehmensprofil ist für lokale Sichtbarkeit in Oldenburg unverzichtbar. Northcode richtet Ihr Profil ein, optimiert Kategorien, Bilder und Beschreibungen und baut einen Bewertungsprozess auf.' },
      { heading: 'Content-SEO für regionale Keywords',
        body: 'Pillar-Pages und Cluster-Artikel für die wichtigsten Service-Stadt-Kombinationen in der Weser-Ems-Region bauen Ihre thematische Autorität bei Google kontinuierlich aus – nachhaltig und algorithm-resistent.' },
    ],
    faqs: [
      { question: 'Wie stark ist der SEO-Wettbewerb in Oldenburg?',
        answer: 'Für die meisten lokalen Keywords in Oldenburg ist der Wettbewerb moderat – deutlich geringer als in Bremen oder Hamburg. Das bedeutet: mit guter Arbeit sind schnelle Ergebnisse möglich.' },
      { question: 'Was kostet SEO in Oldenburg?',
        answer: 'Einmalige Optimierung ab 700 €. Laufende Betreuung ab 299 €/Monat. Im Erstgespräch (kostenlos) erhalten Sie eine ehrliche Einschätzung, was in Ihrer Branche realistisch erreichbar ist.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'SEO Agentur Bremen', href: '/seo-agentur-bremen' },
      { title: 'Leadgenerierung Oldenburg', href: '/leadgenerierung-oldenburg' },
    ],
  },

  {
    slug: 'leadgenerierung-oldenburg', parentSlug: 'webdesign-oldenburg',
    metaTitle: 'Leadgenerierung Oldenburg – Mehr Kundenanfragen für KMU | Northcode',
    metaDescription: 'Systematische Leadgenerierung für Oldenburger Unternehmen: Funnel, Landingpages & Automatisierung. Mehr qualifizierte Anfragen. Jetzt starten!',
    h1: 'Leadgenerierung für Unternehmen in Oldenburg', subtitle: 'Regelmäßige Neukundenanfragen – automatisch und planbar.',
    city: 'Oldenburg', service: 'Leadgenerierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'In Oldenburg und der Region Weser-Ems gewinnen die meisten KMU Kunden noch durch Mundpropaganda. Das ist gut – aber unplanbar. Northcode ergänzt diesen Kanal mit digitalen Leadgenerierungs-Systemen, die zuverlässig und skalierbar neue Kundenanfragen liefern.',
    sections: [
      { heading: 'Warum Mundpropaganda allein nicht reicht',
        body: 'Empfehlungen kommen nicht immer dann, wenn Sie sie brauchen. Mit einem digitalen Leadgenerierungs-System in Oldenburg steuern Sie aktiv, wie viele Anfragen Sie monatlich erhalten – und aus welchen Branchen oder Stadtteilen.' },
      { heading: 'Conversion-optimierte Landingpages für Oldenburg',
        body: 'Northcode entwickelt Landingpages, die gezielt auf lokale Suchanfragen in Oldenburg ausgerichtet sind. Statt Ihrer generischen Startseite bekommt der Besucher eine Seite mit genau dem Angebot, das er gesucht hat – die Conversion Rate verdoppelt bis verdreifacht sich typisch.' },
      { heading: 'Automatisiertes Follow-up-System',
        body: 'Nach einer Anfrage aus Oldenburg oder der Weser-Ems-Region folgt automatisch eine Bestätigung, dann 1–2 informative E-Mails und eine Erinnerung – vollautomatisch. Auch Anfragen, die nicht sofort kaufen, werden nachgehalten.' },
    ],
    faqs: [
      { question: 'Wie viele Leads sind für ein Oldenburger Unternehmen realistisch?',
        answer: 'Je nach Branche und Budget: 8–40 qualifizierte Anfragen pro Monat. Für handwerkliche Betriebe in Oldenburg eher 15–30, für spezialisierte B2B-Dienstleister 5–15.' },
      { question: 'Funktioniert Leadgenerierung auch in der Weser-Ems-Region außerhalb Oldenburgs?',
        answer: 'Ja. Northcode optimiert gezielt auch für Städte und Gemeinden rund um Oldenburg: Delmenhorst, Ganderkesee, Bad Zwischenahn, Rastede und weitere.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'SEO Agentur Oldenburg', href: '/seo-agentur-oldenburg' },
      { title: 'Leadgenerierung Bremen', href: '/leadgenerierung-bremen' },
    ],
  },

  {
    slug: 'webdesign-kosten-oldenburg', parentSlug: 'webdesign-oldenburg',
    metaTitle: 'Webdesign Kosten Oldenburg 2026 – Preise für KMU | Northcode',
    metaDescription: 'Was kostet eine professionelle Website in Oldenburg? Transparente Preise für alle Website-Typen. Kein Überraschungsangebot – faire Kalkulation!',
    h1: 'Webdesign Kosten in Oldenburg – faire Preisübersicht 2026', subtitle: 'Ehrliche Preise für professionelle Websites in der Region Weser-Ems.',
    city: 'Oldenburg', service: 'Webdesign Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Webdesign in Oldenburg kostet – je nach Anbieter und Umfang – zwischen 300 € und 30.000 €. Diese Übersicht erklärt, was hinter den Preisunterschieden steckt und was ein fairer Preis für Ihre Website wirklich bedeutet.',
    sections: [
      { heading: 'Preisübersicht Webdesign Oldenburg 2026',
        body: 'Einfache 1-seitige Präsenz: ab 400 €. Professionelle Business-Website (5–8 Seiten): 1.000–2.800 €. Landingpage mit A/B-Testing: 500–1.200 €. Onlineshop: 1.500–4.500 €. Mit vollständigem SEO-Paket: +400–800 €. Hosting: 10–20 €/Monat separat.' },
      { heading: 'Was macht den Unterschied zwischen 500 € und 3.000 €?',
        body: 'Bei günstigen Angeboten fehlen oft: individuelles Design (statt Template), SEO-Optimierung, mobiloptimiertes Layout, CMS-Zugang und Textproduktion. Northcode liefert alle diese Punkte in einem Paket – ohne Extras auf der Nachkalkulation.' },
      { heading: 'Laufende Kosten einer Website in Oldenburg',
        body: 'Domain: ca. 12 €/Jahr. Hosting: 10–20 €/Monat. SSL-Zertifikat: meist inklusive. Wartung/Updates: optional 50–100 €/Monat bei Northcode oder selbst über CMS. Google Analytics und Search Console: kostenlos.' },
    ],
    faqs: [
      { question: 'Gibt es Sonderkonditionen für Vereine oder gemeinnützige Organisationen in Oldenburg?',
        answer: 'Ja. Northcode bietet Sonderpreise für Vereine und Non-Profits in der Region Weser-Ems. Sprechen Sie uns im Erstgespräch darauf an.' },
      { question: 'Kann ich mit 800 € eine gute Website in Oldenburg bekommen?',
        answer: 'Für eine einfache Visitenkartenseite mit 3–5 Seiten und gutem Design: Ja. Für eine vollständige Business-Website mit SEO: Das Budget ist knapp, aber wir finden gemeinsam den besten Weg.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'KI Kosten Oldenburg', href: '/ki-kosten-oldenburg' },
      { title: 'Webdesign Kosten Bremen', href: '/webdesign-kosten-bremen' },
    ],
  },

  {
    slug: 'ki-kosten-oldenburg', parentSlug: 'ki-beratung-oldenburg',
    metaTitle: 'KI Automatisierung Kosten Oldenburg – Preise & ROI 2026 | Northcode',
    metaDescription: 'KI-Kosten für Unternehmen in Oldenburg: ehrliche Preise, ROI-Kalkulation & Amortisationszeiten. Was lohnt sich wirklich? Jetzt beraten lassen!',
    h1: 'KI-Automatisierung Kosten in Oldenburg – ROI-Kalkulation', subtitle: 'Was kostet KI – und was bringt sie?',
    city: 'Oldenburg', service: 'KI Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'KI-Investitionen werden oft unterschätzt (zu günstig) oder überschätzt (zu teuer). Für Oldenburger Unternehmen bieten wir vollständige Transparenz: Was kostet was – und wann rechnet es sich?',
    sections: [
      { heading: 'KI-Preistabelle für Unternehmen in Oldenburg',
        body: 'KI-Chatbot (Website/WhatsApp): 700–1.500 €. Dokumentenautomatisierung: 1.200–2.800 €. Vollständiges Workflow-System: 2.500–6.000 €. KI-Strategieberatung (Workshop 4h): 490–890 €. Laufende KI-Betreuung: 80–250 €/Monat.' },
      { heading: 'Amortisationsrechnung für Oldenburger KMU',
        body: 'Ein Oldenburger Dienstleister mit 10 Mitarbeitern, der täglich 3 Stunden mit Routineaufgaben verbringt: Kosten 750 €/Monat (Lohn). KI-Investment 3.000 €. Amortisation: 4 Monate. Danach 750 €/Monat eingespart – dauerhaft.' },
      { heading: 'Was beeinflusst den Preis in Oldenburg?',
        body: 'Komplexität der zu automatisierenden Prozesse, Anzahl der Schnittstellen zu bestehenden Systemen, benötigte Individualentwicklung vs. Standard-Tools und laufende Betreuung. Im kostenlosen Erstgespräch erstellen wir eine konkrete Kalkulation für Ihr Unternehmen.' },
    ],
    faqs: [
      { question: 'Gibt es Fördermittel für KI-Projekte in Oldenburg?',
        answer: 'Ja. Das Bundesförderprogramm "Digital Jetzt" unterstützt KMU in Niedersachsen mit 15–40 % der Investitionssumme. Northcode begleitet Sie beim Förderantrag.' },
      { question: 'Kann ich klein anfangen und später erweitern?',
        answer: 'Absolut. Northcode empfiehlt immer einen kleinen Pilot (800–1.500 €), der eine konkrete Aufgabe löst und schnell ROI zeigt. Danach kann skaliert werden.' },
    ],
    relatedClusters: [
      { title: 'KI-Beratung Oldenburg', href: '/ki-beratung-oldenburg' },
      { title: 'Webdesign Kosten Oldenburg', href: '/webdesign-kosten-oldenburg' },
      { title: 'KI Kosten Bremen', href: '/ki-kosten-bremen' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   DELMENHORST – 7 Cluster-Seiten
   ════════════════════════════════════════════════════════════════════════════ */
const delmenhorstClusters: ClusterPageData[] = [

  {
    slug: 'ki-fuer-handwerker-delmenhorst', parentSlug: 'ki-automatisierung-delmenhorst',
    metaTitle: 'KI für Handwerker Delmenhorst – Betrieb automatisieren | Northcode',
    metaDescription: 'KI-Automatisierung für Handwerksbetriebe in Delmenhorst: Angebote, Termine & Rechnungen automatisieren. Kostenfrei beraten lassen!',
    h1: 'KI für Handwerksbetriebe in Delmenhorst', subtitle: 'Mehr Aufträge – weniger Papierkram.',
    city: 'Delmenhorst', service: 'KI für Handwerker', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Handwerksbetriebe in Delmenhorst verlieren täglich Zeit mit Büroarbeit statt mit dem Handwerk. Northcode automatisiert Ihre wichtigsten Verwaltungsprozesse – günstig, schnell und ohne IT-Aufwand für Sie.',
    sections: [
      { heading: 'Was Handwerker in Delmenhorst automatisieren können',
        body: 'Angebotserstellung, Auftragsbestätigung, Terminplanung, Rechnungsstellung, Zahlungserinnerungen und Kundennachfragen – alles Aufgaben, die KI übernehmen kann. So bleibt Ihre Zeit für das, was Sie wirklich können: handwerkliche Qualität.' },
      { heading: 'Terminbuchung 24/7 für Delmenhorster Betriebe',
        body: 'Kunden aus Delmenhorst und Umgebung buchen Termine online – zu jeder Tages- und Nachtzeit. Das Buchungssystem integriert sich in Ihren Kalender und sendet automatische Bestätigungen und Erinnerungen.' },
      { heading: 'Automatische Nachkalkulation und Rechnungsstellung',
        body: 'Nach Abschluss eines Auftrags erstellt das System die Rechnung automatisch auf Basis der erfassten Stunden und Materialien – und versendet sie direkt an den Kunden. Mahnungen folgen nach definierten Intervallen ohne Ihr Zutun.' },
    ],
    faqs: [
      { question: 'Arbeitet Northcode auch mit kleinen Betrieben in Delmenhorst?',
        answer: 'Ja, besonders gerne. Gerade für Ein-Mann-Betriebe und kleine Teams mit 2–5 Mitarbeitern in Delmenhorst hat Automatisierung den größten Effekt, weil jede gesparte Stunde direkt dem Inhaber zugute kommt.' },
      { question: 'Was kostet KI für Handwerker in Delmenhorst?',
        answer: 'Einstiegslösungen (Terminbuchung + E-Mail-Automatisierung) ab 500 €. Vollständige Systeme (Angebot + Rechnung + Terminplanung) 1.200–2.500 €. Im kostenlosen Erstgespräch bekommen Sie eine konkrete Kalkulation.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Delmenhorst', href: '/ki-automatisierung-delmenhorst' },
      { title: 'Prozessautomatisierung Delmenhorst', href: '/prozessautomatisierung-delmenhorst' },
      { title: 'KI für Handwerker Bremen', href: '/ki-fuer-handwerker-bremen' },
    ],
  },

  {
    slug: 'ki-fuer-gastronomie-delmenhorst', parentSlug: 'ki-automatisierung-delmenhorst',
    metaTitle: 'KI für Gastronomie Delmenhorst – Restaurant Automatisierung | Northcode',
    metaDescription: 'KI-Lösungen für Restaurants, Cafés & Gastronomie in Delmenhorst: Reservierungen, Bestellungen & Kundenkommunikation automatisieren. Jetzt starten!',
    h1: 'KI für Gastronomie in Delmenhorst', subtitle: 'Volle Tische, entspannter Service.',
    city: 'Delmenhorst', service: 'KI für Gastronomie', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Restaurants, Cafés und Cateringbetriebe in Delmenhorst stehen täglich vor denselben Herausforderungen: Reservierungsmanagement, Mitarbeiterkoordination und Kundenkommunikation kosten wertvolle Zeit. KI-Lösungen von Northcode nehmen Ihnen die Routine ab.',
    sections: [
      { heading: 'Online-Reservierungen automatisieren',
        body: 'Ein KI-gestütztes Buchungssystem für Ihr Restaurant in Delmenhorst nimmt Tischreservierungen automatisch entgegen, bestätigt sie und erinnert Gäste mit einem kurzen WhatsApp oder E-Mail. Stornierungen werden automatisch als freie Plätze ausgewiesen.' },
      { heading: 'KI-Chatbot für Speisekarte und Anfragen',
        body: 'Fragen zu Öffnungszeiten, Menü, Allergenen oder Parkplätzen beantwortet Ihr KI-Chatbot rund um die Uhr – ohne dass Ihr Personal telefonieren muss. Google-Suchanfragen werden damit direkt zu Reservierungen.' },
      { heading: 'Kundenfeedback und Bewertungsmanagement',
        body: 'Nach dem Besuch sendet das System automatisch eine freundliche Feedbackanfrage. Positive Bewertungen werden zu Google und TripAdvisor weitergeleitet – negative werden intern eskaliert, bevor sie online gehen.' },
    ],
    faqs: [
      { question: 'Funktioniert das auch für Lieferdienste in Delmenhorst?',
        answer: 'Ja. Northcode integriert automatische Bestellbestätigungen, Lieferzeitschätzungen und Kundenkommunikation für Lieferdienste – mit oder ohne eigene Lieferplattform.' },
      { question: 'Was kostet KI-Automatisierung für ein Restaurant in Delmenhorst?',
        answer: 'Reservierungssystem + Chatbot: ca. 800–1.500 €. Inklusive Bewertungsmanagement: ca. 1.200–2.000 €. Monatliche Gebühren für KI-Services: 30–80 €/Monat.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Delmenhorst', href: '/ki-automatisierung-delmenhorst' },
      { title: 'KI für Handwerker Delmenhorst', href: '/ki-fuer-handwerker-delmenhorst' },
      { title: 'Leadgenerierung Delmenhorst', href: '/leadgenerierung-delmenhorst' },
    ],
  },

  {
    slug: 'crm-software-delmenhorst', parentSlug: 'prozessautomatisierung-delmenhorst',
    metaTitle: 'CRM Software Delmenhorst – Kundenverwaltung für KMU | Northcode',
    metaDescription: 'Individuelle CRM-Lösungen für Unternehmen in Delmenhorst: Kundendaten, Sales-Pipeline & Automatisierung. Kein Abo – einmal zahlen, dauerhaft nutzen!',
    h1: 'CRM Software für Unternehmen in Delmenhorst', subtitle: 'Alle Kunden im Blick – kein Lead geht verloren.',
    city: 'Delmenhorst', service: 'CRM Software', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Unternehmen in Delmenhorst, die Kundendaten über mehrere Systeme oder Excel-Tabellen verteilen, verlieren täglich wertvolle Informationen und Leads. Ein zentrales CRM-System löst das Problem dauerhaft.',
    sections: [
      { heading: 'Warum Delmenhorster Unternehmen Excel als CRM nutzen – und warum das ein Problem ist',
        body: 'Excel ist vertraut, aber als CRM ungeeignet: keine automatischen Erinnerungen, keine Zugriffsrechte, kein Überblick über den Verkaufsstatus, keine Integration mit E-Mail oder Kalender. Ein simples CRM ist die günstigste Produktivitätssteigerung für viele Betriebe.' },
      { heading: 'Was ein individuelles CRM für Delmenhorst leistet',
        body: 'Kontakthistorie, Angebotsstatus, automatische Wiedervorlagen, E-Mail-Protokollierung und Berichte über Umsatz nach Kunde, Region oder Zeitraum – alles in einer Oberfläche, die Ihre Mitarbeiter gerne nutzen.' },
    ],
    faqs: [
      { question: 'Was kostet ein CRM-System für ein kleines Unternehmen in Delmenhorst?',
        answer: 'Basis-CRM ab 1.800 €. Mittelgroße Lösung mit Integrationen ab 3.500 €. Beide Optionen ohne laufende Lizenzkosten – Sie besitzen das System.' },
    ],
    relatedClusters: [
      { title: 'Prozessautomatisierung Delmenhorst', href: '/prozessautomatisierung-delmenhorst' },
      { title: 'Landingpage Delmenhorst', href: '/landingpage-delmenhorst' },
      { title: 'CRM Software Bremen', href: '/crm-software-bremen' },
    ],
  },

  {
    slug: 'seo-agentur-delmenhorst', parentSlug: 'webdesign-delmenhorst',
    metaTitle: 'SEO Agentur Delmenhorst – Google-Sichtbarkeit für KMU | Northcode',
    metaDescription: 'SEO-Optimierung für Unternehmen in Delmenhorst: lokale Keywords, technisches SEO & Content. Mehr Kunden durch bessere Google-Rankings. Jetzt anfragen!',
    h1: 'SEO-Agentur in Delmenhorst', subtitle: 'Lokal gefunden – bevor der Wettbewerb.',
    city: 'Delmenhorst', service: 'SEO Optimierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'In Delmenhorst suchen täglich potenzielle Kunden bei Google nach lokalen Dienstleistern. Northcode sorgt dafür, dass Ihr Unternehmen an der richtigen Stelle erscheint – bevor sie zur Konkurrenz gehen.',
    sections: [
      { heading: 'Lokale SEO-Chancen in Delmenhorst',
        body: 'Delmenhorst hat mit rund 80.000 Einwohnern ein überschaubares aber kaufkräftiges lokales Suchvolumen. Der Wettbewerb für viele lokale Keywords ist noch gering – ideale Voraussetzungen für schnelle Ranking-Erfolge.' },
      { heading: 'Google My Business für Delmenhorst',
        body: 'Ein vollständig optimiertes Google-Profil ist der einfachste Weg zu mehr Sichtbarkeit in Delmenhorst. Northcode richtet Ihr Profil ein, optimiert Kategorien und Fotos und implementiert einen automatischen Bewertungs-Workflow.' },
    ],
    faqs: [
      { question: 'Wie schnell kann ich in Delmenhorst bei Google ranken?',
        answer: 'Für wenig umkämpfte Keywords in Delmenhorst oft schon in 3–6 Wochen erste Verbesserungen sichtbar. Stabile Top-3-Platzierungen nach 3–5 Monaten guter SEO-Arbeit.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Delmenhorst', href: '/webdesign-delmenhorst' },
      { title: 'Leadgenerierung Delmenhorst', href: '/leadgenerierung-delmenhorst' },
      { title: 'SEO Agentur Bremen', href: '/seo-agentur-bremen' },
    ],
  },

  {
    slug: 'leadgenerierung-delmenhorst', parentSlug: 'landingpage-delmenhorst',
    metaTitle: 'Leadgenerierung Delmenhorst – Mehr Kundenanfragen | Northcode',
    metaDescription: 'Systematische Leadgenerierung für Unternehmen in Delmenhorst: Landingpages, Funnels & Automatisierung. Planbare Neukunden – jetzt starten!',
    h1: 'Leadgenerierung für Unternehmen in Delmenhorst', subtitle: 'Planbare Neukunden – kein Zufall mehr.',
    city: 'Delmenhorst', service: 'Leadgenerierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'In Delmenhorst verlassen sich viele Unternehmen auf Stammkunden und Empfehlungen. Ein digitales Leadgenerierungs-System schafft einen zweiten, planbaren Kanal für Neukundengewinnung.',
    sections: [
      { heading: 'Leadgenerierung in Delmenhorst – was funktioniert',
        body: 'Für lokale Unternehmen in Delmenhorst funktionieren besonders gut: lokale SEO-optimierte Landingpages, Google Ads für "Dienstleistung + Delmenhorst" und automatisierte Follow-up-Sequenzen. Northcode baut alle drei Komponenten.' },
      { heading: 'Conversion-Rate-Optimierung für Delmenhorster Zielgruppen',
        body: 'Eine gute Conversion Rate in Delmenhorst liegt bei 5–12 %. Viele Websites schaffen 1–2 %. Northcode analysiert, wo Besucher abspringen, und optimiert gezielt – mit echten Daten, nicht Bauchgefühl.' },
    ],
    faqs: [
      { question: 'Wie viel Budget brauche ich für Leadgenerierung in Delmenhorst?',
        answer: 'Ohne Werbebudget (organisch): ab 600 € einmalig für Landingpage + SEO. Mit Google Ads: zusätzlich 200–500 €/Monat Werbebudget. Im Erstgespräch klären wir, was für Ihr Unternehmen am effizientesten ist.' },
    ],
    relatedClusters: [
      { title: 'Landingpage Delmenhorst', href: '/landingpage-delmenhorst' },
      { title: 'SEO Agentur Delmenhorst', href: '/seo-agentur-delmenhorst' },
      { title: 'Leadgenerierung Bremen', href: '/leadgenerierung-bremen' },
    ],
  },

  {
    slug: 'webdesign-kosten-delmenhorst', parentSlug: 'webdesign-delmenhorst',
    metaTitle: 'Webdesign Kosten Delmenhorst 2026 – faire Preise | Northcode',
    metaDescription: 'Was kostet eine Website in Delmenhorst? Transparente Webdesign-Preise für alle Unternehmensgrößen. Keine versteckten Kosten. Jetzt informieren!',
    h1: 'Webdesign Kosten in Delmenhorst – Preisübersicht 2026', subtitle: 'Was Sie für Ihr Budget in Delmenhorst erwarten dürfen.',
    city: 'Delmenhorst', service: 'Webdesign Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Webdesign-Preise in Delmenhorst variieren erheblich. Diese Übersicht erklärt, was was kostet – ohne Marketing-Blabla, nur ehrliche Zahlen.',
    sections: [
      { heading: 'Webdesign-Preise in Delmenhorst im Überblick',
        body: 'Einfache Visitenkartenseite: 350–700 €. Business-Website (5–8 Seiten): 900–2.500 €. Landingpage mit Conversion-Fokus: 450–1.000 €. Onlineshop (Shopify): 1.200–4.000 €. Alle Preise einmalig, ohne laufende Lizenzgebühren.' },
      { heading: 'Warum Preisunterschiede so groß sind',
        body: 'Ein Baukasten-Template für 500 € und eine individuelle Website für 2.500 € liefern völlig unterschiedliche Ergebnisse bei SEO, Ladezeit und Konversion. Northcode erklärt Ihnen ehrlich, was für Ihr Ziel das beste Preis-Leistungs-Verhältnis hat.' },
    ],
    faqs: [
      { question: 'Kann ich auch als Verein in Delmenhorst eine günstige Website bekommen?',
        answer: 'Ja. Northcode bietet Sonderkonditionen für Vereine in Delmenhorst und der Region. Melden Sie sich im kostenlosen Erstgespräch.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Delmenhorst', href: '/webdesign-delmenhorst' },
      { title: 'Digitalisierung Kosten Delmenhorst', href: '/digitalisierung-kosten-delmenhorst' },
      { title: 'Webdesign Kosten Bremen', href: '/webdesign-kosten-bremen' },
    ],
  },

  {
    slug: 'digitalisierung-kosten-delmenhorst', parentSlug: 'prozessautomatisierung-delmenhorst',
    metaTitle: 'Digitalisierung Kosten Delmenhorst – Investition & Förderung | Northcode',
    metaDescription: 'Was kostet Digitalisierung für Unternehmen in Delmenhorst? Ehrliche Preise, Fördermittel & ROI-Kalkulation. Jetzt kostenlos informieren!',
    h1: 'Digitalisierungskosten in Delmenhorst – Investition & Förderung', subtitle: 'Was Digitalisierung kostet – und was sie bringt.',
    city: 'Delmenhorst', service: 'Digitalisierung Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Digitalisierung für Unternehmen in Delmenhorst ist eine Investition – keine Ausgabe. Diese Übersicht zeigt, welche Investitionen sich wann rechnen und wie Fördergelder Ihre Eigenkosten reduzieren.',
    sections: [
      { heading: 'Typische Digitalisierungskosten in Delmenhorst',
        body: 'Cloud-Migration (5 Arbeitsplätze): 800–2.000 €. Digitales Büro (papierloses Ablagesystem): 1.200–3.000 €. Website + lokales SEO: 1.500–4.000 €. KI-Prozessautomatisierung: 2.000–6.000 €. Gesamtdigitalisierung Mittelstand: 8.000–25.000 €.' },
      { heading: 'Fördermittel für Digitalisierung in Delmenhorst',
        body: 'Unternehmen in Delmenhorst können von "Digital Jetzt" (Bundesförderung, 15–40 %) und Niedersächsischen Landesförderprogrammen profitieren. Northcode hilft bei der Antragstellung – die Förderberatung ist für Sie kostenlos.' },
    ],
    faqs: [
      { question: 'Wann lohnt sich Digitalisierung für kleine Betriebe in Delmenhorst?',
        answer: 'Ab dem Moment, wo ein manueller Prozess mehr als 2 Stunden pro Woche kostet. Bei einem Stundensatz von 25 € sind das 200 €/Monat – eine kleine Automatisierung für 500 € amortisiert sich in 2,5 Monaten.' },
    ],
    relatedClusters: [
      { title: 'Prozessautomatisierung Delmenhorst', href: '/prozessautomatisierung-delmenhorst' },
      { title: 'Webdesign Kosten Delmenhorst', href: '/webdesign-kosten-delmenhorst' },
      { title: 'KI Kosten Bremen', href: '/ki-kosten-bremen' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   GANDERKESEE – 7 Cluster-Seiten
   ════════════════════════════════════════════════════════════════════════════ */
const ganderkesеeClusters: ClusterPageData[] = [

  {
    slug: 'ki-fuer-handwerker-ganderkesee', parentSlug: 'digitalisierung-ganderkesee',
    metaTitle: 'KI für Handwerker Ganderkesee – Betrieb automatisieren | Northcode',
    metaDescription: 'KI-Lösungen für Handwerksbetriebe in Ganderkesee & Landkreis Oldenburg: Termine, Angebote & Rechnungen automatisieren. Jetzt beraten lassen!',
    h1: 'KI für Handwerksbetriebe in Ganderkesee', subtitle: 'Digital stark – auch in der Region.',
    city: 'Ganderkesee', service: 'KI für Handwerker', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Handwerksbetriebe in Ganderkesee und dem Landkreis Oldenburg profitieren besonders stark von KI-Automatisierung – weil lokale Konkurrenz digital oft noch wenig aufgestellt ist. Wer jetzt startet, sichert sich einen klaren Wettbewerbsvorteil.',
    sections: [
      { heading: 'Digitaler Handwerker – Vorteile in der Region Ganderkesee',
        body: 'Im Landkreis Oldenburg sind digitale Angebote für Handwerker noch selten. Ein gut aufgestellter Betrieb in Ganderkesee mit Online-Terminbuchung, automatischen Angeboten und digitalen Rechnungen wirkt professioneller und gewinnt schneller das Vertrauen von Neukunden.' },
      { heading: 'Automatisierte Terminplanung für Ganderkeseer Handwerker',
        body: 'Kunden aus Ganderkesee, Bookholzberg, Schierbrok und der gesamten Gemeinde buchen Termine direkt online. Das System bestätigt automatisch, erinnert an den Termin und protokolliert alle Buchungen.' },
      { heading: 'Von der Auftragsannahme bis zur Rechnung',
        body: 'Northcode baut vollständige Auftragsabwicklungs-Workflows für Handwerker in Ganderkesee: Anfrage → Angebot → Auftrag → Rechnung → Zahlung – alles digital, alles automatisch, alles nachvollziehbar.' },
    ],
    faqs: [
      { question: 'Fährt Northcode auch nach Ganderkesee für Beratung?',
        answer: 'Ja. Als regionaler Anbieter in Nordwest-Deutschland kommen wir für das erste Briefing gerne persönlich zu Ihnen – egal ob Ganderkesee, Bookholzberg oder Schierbrok.' },
      { question: 'Was kostet KI für Handwerker in Ganderkesee?',
        answer: 'Einstiegslösung ab 500 €. Vollständige Auftragsabwicklung ab 1.500 €. Im kostenlosen Erstgespräch klären wir genau, was Sie brauchen.' },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Ganderkesee', href: '/digitalisierung-ganderkesee' },
      { title: 'KI für Handwerker Oldenburg', href: '/ki-fuer-handwerker-oldenburg' },
      { title: 'Website erstellen Ganderkesee', href: '/website-erstellen-ganderkesee' },
    ],
  },

  {
    slug: 'ki-fuer-landwirtschaft-ganderkesee', parentSlug: 'digitalisierung-ganderkesee',
    metaTitle: 'KI für Landwirtschaft Ganderkesee – Hof digital optimieren | Northcode',
    metaDescription: 'Digitalisierung & KI für landwirtschaftliche Betriebe in Ganderkesee & Landkreis Oldenburg: Dokumentation, Kundenkommunikation & Direktvermarktung.',
    h1: 'KI für Landwirtschaft in Ganderkesee', subtitle: 'Moderner Hof – mehr Zeit für das Wesentliche.',
    city: 'Ganderkesee', service: 'KI für Landwirtschaft', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Landwirtschaftliche Betriebe im Landkreis Oldenburg und der Gemeinde Ganderkesee setzen auf digitale Lösungen für Direktvermarktung, Hofkommunikation und Dokumentationspflichten. Northcode entwickelt einfache, praxistaugliche Lösungen für den Agrarbereich.',
    sections: [
      { heading: 'Direktvermarktung digital unterstützen',
        body: 'Hofladen, Wochenmarkt oder Abo-Kiste: Mit einer professionellen Website und einem digitalen Bestellsystem erreichen Ganderkeseer Betriebe mehr Kunden in der Region – ohne zusätzlichen Aufwand. Northcode entwickelt speziell für Direktvermarkter optimierte Online-Präsenzen.' },
      { heading: 'Automatische Dokumentation für EU-Förderanträge',
        body: 'EU-Agrarsubventionen, Öko-Zertifizierungen und Tierschutzauflagen erfordern umfangreiche Dokumentation. KI-unterstützte Systeme erfassen Daten automatisch, strukturieren sie für Behördenformate und erleichtern die Antragstellung erheblich.' },
      { heading: 'Newsletter und Kundenbindung für Hofläden',
        body: 'Automatische Saisonberichte, Wochenkarten und Hofnews per E-Mail oder WhatsApp halten Stammkunden im Landkreis Oldenburg informiert und gebunden – ohne manuellen Aufwand für Landwirte.' },
    ],
    faqs: [
      { question: 'Gibt es spezielle Fördermittel für Digitalisierung in der Landwirtschaft?',
        answer: 'Ja. Das Niedersächsische Ministerium für Ernährung, Landwirtschaft und Verbraucherschutz bietet Förderprogramme für die Digitalisierung landwirtschaftlicher Betriebe. Northcode berät dazu kostenfrei.' },
      { question: 'Wie technikaffin muss ich sein?',
        answer: 'Gar nicht. Northcode baut Systeme, die für alle Altersgruppen und Techniklevels bedienbar sind. Schulung inklusive.' },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Ganderkesee', href: '/digitalisierung-ganderkesee' },
      { title: 'KI für Handwerker Ganderkesee', href: '/ki-fuer-handwerker-ganderkesee' },
      { title: 'Website erstellen Ganderkesee', href: '/website-erstellen-ganderkesee' },
    ],
  },

  {
    slug: 'website-erstellen-ganderkesee', parentSlug: 'webdesign-ganderkesee',
    metaTitle: 'Website erstellen lassen Ganderkesee – Professionell & günstig | Northcode',
    metaDescription: 'Professionelle Website für Ihr Unternehmen in Ganderkesee erstellen lassen: modern, schnell, mobiloptimiert. Faire Preise, persönliche Betreuung. Jetzt anfragen!',
    h1: 'Website erstellen lassen in Ganderkesee', subtitle: 'Professionell online – für die Region gemacht.',
    city: 'Ganderkesee', service: 'Website erstellen', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Viele Unternehmen in Ganderkesee haben noch keine oder eine veraltete Website. Das kostet täglich potenzielle Kunden, die online suchen und zur Konkurrenz gehen. Northcode erstellt Ihre professionelle Website – schnell, persönlich und zu fairen Preisen.',
    sections: [
      { heading: 'Was Ihre Website in Ganderkesee leisten muss',
        body: 'Eine gute Website für Ganderkesee muss: auf dem Smartphone perfekt aussehen (70 % der Nutzer), bei Google für lokale Suchbegriffe gefunden werden, klar zeigen, was Sie anbieten und wen Sie bedienen, und einfach eine Kontaktaufnahme ermöglichen.' },
      { heading: 'Wie Northcode vorgeht',
        body: 'Schritt 1: Kostenloses Gespräch in Ganderkesee oder per Video (30 Min.). Schritt 2: Konzept und erster Design-Entwurf (72h). Schritt 3: Entwicklung und Tests. Schritt 4: Launch und Google-Anmeldung. Alles aus einer Hand – kein Koordinieren von mehreren Dienstleistern.' },
      { heading: 'Preise für Websites in Ganderkesee',
        body: 'Einfache Visitenkartenseite: ab 390 €. Business-Website mit SEO: ab 900 €. Mit lokaler Google-Optimierung und Google My Business: ab 1.200 €. Alle Preise einmalig, keine versteckten Kosten.' },
    ],
    faqs: [
      { question: 'Wie lange dauert es, bis meine Website live geht?',
        answer: 'Einfache Seiten: 3–5 Werktage. Business-Websites: 7–14 Tage. Wir arbeiten schnell, ohne auf Qualität zu verzichten.' },
      { question: 'Kann ich die Website später selbst bearbeiten?',
        answer: 'Ja. Alle Websites liefern wir mit einem einfachen CMS-Zugang, über den Sie Texte, Bilder und Preise selbst aktualisieren können – ohne Programmierkenntnisse.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Ganderkesee', href: '/webdesign-ganderkesee' },
      { title: 'SEO Optimierung Ganderkesee', href: '/seo-optimierung-ganderkesee' },
      { title: 'Digitalisierung Ganderkesee', href: '/digitalisierung-ganderkesee' },
    ],
  },

  {
    slug: 'seo-optimierung-ganderkesee', parentSlug: 'webdesign-ganderkesee',
    metaTitle: 'SEO Optimierung Ganderkesee – Lokal bei Google gefunden | Northcode',
    metaDescription: 'SEO für Unternehmen in Ganderkesee & Landkreis Oldenburg: lokale Sichtbarkeit bei Google, Google My Business & technisches SEO. Jetzt starten!',
    h1: 'SEO-Optimierung in Ganderkesee', subtitle: 'Lokal bei Google sichtbar – schnell und nachhaltig.',
    city: 'Ganderkesee', service: 'SEO Optimierung', intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Für Unternehmen in Ganderkesee ist lokale Sichtbarkeit bei Google besonders wertvoll – und besonders gut erreichbar, da der Wettbewerb in kleineren Gemeinden deutlich geringer ist als in Bremen oder Oldenburg.',
    sections: [
      { heading: 'Warum lokale SEO in Ganderkesee so wirksam ist',
        body: 'Wenn jemand in Ganderkesee oder dem Landkreis Oldenburg nach einem Handwerker, Dienstleister oder Einzelhändler sucht, sind die Suchergebnisse oft dünn besetzt. Mit guter SEO-Arbeit können Sie in Ganderkesee oft innerhalb weniger Wochen auf Seite 1 erscheinen.' },
      { heading: 'Google My Business für Ganderkesee',
        body: 'Ein vollständig gepflegtes Google-Unternehmensprofil mit aktuellen Öffnungszeiten, Fotos, Bewertungen und wöchentlichen Posts ist für Ganderkeseer Unternehmen der einfachste Weg zu mehr Sichtbarkeit. Northcode richtet das Profil ein und optimiert es kontinuierlich.' },
    ],
    faqs: [
      { question: 'Wie lange bis mein Unternehmen in Ganderkesee bei Google erscheint?',
        answer: 'Google My Business-Einträge sind sofort sichtbar. Für organische Website-Rankings: 2–6 Wochen für lokale Keywords in Ganderkesee.' },
      { question: 'Was kostet SEO in Ganderkesee?',
        answer: 'Einmaliges SEO-Setup ab 450 €. Laufende Betreuung ab 199 €/Monat. Im Erstgespräch gibt es eine kostenlose Analyse Ihrer aktuellen Sichtbarkeit.' },
    ],
    relatedClusters: [
      { title: 'Website erstellen Ganderkesee', href: '/website-erstellen-ganderkesee' },
      { title: 'Leadgenerierung Ganderkesee', href: '/leadgenerierung-ganderkesee' },
      { title: 'SEO Agentur Oldenburg', href: '/seo-agentur-oldenburg' },
    ],
  },

  {
    slug: 'leadgenerierung-ganderkesee', parentSlug: 'digitalisierung-ganderkesee',
    metaTitle: 'Leadgenerierung Ganderkesee – Neue Kunden für Ihren Betrieb | Northcode',
    metaDescription: 'Digitale Leadgenerierung für Unternehmen in Ganderkesee: mehr Kundenanfragen durch Website, SEO & Automatisierung. Jetzt informieren!',
    h1: 'Leadgenerierung für Unternehmen in Ganderkesee', subtitle: 'Neue Kunden aus der Region – digital und systematisch.',
    city: 'Ganderkesee', service: 'Leadgenerierung', intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Unternehmen in Ganderkesee gewinnen Kunden noch vorwiegend durch Empfehlungen – ein wertvoller, aber unplanbarer Kanal. Northcode ergänzt Ihren Betrieb um digitale Leadgenerierung: planbar, skalierbar und speziell für die Gemeinde Ganderkesee optimiert.',
    sections: [
      { heading: 'Leadgenerierung in kleinen Gemeinden – das funktioniert in Ganderkesee',
        body: 'In Ganderkesee funktioniert Leadgenerierung über lokale Google-Suchen ("Elektriker Ganderkesee", "Gartenservice Bookholzberg"), eine gut gepflegte Website mit klarem CTA und automatisches Follow-up nach der ersten Anfrage. Northcode baut alle drei Elemente.' },
      { heading: 'Von der Anfrage zum Auftrag – automatisiert',
        body: 'Nach einer Anfrage über Website oder Google folgt automatisch eine Bestätigungs-E-Mail, dann 1–2 Informationsmails und eine sanfte Erinnerung. Ohne dieses System gehen viele potenzielle Aufträge verloren.' },
    ],
    faqs: [
      { question: 'Lohnt sich digitale Leadgenerierung auch für Ganderkesee?',
        answer: 'Ja – besonders hier, weil der digitale Wettbewerb gering ist. Wer jetzt startet, sichert sich einen Vorteil, bevor andere Betriebe aufholen.' },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Ganderkesee', href: '/digitalisierung-ganderkesee' },
      { title: 'SEO Optimierung Ganderkesee', href: '/seo-optimierung-ganderkesee' },
      { title: 'Leadgenerierung Oldenburg', href: '/leadgenerierung-oldenburg' },
    ],
  },

  {
    slug: 'webdesign-kosten-ganderkesee', parentSlug: 'webdesign-ganderkesee',
    metaTitle: 'Webdesign Kosten Ganderkesee 2026 – Preise für kleine Betriebe | Northcode',
    metaDescription: 'Was kostet eine Website in Ganderkesee? Faire Preise für professionelles Webdesign im Landkreis Oldenburg. Keine versteckten Kosten!',
    h1: 'Webdesign Kosten in Ganderkesee – Preisübersicht 2026', subtitle: 'Was Sie für Ihr Budget in Ganderkesee bekommen.',
    city: 'Ganderkesee', service: 'Webdesign Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Webdesign in Ganderkesee muss nicht teuer sein – aber günstig bedeutet nicht immer gut. Diese Übersicht erklärt, welche Preise realistisch sind und worauf Sie bei der Auswahl eines Webdesigners achten sollten.',
    sections: [
      { heading: 'Webdesign-Preise für Ganderkesee und den Landkreis Oldenburg',
        body: 'Visitenkartenseite (1–3 Seiten): 350–600 €. Business-Website (5 Seiten): 800–2.000 €. Mit lokaler SEO: +350–500 €. Hofladen-Website mit Bestellfunktion: 1.200–3.500 €. Monatliches Hosting: 10–18 €.' },
      { heading: 'Freelancer vs. Northcode – was ist besser für Ganderkesee?',
        body: 'Lokale Freelancer in der Region kosten oft 600–1.500 € – aber ohne SEO-Erfahrung, ohne Conversion-Optimierung und ohne dauerhaften Support. Northcode bietet für ähnliche Preise Full-Service inkl. SEO-Grundoptimierung und 30 Tage Support nach Launch.' },
    ],
    faqs: [
      { question: 'Gibt es Förderung für Websites in Ganderkesee?',
        answer: 'Indirekt – das Bundesförderprogramm "Digital Jetzt" fördert auch Webprojekte als Teil der Digitalisierungsstrategie. Ab ca. 3.000 € Gesamtinvestition förderbar. Northcode berät kostenlos dazu.' },
    ],
    relatedClusters: [
      { title: 'Webdesign Ganderkesee', href: '/webdesign-ganderkesee' },
      { title: 'Digitalisierung Kosten Ganderkesee', href: '/digitalisierung-kosten-ganderkesee' },
      { title: 'Webdesign Kosten Oldenburg', href: '/webdesign-kosten-oldenburg' },
    ],
  },

  {
    slug: 'digitalisierung-kosten-ganderkesee', parentSlug: 'digitalisierung-ganderkesee',
    metaTitle: 'Digitalisierung Kosten Ganderkesee – Investition & Förderung | Northcode',
    metaDescription: 'Digitalisierungskosten für Betriebe in Ganderkesee & Landkreis Oldenburg: ehrliche Preise, Fördermittel & ROI. Jetzt kostenlos informieren!',
    h1: 'Digitalisierungskosten in Ganderkesee – Investition & Förderung', subtitle: 'Was Digitalisierung kostet – und was sie bringt.',
    city: 'Ganderkesee', service: 'Digitalisierung Kosten', intent: 'BOFU', type: 'cost', keywordPriority: 1,
    intro: 'Auch für kleine Betriebe in Ganderkesee und dem Landkreis Oldenburg lohnt sich Digitalisierung – wenn die Maßnahmen richtig gewählt sind. Diese Übersicht zeigt typische Kosten und wie Fördergelder Ihre Eigeninvestition reduzieren.',
    sections: [
      { heading: 'Digitalisierungskosten für Kleinbetriebe in Ganderkesee',
        body: 'Professionelle Website: 800–2.000 €. Terminbuchungssystem: 300–600 €. Online-Bezahlung einrichten: 200–500 €. Digitales Ablagesystem: 500–1.500 €. Gesamtpaket "Digital Starter Ganderkesee" bei Northcode: ab 1.800 €.' },
      { heading: 'Fördermittel für Ganderkeseer Betriebe',
        body: '"Digital Jetzt" (Bund) fördert KMU mit 15–40 % der Investitionssumme. Niedersächsische Landesförderung ergänzt in manchen Fällen. Northcode hilft beim Förderantrag – kostenlos, weil wir es für alle unsere Kunden machen.' },
    ],
    faqs: [
      { question: 'Ab welcher Unternehmensgröße lohnt sich Digitalisierung in Ganderkesee?',
        answer: 'Ab dem ersten Mitarbeiter und jährlichen Einnahmen über 80.000 €. Schon einfache Maßnahmen wie eine professionelle Website und Online-Terminbuchung zahlen sich schnell aus.' },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Ganderkesee', href: '/digitalisierung-ganderkesee' },
      { title: 'Webdesign Kosten Ganderkesee', href: '/webdesign-kosten-ganderkesee' },
      { title: 'Digitalisierung Kosten Delmenhorst', href: '/digitalisierung-kosten-delmenhorst' },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════════
   EXPORT
   ════════════════════════════════════════════════════════════════════════════ */
export const clusterPages: ClusterPageData[] = [
  ...bremenClusters,
  ...oldenburgClusters,
  ...delmenhorstClusters,
  ...ganderkesеeClusters,
];

export function getClusterBySlug(slug: string): ClusterPageData | undefined {
  return clusterPages.find(p => p.slug === slug);
}

export const allClusterSlugs = clusterPages.map(p => p.slug);
