import { FAQ } from './local-seo-data';
import { ClusterPageData } from './cluster-seo-data';

/**
 * Oldenburg cluster pages – Batch 1: Support/Industry (10)
 */
export const oldenburgSupportClusters: ClusterPageData[] = [

  {
    slug: 'ki-fuer-industrieunternehmen-oldenburg',
    parentSlug: 'ki-automatisierung-oldenburg',
    metaTitle: 'KI für Industrieunternehmen Oldenburg – Produktion & Fertigung | Northcode',
    metaDescription: 'KI-Lösungen für Industrieunternehmen in Oldenburg: Qualitätskontrolle, Predictive Maintenance & Fertigungsoptimierung. Jetzt Potenzialanalyse anfragen!',
    h1: 'KI für Industrieunternehmen in Oldenburg',
    subtitle: 'Fertigungs- und Produktionsautomatisierung für den Oldenburger Mittelstand.',
    city: 'Oldenburg', service: 'KI für Industrie',
    intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Oldenburger Industrieunternehmen stehen unter globalem Kostendruck. KI ist keine Zukunftstechnologie mehr – sie spart heute Ausschuss, Stillstandzeiten und Personalkosten. Northcode implementiert KI direkt in Ihre Produktionsprozesse: pragmatisch, integrierbar, messbar.',
    sections: [
      {
        heading: 'KI in der Produktion: konkrete Anwendungsfälle',
        body: 'KI-gestützte Bilderkennungssysteme prüfen Bauteile schneller und zuverlässiger als menschliche Inspektoren. Predictive-Maintenance-Algorithmen analysieren Maschinendaten in Echtzeit und sagen Ausfälle voraus, bevor sie passieren. Fertigungsplanung-KI optimiert Rüst- und Durchlaufzeiten automatisch. Für Oldenburger Industriebetriebe mit 20–500 Mitarbeitern sind das keine Millionenprojekte – sondern ROI-positive Implementierungen ab 5.000–15.000 €.'
      },
      {
        heading: 'Integration in bestehende Anlagen und ERP-Systeme',
        body: 'Northcode arbeitet nicht auf der grünen Wiese. Wir analysieren Ihre vorhandene Maschineninfrastruktur, Sensordaten und ERP-Anbindung (SAP, ProAlpha, eigene Systeme) und entwickeln KI-Module, die sich nahtlos integrieren – ohne Produktionsunterbrechung. Pilotprojekte starten in einer Linie oder Zelle, bevor sie skaliert werden.'
      },
      {
        heading: 'Förderprogramme für Industrie-KI in Oldenburg',
        body: '"Digital Jetzt" fördert KI-Investitionen in der Industrie mit 15–40 % Zuschuss. Für Oldenburger Unternehmen ab 3 Mitarbeitern bis 499 Mitarbeitern. Northcode übernimmt auf Wunsch die Förderantragstellung als Teil des Projekts – kein Mehraufwand für Sie.'
      },
    ],
    faqs: [
      { question: 'Lohnt sich KI für kleinere Industriebetriebe in Oldenburg?', answer: 'Ab ca. 20 Mitarbeitern und wiederholenden Produktionsprozessen ist KI fast immer wirtschaftlich. Die typische Amortisationszeit liegt bei 3–8 Monaten.' },
      { question: 'Muss ich meine Maschinen ersetzen, um KI einzusetzen?', answer: 'Nein. KI lässt sich in der Regel über Sensoren und Kamerasysteme nachrüsten. Ersatz von Anlagen ist selten notwendig.' },
    ],
    relatedClusters: [
      { title: 'Automatisierung Produktionsbetriebe Oldenburg', href: '/automatisierung-produktionsbetriebe-oldenburg' },
      { title: 'KI-Automatisierung Oldenburg', href: '/ki-automatisierung-oldenburg' },
      { title: 'ERP Beratung Oldenburg', href: '/erp-beratung-oldenburg' },
    ],
  },

  {
    slug: 'automatisierung-produktionsbetriebe-oldenburg',
    parentSlug: 'prozessautomatisierung-oldenburg',
    metaTitle: 'Automatisierung Produktionsbetriebe Oldenburg – Prozesse optimieren | Northcode',
    metaDescription: 'Prozessautomatisierung für Produktionsbetriebe in Oldenburg: Workflows, Fertigungssteuerung & Reporting automatisieren. Jetzt Erstgespräch vereinbaren!',
    h1: 'Automatisierung für Produktionsbetriebe in Oldenburg',
    subtitle: 'Manuelle Prozesse eliminieren – Durchlaufzeiten reduzieren.',
    city: 'Oldenburg', service: 'Produktionsautomatisierung',
    intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'In Oldenburger Produktionsbetrieben entstehen die größten Verluste nicht auf der Maschine, sondern davor und danach: Auftragserfassung, Kapazitätsplanung, Reporting, Qualitätsdokumentation. Northcode automatisiert diese Prozesse – mit Software, die sich in Ihre bestehenden Abläufe einfügt.',
    sections: [
      {
        heading: 'Welche Prozesse sich in Produktionsbetrieben am schnellsten automatisieren lassen',
        body: 'Auftragserfassung und -routing, Lieferantenbestellungen, Qualitätsprotokolle, Schichtberichte und Maschinenauslastungs-Dashboards sind typische Quick-Wins. Diese Prozesse sind gut dokumentiert, laufen täglich und binden viel Arbeitszeit. Eine Automatisierung bringt sofort messbare Entlastung – oft 10–20 Stunden pro Woche in einem 50-Personen-Betrieb.'
      },
      {
        heading: 'Technologien: Von RPA bis Low-Code-Integration',
        body: 'Je nach Prozess setzt Northcode unterschiedliche Technologien ein: Robotic Process Automation (RPA) für regelbasierte Datenprozesse, API-Integrationen für die Verbindung von ERP, MES und CRM, sowie Low-Code-Plattformen für schnelle Umsetzung ohne jahrelange Entwicklungszyklen. Oldenburger Produktionsbetriebe profitieren von hybriden Ansätzen, die Bestandssysteme nicht ersetzen, sondern intelligent verbinden.'
      },
    ],
    faqs: [
      { question: 'Können auch ältere ERP-Systeme in Oldenburg automatisiert werden?', answer: 'Ja. Auch Legacy-Systeme ohne moderne APIs lassen sich über RPA oder Export-Import-Automatisierungen einbinden. Northcode analysiert vorab die technische Machbarkeit.' },
      { question: 'Wie lange dauert ein typisches Automatisierungsprojekt in Oldenburg?', answer: 'Erste Prozesse können in 2–4 Wochen automatisiert werden. Umfangreichere Projekte mit ERP-Integration: 6–12 Wochen.' },
    ],
    relatedClusters: [
      { title: 'KI für Industrieunternehmen Oldenburg', href: '/ki-fuer-industrieunternehmen-oldenburg' },
      { title: 'Workflow Automatisierung Oldenburg', href: '/workflow-automatisierung-oldenburg' },
      { title: 'Prozessautomatisierung Oldenburg', href: '/prozessautomatisierung-oldenburg' },
    ],
  },

  {
    slug: 'crm-systeme-oldenburg',
    parentSlug: 'unternehmenssysteme-oldenburg',
    metaTitle: 'CRM Systeme Oldenburg – Beratung, Auswahl & Implementierung | Northcode',
    metaDescription: 'CRM-System für Ihr Oldenburger Unternehmen: Salesforce, HubSpot, Pipedrive & individuelle Lösungen. Beratung, Einrichtung & Schulung. Jetzt anfragen!',
    h1: 'CRM Systeme für Unternehmen in Oldenburg',
    subtitle: 'Das richtige CRM finden, einrichten und nutzen – ohne IT-Abteilung.',
    city: 'Oldenburg', service: 'CRM-Systeme',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Viele Oldenburger Unternehmen verwalten ihre Kundenkontakte noch in Excel oder veralteten Systemen. Ein modernes CRM-System steigert Vertriebseffizienz, verbessert den Kundenservice und liefert entscheidungsrelevante Daten. Northcode berät Sie neutral bei der Systemauswahl und setzt es sauber auf.',
    sections: [
      {
        heading: 'CRM-Systemvergleich für den Oldenburger Mittelstand',
        body: 'HubSpot CRM eignet sich für mittelständische B2B-Unternehmen mit starkem Marketing-Fokus und bietet eine kostenlose Basisversion. Salesforce ist ideal für wachsende Organisationen mit komplexen Vertriebsprozessen. Pipedrive empfiehlt sich für vertriebsorientierte KMUs in Oldenburg. Individuelle CRM-Lösungen (z.B. auf Basis von Notion, Airtable oder maßgeschneidert) bieten maximale Flexibilität. Northcode empfiehlt nach Analyse Ihres Vertriebsprozesses – ohne Herstellerpräferenz.'
      },
      {
        heading: 'CRM-Implementierung: Was in Oldenburg typisch schiefläuft',
        body: 'Die häufigsten Fehler: Zu viele Felder von Anfang an, keine Datenmigration aus alten Systemen, fehlende Mitarbeiter-Schulung und keine Prozessintegration. Northcode geht anders vor: schlanke Grundkonfiguration, parallele Datenmigration, Pilot mit einer Vertriebsperson, dann schrittweiser Rollout. Akzeptanzrate im Team: entscheidend für CRM-Erfolg.'
      },
    ],
    faqs: [
      { question: 'Was kostet ein CRM-System für ein Unternehmen in Oldenburg?', answer: 'Lizenzen: 0 € (HubSpot Free) bis 100 €/Nutzer/Monat (Salesforce Enterprise). Implementierung durch Northcode: ab 800 € für Basiskonfiguration, 2.000–6.000 € für vollständige Einrichtung mit Migration und Schulung.' },
      { question: 'Kann ich mein bestehendes CRM in Oldenburg ablösen?', answer: 'Ja. Northcode übernimmt die Datenmigration aus Excel, Outlook-Kontakten oder bestehenden CRM-Systemen. Kein Datenverlust, keine doppelte Pflege.' },
    ],
    relatedClusters: [
      { title: 'ERP Beratung Oldenburg', href: '/erp-beratung-oldenburg' },
      { title: 'Unternehmenssysteme Oldenburg', href: '/unternehmenssysteme-oldenburg' },
      { title: 'Leadgenerierung B2B Oldenburg', href: '/leadgenerierung-b2b-oldenburg' },
    ],
  },

  {
    slug: 'erp-beratung-oldenburg',
    parentSlug: 'unternehmenssysteme-oldenburg',
    metaTitle: 'ERP Beratung Oldenburg – System-Auswahl & Einführung | Northcode',
    metaDescription: 'ERP-Beratung für Unternehmen in Oldenburg: SAP, Microsoft Dynamics, ProAlpha & mehr. Neutrale Systemauswahl, Projektbegleitung & Schulung. Jetzt anfragen!',
    h1: 'ERP-Beratung in Oldenburg',
    subtitle: 'Neutraler ERP-Ratgeber für den Oldenburger Mittelstand.',
    city: 'Oldenburg', service: 'ERP-Beratung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'ERP-Einführungen scheitern in 60 % der Fälle an schlechter Vorbereitung – nicht an der Software. Für Oldenburger Unternehmen mit wachsenden Prozessen ist die Wahl des richtigen ERP-Systems eine der wichtigsten IT-Entscheidungen. Northcode begleitet Sie von der Anforderungsanalyse bis zum Go-Live, herstellerneutral.',
    sections: [
      {
        heading: 'ERP-Systeme im Überblick – welches passt zu Oldenburger Unternehmen?',
        body: 'SAP Business One und S/4HANA sind Marktstandard für Mittelständler ab 50 Mitarbeitern mit komplexen Produktionsprozessen. Microsoft Dynamics 365 ist stark bei Handel und Dienstleistung, ideal für Microsoft-365-Nutzer. ProAlpha und Infor punkten bei Fertigungsunternehmen im deutschen Mittelstand. Für kleinere Oldenburger Betriebe (10–50 MA) empfehlen sich oft schlankere Lösungen wie Lexware oder Odoo. Northcode analysiert Ihre Prozesse und empfiehlt auf Basis von Anforderungen, Budget und Skalierbarkeit.'
      },
      {
        heading: 'ERP-Einführung in Oldenburg: Phasen und Zeitrahmen',
        body: 'Phase 1: Anforderungsanalyse (2–4 Wochen) – alle Abteilungen, alle Prozesse. Phase 2: Systemauswahl und Verhandlung (2–3 Wochen). Phase 3: Konfiguration und Datenmigration (4–12 Wochen je Komplexität). Phase 4: Tests und Schulung (2–4 Wochen). Phase 5: Go-Live und Hypercare (4 Wochen). Gesamtdauer: 3–6 Monate. Northcode übernimmt Projektmanagement und Koordination mit dem ERP-Hersteller.'
      },
    ],
    faqs: [
      { question: 'Was kostet eine ERP-Einführung für ein mittelständisches Unternehmen in Oldenburg?', answer: 'ERP-Lizenzen: 2.000–15.000 €/Jahr. Implementierung und Projektbegleitung durch Northcode: 5.000–25.000 € je nach Unternehmensgröße und Komplexität. Förderung über "Digital Jetzt" möglich.' },
      { question: 'Können wir unsere Daten aus dem alten System übernehmen?', answer: 'Ja. Datenmigration ist Standard in jedem Northcode-ERP-Projekt. Stammdaten, Artikel, Kunden und offene Posten werden sauber überführt.' },
    ],
    relatedClusters: [
      { title: 'CRM Systeme Oldenburg', href: '/crm-systeme-oldenburg' },
      { title: 'Unternehmenssysteme Oldenburg', href: '/unternehmenssysteme-oldenburg' },
      { title: 'ERP Vergleich Oldenburg', href: '/erp-vergleich-oldenburg' },
    ],
  },

  {
    slug: 'ki-chatbots-kundenservice-oldenburg',
    parentSlug: 'ki-automatisierung-oldenburg',
    metaTitle: 'KI Chatbot Kundenservice Oldenburg – 24/7 Automatisierung | Northcode',
    metaDescription: 'KI-Chatbots für den Kundenservice in Oldenburg: Anfragen automatisch beantworten, Termine buchen & Leads qualifizieren. Jetzt Demo anfragen!',
    h1: 'KI-Chatbots für den Kundenservice in Oldenburg',
    subtitle: '24/7 Kundensupport ohne Mehrpersonal.',
    city: 'Oldenburg', service: 'KI-Chatbots',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Oldenburger Unternehmen verlieren täglich potenzielle Kunden, weil Anfragen außerhalb der Geschäftszeiten unbeantwortet bleiben. KI-Chatbots lösen das Problem: Sie antworten sofort, qualifizieren Anfragen, buchen Termine und eskalieren komplexe Fälle an einen Mitarbeiter – rund um die Uhr, ohne Zusatzkosten.',
    sections: [
      {
        heading: 'Was KI-Chatbots für Oldenburger Unternehmen konkret leisten',
        body: 'Häufige Fragen (Öffnungszeiten, Preise, Lieferzeiten) werden zu 80 % durch den Chatbot beantwortet. Leads werden qualifiziert: Budget, Zeitplan, Bedarf – der Chatbot fragt, Sie erhalten einen vorqualifizierten Kontakt. Terminbuchung in Kalender-Integration (Google Calendar, Outlook) direkt im Chat. Eskalation an Mitarbeiter bei komplexen Anfragen mit vollständigem Gesprächsprotokoll. Northcode integriert den Chatbot in Ihre Website, WhatsApp Business oder Ihr Ticketsystem.'
      },
      {
        heading: 'KI-Chatbot-Technologien im Vergleich',
        body: 'GPT-basierte Chatbots (auf OpenAI API) sind flexibler und verstehen Freitext besser, kosten aber laufende API-Gebühren. Regelbasierte Chatbots sind günstiger und 100 % vorhersehbar, aber auf definierte Szenarien begrenzt. Hybrid-Ansätze (Regeln + KI-Fallback) sind für die meisten Oldenburger Unternehmen die wirtschaftlichste Lösung. Northcode empfiehlt auf Basis Ihrer Anfragevolumina und Use-Cases.'
      },
    ],
    faqs: [
      { question: 'Was kostet ein KI-Chatbot für ein Unternehmen in Oldenburg?', answer: 'Einfacher regelbasierter Chatbot: ab 600 €. GPT-basierter intelligenter Assistent mit CRM-Integration: 1.500–4.000 €. Laufende Kosten: 30–150 €/Monat je nach Traffic.' },
      { question: 'Kann der Chatbot auf Deutsch kommunizieren?', answer: 'Selbstverständlich. Northcode trainiert alle Chatbots auf Deutsch, mit der Tonalität und Fachsprache Ihres Unternehmens.' },
    ],
    relatedClusters: [
      { title: 'KI-Automatisierung Oldenburg', href: '/ki-automatisierung-oldenburg' },
      { title: 'Leadgenerierung B2B Oldenburg', href: '/leadgenerierung-b2b-oldenburg' },
      { title: 'Marketing Automatisierung Oldenburg', href: '/marketing-automatisierung-oldenburg' },
    ],
  },

  {
    slug: 'leadgenerierung-b2b-oldenburg',
    parentSlug: 'webdesign-oldenburg',
    metaTitle: 'Leadgenerierung B2B Oldenburg – Mehr Anfragen & Neukunden | Northcode',
    metaDescription: 'B2B-Leadgenerierung für Unternehmen in Oldenburg: Landingpages, LinkedIn-Outreach & automatisierte Funnels. Messbar mehr qualifizierte Anfragen. Jetzt anfragen!',
    h1: 'B2B Leadgenerierung in Oldenburg',
    subtitle: 'Systematisch neue Geschäftskunden gewinnen.',
    city: 'Oldenburg', service: 'B2B-Leadgenerierung',
    intent: 'BOFU', type: 'support', keywordPriority: 1,
    intro: 'Oldenburger B2B-Unternehmen wachsen durch Empfehlungen – bis das Netzwerk ausgeschöpft ist. Strukturierte Leadgenerierung schließt die Lücke: Mit Landingpages, LinkedIn-Outreach und automatisierten Nachfass-Prozessen generieren Northcode-Kunden in Oldenburg kontinuierlich qualifizierte Anfragen, ohne Messen oder Kaltakquise-Teams.',
    sections: [
      {
        heading: 'Die drei Säulen der B2B-Leadgenerierung in Oldenburg',
        body: '1. SEO-Landingpages: Seiten, die bei Suchen wie "ERP-Beratung Oldenburg" oder "IT-Dienstleister Oldenburg" auf Google erscheinen – dauerhafter, kostenloser Traffic. 2. LinkedIn-Outreach: Automatisierte, personalisierte Kontaktaufnahme mit Entscheidern aus Oldenburger Zielbranchen (Industrie, Logistik, IT). 3. Lead-Nurturing: Automatisierte E-Mail-Sequenzen, die Interessenten zum richtigen Zeitpunkt ansprechen – ohne manuelles Nachfassen.'
      },
      {
        heading: 'Lead-Qualität statt Quantität: Was für Oldenburg funktioniert',
        body: 'Im Oldenburger B2B-Markt sind wenige hochwertige Leads wertvoller als viele unqualifizierte. Northcodes Ansatz setzt auf Zielgruppen-Präzision: Branchen-Targeting, Unternehmensgrößen-Filter und qualifizierende Fragen im Lead-Formular. Das Ergebnis: Anfragen von Entscheidern mit echtem Bedarf, nicht von Studenten oder Konkurrenten.'
      },
    ],
    faqs: [
      { question: 'Wie lange dauert es, bis die ersten B2B-Leads in Oldenburg kommen?', answer: 'LinkedIn-Outreach: erste Antworten in 1–2 Wochen. SEO-Landingpages: erste organische Anfragen nach 4–8 Wochen. Bezahlte Kampagnen (Google/LinkedIn Ads): ab Tag 1.' },
      { question: 'Für welche Branchen in Oldenburg funktioniert B2B-Leadgenerierung am besten?', answer: 'IT-Dienstleistungen, Produktion/Industrie, Unternehmensberatung, Logistik, Steuerberatung und Rechtsanwälte – alle typischen Oldenburger B2B-Branchen.' },
    ],
    relatedClusters: [
      { title: 'Landingpage Oldenburg', href: '/landingpage-oldenburg' },
      { title: 'SEO für Firmen Oldenburg', href: '/seo-fuer-firmen-oldenburg' },
      { title: 'Marketing Automatisierung Oldenburg', href: '/marketing-automatisierung-oldenburg' },
    ],
  },

  {
    slug: 'website-optimierung-oldenburg',
    parentSlug: 'webdesign-oldenburg',
    metaTitle: 'Website Optimierung Oldenburg – Speed, SEO & Conversion | Northcode',
    metaDescription: 'Website-Optimierung für Unternehmen in Oldenburg: PageSpeed, SEO-Technicals & Conversion-Rate verbessern. Audit + Umsetzung. Jetzt anfragen!',
    h1: 'Website-Optimierung in Oldenburg',
    subtitle: 'Mehr Besucher, bessere Platzierungen, höhere Conversion.',
    city: 'Oldenburg', service: 'Website-Optimierung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Eine veraltete oder langsame Website kostet Oldenburger Unternehmen täglich Kunden: Google straft langsame Seiten ab, Besucher springen ab und potenzielle Leads wählen den Wettbewerber. Northcode analysiert Ihre Website auf alle SEO- und Performance-Faktoren und setzt Verbesserungen direkt um.',
    sections: [
      {
        heading: 'Website-Audit: Was wir bei Oldenburger Unternehmens-Websites typisch finden',
        body: 'Core Web Vitals (LCP, FID, CLS) rot oder gelb – direkte Auswirkung auf Google-Ranking. Fehlende oder falsch gesetzte Meta-Tags. Bilder nicht komprimiert (WebP statt JPEG). Kein Schema-Markup für lokale Suchen wie "Webdesign Oldenburg". Fehlende mobile Optimierung trotz 65 % mobilem Traffic. Kein SSL oder veraltetes SSL-Zertifikat. Northcode-Audit deckt alle Punkte ab und liefert eine priorisierte Aufgabenliste.'
      },
      {
        heading: 'Conversion-Optimierung für Oldenburger Websites',
        body: 'Mehr Traffic bringt nichts, wenn die Conversion Rate niedrig ist. Northcode optimiert CTA-Platzierung, Formularlänge, Vertrauenselemente (Kundenstimmen, Zertifikate) und die Mobile Experience. Heatmap-Analysen zeigen, wo Besucher klicken – und wo sie abspringen. A/B-Tests belegen, was wirklich konvertiert.'
      },
    ],
    faqs: [
      { question: 'Was kostet ein Website-Audit für ein Unternehmen in Oldenburg?', answer: 'Basis-Audit (SEO + Performance + UX): ab 250 €. Vollständiger Audit mit Wettbewerberanalyse und Umsetzungsplan: 500–800 €. Bei Beauftragung der Umsetzung wird der Audit-Preis angerechnet.' },
      { question: 'Wie schnell werden Verbesserungen sichtbar?', answer: 'PageSpeed-Verbesserungen: sofort. SEO-Auswirkungen: erste Veränderungen im Ranking nach 4–8 Wochen. Conversion-Verbesserungen: sofort nach A/B-Test-Auswertung.' },
    ],
    relatedClusters: [
      { title: 'SEO für Firmen Oldenburg', href: '/seo-fuer-firmen-oldenburg' },
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
      { title: 'Landingpage Oldenburg', href: '/landingpage-oldenburg' },
    ],
  },

  {
    slug: 'seo-fuer-firmen-oldenburg',
    parentSlug: 'webdesign-oldenburg',
    metaTitle: 'SEO für Firmen Oldenburg – Lokale Suchmaschinenoptimierung | Northcode',
    metaDescription: 'SEO für Unternehmen in Oldenburg: Lokale Rankings, Google Business & technische Optimierung. Mehr Anfragen aus organischer Suche. Jetzt anfragen!',
    h1: 'SEO für Firmen in Oldenburg',
    subtitle: 'Wenn Oldenburger Kunden suchen – werden Sie gefunden.',
    city: 'Oldenburg', service: 'SEO',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Über 90 % der Kaufentscheidungen beginnen mit einer Google-Suche. Für Oldenburger Unternehmen bedeutet das: Wer bei "Steuerberater Oldenburg", "Webdesign Oldenburg" oder "IT-Service Oldenburg" nicht auf Seite 1 erscheint, verliert Kunden an die Konkurrenz. Northcode macht Oldenburger Firmen lokal sichtbar.',
    sections: [
      {
        heading: 'Lokale SEO-Strategie für Oldenburg: Die drei Kernbereiche',
        body: 'Google Business Profile (GBP): Optimierung des Google-My-Business-Eintrags mit Kategorien, Fotos, Öffnungszeiten, Bewertungsmanagement und Posts. On-Page-SEO: Meta-Tags, H1/H2-Struktur, interne Verlinkung und lokale Keywords ("Service + Oldenburg") auf allen relevanten Seiten. Off-Page / Backlinks: Eintragungen in regionale Verzeichnisse, lokale Presseartikel und Partnernetzwerke in Oldenburg und dem Nordwesten. Northcode koordiniert alle drei Bereiche als Gesamtstrategie.'
      },
      {
        heading: 'Zeitplan: Wann sind SEO-Ergebnisse in Oldenburg zu erwarten?',
        body: 'Google Business Profile: erste Verbesserungen in 2–4 Wochen. Technische On-Page-Fixes: innerhalb von 4–6 Wochen im Ranking spürbar. Backlink-Aufbau: 3–6 Monate bis stabile Rankings für Hauptkeywords. Content-SEO (neue Seiten für Long-Tail-Keywords): 2–4 Monate. SEO ist kein Einmal-Projekt – Northcode bietet monatliche Betreuung mit Reporting.'
      },
    ],
    faqs: [
      { question: 'Was kostet SEO für ein Unternehmen in Oldenburg?', answer: 'Einmalige SEO-Grundoptimierung: ab 800 €. Monatliche SEO-Betreuung: 500–1.500 €/Monat je nach Wettbewerbsintensität und Umfang. Lokale SEO-Pakete speziell für Oldenburger KMUs ab 350 €/Monat.' },
      { question: 'Kann Northcode auch für meinen bestehenden Webdesigner die SEO übernehmen?', answer: 'Ja. Northcode arbeitet auch mit bestehenden Webentwicklern zusammen und übernimmt die SEO-Komponente als Spezialisierung.' },
    ],
    relatedClusters: [
      { title: 'Website Optimierung Oldenburg', href: '/website-optimierung-oldenburg' },
      { title: 'Leadgenerierung B2B Oldenburg', href: '/leadgenerierung-b2b-oldenburg' },
      { title: 'Webdesign Oldenburg', href: '/webdesign-oldenburg' },
    ],
  },

  {
    slug: 'digitalisierung-verwaltung-oldenburg',
    parentSlug: 'digitalisierung-oldenburg',
    metaTitle: 'Digitalisierung Verwaltung Oldenburg – Papierlos & effizient | Northcode',
    metaDescription: 'Verwaltungsdigitalisierung für Unternehmen in Oldenburg: Dokumentenmanagement, digitale Prozesse & papierlose Buchhaltung. Jetzt Beratung sichern!',
    h1: 'Digitalisierung der Verwaltung in Oldenburg',
    subtitle: 'Von Papier zu Prozessen – Verwaltung modernisieren.',
    city: 'Oldenburg', service: 'Verwaltungsdigitalisierung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Oldenburger Unternehmen versinken im Papierkram: Rechnungen werden ausgedruckt, abgeheftet, manuell in Excel übertragen. Verwaltungsdigitalisierung spart pro Mitarbeiter 3–8 Stunden pro Woche und reduziert Fehler drastisch. Northcode digitalisiert Ihre Verwaltungsprozesse schrittweise – ohne Betriebsunterbrechung.',
    sections: [
      {
        heading: 'Verwaltungsbereiche, die sich in Oldenburg am schnellsten digitalisieren lassen',
        body: 'Eingangsrechnungen: automatische Erfassung per OCR, Weiterleitung zur Freigabe, Buchung in DATEV oder Lexware. Personalakten: digitales HR-System mit Urlaubsanträgen, Krankmeldungen und Vertragsmanagement. Kundenkorrespondenz: CRM-Anbindung für E-Mail-Tracking und Gesprächshistorie. Vertragsmanagement: digitale Ablage mit Fristenerinnerungen und Versionierung. Northcode liefert nicht nur die Software, sondern auch die neuen digitalen Prozesse.'
      },
      {
        heading: 'DATEV-Integration und Steuerberater-Anbindung in Oldenburg',
        body: 'Die meisten Oldenburger Unternehmen arbeiten mit einem DATEV-Steuerberater. Northcode richtet die Belegnullübermittlung ein: Ihre Belege werden digital erfasst und direkt an den Steuerberater übertragen – kein Pendelordner mehr, keine manuelle Buchung, weniger Steuerberatungskosten.'
      },
    ],
    faqs: [
      { question: 'Was kostet Verwaltungsdigitalisierung für ein Unternehmen in Oldenburg?', answer: 'Abhängig vom Umfang: Digitale Eingangsrechnungsverarbeitung ab 800 €. Vollständiges digitales Büro-Paket (DMS, HR, CRM) ab 3.000 €. Laufende Kosten: Software-Lizenzen 50–300 €/Monat.' },
      { question: 'Können wir die Digitalisierung schrittweise umsetzen?', answer: 'Ausdrücklich empfohlen. Northcode startet mit dem Prozess, der den größten Effekt bei geringstem Aufwand bringt, und baut darauf auf.' },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Oldenburg', href: '/digitalisierung-oldenburg' },
      { title: 'Digitale Rechnungsverarbeitung Oldenburg', href: '/digitale-rechnungsverarbeitung-oldenburg' },
      { title: 'Automatisierte Buchhaltung Oldenburg', href: '/automatisierte-buchhaltung-oldenburg' },
    ],
  },

  {
    slug: 'workflow-automatisierung-oldenburg',
    parentSlug: 'prozessautomatisierung-oldenburg',
    metaTitle: 'Workflow Automatisierung Oldenburg – Prozesse intelligent steuern | Northcode',
    metaDescription: 'Workflow-Automatisierung für Unternehmen in Oldenburg: Genehmigungsprozesse, Benachrichtigungen & Aufgabenrouting automatisieren. Jetzt anfragen!',
    h1: 'Workflow-Automatisierung in Oldenburg',
    subtitle: 'Weniger manuelle Handgriffe – schnellere Durchlaufzeiten.',
    city: 'Oldenburg', service: 'Workflow-Automatisierung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Hinter jedem Geschäftsprozess steckt ein Workflow: Auftrag eingegangen → Freigabe anfordern → Produktion informieren → Kunde benachrichtigen. In vielen Oldenburger Unternehmen passiert das noch manuell – per E-Mail, Telefon oder Post-it. Northcode automatisiert diese Workflows vollständig.',
    sections: [
      {
        heading: 'Workflow-Automatisierung in der Praxis: Oldenburger Beispiele',
        body: 'Genehmigungsworkflow: Urlaubsanträge, Bestellfreigaben und Rechnungsfreigaben automatisch an den richtigen Genehmiger weiterleiten – mit Erinnerungen und Eskalation. Auftragsworkflow: Neuer Auftrag im CRM → automatische E-Mail ans Team → Aufgaben erstellt → Kalender geblockt. Onboarding-Workflow: Neuer Mitarbeiter → IT-Zugänge beantragt → HR informiert → Checklisten versendet. Northcode baut diese Workflows mit Tools wie Make (Integromat), Zapier oder kundenindividueller Software.'
      },
      {
        heading: 'Technologievergleich: Welches Workflow-Tool für Oldenburg?',
        body: 'Make (früher Integromat): Beste Wahl für komplexe Multi-System-Workflows, starke EU-Datenschutz-Compliance. Zapier: Ideal für einfache Verbindungen zwischen SaaS-Tools, schnelle Umsetzung. Power Automate (Microsoft): Perfekt für Unternehmen mit Microsoft-365-Ökosystem in Oldenburg. Individuelle Entwicklung: Bei sehr spezifischen Anforderungen oder Compliance-Vorgaben. Northcode wählt das richtige Tool für Ihren Use-Case.'
      },
    ],
    faqs: [
      { question: 'Wie komplex darf ein Workflow sein, den Northcode in Oldenburg automatisiert?', answer: 'Sehr komplex. Northcode hat Workflows mit 20+ Schritten, Verzweigungen, Wartezeiten und manuellen Zwischenschritten umgesetzt. Je klarer die Anforderung, desto schneller die Umsetzung.' },
      { question: 'Was passiert, wenn ein automatisierter Workflow fehlschlägt?', answer: 'Northcode richtet Fehler-Monitoring und -Benachrichtigungen ein. Bei kritischen Prozessen gibt es immer einen manuellen Fallback-Pfad.' },
    ],
    relatedClusters: [
      { title: 'Automatisierung Produktionsbetriebe Oldenburg', href: '/automatisierung-produktionsbetriebe-oldenburg' },
      { title: 'Prozessautomatisierung Oldenburg', href: '/prozessautomatisierung-oldenburg' },
      { title: 'Business Automatisierung Oldenburg', href: '/business-automatisierung-oldenburg' },
    ],
  },

];

export const oldenburgSupportSlugs = oldenburgSupportClusters.map(p => p.slug);
