import { useEffect, useState } from "react";

const stats = [
  { value: '50M+', label: 'Conversations Analyzed' },
  { value: '120+', label: 'Enterprise Brands' },
  { value: '24/7', label: 'Social Media Listening' },
];

export default function LogoSection() {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 200);
    return () => clearTimeout(timer);
  }, []);

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
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}