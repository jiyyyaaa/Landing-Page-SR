import { useEffect, useRef, useState } from 'react';

const IBM = "'IBM Plex Sans', sans-serif";

// ============================================
// DASHBOARD PREVIEW VARIANT SELECTOR
// Change this value to switch between content variants:
// "command"   - Command center focus (general)
// "insights"  - AI insights focus (narrative digest)
// "control"   - Control & monitoring focus (risk)
// ============================================
const DASHBOARD_VARIANT: "command" | "insights" | "control" = "insights";

const dashboardContent = {
  command: {
    badge: "LIVE PLATFORM",
    headline: "Everything your team needs,",
    headline2: "in one command center",
  },
  insights: {
    badge: "AI-POWERED DASHBOARD",
    headline: "From noise to narrative",
    headline2: "in 24 hours",
  },
  control: {
    badge: "BRAND CONTROL CENTER",
    headline: "Monitor, score, and act —",
    headline2: "all in one place",
  },
};

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function DashboardPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = rect.height;

      const scrolledIn = windowH - rect.top;

      // Longer animation path - completes when element is ~halfway through viewport
      const animRange = sectionH * 1.2; // Much longer animation range
      const raw = clamp(scrolledIn / animRange, 0, 1);

      setProgress(easeOutCubic(raw));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotateX = 20 * (1 - progress); // More dramatic lean back initially
  const scale   = 0.7 + 0.3 * progress; // Start smaller for bigger popup effect
  const opacity = 0.2 + 0.8 * progress;
  const translateY = 60 * (1 - progress); // More vertical movement

  const shadowY     = Math.round(10 + 60 * (1 - progress));
  const shadowBlur  = Math.round(30 + 120 * (1 - progress));
  const shadowAlpha = (0.06 + 0.16 * (1 - progress)).toFixed(2);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f2f8f4 15%, #cce5d8 35%, #1e4733 58%, #0a1c12 100%)',
      }}
    >
      {/* UNIFIED GRADIENT OVERLAY - applies to entire section */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(10,28,18,0.4) 70%, rgba(10,28,18,0.8) 85%, #0a1c12 100%)',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      />

      {/* TEXT */}
      <div className="relative z-10 text-center pt-6 pb-6">
        <span
          className="inline-block px-3 py-1 rounded-full mb-4"
          style={{
            background: 'rgba(15,51,36,0.07)',
            fontSize: '0.65rem',
            color: '#0f3324',
            fontFamily: IBM,
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }}
        >
          {dashboardContent[DASHBOARD_VARIANT].badge}
        </span>

        <h2
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
            fontWeight: 600,
            color: '#0a1c12',
            fontFamily: IBM,
            lineHeight: 1.3
          }}
        >
          {dashboardContent[DASHBOARD_VARIANT].headline}<br />
          {dashboardContent[DASHBOARD_VARIANT].headline2}
        </h2>
      </div>

      {/* PERSPECTIVE WRAPPER */}
      <div
        className="relative z-10"
        style={{
          perspective: '1400px', // 🔥 stronger depth
          perspectiveOrigin: '50% 0%',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '80px',
        }}
      >
        {/* GLOW */}
        <div
          style={{
            position: 'absolute',
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '68%',
            height: '220px',
            background: 'radial-gradient(ellipse at 50% 30%, rgba(109,191,140,0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* DASHBOARD CARD */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            transform: `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
            transformOrigin: '50% 0%',
            opacity,
            width: 'min(90%, 1040px)',
            // borderRadius: '10px',
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
            // boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowAlpha}), 0 0 0 1px rgba(255,255,255,0.08)`,
          }}
        >
          <img
            src="/images/dashboard.png"
            alt="socialrumr dashboard"
            style={{ width: '100%', display: 'block' }}
            draggable={false}
          />
        </div>
      </div>

      {/* GRID IN DARK AREA */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          // bottom: '-60px', // 👈 extend past bottom
          height: '42%',
          backgroundImage:
            'linear-gradient(rgba(109,191,140,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,191,140,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </section>
  );
}