import { EyeOff, Database, Zap, DollarSign, Clock, TrendingDown } from 'lucide-react';

// ============================================
// PROBLEM SECTION VARIANT SELECTOR
// Change this value to switch between content variants:
// "blindspots" - Focus on missing conversations (general)
// "startup"    - Focus on startup-specific pain points
// "tools"      - Focus on existing tool failures
// ============================================
const PROBLEM_VARIANT: "blindspots" | "startup" | "tools" = "startup";

const problemContent = {
  blindspots: {
    headline: "Your brand isn't the problem",
    subheadline: "your blind spots are",
    problems: [
      {
        icon: EyeOff,
        title: 'Missed Conversations',
        description:
          'Blind spots in niche forums and dark social mean you only see a fraction of the true brand conversation happening right now.',
      },
      {
        icon: Database,
        title: 'Overwhelming Volume',
        description:
          'Raw data without context is noise. Teams burn hours sorting mentions manually instead of acting on what actually matters.',
      },
      {
        icon: Zap,
        title: 'Delayed Reactions',
        description:
          'By the time a crisis surfaces in your inbox, it\'s already viral. Traditional tools move too slow for the speed of social.',
      },
    ],
  },
  startup: {
    headline: "Startups deserve better",
    subheadline: "than spreadsheets and Google Alerts",
    problems: [
      {
        icon: DollarSign,
        title: 'Enterprise Pricing',
        description:
          'Social listening tools want $500-2000/mo. That\'s your entire marketing budget. You deserve enterprise features without the enterprise price tag.',
      },
      {
        icon: Clock,
        title: 'Manual Monitoring',
        description:
          'You\'re checking Twitter, Reddit, and HN manually. By the time you find a mention, it\'s hours old. That\'s time you don\'t have.',
      },
      {
        icon: TrendingDown,
        title: 'No Actionable Insights',
        description:
          'Data dumps don\'t help. You need to know what people think and why — not just that someone mentioned you somewhere.',
      },
    ],
  },
  tools: {
    headline: "Your tools are failing you",
    subheadline: "here's why",
    problems: [
      {
        icon: Database,
        title: 'Data Without Context',
        description:
          'Most tools give you raw mentions. What you need is synthesized intelligence — the "so what?" behind the data.',
      },
      {
        icon: EyeOff,
        title: 'Platform Blind Spots',
        description:
          'Twitter-only isn\'t enough. Reddit, LinkedIn, and niche communities are where real conversations happen. You\'re missing them.',
      },
      {
        icon: Zap,
        title: 'Reactive, Not Proactive',
        description:
          'You find out about problems when customers complain. Real monitoring means catching issues before they escalate.',
      },
    ],
  },
};

export default function ProblemSection() {
  const { headline, subheadline, problems } = problemContent[PROBLEM_VARIANT];

  return (
    <section className="w-full px-8 py-24" style={{ background: '#0a1c12' }}>
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p
          className="text-center mb-5 tracking-widest uppercase"
          style={{ fontSize: '0.7rem', color: '#fde047', fontFamily: "'IBM Plex Sans', sans-serif", letterSpacing: '0.18em' }}
        >
          Problem
        </p>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: "'IBM Plex Sans', sans-serif",
              lineHeight: 1.15,
              marginBottom: '0.25rem',
            }}
          >
            {headline}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#a3c9b4',
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: 1.2,
            }}
          >
            {subheadline}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl p-6 flex flex-col gap-8"
              style={{
                background: '#0f2318',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Icon */}
              <div>
                <Icon className="w-5 h-5" style={{ color: '#6dbf8c' }} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#e8f4ed',
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#6b9080',
                    lineHeight: 1.7,
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}