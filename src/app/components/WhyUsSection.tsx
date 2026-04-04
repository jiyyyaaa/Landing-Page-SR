import { Zap, Eye, BarChart2, Shield, Bell, Users, DollarSign, Sparkles, FileText, Phone, Brain, TrendingUp } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";
const SERIF = "'Playfair Display', Georgia, serif";

// ============================================
// WHY US SECTION VARIANT SELECTOR
// Change this value to switch between content variants:
// "enterprise" - Original enterprise-focused benefits
// "startup"    - Startup-specific benefits (pricing, AI, consulting)
// "technical"  - Technical differentiators (platforms, API, speed)
// ============================================
const WHYUS_VARIANT: "enterprise" | "startup" | "technical" = "startup";

const whyUsContent = {
  enterprise: {
    headline: "Built different,",
    subheadline: "because the problems are different",
    description: "Most listening tools were built for a slower internet. We were built for the one you actually work in.",
    benefits: [
      {
        icon: Zap,
        title: 'Alerts in under 5 minutes',
        desc: 'From mention to notification in minutes, not hours. Speed is the difference between managing a story and chasing one.',
      },
      {
        icon: Eye,
        title: 'Coverage no one else has',
        desc: 'We index forums, subreddits, comment sections, and dark social sources that most tools do not even look at.',
      },
      {
        icon: BarChart2,
        title: 'Context, not just counts',
        desc: 'Sentiment, topic, reach, and trend lines are baked in. You see the full picture without building your own reports.',
      },
      {
        icon: Shield,
        title: 'Enterprise-grade security',
        desc: 'Role-based access control, encrypted data storage, and secure APIs. Your brand intelligence stays protected.',
      },
      {
        icon: Bell,
        title: 'Custom alerts that make sense',
        desc: 'Set thresholds by keyword, volume change, sentiment shift, or competitor mention. You define what counts as urgent.',
      },
      {
        icon: Users,
        title: 'Built for teams, not just analysts',
        desc: 'Shared workspaces, comment threads, and role-based access mean everyone from comms to the C-suite stays aligned.',
      },
    ],
  },
  startup: {
    headline: "Why startups choose us",
    subheadline: "over the expensive alternatives",
    description: "Built specifically for seed-to-Series-A companies who need enterprise insights without enterprise costs.",
    benefits: [
      {
        icon: DollarSign,
        title: 'Startup-friendly pricing',
        desc: 'Start at $9/mo, not $500. No annual contracts. Scale up only when you need to. Built for startup budgets.',
      },
      {
        icon: Sparkles,
        title: 'AI that does the work',
        desc: 'Daily narrative digests synthesize thousands of mentions into actionable insights. No more drowning in data.',
      },
      {
        icon: Phone,
        title: 'Human experts on call',
        desc: 'Premium users get 1:1 consulting calls for strategic advice, crisis response, and campaign planning.',
      },
      {
        icon: TrendingUp,
        title: 'Competitive intelligence',
        desc: 'Track Share of Voice against competitors. Know where you stand in the conversation, not just how you\'re doing.',
      },
      {
        icon: FileText,
        title: 'Reports you can share',
        desc: 'Weekly brand health reports delivered automatically. PDF export for board decks, investor updates, and team syncs.',
      },
      {
        icon: Bell,
        title: 'Risk alerts that matter',
        desc: '0-100 risk scoring on every mention. Priority Triage surfaces urgent items. Act fast when it matters.',
      },
    ],
  },
  technical: {
    headline: "Built for speed",
    subheadline: "and coverage",
    description: "Real-time monitoring across the platforms your audience actually uses.",
    benefits: [
      {
        icon: Zap,
        title: 'Real-time monitoring',
        desc: 'Mentions detected and scored within minutes, not hours. Stay ahead of the conversation, not behind it.',
      },
      {
        icon: Eye,
        title: '5 platforms, one dashboard',
        desc: 'Twitter, Reddit, LinkedIn, Facebook, and Google Alerts — all in one unified feed. No more tab switching.',
      },
      {
        icon: Brain,
        title: 'AI-powered analysis',
        desc: 'Sentiment scoring, topic clustering, narrative synthesis — all automatic. Get insights, not just data.',
      },
      {
        icon: BarChart2,
        title: 'Brand Health Score',
        desc: '0-100 score combining sentiment, volume, reach, and risk. Track your brand\'s health over time.',
      },
      {
        icon: Bell,
        title: '5 alert trigger types',
        desc: 'Volume spike, sentiment drop, keyword match, competitor activity, risk threshold. Choose what matters.',
      },
      {
        icon: FileText,
        title: 'Automated reporting',
        desc: 'Daily or weekly reports generated automatically. PDF export, email delivery, and dashboard access.',
      },
    ],
  },
};

const { headline, subheadline, description, benefits } = whyUsContent[WHYUS_VARIANT];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="w-full px-8 py-24" style={{ background: '#0a1c12' }}>
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <AnimateOnScroll direction="up">
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex px-4 py-1.5 rounded-full"
              style={{ background: 'rgba(109,191,140,0.12)', border: '1px solid rgba(109,191,140,0.2)', fontSize: '0.68rem', color: '#6dbf8c', fontFamily: IBM, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Why socialrumr
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', fontFamily: IBM, lineHeight: 1.15 }}>
              {headline}
            </h2>
            <p style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#a3c9b4', fontFamily: SERIF, lineHeight: 1.2 }}>
              {subheadline}
            </p>
          </div>
          <p className="text-center mb-16" style={{ fontSize: '0.875rem', color: '#4d7a62', fontFamily: IBM, lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 64px' }}>
            {description}
          </p>
        </AnimateOnScroll>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <AnimateOnScroll key={title} delay={i * 80} direction="up">
              <div
                className="rounded-2xl p-6 flex flex-col gap-10 h-full"
                style={{ background: '#0f2318', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(109,191,140,0.1)', border: '1px solid rgba(109,191,140,0.15)' }}>
                  <Icon className="w-4 h-4" style={{ color: '#6dbf8c' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#e8f4ed', fontFamily: IBM, marginBottom: '8px' }}>{title}</p>
                  <p style={{ fontSize: '0.8rem', color: '#4d7a62', fontFamily: IBM, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}