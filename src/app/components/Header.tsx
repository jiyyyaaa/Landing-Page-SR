import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const IBM = "'IBM Plex Sans', sans-serif";

const navItems = [
  { label: 'Solutions', id: 'solutions' },
  { label: 'Why Us',    id: 'why-us' },
  { label: 'Pricing',   id: 'pricing' },
  { label: 'FAQ',       id: 'faq' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="w-full px-8 py-4 sticky top-0 z-50"
      style={{ background: 'rgba(255,255,255,0.88)', borderBottom: '1px solid rgba(15,51,36,0.07)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">

        {/* Logo — pinned left */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#0f3324' }}>
            <MessageCircle className="w-4 h-4" style={{ color: '#6dbf8c' }} />
          </div>
          <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0a1c12', fontFamily: IBM }}>
            socialrumr
          </span>
        </div>

        {/* Nav — centered, desktop */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{ fontSize: '0.875rem', color: '#4a6b5a', fontFamily: IBM, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#0a1c12')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#4a6b5a')}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Actions — pinned right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            style={{ fontSize: '0.875rem', color: '#4a6b5a', fontFamily: IBM, background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = '#0a1c12')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = '#4a6b5a')}
          >
            Log In
          </button>
          <button
            className="rounded-full px-5 py-2 transition-opacity"
            style={{ background: '#0f3324', color: '#ffffff', fontFamily: IBM, fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
          >
            Start Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0a1c12' }}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-8 pb-6 pt-4 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(15,51,36,0.07)', marginTop: '12px' }}
        >
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
              className="text-left"
              style={{ fontSize: '0.9rem', color: '#2e4d3d', fontFamily: IBM, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {label}
            </button>
          ))}
          <div style={{ height: '1px', background: 'rgba(15,51,36,0.07)' }} />
          <button style={{ fontSize: '0.9rem', color: '#2e4d3d', fontFamily: IBM, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
            Log In
          </button>
          <button
            className="rounded-full px-5 py-2.5 w-fit"
            style={{ background: '#0f3324', color: '#ffffff', fontFamily: IBM, fontSize: '0.875rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}
          >
            Start Now
          </button>
        </div>
      )}
    </header>
  );
}
