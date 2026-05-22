import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RECETAS } from '../data/recetas.js';
import { RED, INK, PAPER, PAPER_2 } from '../constants.js';

export default function RecetaDetalle() {
  const { slug } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);
  const receta = RECETAS.find(r => r.slug === slug);

  if (!receta) {
    return (
      <div style={{ background: PAPER, minHeight: '100vh', fontFamily: 'Manrope, sans-serif' }}>
        <Nav />
        <div style={{ padding: '120px 40px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '40px' }}>Receta no encontrada</h1>
          <Link to="/recetas" style={{ color: RED }}>← Volver a recetas</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const dificultadColor = receta.dificultad === 'Fácil' ? '#22c55e' : receta.dificultad === 'Medio' ? '#f59e0b' : '#ef4444';

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }

        /* Layout del hero: 2 col desktop, 1 col mobile */
        .receta-hero-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
        }
        /* Layout ingredientes / preparación */
        .receta-steps-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
        }
        /* Macros: fila horizontal */
        .receta-macros {
          background: ${INK}; padding: 20px 24px; margin-bottom: 16px;
          display: flex; gap: 0; flex-wrap: nowrap;
        }
        .receta-macro-item {
          flex: 1; text-align: center; padding: 0 8px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .receta-macro-item:last-child { border-right: none; }

        @media (max-width: 900px) {
          .receta-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .receta-steps-grid { grid-template-columns: 1fr; gap: 40px; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 600px) {
          section { padding: 40px 20px !important; }
          h1 { font-size: clamp(28px, 8vw, 44px) !important; }
          /* Macros: 2x2 en mobile */
          .receta-macros { flex-wrap: wrap; gap: 2px; padding: 16px; }
          .receta-macro-item {
            flex: 0 0 calc(50% - 1px); border-right: none;
            padding: 12px 8px; background: rgba(255,255,255,0.05);
          }
        }
      `}</style>
      <Nav />

      {/* Volver */}
      <div style={{ background: PAPER_2, padding: '14px 40px', borderBottom: `1px solid ${INK}10` }}>
        <Link to="/recetas" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', textDecoration: 'none' }}>
          ← Volver a recetas
        </Link>
      </div>

      {/* Hero */}
      <section style={{ padding: '56px 40px', background: PAPER }}>
        <div className="receta-hero-grid">
          {/* Columna izquierda: info */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '16px' }}>── {receta.categoria}</div>
            <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(30px,4vw,52px)', margin: '0 0 16px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {receta.titulo}
            </h1>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, margin: '0 0 24px' }}>{receta.descripcion}</p>

            {/* Meta datos */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '28px', paddingBottom: '24px', borderBottom: `1px solid ${INK}10` }}>
              {[
                { icon: '⏱', label: 'Tiempo', val: receta.tiempo },
                { icon: '👤', label: 'Porciones', val: receta.porciones },
                { icon: '📊', label: 'Dificultad', val: receta.dificultad, color: dificultadColor },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '16px' }}>{m.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.label}</div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '14px', color: m.color || INK }}>{m.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Productos Hardy */}
            <div style={{ background: INK, color: PAPER, padding: '24px 28px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '14px' }}>Productos Hardy</div>
              {receta.productos.map((p, i) => (
                <div key={i} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', fontWeight: 600, color: PAPER, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: RED, fontSize: '11px' }}>✓</span> {p}
                </div>
              ))}
              <Link to="/tienda" style={{ display: 'block', background: RED, color: PAPER, padding: '13px 20px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', marginTop: '18px' }}>
                Ver productos →
              </Link>
            </div>
          </div>

          {/* Columna derecha: imagen + macros */}
          <div>
            {/* Macros primero en desktop (arriba de la imagen) */}
            {receta.macros && (
              <div className="receta-macros">
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', width: '100%', marginBottom: '12px' }}>── Macros aprox. por porción*</div>
                {[
                  { label: 'Calorías', val: `${receta.macros.kcal}`, unit: 'kcal' },
                  { label: 'Proteínas', val: `${receta.macros.proteinas} g` },
                  { label: 'Carbos', val: `${receta.macros.carbos} g` },
                  { label: 'Grasas', val: `${receta.macros.grasas} g` },
                ].map((m, i) => (
                  <div key={i} className="receta-macro-item">
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 500, color: PAPER, lineHeight: 1 }}>{m.val}</div>
                    {m.unit && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#aaa', letterSpacing: '0.1em' }}>{m.unit}</div>}
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{m.label}</div>
                  </div>
                ))}
                <div style={{ width: '100%', fontFamily: 'Manrope, sans-serif', fontSize: '10px', color: '#555', marginTop: '10px' }}>* Valores estimados.</div>
              </div>
            )}
            <img src={receta.imagen} alt={receta.titulo} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Ingredientes y preparación */}
      <section style={{ padding: '56px 40px', background: PAPER_2 }}>
        <div className="receta-steps-grid">
          {/* Ingredientes */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '24px' }}>── Ingredientes</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {receta.ingredientes.map((ing, i) => (
                <li key={i} style={{ padding: '12px 0', borderBottom: `1px solid ${INK}15`, display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                  <span style={{ width: '8px', height: '8px', background: RED, display: 'inline-block', flexShrink: 0 }} />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Preparación */}
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '24px' }}>── Preparación</div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {receta.preparacion.map((paso, i) => (
                <li key={i} style={{ padding: '16px 0', borderBottom: `1px solid ${INK}15`, display: 'grid', gridTemplateColumns: '40px 1fr', gap: '12px', alignItems: 'start' }}>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, color: RED, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, paddingTop: '4px' }}>{paso}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Más recetas */}
      <section style={{ padding: '56px 40px', background: PAPER, textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(22px,4vw,28px)', fontWeight: 500, marginBottom: '14px' }}>¿Querés más ideas?</div>
          <p style={{ color: '#555', fontSize: '14px', marginBottom: '24px' }}>Explorá todas las recetas con crema de maní y miel Hardy.</p>
          <Link to="/recetas" style={{ display: 'inline-block', background: INK, color: PAPER, padding: '13px 28px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Ver todas las recetas →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
