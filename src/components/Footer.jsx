import React from 'react';
import { Link } from 'react-router-dom';
import { RED, INK, PAPER } from '../constants.js';

export default function Footer() {
  return (
    <footer style={{ background: INK, color: PAPER, padding: '80px 40px 30px' }}>
      <style>{`
        .hardy-footer-inner { display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; max-width:1240px; margin:0 auto; }
        @media(max-width:900px){ .hardy-footer-inner { grid-template-columns:1fr 1fr; gap:32px; padding:0 4px; } }
        @media(max-width:600px){ .hardy-footer-inner { grid-template-columns:1fr; gap:28px; } footer { padding:48px 20px 24px !important; } }
      `}</style>
      <div className="hardy-footer-inner">
        <div>
          <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '48px', letterSpacing: '0.04em', lineHeight: 1 }}>HARDY</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.3em', color: RED, marginTop: '6px' }}>ALIMENTÁ TU INSTINTO</div>
          <p style={{ marginTop: '20px', color: '#888', fontSize: '14px', maxWidth: '320px', lineHeight: 1.5 }}>
            Crema de maní y miel artesanal. Un solo ingrediente. La mejor calidad. Hecho en Argentina.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '20px' }}>Tienda</div>
          {[{ l: 'Para tu casa', to: '/tienda' }, { l: 'Mayoristas', to: '/mayoristas' }, { l: 'Gastronómico', to: '/mayoristas/gastronomico' }, { l: 'Distribuidores', to: '/mayoristas/distribuidor' }, { l: 'Productores', to: '/mayoristas/productor' }].map((x, i) => (
            <Link key={i} to={x.to} style={{ display: 'block', color: '#bbb', textDecoration: 'none', fontSize: '14px', marginBottom: '10px' }}>{x.l}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '20px' }}>Marca</div>
          {['Filosofía', 'Productos', 'Usos'].map((x, i) => (
            <a key={i} href="#" style={{ display: 'block', color: '#bbb', textDecoration: 'none', fontSize: '14px', marginBottom: '10px' }}>{x}</a>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '20px' }}>Contacto</div>
          {[{ l: 'Instagram', href: 'https://www.instagram.com/hardy.arg/' }, { l: 'WhatsApp', href: 'https://wa.me/5491135736956' }, { l: 'TikTok', href: 'https://www.tiktok.com/@hardy.arg' }].map((x, i) => (
            <a key={i} href={x.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#bbb', textDecoration: 'none', fontSize: '14px', marginBottom: '10px' }}>{x.l}</a>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '1240px', margin: '40px auto 0', paddingTop: '30px', borderTop: '1px solid #2a2a2a', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', flexWrap: 'wrap', gap: '12px' }}>
        <div>© 2026 HARDY · hardy.ar</div>
        <div>ALIMENTÁ TU INSTINTO</div>
      </div>
    </footer>
  );
}
