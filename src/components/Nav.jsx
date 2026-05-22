import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const RED = '#C0171E';
const INK = '#1A1A1A';
const PAPER = '#FAFAF8';

export default function Nav({ cartCount = 0, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/tienda', label: 'Tienda' },
    { to: '/mayoristas', label: 'Mayoristas' },
    { to: '/a-granel', label: 'A granel' },
    { to: '/recetas', label: 'Recetas' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .hardy-announcement { background:${INK};color:${PAPER};font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.2em;text-align:center;padding:10px 16px;text-transform:uppercase; }
        .hardy-nav { background:${INK};color:${PAPER};padding:20px 40px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #2a2a2a;position:sticky;top:0;z-index:50;gap:20px; }
        .nav-links { display:flex;gap:32px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-family:'JetBrains Mono',monospace; }
        .nav-links a { color:${PAPER};text-decoration:none;opacity:0.75;transition:opacity 0.2s;padding-bottom:2px; }
        .nav-links a:hover { opacity:1; }
        .nav-links a.active { opacity:1;border-bottom:1px solid ${RED}; }
        .hamburger-btn { display:none;background:transparent;border:1px solid rgba(255,255,255,0.35);color:${PAPER};padding:8px 12px;cursor:pointer; }
        .nav-comprar { flexShrink:0; }
        .mobile-menu { display:none;background:${INK};border-bottom:1px solid #2a2a2a;padding:24px 24px;flex-direction:column;gap:20px;font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.12em;text-transform:uppercase; }
        .mobile-menu.open { display:flex; }
        .mobile-menu a { color:${PAPER};text-decoration:none; }
        @media(max-width:900px) {
          .nav-links { display:none!important; }
          .nav-comprar { display:none!important; }
          .hamburger-btn { display:block; }
          .hardy-nav { padding:14px 18px; }
        }
      `}</style>

      <div className="hardy-announcement">
        10 años haciendo Hardy · Crema de maní y miel · Envíos a todo el país
      </div>

      <nav className="hardy-nav">
        <Link to="/" style={{ textDecoration:'none', color:PAPER, flexShrink:0 }}>
          <div style={{ fontFamily:'Anton, sans-serif', fontSize:'32px', letterSpacing:'0.04em', lineHeight:1 }}>HARDY</div>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', letterSpacing:'0.3em', color:RED, marginTop:'3px' }}>ALIMENTÁ TU INSTINTO</div>
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={isActive(l.to) ? 'active' : ''}>{l.label}</Link>
          ))}
        </div>

        <div style={{ display:'flex', gap:'10px', alignItems:'center', flexShrink:0 }}>
          <Link to="/tienda" className="nav-comprar" style={{ background:RED, color:PAPER, padding:'10px 20px', textDecoration:'none', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.12em', textTransform:'uppercase', flexShrink:0 }}>
            Comprar ahora
          </Link>
          {onCartOpen && (
            <button onClick={onCartOpen} style={{ background:'transparent', color:PAPER, border:`1px solid ${PAPER}`, padding:'9px 14px', cursor:'pointer', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.1em', display:'flex', alignItems:'center', gap:'6px', textTransform:'uppercase', flexShrink:0 }}>
              <ShoppingBag size={13} /> ({cartCount})
            </button>
          )}
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        {links.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
      </div>
    </>
  );
}
