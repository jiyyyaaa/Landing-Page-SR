import { MessageCircle } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const IBM = "'IBM Plex Sans', sans-serif";

// Social icons as inline SVGs (X/Twitter, LinkedIn, Instagram, YouTube)
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const navLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Status'],
  Company:  ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Case Studies', 'Community', 'Support'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
};

const socials = [
  { icon: XIcon,         href: '#', label: 'X / Twitter' },
  { icon: LinkedInIcon,  href: '#', label: 'LinkedIn' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YouTubeIcon,   href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#071410', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Top CTA strip */}
      <AnimateOnScroll direction="up">
        <div
          className="mx-8 mt-16 mb-12 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, #1a3d28 0%, #0f2318 100%)', border: '1px solid rgba(109,191,140,0.15)' }}
        >
          <div className="max-w-lg">
            <p style={{ fontSize: '0.68rem', color: '#6dbf8c', fontFamily: IBM, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Get started today
            </p>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#ffffff', fontFamily: IBM, lineHeight: 1.2 }}>
              Your brand is being talked about<br />right now.
            </h3>
            <p style={{ marginTop: '10px', fontSize: '0.875rem', color: '#4d7a62', fontFamily: IBM, lineHeight: 1.7 }}>
              Start listening in under 5 minutes. No credit card required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              className="rounded-full px-7 py-3 transition-opacity"
              style={{ background: '#6dbf8c', color: '#071410', fontFamily: IBM, fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Start Free Trial
            </button>
            <button
              className="rounded-full px-7 py-3 transition-opacity"
              style={{ background: 'transparent', color: '#6b9080', fontFamily: IBM, fontSize: '0.875rem', border: '1px solid rgba(109,191,140,0.25)', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Request Demo
            </button>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Main nav grid */}
      <div className="max-w-5xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#0f3324' }}>
                <MessageCircle className="w-4 h-4" style={{ color: '#6dbf8c' }} />
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#e8f4ed', fontFamily: IBM }}>socialrumr</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#2a5040', fontFamily: IBM, lineHeight: 1.7 }}>
              Real-time brand listening & social analytics for teams that move fast.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', color: '#2a5040', border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6dbf8c';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(109,191,140,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#2a5040';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([section, links]) => (
            <div key={section}>
              <p style={{ fontSize: '0.68rem', color: '#4d7a62', fontFamily: IBM, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                {section}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontSize: '0.8rem', color: '#2a5040', fontFamily: IBM, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#6dbf8c')}
                      onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#2a5040')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 py-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '0.72rem', color: '#1a3d28', fontFamily: IBM }}>
            © 2026 socialrumr, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontSize: '0.72rem', color: '#1a3d28', fontFamily: IBM, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#4d7a62')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#1a3d28')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
