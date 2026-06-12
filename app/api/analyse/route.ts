import { NextRequest, NextResponse } from 'next/server';

/* ══════════════════════════════════════════════════════════════════
   Northcode – Potenzialanalyse v2 → Airtable
   Env vars (in .env.local):
     AIRTABLE_API_KEY   = pat...
     AIRTABLE_BASE_ID   = app...
     AIRTABLE_TABLE     = Potenzialanalyse   (optional, default below)
   ══════════════════════════════════════════════════════════════════ */

const API_KEY = process.env.AIRTABLE_API_KEY  ?? '';
const BASE_ID = process.env.AIRTABLE_BASE_ID  ?? '';
const TABLE   = process.env.AIRTABLE_TABLE    ?? 'Potenzialanalyse';

interface AnalysePayload {
  name:               string;
  phone:              string;
  email?:             string;
  // 15 new questions
  branch?:            string;
  teamSize?:          string;
  mainGoal?:          string;
  hasWebsite?:        string;
  websiteProblems?:   string[];
  googleProfile?:     string;
  monthlyInquiries?:  string;
  responseTime?:      string;
  leadFollowup?:      string;
  timeWasters?:       string[];
  weeklyHours?:       string;
  onlineBooking?:     string;
  digitalization?:    string;
  aiCurrent?:         string;
  growthTarget?:      string;
  topPriority?:       string;
  // computed
  scores?: {
    website: number; seo: number; leadgen: number; kommunikation: number;
    prozesse: number; automatisierung: number; digitalisierung: number; gesamt: number;
  };
  revenueImpact?: { totalMonthlyLoss: number; timeWasteCost: number; leadLossCost: number; };
  recommendedService?: string;
  systemStack?:        string;
}

export async function POST(req: NextRequest) {
  try {
    const body: AnalysePayload = await req.json();

    console.log('[Analyse] Neue Einsendung:', {
      name:    body.name,
      phone:   body.phone,
      email:   body.email,
      branch:  body.branch,
      gesamt:  body.scores?.gesamt,
      service: body.recommendedService,
      revLoss: body.revenueImpact?.totalMonthlyLoss,
    });

    if (!API_KEY || !BASE_ID) {
      console.warn('[Analyse] Airtable noch nicht konfiguriert.');
      return NextResponse.json({ ok: true, note: 'airtable-not-configured' });
    }

    const fields: Record<string, string | number> = {
      // Contact
      'Name':    body.name    ?? '',
      'Telefon': body.phone   ?? '',
      'E-Mail':  body.email   ?? '',
      // Company
      'Branche':              body.branch           ?? '',
      'Teamgröße':            body.teamSize         ?? '',
      'Hauptziel':            body.mainGoal         ?? '',
      // Online
      'Website-Status':       body.hasWebsite        ?? '',
      'Website-Probleme':     (body.websiteProblems  ?? []).join(', '),
      'Google-Profil':        body.googleProfile     ?? '',
      // Leads
      'Anfragen pro Monat':   body.monthlyInquiries  ?? '',
      'Reaktionszeit':        body.responseTime      ?? '',
      'Lead-Nachverfolgung':  body.leadFollowup      ?? '',
      // Prozesse
      'Zeitfresser':          (body.timeWasters      ?? []).join(', '),
      'Wochenstunden manuell':body.weeklyHours       ?? '',
      'Online-Buchung':       body.onlineBooking     ?? '',
      // KI
      'Digitalisierungsstand':body.digitalization    ?? '',
      'KI-Nutzung':           body.aiCurrent         ?? '',
      // Ziele
      'Wachstumsziel':        body.growthTarget      ?? '',
      'Top-Priorität':        body.topPriority       ?? '',
      // Scores
      'Score: Website':         body.scores?.website         ?? 0,
      'Score: SEO':             body.scores?.seo             ?? 0,
      'Score: Leadgen':         body.scores?.leadgen         ?? 0,
      'Score: Kommunikation':   body.scores?.kommunikation   ?? 0,
      'Score: Prozesse':        body.scores?.prozesse        ?? 0,
      'Score: Automatisierung': body.scores?.automatisierung ?? 0,
      'Score: Digitalisierung': body.scores?.digitalisierung ?? 0,
      'Score: Gesamt':          body.scores?.gesamt          ?? 0,
      // Revenue Impact
      'Gesamtverlust/Monat':      body.revenueImpact?.totalMonthlyLoss ?? 0,
      'davon Zeitverlust':        body.revenueImpact?.timeWasteCost    ?? 0,
      'davon Lead-Verlust':       body.revenueImpact?.leadLossCost     ?? 0,
      // Recommendation
      'Empfohlener Service': body.recommendedService ?? '',
      'System-Stack':        body.systemStack        ?? '',
      'Zeitstempel':         new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' }),
    };

    const res = await fetch(
      `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('[Analyse] Airtable Fehler:', err);
      return NextResponse.json({ ok: false, note: 'airtable-error' }, { status: 200 });
    }

    const data = await res.json();
    console.log('[Analyse] Airtable gespeichert, Record-ID:', data.id);
    return NextResponse.json({ ok: true, id: data.id });

  } catch (e) {
    console.error('[Analyse] API Fehler:', e);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
