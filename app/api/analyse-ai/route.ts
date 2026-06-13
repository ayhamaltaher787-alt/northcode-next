import { NextRequest, NextResponse } from 'next/server';

// ── Label maps for 15 new questions ─────────────────────────────────────────
const BRANCH_MAP: Record<string, string> = {
  handwerk: 'Handwerk & Bau', dienstleistung: 'Dienstleistung & Beratung',
  gesundheit: 'Gesundheit & Pflege', immobilien: 'Immobilien',
  gastronomie: 'Gastronomie & Einzelhandel', produktion: 'Produktion & Industrie', sonstiges: 'Sonstiges',
};
const TEAM_MAP: Record<string, string> = {
  solo: 'Nur ich (1 Person)', klein: '2–5 Personen', mittel: '6–15 Personen', gross: 'Mehr als 15 Personen',
};
const GOAL_MAP: Record<string, string> = {
  'mehr-neukunden': 'Mehr Neukunden gewinnen', 'team-entlasten': 'Mitarbeiter entlasten & Kosten senken',
  'skalieren': 'Umsatz skalieren ohne mehr Personal', 'sichtbarkeit': 'Online-Sichtbarkeit aufbauen',
  'prozesse-digitalisieren': 'Abläufe digitalisieren & modernisieren',
};
const WEBSITE_MAP: Record<string, string> = {
  'modern-aktiv': 'Professionell, aktuell, bringt Anfragen',
  'vorhanden-veraltet': 'Vorhanden, aber veraltet/kaum gepflegt',
  'keine': 'Noch keine professionelle Website',
};
const WEBSITE_PROBS_MAP: Record<string, string> = {
  'zu-wenig-anfragen': 'Kaum Anfragen über Website', 'kein-seo': 'Schlechte Google-Sichtbarkeit',
  'kein-cta': 'Keine klaren Handlungsaufforderungen', 'veraltetes-design': 'Veraltetes Design',
  'nicht-mobil': 'Nicht mobil optimiert', 'langsam': 'Langsame Ladezeit',
};
const GOOGLE_MAP: Record<string, string> = {
  'vollstaendig-bewertet': 'Vollständig ausgefüllt, aktiv & mit Bewertungen',
  'vorhanden-ungepflegt': 'Vorhanden, aber kaum gepflegt',
  'wenig-bewertungen': 'Kaum Bewertungen',
  'kein-profil': 'Kein Google-Profil vorhanden',
};
const INQUIRIES_MAP: Record<string, string> = {
  'unter-5': 'Weniger als 5/Monat', '5-15': '5–15/Monat', '15-30': '15–30/Monat', 'ueber-30': 'Mehr als 30/Monat',
};
const RESPONSE_MAP: Record<string, string> = {
  'unter-1h': 'Innerhalb einer Stunde', 'gleicher-tag': 'Noch am gleichen Tag',
  'naechster-tag': 'Am nächsten Tag oder später', 'unregelmaessig': 'Unregelmäßig – je nach Auslastung',
};
const FOLLOWUP_MAP: Record<string, string> = {
  systematisch: 'Systematisch nachgefasst', manchmal: 'Manchmal nachgefasst',
  kaum: 'Kaum – Kontakt geht meist verloren', 'kein-system': 'Kein System – warten auf Rückmeldung',
};
const TIMEWASTE_MAP: Record<string, string> = {
  angebote: 'Angebote erstellen & nachfassen', termine: 'Terminplanung & Koordination',
  anfragen: 'Kundenanfragen beantworten', rechnungen: 'Rechnungen erstellen & verwalten',
  dateneingabe: 'Dateneingaben & Übertragungen', nachfassen: 'Leads & Kunden nachfassen', reporting: 'Berichte & Auswertungen',
};
const HOURS_MAP: Record<string, string> = {
  'unter-5': 'Unter 5 Std/Woche', '5-10': '5–10 Std/Woche', '10-20': '10–20 Std/Woche', 'ueber-20': 'Über 20 Std/Woche',
};
const BOOKING_MAP: Record<string, string> = {
  'ja-laeuft': 'Ja, funktioniert gut', 'ja-schlecht': 'Ja, aber kaum genutzt',
  'nein-bedarf': 'Nein, aber das wäre hilfreich', 'nein-kein-bedarf': 'Nein, kein Bedarf',
};
const DIGITAL_MAP: Record<string, string> = {
  vollstaendig: 'Vollständig digital', teilweise: 'Teilweise digital',
  kaum: 'Kaum digitalisiert', 'gar-nicht': 'Fast gar nicht digitalisiert',
};
const AI_MAP: Record<string, string> = {
  umfangreich: 'Ja, umfangreich', teilweise: 'Teilweise', kaum: 'Kaum – vereinzelt', 'gar-nicht': 'Gar nicht',
};
const GROWTH_MAP: Record<string, string> = {
  stabilisieren: 'Stabil halten', '10-20': '10–20% Wachstum', '20-50': '20–50% Wachstum', 'ueber-50': 'Über 50% / starke Skalierung',
};
const PRIORITY_MAP: Record<string, string> = {
  'mehr-anfragen': 'Mehr planbare Anfragen bekommen', 'weniger-arbeit': 'Weniger manuelle Arbeit',
  'schneller-reagieren': 'Schneller auf Anfragen reagieren', 'besser-gefunden': 'Online besser gefunden werden',
  'prozesse-verbessern': 'Abläufe effizienter gestalten',
};

function mapVal(v: string, map: Record<string, string>): string {
  return map[v] ?? v ?? 'k. A.';
}
function mapArr(vals: string[], map: Record<string, string>): string {
  return vals.map(v => map[v] ?? v).filter(Boolean).join(', ') || 'k. A.';
}

interface AIRequest {
  name?: string;
  answers: Record<string, string | string[]>;
  scores?: {
    website: number; seo: number; leadgen: number; kommunikation: number;
    prozesse: number; automatisierung: number; digitalisierung: number; gesamt: number;
  };
}

const SYSTEM_PROMPT = `Du bist der interne Analyse-Assistent von Northcode – einem deutschen Digitalagentur-Unternehmen (Inhaber: Esmail Altaher, Ruhrgebiet).

Northcode-Leistungen:
- Webdesign & Landingpages: conversion-optimiert, mobiloptimiert, lokal SEO eingebaut
- Lokales SEO & Google-Sichtbarkeit: Google Maps, lokale Landingpages, Bewertungsmanagement
- Prozessautomatisierung (n8n / Make): Workflows, Datensynchronisierung, Formular-Automatisierung
- KI-Chatbots & Lead-Automation: 24/7-Anfragenbearbeitung, WhatsApp-Integration, automatisches Nachfassen
- Terminbuchung & Kalender-Automation: automatische Buchungen, Erinnerungen, Kalenderintegration
- Angebots- & Rechnungsautomatisierung: automatisierte Dokumentenerstellung nach Auftragsabschluss
- Kombi-Pakete: Website + Automation, SEO + Lead-System, Vollständiges Digital-System

Muster-Erkennung (wichtig für präzise Empfehlungen):
- Handwerker/Bau ohne Website + ohne Google-Profil → lokales SEO-Fundament zuerst
- Solo-Dienstleister mit vielen manuellen Aufgaben → Automatisierung bringt sofort ROI
- Gesundheit/Pflege mit langsamer Reaktionszeit → Chatbot + Terminautomation kritisch
- Immobilien mit wenig Anfragen + kein Nachfassen → CRM + Lead-Nurturing-System
- Gastronomie ohne Google-Präsenz → Google-Profil + Bewertungen = größter Hebel

Schreibstil:
- Direkt, klar, auf den Punkt – wie ein erfahrener Berater, kein Verkäufer
- Keine Floskeln: nicht "revolutionär", "ganzheitlich", "maßgeschneidert", "innovativ"
- Persönlich auf die konkreten Antworten eingehen – keine generischen Texte
- Kurze Sätze auf Deutsch, max. 2 Sätze pro Insight

JSON-Antwortformat (AUSSCHLIESSLICH valid JSON, kein Markdown):
{
  "executiveSummary": "1-2 Sätze prägnante Gesamtbeurteilung der Situation – direkt und ehrlich",
  "insights": ["3-4 präzise, personalisierte Beobachtungen zur konkreten Situation"],
  "quickWins": [
    {"title": "Kurzer Titel", "desc": "Konkreter Nutzen in 1-2 Sätzen – bezogen auf die Antworten", "icon": "monitor|settings|bot|search"}
  ],
  "longterm": [
    {"title": "Titel", "desc": "Langfristige Chance – branchen- und situationsspezifisch"},
    {"title": "Titel", "desc": "Beschreibung"},
    {"title": "Titel", "desc": "Beschreibung"}
  ],
  "recommendedService": "Exakter Name des passendsten Northcode-Services",
  "recommendedServiceIcon": "monitor|settings|bot|search|combo",
  "recommendedServicePrice": "",
  "whyRecommended": "1-2 Sätze warum genau dieser Service – direkt auf seine konkreten Antworten bezogen, kein generischer Text",
  "ctaHeadline": "Konkrete, direkte Handlungsaufforderung ohne Klischees"
}

Icon-Referenz: monitor=Website/Design, settings=Automatisierung/Prozesse, bot=KI/Chatbot/Leads, search=SEO/Sichtbarkeit, combo=Kombination`;

export async function POST(req: NextRequest) {
  try {
    const body: AIRequest = await req.json();
    const { name, answers, scores } = body;

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.warn('[Analyse AI] OPENROUTER_API_KEY not configured');
      return NextResponse.json({ error: 'not-configured' }, { status: 503 });
    }
    const model = process.env.OPENROUTER_MODEL ?? 'anthropic/claude-3.5-haiku';

    const get  = (id: string): string   => (answers[id] as string)   ?? '';
    const getA = (id: string): string[] => (answers[id] as string[]) ?? [];

    const websiteStatus = get('has-website');
    const websiteProbs  = getA('website-problems');

    const userMessage = [
      name ? `Name des Interessenten: ${name}` : '',
      `Branche: ${mapVal(get('branch'), BRANCH_MAP)}`,
      `Unternehmensgröße: ${mapVal(get('team-size'), TEAM_MAP)}`,
      `Wichtigstes Ziel: ${mapVal(get('main-goal'), GOAL_MAP)}`,
      '',
      `Website-Status: ${mapVal(websiteStatus, WEBSITE_MAP)}`,
      websiteStatus === 'vorhanden-veraltet' && websiteProbs.length
        ? `Website-Probleme: ${mapArr(websiteProbs, WEBSITE_PROBS_MAP)}`
        : '',
      `Google-Profil: ${mapVal(get('google-profile'), GOOGLE_MAP)}`,
      '',
      `Monatliche Anfragen: ${mapVal(get('monthly-inquiries'), INQUIRIES_MAP)}`,
      `Reaktionszeit auf Anfragen: ${mapVal(get('response-time'), RESPONSE_MAP)}`,
      `Lead-Nachverfolgung: ${mapVal(get('lead-followup'), FOLLOWUP_MAP)}`,
      '',
      `Größte Zeitfresser: ${mapArr(getA('time-wasters'), TIMEWASTE_MAP)}`,
      `Wochenstunden für manuelle Aufgaben: ${mapVal(get('weekly-hours'), HOURS_MAP)}`,
      `Online-Terminbuchung: ${mapVal(get('online-booking'), BOOKING_MAP)}`,
      '',
      `Digitalisierungsstand: ${mapVal(get('digitalization'), DIGITAL_MAP)}`,
      `KI/Automatisierung im Einsatz: ${mapVal(get('ai-current'), AI_MAP)}`,
      '',
      `Wachstumsziel: ${mapVal(get('growth-target'), GROWTH_MAP)}`,
      `Top-Priorität: ${mapVal(get('top-priority'), PRIORITY_MAP)}`,
      scores
        ? [
            '',
            'Berechnete Potenzial-Scores (branchengewichtet):',
            `Website: ${scores.website}/100 | SEO: ${scores.seo}/100 | Leadgen: ${scores.leadgen}/100`,
            `Kommunikation: ${scores.kommunikation}/100 | Prozesse: ${scores.prozesse}/100`,
            `Automatisierung: ${scores.automatisierung}/100 | Digitalisierung: ${scores.digitalisierung}/100`,
            `Gesamtpotenzial: ${scores.gesamt}/100`,
          ].join('\n')
        : '',
      '',
      'Erstelle jetzt die vollständig personalisierte JSON-Analyse.',
    ].filter(Boolean).join('\n');

    const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type':  'application/json',
        'HTTP-Referer':  'https://northcode-esmail.de',
        'X-Title':       'Northcode Potenzialanalyse',
      },
      body: JSON.stringify({
        model,
        max_tokens: 1600,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user',   content: userMessage   },
        ],
      }),
    });

    if (!orRes.ok) {
      const err = await orRes.text();
      console.error('[Analyse AI] OpenRouter Fehler:', err);
      throw new Error(`OpenRouter ${orRes.status}`);
    }

    const orData = await orRes.json();
    const text: string = orData.choices?.[0]?.message?.content ?? '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('no JSON found in response');

    const result = JSON.parse(jsonMatch[0]);
    console.log('[Analyse AI] Personalisierung erfolgreich für:', name || 'anonym', '| Branche:', get('branch'));
    return NextResponse.json(result);

  } catch (e) {
    console.error('[Analyse AI] Fehler:', e);
    return NextResponse.json({ error: 'ai-error' }, { status: 500 });
  }
}
