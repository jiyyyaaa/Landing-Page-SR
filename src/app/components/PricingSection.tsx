import { useState } from 'react';
import { Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";
const SERIF = "'Playfair Display', Georgia, serif";

// ============================================
// PRICING SECTION VARIANT SELECTOR
// Change this value to switch between content variants:
// "original" - Original pricing (Starter/Pro/Enterprise, trial-based)
// "prd"      - PRD-aligned pricing (Basic/Growth/Premium, demo-first)
// ============================================
const PRICING_VARIANT: "original" | "prd" = "prd";

const pricingContent = {
  original: {
    headline: "Simple plans,",
    subheadline: "serious listening",
    bottomNote: "All plans include a 14-day free trial. No credit card required.",
    plans: [
      {
        name: 'Starter',
        tagline: 'For solo social managers and small teams.',
        monthly: 9,
        annual: 7,
        cta: 'Start free trial',
        featured: false,
        features: [
          '3 brand keywords',
          'Twitter & Reddit monitoring',
          'Daily digest emails',
          '7-day data history',
          '1 user seat',
        ],
      },
      {
        name: 'Pro',
        tagline: 'For growing brands that need real-time coverage.',
        monthly: 49,
        annual: 39,
        cta: 'Get started',
        featured: true,
        badge: 'Most popular',
        features: [
          '25 brand keywords',
          'All platforms + news + forums',
          'Real-time spike alerts',
          '6-month data history',
          'Sentiment & topic analytics',
          '5 user seats',
          'Slack & email notifications',
        ],
      },
      {
        name: 'Enterprise',
        tagline: 'For large teams with complex brand portfolios.',
        monthly: 89,
        annual: 72,
        cta: 'Talk to sales',
        featured: false,
        features: [
          'Unlimited keywords',
          'Everything in Pro',
          'Unlimited data history',
          'Custom API access',
          'Dedicated account manager',
          'SSO & advanced permissions',
          'SLA & priority support',
        ],
      },
    ],
  },
  prd: {
    headline: "Startup pricing,",
    subheadline: "enterprise features",
    bottomNote: "All plans require a demo call to get started. We'll customize your setup based on your needs.",
    plans: [
      {
        name: 'Basic',
        tagline: 'Perfect for early-stage startups testing the waters.',
        monthly: 9,
        annual: 7,
        cta: 'Request Demo',
        featured: false,
        features: [
          '1 brand keyword',
          'Up to 3 competitors',
          'Twitter & Reddit monitoring',
          'Brand Health Score',
          'Weekly email reports',
          '7-day data history',
          '1 user seat',
        ],
      },
      {
        name: 'Growth',
        tagline: 'For growing startups who need full visibility.',
        monthly: 49,
        annual: 39,
        cta: 'Request Demo',
        featured: true,
        badge: 'Most popular',
        features: [
          '5 brand keywords',
          'Up to 10 competitors',
          'All 5 platforms (Twitter, Reddit, LinkedIn, Facebook, Web)',
          'AI Narrative Digest (daily)',
          'Share of Voice analytics',
          'Priority Triage',
          'Real-time alerts (5 trigger types)',
          '90-day data history',
          '3 user seats',
        ],
      },
      {
        name: 'Premium',
        tagline: 'For serious brands who want the full picture.',
        monthly: 89,
        annual: 72,
        cta: 'Request Demo',
        featured: false,
        features: [
          'Unlimited keywords',
          'Unlimited competitors',
          'Everything in Growth',
          '1:1 consulting calls',
          'Custom report builder',
          'API access',
          '1-year data history',
          '10 user seats',
          'Priority support',
        ],
      },
    ],
  },
};

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const { headline, subheadline, bottomNote, plans } = pricingContent[PRICING_VARIANT];

  return (
    <section id="pricing" className="w-full px-8 py-24" style={{ background: '#0a1c12' }}>
      <div className="max-w-5xl mx-auto">

        <AnimateOnScroll direction="up">
          {/* Label */}
          <p className="text-center mb-5" style={{ fontSize: '0.68rem', color: '#6dbf8c', fontFamily: IBM, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Pricing
          </p>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', fontFamily: IBM, lineHeight: 1.15 }}>
              {headline}
            </h2>
            <p style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#a3c9b4', fontFamily: SERIF, lineHeight: 1.2 }}>
              {subheadline}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-3 mt-6">
              <span style={{ fontSize: '0.8rem', color: annual ? '#4d7a62' : '#a3c9b4', fontFamily: IBM }}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative rounded-full transition-colors"
                style={{ width: '44px', height: '24px', background: annual ? '#6dbf8c' : '#1a3d28', border: 'none', cursor: 'pointer', flexShrink: 0 }}
              >
                <span
                  className="absolute top-1 rounded-full transition-all"
                  style={{ width: '16px', height: '16px', background: '#ffffff', left: annual ? '24px' : '4px' }}
                />
              </button>
              <span style={{ fontSize: '0.8rem', color: annual ? '#a3c9b4' : '#4d7a62', fontFamily: IBM }}>Annual</span>
              {annual && (
                <span className="px-2 py-0.5 rounded-full" style={{ background: 'rgba(253,224,71,0.12)', border: '1px solid rgba(253,224,71,0.2)', fontSize: '0.62rem', color: '#fde047', fontFamily: IBM }}>
                  Save ~20%
                </span>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map(({ name, tagline, monthly, annual: annualPrice, cta, featured, badge, features }, i) => {
            const price = annual ? annualPrice : monthly;
            return (
              <AnimateOnScroll key={name} delay={i * 100} direction="up">
                <div
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: featured ? '#ffffff' : '#0f2318',
                    border: featured ? '2px solid #6dbf8c' : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: featured ? '0 8px 32px rgba(109,191,140,0.15)' : 'none',
                  }}
                >
                  {/* Top */}
                  <div className="px-6 pt-6 pb-5" style={{ borderBottom: `1px solid ${featured ? 'rgba(15,51,36,0.08)' : 'rgba(255,255,255,0.06)'}` }}>
                    <div className="flex items-center justify-between mb-1">
                      <span style={{ fontSize: '0.75rem', color: featured ? '#6b9080' : '#4d7a62', fontFamily: IBM }}>{name}</span>
                      {badge && (
                        <span className="px-2.5 py-0.5 rounded-full" style={{ background: '#e8f5ee', fontSize: '0.6rem', color: '#0f3324', fontFamily: IBM, fontWeight: 600 }}>
                          {badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-end gap-1 mb-3">
                      <span style={{ fontSize: 'clamp(2.2rem, 4vw, 2.8rem)', fontWeight: 700, color: featured ? '#0a1c12' : '#e8f4ed', fontFamily: IBM, lineHeight: 1 }}>
                        ${price}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: featured ? '#6b9080' : '#4d7a62', fontFamily: IBM, marginBottom: '4px' }}>/mo</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', color: featured ? '#4a6b5a' : '#3d6b52', fontFamily: IBM, lineHeight: 1.6 }}>{tagline}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-3 px-6 py-5 flex-1">
                    {features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: featured ? '#0f3324' : '#6dbf8c' }} />
                        <span style={{ fontSize: '0.8rem', color: featured ? '#2e4d3d' : '#6b9080', fontFamily: IBM, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <button
                      className="w-full rounded-full py-3 transition-opacity"
                      style={{
                        background: featured ? '#0f3324' : 'transparent',
                        border: featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
                        color: featured ? '#ffffff' : '#6b9080',
                        fontFamily: IBM,
                        fontSize: '0.875rem',
                        fontWeight: featured ? 600 : 400,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >
                      {cta}
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Bottom note */}
        <AnimateOnScroll direction="up" delay={300}>
          <p className="text-center mt-10" style={{ fontSize: '0.75rem', color: '#2a5040', fontFamily: IBM }}>
            {bottomNote}
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}