import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  to: string;
  name: string;
  scores: {
    website: number; seo: number; leadgen: number; kommunikation: number;
    prozesse: number; automatisierung: number; digitalisierung: number; gesamt: number;
  };
  revenueImpact: {
    totalMonthlyLoss: number;
    timeWasteCost: number;
    leadLossCost: number;
    weeklyHoursSaved: number;
  };
  recommendedService: string;
  whyRecommended: string;
  ctaHeadline: string;
  systemStack?: { kern: string; erweiterungen: string[]; systemName: string };
  executiveSummary?: string;
}


function buildHtml(p: EmailPayload): string {
  const stackExtensions = p.systemStack?.erweiterungen
    .map(e => `<span style="display:inline-block;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.55);font-size:11px;padding:3px 10px;border-radius:16px;margin:3px 3px 0 0;">+ ${e}</span>`)
    .join('') ?? '';

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Ihre Northcode Potenzialanalyse</title>
</head>
<body style="margin:0;padding:0;background:#0a0f0d;font-family:'Helvetica Neue',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f0d;">
<tr><td align="center" style="padding:32px 16px 0;">

  <!-- Card -->
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f1a16;border-radius:20px;border:1px solid rgba(61,139,120,0.18);overflow:hidden;">

    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#0f2a22 0%,#0a1a14 100%);padding:32px 36px 28px;border-bottom:1px solid rgba(61,139,120,0.15);">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:8px;">
                    <img src="cid:nc-logo" height="32" style="display:block;height:32px;width:auto;" alt="Northcode Logo"/>
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.02em;">North<span style="color:#3D8B78;">code</span></span>
                  </td>
                  <td style="vertical-align:middle;padding:0 10px;">
                    <span style="font-size:14px;color:rgba(255,255,255,0.2);">–</span>
                  </td>
                  <td style="vertical-align:middle;padding-right:8px;">
                    <span style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.65);">Esmail</span>
                  </td>
                  <td style="vertical-align:middle;">
                    <img src="cid:nc-portrait" width="32" height="32" style="display:block;width:32px;height:32px;border-radius:50%;object-fit:cover;border:1.5px solid rgba(61,139,120,0.4);" alt="Esmail"/>
                  </td>
                </tr>
              </table>
              <div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:4px;letter-spacing:0.06em;text-transform:uppercase;">Digitalisierung · Automatisierung · Wachstum</div>
            </td>
            <td align="right">
              <div style="display:inline-block;background:rgba(61,139,120,0.15);border:1px solid rgba(61,139,120,0.35);border-radius:20px;padding:5px 14px;font-size:11px;font-weight:700;color:#8EC5B5;letter-spacing:0.04em;">
                ✓ Analyse abgeschlossen
              </div>
            </td>
          </tr>
        </table>

        <div style="margin-top:24px;">
          <p style="margin:0 0 6px;font-size:13px;color:rgba(255,255,255,0.45);">Hallo ${p.name ? p.name.split(' ')[0] : 'und herzlich willkommen'},</p>
          <h1 style="margin:0;font-size:24px;font-weight:800;color:#fff;line-height:1.2;letter-spacing:-0.02em;">
            Ihr persönlicher<br/><span style="color:#3D8B78;">Potenzialbericht</span> ist fertig.
          </h1>
          ${p.executiveSummary ? `<p style="margin:12px 0 0;font-size:13px;color:rgba(255,255,255,0.55);line-height:1.65;font-style:italic;">${p.executiveSummary}</p>` : ''}
        </div>
      </td>
    </tr>

    <!-- Revenue Impact -->
    <tr>
      <td style="padding:28px 36px 0;">
        <div style="background:rgba(229,80,80,0.08);border:1.5px solid rgba(229,80,80,0.3);border-radius:14px;padding:20px 22px;">
          <div style="font-size:10px;font-weight:700;color:rgba(248,113,113,0.75);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;">
            Was das Ihr Unternehmen kostet – jeden Monat
          </div>
          <div style="font-size:38px;font-weight:900;color:#f87171;letter-spacing:-0.03em;line-height:1;">
            ${p.revenueImpact.totalMonthlyLoss.toLocaleString('de-DE')} €
            <span style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.3);letter-spacing:0;">&nbsp;/ Monat</span>
          </div>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
            <tr>
              <td width="48%" style="background:rgba(0,0,0,0.2);border-radius:10px;padding:10px 14px;">
                <div style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Zeitverlust-Kosten</div>
                <div style="font-size:18px;font-weight:800;color:#fca5a5;">${p.revenueImpact.timeWasteCost.toLocaleString('de-DE')} €</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.28);margin-top:2px;">manuelle Aufgaben × Stundensatz</div>
              </td>
              <td width="4%"></td>
              <td width="48%" style="background:rgba(0,0,0,0.2);border-radius:10px;padding:10px 14px;">
                <div style="font-size:10px;color:rgba(255,255,255,0.35);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Entgangene Aufträge</div>
                <div style="font-size:18px;font-weight:800;color:#fca5a5;">${p.revenueImpact.leadLossCost.toLocaleString('de-DE')} €</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.28);margin-top:2px;">Anfragen die verloren gehen</div>
              </td>
            </tr>
          </table>

          ${p.revenueImpact.weeklyHoursSaved > 0 ? `
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.07);font-size:12px;color:rgba(255,255,255,0.45);">
            Mit Automatisierung: <strong style="color:#5BE5B5;">${p.revenueImpact.weeklyHoursSaved} Stunden/Woche</strong> zurückgewinnen
          </div>` : ''}
        </div>
      </td>
    </tr>

    <!-- Potenzial Score -->
    <tr>
      <td style="padding:24px 36px 0;">
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td width="64" height="64" style="width:64px;height:64px;min-width:64px;border-radius:50%;border:3px solid #3D8B78;background:rgba(61,139,120,0.12);text-align:center;vertical-align:middle;">
              <span style="font-size:20px;font-weight:900;color:#fff;line-height:64px;">${p.scores.gesamt}</span>
            </td>
            <td style="padding-left:16px;vertical-align:middle;">
              <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px;">Ihr Gesamtpotenzial</div>
              <div style="font-size:14px;font-weight:600;color:rgba(255,255,255,0.35);margin-bottom:3px;">von 100 Punkten</div>
              <div style="font-size:11px;color:rgba(255,255,255,0.3);">branchengewichtet berechnet</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Recommended Service -->
    <tr>
      <td style="padding:24px 36px 0;">
        <div style="background:rgba(61,139,120,0.08);border:1.5px solid rgba(61,139,120,0.25);border-radius:14px;padding:20px 22px;">
          <div style="font-size:10px;font-weight:700;color:rgba(142,197,181,0.8);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;">
            ✦ Empfohlene Lösung für Sie
          </div>
          <div style="font-size:17px;font-weight:800;color:#fff;margin-bottom:8px;line-height:1.3;">${p.recommendedService}</div>
          <p style="margin:0 0 14px;font-size:13px;color:rgba(255,255,255,0.6);line-height:1.65;">${p.whyRecommended}</p>

          ${p.systemStack ? `
          <div style="border-top:1px solid rgba(61,139,120,0.2);padding-top:14px;margin-top:2px;">
            <div style="font-size:10px;color:rgba(138,123,232,0.8);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px;">${p.systemStack.systemName}</div>
            <span style="display:inline-block;background:rgba(138,123,232,0.18);border:1px solid rgba(138,123,232,0.4);color:#b8aef5;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;margin-bottom:6px;">● ${p.systemStack.kern}</span><br/>
            ${stackExtensions}
          </div>` : ''}
        </div>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td style="padding:28px 36px;">
        <p style="margin:0 0 18px;font-size:14px;font-weight:600;color:#fff;line-height:1.5;">${p.ctaHeadline}</p>

        <!-- Primary CTA -->
        <table cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
          <tr>
            <td style="background:linear-gradient(135deg,#3D8B78,#2d7a68);border-radius:12px;padding:18px 28px;">
              <a href="https://calendly.com/maxsel-100/30min" style="color:#fff;font-size:14px;font-weight:700;text-decoration:none;letter-spacing:0.01em;">
                📅 &nbsp;Kostenloses Gespräch buchen (30 Min.)
              </a>
            </td>
          </tr>
        </table>

        <!-- Secondary CTA -->
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="background:rgba(37,211,102,0.12);border:1.5px solid rgba(37,211,102,0.3);border-radius:12px;padding:15px 24px;">
              <a href="https://wa.me/491786270048" style="color:#25D366;font-size:13px;font-weight:700;text-decoration:none;">
                💬 &nbsp;Per WhatsApp schreiben
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#080f0c;border-top:1px solid rgba(255,255,255,0.06);padding:20px 36px;border-radius:0 0 20px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:12px;color:rgba(255,255,255,0.25);line-height:1.6;">
              <strong style="color:rgba(255,255,255,0.4);">Northcode</strong> · Esmail Altaher · northcodeesmail@gmail.com<br/>
              Diese Analyse wurde automatisch auf Basis Ihrer Angaben erstellt.<br/>
              <span style="font-size:11px;">Sie erhalten diese E-Mail, weil Sie die Potenzialanalyse auf northcode.de ausgefüllt haben.</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

  </table>
</td></tr>
<tr><td style="padding:24px;text-align:center;font-size:11px;color:rgba(255,255,255,0.15);">
  © 2025 Northcode · <a href="https://northcode.de" style="color:rgba(61,139,120,0.5);text-decoration:none;">northcode.de</a>
</td></tr>
</table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('[Email] RESEND_API_KEY nicht konfiguriert');
      return NextResponse.json({ ok: false, note: 'not-configured' });
    }

    const body: EmailPayload = await req.json();

    if (!body.to || !body.to.includes('@')) {
      return NextResponse.json({ ok: false, note: 'invalid-email' });
    }

    const firstName = body.name ? body.name.split(' ')[0] : '';
    const subject = firstName
      ? `${firstName}, hier ist Ihr Northcode Potenzialbericht`
      : 'Ihr persönlicher Northcode Potenzialbericht';

    const fromAddress = process.env.RESEND_FROM ?? 'Northcode <onboarding@resend.dev>';

    const publicDir = path.join(process.cwd(), 'public');
    const logoContent = fs.readFileSync(path.join(publicDir, 'logo-email.png'));
    const portraitContent = fs.readFileSync(path.join(publicDir, 'portrait-email.png'));

    const { data, error } = await resend.emails.send({
      from:     fromAddress,
      to:       [body.to],
      replyTo: process.env.RESEND_REPLY_TO ?? 'northcodeesmail@gmail.com',
      subject,
      html:     buildHtml(body),
      attachments: [
        { filename: 'logo-email.png', content: logoContent, contentId: 'nc-logo' },
        { filename: 'portrait-email.png', content: portraitContent, contentId: 'nc-portrait' },
      ],
    });

    if (error) {
      console.error('[Email] Resend Fehler:', error);
      return NextResponse.json({ ok: false, error }, { status: 200 });
    }

    console.log('[Email] Versendet an:', body.to, '| ID:', data?.id);
    return NextResponse.json({ ok: true, id: data?.id });

  } catch (e) {
    console.error('[Email] Unerwarteter Fehler:', e);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
