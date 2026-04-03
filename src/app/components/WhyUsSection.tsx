import { Zap, Eye, BarChart2, Shield, Bell, Users } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";
const SERIF = "'Playfair Display', Georgia, serif";

const benefits = [
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
    title: 'Enterprise-grade reliability',
    desc: '99.9% uptime SLA. SOC 2 Type II certified. Your brand intelligence runs whether your team is in the office or asleep.',
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
];

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
              Built different,
            </h2>
            <p style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#a3c9b4', fontFamily: SERIF, lineHeight: 1.2 }}>
              because the problems are different
            </p>
          </div>
          <p className="text-center mb-16" style={{ fontSize: '0.875rem', color: '#4d7a62', fontFamily: IBM, lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 64px' }}>
            Most listening tools were built for a slower internet. We were built for the one you actually work in.
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