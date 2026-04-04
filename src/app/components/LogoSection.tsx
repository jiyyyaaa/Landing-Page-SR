import { useEffect, useState } from "react";

// ============================================
// STATS SECTION VARIANT SELECTOR
// Change this value to switch between stats display variants:
// "platform"    - Platform & Feature focused (honest)
// "capability"  - Capability focused (believable)
// "hidden"      - Hide stats section entirely
// ============================================
const STATS_VARIANT: "platform" | "capability" | "hidden" = "platform";

const statsContent = {
  platform: [
    { value: '5', label: 'Platforms Monitored', subtext: 'Twitter, Reddit, LinkedIn, Facebook, Web' },
    { value: '24/7', label: 'Real-time Monitoring', subtext: 'Never miss a conversation' },
    { value: '$9', label: 'Starting Price', subtext: 'per month' },
  ],
  capability: [
    { value: '5+', label: 'Platforms', subtext: 'Multi-channel monitoring' },
    { value: '24hr', label: 'AI Digest', subtext: 'Daily narrative synthesis' },
    { value: '0-100', label: 'Brand Scoring', subtext: 'Health & risk metrics' },
  ],
  hidden: [],
};

export default function LogoSection() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Hide section entirely if variant is "hidden"
  if (STATS_VARIANT === "hidden") {
    return null;
  }

  const stats = statsContent[STATS_VARIANT];

  return (
    <section className="w-full px-8 py-5 mt-[-10px] border-t border-gray-100 bg-white/70">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex-1 flex flex-col items-center justify-center py-3 sm:py-2 px-8 text-center transition-all duration-700 ${
                showStats
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#0f3324',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </span>

              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#6b7280',
                  marginTop: '4px',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  letterSpacing: '0.01em',
                }}
              >
                {stat.label}
              </span>
              
              {'subtext' in stat && (
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: '#9ca3af',
                    marginTop: '2px',
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {stat.subtext}
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}