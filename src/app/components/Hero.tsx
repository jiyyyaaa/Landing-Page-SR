import { useEffect, useState } from "react";
import { MessageSquare, BarChart2, TrendingUp, TrendingDown } from "lucide-react";

const avatarTopLeft = "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=400";
const avatarTopRight = "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=400";
const avatarBottomLeft = "https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?w=400";
const avatarBottomRight = "https://images.unsplash.com/photo-1543132220-c6440149c632?w=400";

export default function Hero() {
  const [phase, setPhase] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1080);
      setIsXL(width >= 1350);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowHero(true), 100);
  }, []);

  // 🔥 slower animation timings
  useEffect(() => {
    if (!isXL) return;

    setTimeout(() => setPhase(1), 400);
    setTimeout(() => setPhase(2), 1800);
    setTimeout(() => setPhase(3), 3200);
  }, [isXL]);

  return (
    <section
      className="relative w-full px-6 md:px-8 py-16 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.18) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
      }}
    >
      <style>
        {`
        .smooth {
          transition: all 1.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition: all 0.7s ease 0.1s; }
        .delay-2 { transition: all 0.7s ease 0.3s; }
        .delay-3 { transition: all 0.7s ease 0.5s; }
        .delay-4 { transition: all 0.7s ease 0.7s; }
      `}
      </style>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.5)_70%,transparent_100%)]" />

      {/* CENTER */}
      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        <div className={`mb-5 flex justify-center fade-up delay-1 ${showHero ? "show" : ""}`}>
          <span className="inline-flex items-center gap-2 border border-emerald-300 bg-emerald-50 text-emerald-700 text-xs px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            REAL-TIME INSIGHTS
          </span>
        </div>

        <h1 className={`mb-6 text-[clamp(2.4rem,5vw,3.6rem)] font-bold text-[#0f3324] fade-up delay-2 ${showHero ? "show" : ""}`}>
          Hear what the Internet <br />
          is <span className="relative inline-block">talking
            <span className="absolute left-0 w-full h-[12px] bg-yellow-300 -z-10 bottom-[6px]" />
          </span> about <br />
          your brand
        </h1>

        <p className={`max-w-2xl mx-auto mb-8 text-gray-600 fade-up delay-3 ${showHero ? "show" : ""}`}>
          SocialRumr monitors conversations across the social web and transforms 
          millions of mentions into actionable business insights with AI-driven sentiment tracking.
        </p>

        <div className={`flex justify-center gap-3 fade-up delay-4 ${showHero ? "show" : ""}`}>
          <button className="bg-emerald-800 text-white px-6 py-2.5 rounded-lg">Request Demo</button>
          <button className="border px-6 py-2.5 rounded-lg bg-white">View Platform</button>
        </div>
      </div>

{/* ================= BUBBLES ================= */}

{isDesktop && (
  <>
    {/* TOP LEFT */}
    <div
      className="absolute flex-col smooth z-0 hidden lg:flex"
      style={{
        top: !isXL
          ? 120
          : phase === 0 ? 80
          : phase === 1 ? 140
          : phase === 2 ? 200
          : 120,

        left: !isXL
          ? 40
          : phase === 0 ? 80
          : phase === 1 ? 150
          : phase === 2 ? 260
          : 180,
      }}
    >
      <Bubble
        avatar={avatarTopLeft}
        title="140 new mentions"
        sub="detected today"
        icon={<TrendingUp className="text-emerald-500 w-4 h-4" />}
      />
      <SmallText icon={<MessageSquare />} text="Across platforms"  />
    </div>

    {/* TOP RIGHT */}
    <div
      className="absolute flex-col items-end smooth z-0 hidden lg:flex"
      style={{
        top: !isXL
          ? 120
          : phase === 0 ? 80
          : phase === 1 ? 140
          : phase === 2 ? 60
          : 120,

        right: !isXL
          ? 40
          : phase === 0 ? 80
          : phase === 1 ? 150
          : phase === 2 ? 120
          : 180,
      }}
    >
      <BubbleRight
        avatar={avatarTopRight}
        title="50% less negative"
        sub="mentions today"
        icon={<TrendingDown className="text-red-500 w-4 h-4" />}
      />
      <SmallText text="vs last week" icon={<BarChart2 />} align="right"  />
    </div>

    {/* BOTTOM LEFT */}
    <div
      className="absolute flex-col smooth z-0 hidden lg:flex"
      style={{
        bottom: !isXL
          ? 100
          : phase === 0 ? 60
          : phase === 1 ? 140
          : phase === 2 ? 40
          : 100,

        left: !isXL
          ? 40
          : phase === 0 ? 80
          : phase === 1 ? 150
          : phase === 2 ? 120
          : 180,
      }}
    >
      <SmallText text="Sentiment rising" dot className="mt-2" />
      <Bubble
        avatar={avatarBottomLeft}
        title="Sentiment up 23%"
        sub="this week"
        icon={<TrendingUp className="text-emerald-500 w-4 h-4" />}
      />
    </div>

    {/* BOTTOM RIGHT */}
    <div
      className="absolute flex-col items-end smooth z-0 hidden lg:flex"
      style={{
        bottom: !isXL
          ? 100
          : phase === 0 ? 60
          : phase === 1 ? 140
          : phase === 2 ? 40
          : 100,

        right: !isXL
          ? 40
          : phase === 0 ? 80
          : phase === 1 ? 150
          : phase === 2 ? 120
          : 180,
      }}
    >
      <SmallText text="Live tracking" dot align="right" className="mt-2" />
      <BubbleRight
        avatar={avatarBottomRight}
        title="1.2K conversations"
        sub="tracked live"
      />
    </div>
  </>
)}
    </section>
  );
}

/* COMPONENTS */

function Bubble({ avatar, title, sub, icon }: any) {
  return (
    <div className="flex items-center gap-3">
      <img src={avatar} className="w-10 h-10 rounded-full shadow" />
      <div className="bg-white px-4 py-2 rounded-xl shadow border flex items-center gap-2">
        <div>
          <div className="text-xs font-semibold">{title}</div>
          <div className="text-[10px] text-gray-500">{sub}</div>
        </div>
        {icon}
      </div>
    </div>
  );
}

function BubbleRight({ avatar, title, sub, icon }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white px-4 py-2 rounded-xl shadow border flex items-center gap-2">
        <div className="text-right">
          <div className="text-xs font-semibold">{title}</div>
          <div className="text-[10px] text-gray-500">{sub}</div>
        </div>
        {icon}
      </div>
      <img src={avatar} className="w-10 h-10 rounded-full shadow" />
    </div>
  );
}

function SmallText({ text, icon, align, dot, className = "" }: any) {
  return (
    <div className={`text-xs text-gray-500 flex gap-1 items-center ${align === "right" ? "justify-end mr-15" : "ml-15"} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>}
      {text}
      {icon && <span className="scale-75">{icon}</span>}
    </div>
  );
}