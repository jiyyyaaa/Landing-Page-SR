import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";
const SERIF = "'Playfair Display', Georgia, serif";

// ============================================
// FAQ SECTION VARIANT SELECTOR
// Change this value to switch between content variants:
// "original" - Original FAQs (enterprise-focused, trial mentions)
// "startup"  - Startup-focused FAQs (demo-first, PRD-aligned)
// ============================================
const FAQ_VARIANT: "original" | "startup" = "startup";

const faqContent = {
  original: [
    {
      q: "Which platforms does socialrumr monitor?",
      a: "We cover Twitter / X, Reddit, Instagram, TikTok, LinkedIn, YouTube comments, Facebook public posts, Google News, 50,000+ news sites, and a wide index of niche forums and community boards — all in a single feed.",
    },
    {
      q: "How fast are the alerts?",
      a: "Most alerts fire within 2–5 minutes of detection. Our crawler runs continuously across all sources, so there's no batch delay. Enterprise plans get dedicated processing priority with sub-2-minute SLAs.",
    },
    {
      q: "Can I set up custom alert rules?",
      a: "Yes. You can define thresholds by keyword volume change (e.g. 'alert me when mentions spike more than 30% in 1 hour'), sentiment shift, competitor name appearance, or any Boolean keyword combination. Rules stack — so you can be surgical about what wakes you up.",
    },
    {
      q: "How does the free trial work?",
      a: "Every plan starts with a 14-day free trial. No credit card required. You get full access to the tier you sign up for. At the end of 14 days you can subscribe or let it expire — no automated charges, no awkward emails.",
    },
    {
      q: "Is my data private and secure?",
      a: "socialrumr is SOC 2 Type II certified. All data is encrypted at rest and in transit. We do not sell, share, or train models on your brand data. Enterprise customers can request a full security review and DPA.",
    },
    {
      q: "Can multiple team members use the same account?",
      a: "Yes. Starter includes 1 seat, Pro includes 5, and Enterprise is unlimited. Each seat gets its own login, notification preferences, and saved views. Admins can set role-based permissions to control who can edit keywords or export data.",
    },
    {
      q: "Do you offer annual billing?",
      a: "Yes — and it saves you around 20%. You can switch between monthly and annual billing at any time from your account settings. If you switch mid-cycle we'll credit the difference automatically.",
    },
  ],
  startup: [
    {
      q: "Which platforms does socialrumr monitor?",
      a: "We currently monitor Twitter (X), Reddit, LinkedIn, Facebook, and Google Alerts (web). This covers the platforms where most startup-related conversations happen. We're continuously adding more sources based on customer feedback.",
    },
    {
      q: "How does the demo work?",
      a: "Schedule a 20-minute call with our team. We'll show you the platform, discuss your specific monitoring needs, and set up your account with the right keywords and competitors. No pressure, no long sales pitch — just a walkthrough tailored to your brand.",
    },
    {
      q: "What is the AI Narrative Digest?",
      a: "Every 24 hours, our AI reads all your brand mentions, clusters them by theme, and writes a narrative summary of what people are saying and why. It's delivered to your inbox or dashboard by 8am — so you start your day with insights, not data dumps.",
    },
    {
      q: "How fast are the alerts?",
      a: "Most alerts fire within 2–5 minutes of detection. You can configure 5 different trigger types: volume spike, sentiment drop, keyword match, competitor mention, and risk threshold. Alerts go to email, Slack, or webhooks.",
    },
    {
      q: "What's included in the 1:1 consulting calls?",
      a: "Premium plan users can schedule calls with our brand intelligence team for strategic advice, campaign planning, or crisis response support. We'll review your data, discuss trends, and help you decide what to do next. Meeting notes and action items are tracked in your dashboard.",
    },
    {
      q: "How does Share of Voice work?",
      a: "We track mentions of your brand alongside your competitors and calculate what percentage of the conversation you own. You'll see this as a donut chart in your dashboard, broken down by platform. Growth and Premium plans include this feature.",
    },
    {
      q: "Can multiple team members use the same account?",
      a: "Yes. Basic includes 1 seat, Growth includes 3 seats, and Premium includes 10 seats. Each seat gets its own login and notification preferences. Organization admins can manage permissions through our Clerk-powered auth system.",
    },
    {
      q: "Do you offer annual billing?",
      a: "Yes — and it saves you around 20%. You can switch between monthly and annual billing at any time from your account settings. We'll credit any difference automatically.",
    },
  ],
};

const faqs = faqContent[FAQ_VARIANT];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full px-8 py-24" style={{ background: '#f7faf8' }}>
      <div className="max-w-3xl mx-auto">

        <AnimateOnScroll direction="up">
          {/* Label */}
          <p className="text-center mb-5" style={{ fontSize: '0.68rem', color: '#0f3324', fontFamily: IBM, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            FAQ
          </p>

          {/* Headline */}
          <div className="text-center mb-14">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#0a1c12', fontFamily: IBM, lineHeight: 1.15 }}>
              Questions we get
            </h2>
            <p style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#6b9080', fontFamily: SERIF, lineHeight: 1.2 }}>
              a lot
            </p>
          </div>
        </AnimateOnScroll>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <AnimateOnScroll key={q} delay={i * 60} direction="up">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: '#ffffff',
                    border: `1px solid ${isOpen ? 'rgba(15,51,36,0.18)' : 'rgba(15,51,36,0.07)'}`,
                    transition: 'border-color 0.25s',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span style={{ fontWeight: isOpen ? 600 : 400, fontSize: '0.9rem', color: '#0a1c12', fontFamily: IBM, lineHeight: 1.5 }}>
                      {q}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: isOpen ? '#0f3324' : '#f0f5f2', transition: 'background 0.25s' }}
                    >
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
                        : <Plus className="w-3.5 h-3.5" style={{ color: '#0f3324' }} />
                      }
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <p
                      className="px-6 pb-5"
                      style={{ fontSize: '0.83rem', color: '#4a6b5a', fontFamily: IBM, lineHeight: 1.8 }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
