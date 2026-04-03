import { ArrowRight, AlertTriangle, TrendingUp, Radio, MessageSquare } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";
const SERIF = "'Playfair Display', Georgia, serif";

// ─── Mockup 1: Crisis alert ──────────────────────────────────────────────────
function AlertMockup() {
  const bars = [14, 18, 12, 20, 16, 22, 18, 58, 80, 88, 84, 92];
  const alerts = [
    { text: 'Negative spike detected', src: 'Twitter / X', sev: 'high', ago: '2m ago' },
    { text: 'Unusual mention volume', src: 'Reddit', sev: 'mid', ago: '14m ago' },
    { text: 'Competitor surge', src: 'News', sev: 'low', ago: '31m ago' },
  ];
  const sevColor: Record<string, string> = { high: '#ef4444', mid: '#fde047', low: '#6dbf8c' };
  const sevBg: Record<string, string> = { high: '#2a0a0a', mid: '#282208', low: '#0f2318' };

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={{ background: '#0c1f15', border: '1px solid rgba(255,255,255,0.09)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#fde047' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#6dbf8c' }} />
        <span className="ml-3" style={{ fontSize: '0.68rem', color: '#3d6b52', fontFamily: IBM }}>Crisis Monitor</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ef4444', animation: 'pulse 1.5s infinite' }} />
          <span style={{ fontSize: '0.6rem', color: '#ef4444', fontFamily: IBM }}>LIVE</span>
        </span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span style={{ fontSize: '0.62rem', color: '#3d6b52', fontFamily: IBM, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mention volume · 12h</span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: '#2a0a0a', fontSize: '0.6rem', color: '#ef4444', fontFamily: IBM }}>
              <TrendingUp className="w-2.5 h-2.5" /> +240% spike
            </span>
          </div>
          <div className="flex items-end gap-1" style={{ height: '52px' }}>
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i >= 7 ? 'rgba(239,68,68,0.65)' : 'rgba(109,191,140,0.18)' }} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {alerts.map(({ text, src, sev, ago }) => (
            <div key={text} className="flex items-center gap-3 rounded-lg px-3 py-2.5" style={{ background: sevBg[sev], border: `1px solid ${sevColor[sev]}22` }}>
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: sevColor[sev] }} />
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: '0.73rem', color: '#e8f4ed', fontFamily: IBM }}>{text}</p>
                <p style={{ fontSize: '0.6rem', color: '#3d6b52', fontFamily: IBM }}>{src} · {ago}</p>
              </div>
              <span className="px-1.5 py-0.5 rounded" style={{ fontSize: '0.55rem', fontFamily: IBM, color: sevColor[sev], background: `${sevColor[sev]}18` }}>{sev.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg px-3 py-2.5 flex items-center justify-between" style={{ background: '#0f2318', border: '1px solid rgba(109,191,140,0.12)' }}>
          <span style={{ fontSize: '0.7rem', color: '#5c8a72', fontFamily: IBM }}>Average alert response time</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#6dbf8c', fontFamily: IBM }}>4.2 min</span>
        </div>
      </div>
    </div>
  );
}

// ─── Mockup 2: Analytics / sentiment ────────────────────────────────────────
function AnalyticsMockup() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const pos =    [58,    61,    54,    67,    63,    71];
  const neg =    [18,    15,    22,    12,    14,    10];
  const topics = [
    { label: 'Customer Support', pct: 68, color: '#6dbf8c' },
    { label: 'Pricing Concerns', pct: 42, color: '#fde047' },
    { label: 'Feature Requests', pct: 55, color: '#6dbf8c' },
    { label: 'Competitor Mentions', pct: 29, color: '#ef4444' },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={{ background: '#0c1f15', border: '1px solid rgba(255,255,255,0.09)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#fde047' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#6dbf8c' }} />
        <span className="ml-3" style={{ fontSize: '0.68rem', color: '#3d6b52', fontFamily: IBM }}>Analytics Overview</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-3">
          {[['Total Mentions', '50,330', '+18%', true], ['Positive Rate', '71%', '+9pts', true], ['Avg Response', '4.2 min', '-1.1m', true], ['Reach', '2.4M', '+31%', true]].map(([label, val, delta, up]) => (
            <div key={label as string} className="rounded-xl p-3" style={{ background: '#0f2318', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '0.6rem', color: '#3d6b52', fontFamily: IBM, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{label}</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e8f4ed', fontFamily: IBM, lineHeight: 1.2 }}>{val}</p>
              <p style={{ fontSize: '0.6rem', color: up ? '#6dbf8c' : '#ef4444', fontFamily: IBM }}>{delta}</p>
            </div>
          ))}
        </div>
        <div>
          <span style={{ fontSize: '0.62rem', color: '#3d6b52', fontFamily: IBM, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Sentiment trend — 6 months</span>
          <div className="flex items-end gap-2 mt-3" style={{ height: '60px' }}>
            {months.map((m, i) => (
              <div key={m} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col gap-px justify-end" style={{ height: '48px' }}>
                  <div style={{ height: `${pos[i] * 0.48}%`, background: 'rgba(109,191,140,0.5)', borderRadius: '2px 2px 0 0' }} />
                  <div style={{ height: `${neg[i] * 0.48}%`, background: 'rgba(239,68,68,0.4)', borderRadius: '0 0 2px 2px' }} />
                </div>
                <span style={{ fontSize: '0.52rem', color: '#3d6b52', fontFamily: IBM, marginTop: '3px' }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {topics.map(({ label, pct, color }) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span style={{ fontSize: '0.68rem', color: '#7aaa90', fontFamily: IBM }}>{label}</span>
                <span style={{ fontSize: '0.68rem', color, fontFamily: IBM, fontWeight: 600 }}>{pct}%</span>
              </div>
              <div className="w-full rounded-full" style={{ height: '3px', background: 'rgba(255,255,255,0.06)' }}>
                <div className="rounded-full" style={{ width: `${pct}%`, height: '3px', background: color, opacity: 0.65 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mockup 3: Unified feed ──────────────────────────────────────────────────
function UnifiedMockup() {
  const feeds = [
    { src: 'Twitter / X', user: '@techreviewer_io', text: 'Switched to @socialrumr last month — the alert speed alone is worth it.', snt: 'pos', t: '3m' },
    { src: 'Reddit', user: 'u/brandwatcher', text: 'socialrumr picks up niche forum threads that every other tool completely misses.', snt: 'pos', t: '11m' },
    { src: 'TechCrunch', user: 'TechCrunch', text: 'Real-time AI detection is becoming table stakes for brand listening in 2025.', snt: 'neu', t: '28m' },
    { src: 'Instagram', user: '@marketingnerds', text: 'Our social team was drowning in tabs. One unified dashboard changed everything.', snt: 'pos', t: '45m' },
  ];
  const srcColor: Record<string, string> = { 'Twitter / X': '#1d9bf0', Reddit: '#ff5700', TechCrunch: '#fde047', Instagram: '#e1306c' };
  const sntColor: Record<string, string> = { pos: '#6dbf8c', neu: '#fde047', neg: '#ef4444' };

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl" style={{ background: '#0c1f15', border: '1px solid rgba(255,255,255,0.09)' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="w-2 h-2 rounded-full" style={{ background: '#ef4444' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#fde047' }} />
        <span className="w-2 h-2 rounded-full" style={{ background: '#6dbf8c' }} />
        <span className="ml-3" style={{ fontSize: '0.68rem', color: '#3d6b52', fontFamily: IBM }}>Unified Feed</span>
        <span className="ml-auto flex items-center gap-1.5">
          <Radio className="w-3 h-3" style={{ color: '#6dbf8c' }} />
          <span style={{ fontSize: '0.6rem', color: '#6dbf8c', fontFamily: IBM }}>LIVE</span>
        </span>
      </div>
      <div className="flex gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        {['All', 'Twitter', 'Reddit', 'News', 'Instagram'].map((f, i) => (
          <span key={f} className="px-2.5 py-1 rounded-full" style={{
            fontSize: '0.6rem', fontFamily: IBM, cursor: 'pointer',
            background: i === 0 ? '#1a3d28' : 'transparent',
            color: i === 0 ? '#6dbf8c' : '#3d6b52',
            border: `1px solid ${i === 0 ? '#2a6b48' : 'rgba(255,255,255,0.06)'}`,
          }}>{f}</span>
        ))}
      </div>
      <div className="flex flex-col gap-2 p-4">
        {feeds.map(({ src, user, text, snt, t }) => (
          <div key={user} className="flex gap-3 rounded-xl px-3 py-2.5" style={{ background: '#0f2318', border: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${srcColor[src]}18` }}>
              <MessageSquare className="w-3 h-3" style={{ color: srcColor[src] }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span style={{ fontSize: '0.65rem', color: srcColor[src], fontFamily: IBM, fontWeight: 600 }}>{user}</span>
                <span style={{ fontSize: '0.55rem', color: '#3d6b52', fontFamily: IBM }}>{t}</span>
              </div>
              <p style={{ fontSize: '0.68rem', color: '#7aaa90', fontFamily: IBM, lineHeight: 1.5 }}>{text}</p>
            </div>
            <div className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: sntColor[snt] }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Use case data ───────────────────────────────────────────────────────────
const cases = [
  {
    label: 'Crisis Detection',
    heading: "Spot problems early,\nnot when it's too late",
    body: "By the time a PR crisis shows up in your email, it's already trending. socialrumr watches every channel in real time and fires an alert the moment something looks wrong — so you respond in minutes, not days.",
    bullets: ['Spike detection across Twitter, Reddit, forums & news', 'Configurable severity thresholds per brand keyword', 'Instant Slack, email & webhook notifications'],
    Mockup: AlertMockup,
    imageLeft: true,
    bg: '#ffffff',
    labelColor: '#0f3324',
    headingColor: '#0a1c12',
    bodyColor: '#4a6b5a',
    bulletColor: '#2a5040',
    pillBg: '#e8f5ee',
    pillText: '#0f3324',
    btnBg: '#0f3324',
    btnText: '#ffffff',
  },
  {
    label: 'Brand Intelligence',
    heading: 'See the story\nbehind the data',
    body: "Numbers without context are just noise. socialrumr layers in sentiment trends, topic clusters, and competitive benchmarks so you understand not just what people are saying — but why, and what to do about it.",
    bullets: ['6-month sentiment trend lines per channel', 'AI topic clustering with theme summaries', 'Competitor share-of-voice benchmarking'],
    Mockup: AnalyticsMockup,
    imageLeft: false,
    bg: '#0a1c12',
    labelColor: '#6dbf8c',
    headingColor: '#ffffff',
    bodyColor: '#6b9080',
    bulletColor: '#4d7a62',
    pillBg: '#1a3d28',
    pillText: '#6dbf8c',
    btnBg: '#6dbf8c',
    btnText: '#0a1c12',
  },
  {
    label: 'Unified Listening',
    heading: 'Stop checking everywhere.\nSee everything in one place',
    body: "Twitter, Reddit, TikTok, Instagram, news sites, niche forums — all streaming into a single, searchable feed. Filter by platform, sentiment, or keyword. Share mentions with your team without forwarding yet another screenshot.",
    bullets: ['One feed for every platform, updated in real time', 'Filter by platform, sentiment, keyword, or author', 'Team workspace with annotations & assignments'],
    Mockup: UnifiedMockup,
    imageLeft: true,
    bg: '#ffffff',
    labelColor: '#0f3324',
    headingColor: '#0a1c12',
    bodyColor: '#4a6b5a',
    bulletColor: '#2a5040',
    pillBg: '#e8f5ee',
    pillText: '#0f3324',
    btnBg: '#0f3324',
    btnText: '#ffffff',
  },
];

// ─── Main component ──────────────────────────────────────────────────────────
export default function SolutionSection() {
  return (
    <div id="solutions">
      {cases.map(({ label, heading, body, bullets, Mockup, imageLeft, bg, labelColor, headingColor, bodyColor, bulletColor, pillBg, pillText, btnBg, btnText }, idx) => (
        <section key={label} className="w-full py-24 px-8" style={{ background: bg }}>
          <div className="max-w-5xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!imageLeft ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>

              {/* Mockup side */}
              <AnimateOnScroll direction={imageLeft ? 'left' : 'right'} delay={100}>
                <div className="w-full">
                  <div className="rounded-3xl p-4" style={{
                    background: bg === '#ffffff'
                      ? 'linear-gradient(135deg, #e8f5ee 0%, #c6e8d5 50%, #d4edd9 100%)'
                      : 'linear-gradient(135deg, #1a3d28 0%, #0f2318 60%, #163320 100%)',
                  }}>
                    <Mockup />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Text side */}
              <AnimateOnScroll direction={imageLeft ? 'right' : 'left'} delay={200}>
                <div className="flex flex-col gap-6">
                  <span className="inline-flex w-fit px-3 py-1 rounded-full" style={{ background: pillBg, fontSize: '0.65rem', fontFamily: IBM, color: pillText, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {label}
                  </span>

                  <h2 style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: headingColor,
                    fontFamily: IBM,
                    lineHeight: 1.2,
                    whiteSpace: 'pre-line',
                  }}>
                    {heading}
                  </h2>

                  <p style={{ fontSize: '0.9rem', color: bodyColor, fontFamily: IBM, lineHeight: 1.85 }}>
                    {body}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: bulletColor }} />
                        <span style={{ fontSize: '0.82rem', color: bodyColor, fontFamily: IBM, lineHeight: 1.65 }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button
                      className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 transition-opacity"
                      style={{ background: btnBg, color: btnText, fontFamily: IBM, fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      Explore Product
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}