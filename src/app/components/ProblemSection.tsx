import { EyeOff, Database, Zap } from 'lucide-react';

const problems = [
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
];

export default function ProblemSection() {
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
            Your brand isn't the problem
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
            your blind spots are
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