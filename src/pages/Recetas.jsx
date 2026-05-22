import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RECETAS, CATEGORIAS } from '../data/recetas.js';
import { RED, INK, PAPER, PAPER_2 } from '../constants.js';

export default function Recetas() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const navigate = useNavigate();

  const recetasFiltradas = categoriaActiva === 'Todas'
    ? RECETAS
    : RECETAS.filter(r => r.categoria === categoriaActiva);

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}
      .receta-card:hover img { transform: scale(1.04); }
      .receta-card:hover { background: ${INK} !important; color: ${PAPER} !important; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
      .receta-card:hover h3 { color: ${PAPER} !important; }
      .receta-card:hover p { color: #aaa !important; }
      .receta-card:hover [data-link] { background: ${RED} !important; }
      
        @media(max-width:900px){
          section[style*="padding: '80px"]{padding:48px 24px!important;}
          section[style*="padding: '60px"]{padding:40px 20px!important;}
          div[style*="gridTemplateColumns: 'repeat(4"]{grid-template-columns:1fr 1fr!important;}
          div[style*="gridTemplateColumns: 'repeat(3"]{grid-template-columns:1fr 1fr!important;}
          div[style*="gridTemplateColumns: '1fr 1fr'"]{grid-template-columns:1fr!important;}
          div[style*="gridTemplateColumns: '2fr"]{grid-template-columns:1fr!important;}
          div[style*="gridTemplateColumns: '40px"]{grid-template-columns:1fr!important;}
          div[style*="maxWidth: '1240px'"]{padding:0 20px!important;}
          div[style*="maxWidth: '1100px'"]{padding:0 20px!important;}
        }
        @media(max-width:600px){
          section[style*="padding"]{padding-left:16px!important;padding-right:16px!important;}
          div[style*="gridTemplateColumns: 'repeat(4"]{grid-template-columns:1fr 1fr!important;}
          div[style*="gridTemplateColumns: 'repeat(3"]{grid-template-columns:1fr!important;}
          div[style*="gridTemplateColumns: '1fr 1fr'"]{grid-template-columns:1fr!important;}
          div[style*="gridTemplateColumns: '2fr"]{grid-template-columns:1fr!important;}
          div[style*="gridTemplateColumns: '40px"]{grid-template-columns:1fr!important;}
          div[style*="maxWidth: '1240px'"]{padding:0 16px!important;}
          div[style*="maxWidth: '1100px'"]{padding:0 16px!important;}
          div[style*="maxWidth: '860px'"]{grid-template-columns:1fr!important;border-radius:0!important;}
          div[style*="maxWidth: '920px'"]{grid-template-columns:1fr!important;border-radius:0!important;}
          div[style*="repeat(2, 1fr)"]{grid-template-columns:1fr!important;}
          h2[style*="clamp"]{font-size:clamp(28px,7vw,42px)!important;}
          h1[style*="clamp"]{font-size:clamp(36px,9vw,56px)!important;}
          img{max-width:100%!important;}
        }
      `}</style>
      <Nav />

      {/* Hero */}
      <section style={{ background: PAPER_2, padding: '80px 40px 60px', borderBottom: `1px solid ${INK}10` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '16px' }}>── Recetas</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(40px,6vw,64px)', margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Recetas con <em style={{ color: RED }}>Hardy.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
            Desayunos, bowls, snacks y preparaciones simples con crema de maní y miel. Ideas para cada momento del día.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section style={{ background: PAPER, borderBottom: `1px solid ${INK}10`, position: 'sticky', top: '56px', zIndex: 40 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '2px' }}>
          {CATEGORIAS.map(cat => (
            <button key={cat} onClick={() => setCategoriaActiva(cat)}
              style={{ padding: '16px 24px', background: categoriaActiva === cat ? INK : 'transparent',
                color: categoriaActiva === cat ? PAPER : '#555', border: 'none', cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em',
                textTransform: 'uppercase', transition: 'all 0.2s' }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de recetas */}
      <section style={{ padding: '60px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.1em' }}>
            {recetasFiltradas.length} recetas
          </div>
          <div className="hardy-recetas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {recetasFiltradas.map(r => (
              <div key={r.slug} className="receta-card" onClick={() => navigate(`/recetas/${r.slug}`)} style={{ background: PAPER, border: `1px solid ${INK}10`, overflow: 'hidden', transition: 'box-shadow 0.3s', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={r.imagen} alt={r.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} />
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Meta */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: RED }}>{r.categoria}</span>
                    <span style={{ color: '#ccc' }}>·</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#888' }}>⏱ {r.tiempo}</span>
                    <span style={{ color: '#ccc' }}>·</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#888' }}>👤 {r.porciones}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 500, margin: '0 0 8px', lineHeight: 1.2 }}>{r.titulo}</h3>
                  <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>{r.descripcion}</p>
                  {/* Productos */}
                  <div style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {r.productos.map((p, i) => (
                      <span key={i} style={{ background: PAPER_2, padding: '4px 10px', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>{p}</span>
                    ))}
                  </div>
                  <Link to={`/recetas/${r.slug}`} style={{ display: 'block', background: INK, color: PAPER, padding: '14px 20px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                    Ver receta →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
