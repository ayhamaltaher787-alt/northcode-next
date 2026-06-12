import { FAQ } from './local-seo-data';
import { ClusterPageData } from './cluster-seo-data';

/**
 * Delmenhorst Cluster – Support/Industry (8 neue Seiten)
 * Bestehend (aus cluster-seo-data.ts): ki-fuer-handwerker-delmenhorst, leadgenerierung-delmenhorst
 * Ton: pragmatisch, KMU/Handwerk, lokal, keine Buzzwords
 */
export const delmenhorstSupportClusters: ClusterPageData[] = [

  {
    slug: 'automatisierung-kleine-unternehmen-delmenhorst',
    parentSlug: 'prozessautomatisierung-delmenhorst',
    metaTitle: 'Automatisierung für kleine Unternehmen Delmenhorst | Northcode',
    metaDescription: 'Prozessautomatisierung für KMU und Einzelbetriebe in Delmenhorst: Was sich lohnt, was es kostet und wie schnell es wirkt. Jetzt kostenlos beraten lassen.',
    h1: 'Automatisierung für kleine Unternehmen in Delmenhorst',
    subtitle: 'Weniger Routinearbeit – auch ohne IT-Abteilung.',
    city: 'Delmenhorst', service: 'Automatisierung KMU',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Automatisierung klingt nach Großunternehmen, Industrierobotern und großen IT-Budgets. Für die meisten Betriebe in Delmenhorst ist das Realität ganz anders: Die ersten sinnvollen Automatisierungen kosten weniger als ein neuer Laptop – und sparen mehr Zeit, als man erwartet.',
    sections: [
      {
        heading: 'Was sich für kleine Betriebe in Delmenhorst wirklich lohnt',
        body: 'Nicht jeder Prozess muss automatisiert werden. Aber einige wiederholen sich täglich und kosten Zeit ohne Mehrwert: Eingangsbestätigungen verschicken, Rechnungen nach Auftrag erstellen, Termine bestätigen, Mahnungen rausschicken. Wer diese vier Bereiche automatisiert, gewinnt in einem Betrieb mit 3–8 Mitarbeitern oft 5–10 Stunden pro Woche zurück. Das ist keine Hochrechnung – das ist, was Northcode bei Projekten in Delmenhorst und Umgebung regelmäßig beobachtet.',
      },
      {
        heading: 'Einstieg ohne Risiko: Wie ein kleines Automatisierungsprojekt abläuft',
        body: 'Northcode fängt immer mit dem Prozess an, der am häufigsten vorkommt und am meisten Zeit kostet. Kein großes Projekt, keine Systemumstellung – ein konkreter Ablauf, der ab sofort automatisch läuft. Danach entscheiden Sie, ob Sie weitermachen. Kein laufender Vertrag, kein Abo, keine versteckten Kosten.',
      },
    ],
    faqs: [
      {
        question: 'Muss ich für Automatisierung neue Software kaufen?',
        answer: 'Meistens nicht. Northcode nutzt zunächst, was Sie bereits haben. Neue Tools kommen nur dann ins Spiel, wenn sie einen klaren Mehrwert bringen – und das wird vorher besprochen.',
      },
      {
        question: 'Ab wann lohnt sich Automatisierung für einen kleinen Betrieb in Delmenhorst?',
        answer: 'Wenn ein Prozess mindestens 3–4 Mal pro Woche manuell erledigt wird, lohnt sich die Automatisierung fast immer. Im kostenlosen Erstgespräch schauen wir gemeinsam, was in Ihrem Betrieb Sinn macht.',
      },
    ],
    relatedClusters: [
      { title: 'Prozessautomatisierung Delmenhorst', href: '/prozessautomatisierung-delmenhorst' },
      { title: 'Digitalisierung Büro Delmenhorst', href: '/digitalisierung-buero-delmenhorst' },
      { title: 'Business Automatisierung Delmenhorst', href: '/business-automatisierung-delmenhorst' },
    ],
  },

  {
    slug: 'crm-kmu-delmenhorst',
    parentSlug: 'unternehmenssysteme-delmenhorst',
    metaTitle: 'CRM Systeme für KMU Delmenhorst – Kundenverwaltung digital | Northcode',
    metaDescription: 'CRM-System für kleine und mittlere Unternehmen in Delmenhorst: einfach eingerichtet, schnell im Einsatz. Beratung, Setup & Schulung ab 800 €.',
    h1: 'CRM-Systeme für KMU in Delmenhorst',
    subtitle: 'Kunden im Blick. Aufträge im Griff.',
    city: 'Delmenhorst', service: 'CRM für KMU',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'In kleinen Betrieben steckt Kundenwissen oft in einem einzelnen Kopf – oder verteilt über drei verschiedene Tools, die nicht miteinander reden. Wenn dieser Mitarbeiter ausfällt oder geht, ist das ein Problem. Ein CRM-System löst das, ohne dass Sie die IT-Infrastruktur eines Großunternehmens brauchen.',
    sections: [
      {
        heading: 'Was ein KMU-CRM können muss – und was nicht',
        body: 'Ein CRM für einen Delmenhorster Betrieb mit 3–20 Mitarbeitern muss nicht alles können. Es muss Kontakte sauber verwalten, Aufträge und Angebote zuordnen, Fristen sichtbar machen und mit der E-Mail-Software sprechen. Mehr braucht es in den meisten Fällen nicht. Northcode empfiehlt schlanke Systeme, die Ihr Team nach einer halben Stunde Einweisung selbst bedienen kann.',
      },
      {
        heading: 'Einführung in zwei Schritten: Beratung und Einrichtung',
        body: 'Northcode übernimmt die komplette CRM-Einrichtung. Dazu gehören: Kontaktimport aus Excel oder Outlook, Konfiguration der Felder nach Ihrem Bedarf, Einrichtung der E-Mail-Integration und eine Schulung für Ihr Team. Im Anschluss sind Sie unabhängig und brauchen für den Alltag keine externe Unterstützung.',
      },
    ],
    faqs: [
      {
        question: 'Welche CRM-Systeme empfiehlt Northcode für kleine Betriebe in Delmenhorst?',
        answer: 'Das hängt vom Betrieb ab. Für Handwerker und Dienstleister empfehlen wir oft schlanke Lösungen wie Pipedrive, HubSpot Free oder Notion-basierte Systeme. Für größere KMUs auch HubSpot oder Brevo CRM. Wir beraten neutral.',
      },
      {
        question: 'Was kostet die CRM-Einrichtung für einen Betrieb in Delmenhorst?',
        answer: 'Basiseinrichtung mit Datenmigration und Schulung ab 800 €. Für komplexere Anforderungen mit Automatisierungen und Integrationen: 1.500–3.000 €.',
      },
    ],
    relatedClusters: [
      { title: 'Unternehmenssysteme Delmenhorst', href: '/unternehmenssysteme-delmenhorst' },
      { title: 'Kundenverwaltung digital Delmenhorst', href: '/kundenverwaltung-digital-delmenhorst' },
      { title: 'Lead Management Delmenhorst', href: '/lead-management-delmenhorst' },
    ],
  },

  {
    slug: 'website-lokale-dienstleister-delmenhorst',
    parentSlug: 'webdesign-delmenhorst',
    metaTitle: 'Website für lokale Dienstleister Delmenhorst – Sichtbar werden | Northcode',
    metaDescription: 'Professionelle Website für lokale Dienstleister in Delmenhorst: schnell live, mobiloptimiert & bei Google gefunden. Ab 1.200 €. Jetzt anfragen.',
    h1: 'Website für lokale Dienstleister in Delmenhorst',
    subtitle: 'Damit Kunden Sie finden – nicht den Wettbewerber.',
    city: 'Delmenhorst', service: 'Website Dienstleister',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Ein Elektriker, ein Physiotherapeut, ein Reinigungsservice – wer lokal arbeitet, braucht eine Website, die lokal gefunden wird. Nicht irgendwann, sondern dann, wenn jemand in Delmenhorst nach genau diesem Service sucht. Das ist kein Designprojekt, das ist ein Sichtbarkeitsprojekt.',
    sections: [
      {
        heading: 'Was eine Website für lokale Dienstleister in Delmenhorst braucht',
        body: 'Klare Leistungsübersicht, die den Besucher nicht suchen lässt. Telefonnummer und Kontaktformular direkt sichtbar – nicht nach drei Klicks. Kundenstimmen oder Referenzen, die Vertrauen aufbauen. Google-My-Business-Optimierung, damit Sie in der Kartenansicht auftauchen. Mobiloptimierung, weil gut 65 % der lokalen Suchanfragen vom Smartphone kommen. Northcode liefert all das – als Paket, nicht als Posten auf einer langen Leistungsliste.',
      },
      {
        heading: 'Wie lange dauert es bis zur fertigen Website?',
        body: 'Bei Northcode geht das schneller als bei den meisten Agenturen. Erster Entwurf: 72 Stunden. Live-Schaltung: innerhalb von 7–10 Werktagen. Das ist möglich, weil wir kein aufgeblähtes Abstimmungsverfahren betreiben. Wir stellen gezielte Fragen, liefern einen konkreten Entwurf – und passen auf Basis Ihres Feedbacks an.',
      },
    ],
    faqs: [
      {
        question: 'Was kostet eine Website für einen lokalen Dienstleister in Delmenhorst?',
        answer: 'Einfache Dienstleister-Website (5–7 Seiten, mobiloptimiert, Google-My-Business-Einrichtung): ab 1.200 €. Mit Galerie, Buchungsformular und SEO-Optimierung: ab 1.800 €.',
      },
      {
        question: 'Kann ich danach auch selbst Inhalte pflegen?',
        answer: 'Ja. Northcode liefert alle Websites mit einem einfachen CMS. Texte, Fotos und Öffnungszeiten können Sie nach einer kurzen Einweisung selbst bearbeiten.',
      },
    ],
    relatedClusters: [
      { title: 'Webdesign Delmenhorst', href: '/webdesign-delmenhorst' },
      { title: 'Lokale SEO Delmenhorst', href: '/lokale-seo-delmenhorst' },
      { title: 'Google Maps Optimierung Delmenhorst', href: '/google-maps-optimierung-delmenhorst' },
    ],
  },

  {
    slug: 'terminbuchung-automatisierung-delmenhorst',
    parentSlug: 'prozessautomatisierung-delmenhorst',
    metaTitle: 'Terminbuchung Automatisierung Delmenhorst – Online buchen lassen | Northcode',
    metaDescription: 'Automatische Terminbuchung für Unternehmen in Delmenhorst: Kunden buchen selbst, Bestätigung läuft automatisch. System ab 300 €. Jetzt anfragen.',
    h1: 'Terminbuchung automatisieren in Delmenhorst',
    subtitle: 'Kein Telefon mehr für jeden Termin.',
    city: 'Delmenhorst', service: 'Terminbuchung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Jedes Mal, wenn ein Kunde anruft, um einen Termin zu vereinbaren, blockiert das jemanden im Betrieb. Mal fünf Minuten, mal zwanzig. Über eine Woche addiert sich das auf Stunden. Dabei gibt es längst einfache Lösungen, bei denen Kunden selbst buchen – und Ihr Team die Buchung nur noch im Kalender sieht.',
    sections: [
      {
        heading: 'Wie automatische Terminbuchung in Delmenhorster Betrieben funktioniert',
        body: 'Ein Buchungslink auf Ihrer Website oder in Ihrer E-Mail-Signatur. Der Kunde wählt Leistung, Datum und Uhrzeit. Er erhält automatisch eine Bestätigung und eine Erinnerung 24 Stunden vorher. Ihr Kalender (Google oder Outlook) wird synchronisiert. Kein Telefonanruf, kein manueller Eintrag, kein vergessener Termin. Northcode richtet das in einem Halbtag ein – inklusive Verbindung mit Ihrem Kalender und Ihrer Website.',
      },
      {
        heading: 'Für welche Betriebe lohnt sich das besonders?',
        body: 'Besonders für Betriebe, bei denen regelmäßig Termine anfallen: Friseure, Kosmetikstudios, Physiotherapeuten, Handwerker für Erstberatungen, Steuerberater, Coaches. Aber auch für jeden Dienstleister, der Erstgespräche führt. Wenn mehr als fünf Terminanfragen pro Woche per Telefon eingehen, ist das Potenzial für eine Automatisierung klar vorhanden.',
      },
    ],
    faqs: [
      {
        question: 'Welches Buchungssystem empfiehlt Northcode für Betriebe in Delmenhorst?',
        answer: 'Für die meisten Betriebe: Calendly (einfach, günstig), Cal.com (datenschutzfreundlich, selbst hostbar) oder Acuity Scheduling (gut für mehrere Mitarbeiter). Northcode richtet das System ein und verbindet es mit Ihrer Website.',
      },
      {
        question: 'Was kostet die Einrichtung?',
        answer: 'Einrichtung eines einfachen Buchungssystems mit Kalenderverbindung und Website-Integration: ab 300 €. Mit Zahlungsanbindung, mehreren Mitarbeitern oder benutzerdefinierten Feldern: ab 500 €.',
      },
    ],
    relatedClusters: [
      { title: 'Online Terminbuchung Friseure Delmenhorst', href: '/online-terminbuchung-friseure-delmenhorst' },
      { title: 'Kundenanfragen automatisieren Delmenhorst', href: '/kundenanfragen-automatisieren-delmenhorst' },
      { title: 'Automatisierung kleine Unternehmen Delmenhorst', href: '/automatisierung-kleine-unternehmen-delmenhorst' },
    ],
  },

  {
    slug: 'digitalisierung-buero-delmenhorst',
    parentSlug: 'digitalisierung-delmenhorst',
    metaTitle: 'Digitalisierung Büro Delmenhorst – Papierlos & schneller | Northcode',
    metaDescription: 'Bürodigitalisierung für Betriebe in Delmenhorst: Belege digital, Prozesse schlank, weniger Papierkram. Schritt für Schritt, ohne Betriebsunterbrechung.',
    h1: 'Bürodigitalisierung in Delmenhorst',
    subtitle: 'Weg vom Papier – ohne alles auf einmal umzustellen.',
    city: 'Delmenhorst', service: 'Bürodigitalisierung',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Viele Betriebe in Delmenhorst wissen, dass sie eigentlich "mehr digital sein könnten". Nur wo anfangen? Das große Problem ist oft gar nicht der Wille – sondern die Unsicherheit, was sinnvoll ist und was am Ende mehr Aufwand macht als vorher. Northcode macht das strukturiert: zuerst analysieren, dann das umsetzen, was den größten Effekt bringt.',
    sections: [
      {
        heading: 'Drei Bereiche mit sofortigem Effekt',
        body: 'Eingangsrechnungen: Statt Papiereingang, Ablage und manueller Buchung kommen Belege per App oder E-Mail rein, werden automatisch erkannt und an den Steuerberater übertragen. Spart im Durchschnitt 2–4 Stunden pro Woche. Kommunikation: Statt fünf verschiedene Kanäle (E-Mail, WhatsApp, SMS, Telefon, Post) alles in einem System – kein Nachricht vergessen, kein Anruf ohne Notiz. Dokumentenablage: Verträge, Angebote, Fotos – alles an einem Ort, durchsuchbar und sicher gesichert.',
      },
      {
        heading: 'Keine Systemumstellung am ersten Tag',
        body: 'Northcode empfiehlt keinen "Big Bang" – alles auf einmal digitalisieren. Das scheitert meistens. Stattdessen: ein Bereich nach dem anderen, jedes Mal mit klarem Nutzen, bevor der nächste Schritt folgt. Für die meisten Delmenhorster Betriebe reichen drei Monate, um die größten Zeitfresser zu eliminieren.',
      },
    ],
    faqs: [
      {
        question: 'Was kostet Bürodigitalisierung für einen kleinen Betrieb in Delmenhorst?',
        answer: 'Einzelne Maßnahmen (z.B. digitale Belegerfassung) starten ab 500 €. Ein vollständiges "digitales Büro" mit mehreren Bereichen: 2.500–5.000 €. Wir empfehlen, mit dem größten Schmerzpunkt anzufangen.',
      },
      {
        question: 'Funktioniert das auch mit DATEV?',
        answer: 'Ja. Northcode hat Erfahrung mit DATEV-Integrationen und richtet die Übergabe an Ihren Steuerberater so ein, dass dieser weniger manuelle Arbeit hat – und Sie günstiger fahren.',
      },
    ],
    relatedClusters: [
      { title: 'Digitalisierung Delmenhorst', href: '/digitalisierung-delmenhorst' },
      { title: 'Buchhaltung Digitalisierung Delmenhorst', href: '/buchhaltung-digitalisierung-delmenhorst' },
      { title: 'Automatisierung kleine Unternehmen Delmenhorst', href: '/automatisierung-kleine-unternehmen-delmenhorst' },
    ],
  },

  {
    slug: 'social-media-kmu-delmenhorst',
    parentSlug: 'webdesign-delmenhorst',
    metaTitle: 'Social Media für KMU Delmenhorst – Präsenz aufbauen | Northcode',
    metaDescription: 'Social-Media-Betreuung und Automatisierung für KMU in Delmenhorst: regelmäßige Beiträge, mehr Sichtbarkeit, weniger Aufwand. Jetzt anfragen.',
    h1: 'Social Media für KMU in Delmenhorst',
    subtitle: 'Präsent sein – ohne jeden Tag selbst posten zu müssen.',
    city: 'Delmenhorst', service: 'Social Media KMU',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Viele Delmenhorster Betriebe haben einen Instagram-Account oder eine Facebook-Seite – und haben das letzte Mal vor acht Monaten etwas gepostet. Das schadet mehr als es nützt. Wer unregelmäßig postet, wirkt inaktiv. Wer gar nicht postet, existiert für einen Teil der lokalen Kundschaft nicht.',
    sections: [
      {
        heading: 'Was KMUs in Delmenhorst von Social Media erwarten können',
        body: 'Social Media ist für lokale Betriebe kein Massenkanal. Aber es ist ein Vertrauens- und Sichtbarkeitskanal. Wenn jemand Ihren Betriebsnamen googelt oder bei Instagram sucht und aktuelle Beiträge findet, steigt die Glaubwürdigkeit. Wenn er gar nichts findet, entsteht Skepsis. Das gilt besonders für Branchen, wo Vertrauen eine große Rolle spielt: Handwerk, Pflege, Dienstleistung.',
      },
      {
        heading: 'Northcodes Ansatz: Automatisierung statt täglicher Aufwand',
        body: 'Northcode richtet einen Content-Kalender ein und automatisiert die Veröffentlichung. Einmal im Monat ein kurzes Abstimmungsgespräch – danach laufen die Beiträge automatisch. Kein tägliches Tippen, keine vergessenen Postings, keine leere Profilseite. Das ist kein Content-Abo – das ist ein strukturierter Prozess, den Sie nach Einrichtung selbst weiterführen können.',
      },
    ],
    faqs: [
      {
        question: 'Lohnt sich Social Media für kleine Betriebe in Delmenhorst?',
        answer: 'Für Vertrauen und lokale Sichtbarkeit ja. Für direkten Umsatz als einzigen Kanal: nein. Social Media ist am stärksten als Ergänzung zu einer guten Website und Google-My-Business-Präsenz.',
      },
      {
        question: 'Kann Northcode die Social-Media-Beiträge auch selbst erstellen?',
        answer: 'Ja. Northcode übernimmt auf Wunsch Text und Grafik – auf Basis von Informationen, die Sie liefern. Oder wir richten den Prozess so ein, dass Sie es selbst in 30 Minuten pro Monat erledigen können.',
      },
    ],
    relatedClusters: [
      { title: 'Social Media Automatisierung Delmenhorst', href: '/social-media-automatisierung-delmenhorst' },
      { title: 'Online Sichtbarkeit Delmenhorst', href: '/online-sichtbarkeit-delmenhorst' },
      { title: 'Marketing Automatisierung Delmenhorst', href: '/marketing-automatisierung-delmenhorst' },
    ],
  },

  {
    slug: 'online-sichtbarkeit-delmenhorst',
    parentSlug: 'webdesign-delmenhorst',
    metaTitle: 'Online Sichtbarkeit für Firmen Delmenhorst – Gefunden werden | Northcode',
    metaDescription: 'Mehr Online-Sichtbarkeit für Delmenhorster Unternehmen: Google, Maps & lokale Suchen. Was wirklich wirkt – und was Zeitverschwendung ist.',
    h1: 'Online-Sichtbarkeit für Firmen in Delmenhorst',
    subtitle: 'Wer nicht gefunden wird, wird nicht beauftragt.',
    city: 'Delmenhorst', service: 'Online-Sichtbarkeit',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Delmenhorst ist kein Millionenmarkt. Das ist ein Vorteil. Mit deutlich weniger Aufwand als in Bremen oder Hannover können lokale Betriebe auf Google auf den vorderen Plätzen erscheinen – für die Suchen, die wirklich Kunden bringen. Voraussetzung: die richtigen Maßnahmen, nicht viel Geld.',
    sections: [
      {
        heading: 'Die drei wichtigsten Hebel für lokale Sichtbarkeit',
        body: 'Google Business Profile: Der wichtigste Kanal für lokale Suchen – kostenlos, aber unterschätzt. Vollständig ausgefülltes Profil mit Fotos, Kategorien, Öffnungszeiten und regelmäßigen Updates erhöht die Chance auf die "Google-Maps-Box" erheblich. Lokale Keywords auf der Website: Seiten, die gezielt auf Begriffe wie "Elektriker Delmenhorst" oder "Steuerberater Delmenhorst" ausgerichtet sind, werden gefunden. Bewertungsmanagement: Betriebe mit mehr als 15 aktuellen Google-Bewertungen ranken durchschnittlich besser als solche mit wenig oder keinen Bewertungen.',
      },
      {
        heading: 'Was in Delmenhorst schnell wirkt – und was Zeit braucht',
        body: 'Google-My-Business-Optimierung zeigt erste Wirkung innerhalb von 2–4 Wochen. Website-SEO braucht 6–12 Wochen bis zu stabilen Rankings. Social Media ist kein direkter Traffic-Kanal, aber stärkt das Gesamtbild. Northcode gibt keine Versprechen für Platz 1 – aber zeigt Ihnen, welche Maßnahmen in Delmenhorst realistisch wirken, und setzt diese um.',
      },
    ],
    faqs: [
      {
        question: 'Kann man lokale Sichtbarkeit in Delmenhorst auch ohne große Werbeausgaben aufbauen?',
        answer: 'Ja. Google-My-Business, strukturierte Website-Texte und Bewertungsaufbau sind größtenteils kostengünstig. Der Aufwand liegt hauptsächlich in der Einrichtung und Pflege – nicht in Werbebudget.',
      },
      {
        question: 'Wann sieht man erste Ergebnisse?',
        answer: 'Bei Google My Business: 2–4 Wochen. Bei organischer Website-SEO: 6–12 Wochen für erste Rankingverbesserungen. Northcode legt immer einen Ausgangspunkt fest, damit Fortschritte messbar sind.',
      },
    ],
    relatedClusters: [
      { title: 'Lokale SEO Delmenhorst', href: '/lokale-seo-delmenhorst' },
      { title: 'Google Maps Optimierung Delmenhorst', href: '/google-maps-optimierung-delmenhorst' },
      { title: 'Website Optimierung KMU Delmenhorst', href: '/website-optimierung-kmu-delmenhorst' },
    ],
  },

  {
    slug: 'kundenanfragen-automatisieren-delmenhorst',
    parentSlug: 'ki-automatisierung-delmenhorst',
    metaTitle: 'Kundenanfragen automatisieren Delmenhorst – Schneller antworten | Northcode',
    metaDescription: 'Kundenanfragen automatisch beantworten für Betriebe in Delmenhorst: Chatbot, E-Mail-Automation & automatische Erstantworten. Kein Besucher bleibt unbeantwortet.',
    h1: 'Kundenanfragen automatisieren in Delmenhorst',
    subtitle: 'Kein Besucher geht verloren, weil Sie gerade beschäftigt sind.',
    city: 'Delmenhorst', service: 'Kundenanfragen automatisieren',
    intent: 'MOFU', type: 'support', keywordPriority: 2,
    intro: 'Viele Anfragen in kleinen Betrieben kommen abends oder am Wochenende. Wenn dann nichts passiert – keine Antwort, keine Bestätigung, kein Signal –, ist der Interessent beim nächsten Anbieter. Automatisierte Erstantworten lösen das, ohne dass jemand um 22 Uhr am Rechner sitzen muss.',
    sections: [
      {
        heading: 'Was automatisiert werden kann – ohne KI-Großprojekt',
        body: 'Automatische Eingangsbestätigung auf jedes Kontaktformular: der Interessent weiß sofort, dass seine Anfrage angekommen ist. Triage per E-Mail: je nach Anfragetyp wird die E-Mail ans richtige Teammitglied weitergeleitet. FAQ-Chatbot auf der Website: beantwortet die zehn häufigsten Fragen – Öffnungszeiten, Preise, Lieferzeit – ohne menschlichen Aufwand. Folge-E-Mail nach drei Tagen: Falls noch keine Rückmeldung des Kunden, geht automatisch ein freundlicher Reminder raus.',
      },
      {
        heading: 'Einrichtung ohne IT-Vorkenntnisse',
        body: 'Northcode richtet die Automatisierungen ein und erklärt, wie Sie sie bei Bedarf selbst anpassen. Kein Vertrag, kein Monatsabo für das System-Setup. Die meisten Setups für Delmenhorster Betriebe sind in einem Halbtag abgeschlossen.',
      },
    ],
    faqs: [
      {
        question: 'Klingt das für Kunden nicht unpersönlich?',
        answer: 'Nicht wenn es richtig gemacht wird. Eine kurze, persönlich formulierte automatische Antwort wirkt professioneller als Stille. Die Kunst liegt in der Formulierung – Northcode hilft dabei.',
      },
      {
        question: 'Was kostet ein Chatbot für einen kleinen Betrieb in Delmenhorst?',
        answer: 'Einfacher FAQ-Chatbot: ab 500 €. Mit GPT-Anbindung für freiere Antworten: ab 1.200 €. Automatische E-Mail-Eingangsbestätigung und Weiterleitung: oft schon ab 300 € als Einzelmaßnahme.',
      },
    ],
    relatedClusters: [
      { title: 'Chatbot lokale Firmen Delmenhorst', href: '/chatbot-lokale-firmen-delmenhorst' },
      { title: 'Terminbuchung Automatisierung Delmenhorst', href: '/terminbuchung-automatisierung-delmenhorst' },
      { title: 'E-Mail Automatisierung Delmenhorst', href: '/email-automatisierung-delmenhorst' },
    ],
  },

];

export const delmenhorstSupportSlugs = delmenhorstSupportClusters.map(p => p.slug);
