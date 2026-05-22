import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, WA } from '../constants.js';

function BaldCard({ tag, title, img, desc, waText, hovered, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        background: hovered ? INK : PAPER_2,
        display: 'flex', flexDirection: 'column',
        transition: 'background 0.22s',
        cursor: 'default',
        borderTop: `3px solid ${hovered ? RED : 'transparent'}`,
      }}>
      {/* Imagen cuadrada compacta */}
      <div style={{
        aspectRatio: '1', overflow: 'hidden',
        background: hovered ? '#111' : '#e8e6e2',
        transition: 'background 0.22s',
      }}>
        <img src={img} alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: '24px' }} />
      </div>
      {/* Info */}
      <div style={{ padding: '24px' }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
          letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginBottom: '8px'
        }}>{tag}</div>
        <h3 style={{
          fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 500,
          margin: '0 0 10px', color: hovered ? PAPER : INK
        }}>{title}</h3>
        <p style={{
          fontSize: '13px', color: hovered ? '#aaa' : '#666',
          lineHeight: 1.55, margin: '0 0 20px', transition: 'color 0.22s'
        }}>{desc}</p>
        <a href={`${WA}?text=${encodeURIComponent(waText)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: hovered ? RED : 'transparent',
            color: hovered ? PAPER : RED,
            border: `1px solid ${RED}`,
            padding: '9px 18px',
            fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'background 0.22s, color 0.22s',
            whiteSpace: 'nowrap'
          }}>
          Consultar precio →
        </a>
      </div>
    </div>
  );
}

export default function AGranel() {
  const [hov, setHov] = useState(null);
  const [hovUso, setHovUso] = useState(null);

  const baldesMani = [
    {
      tag: 'Crema de Maní · 4,5 kg',
      title: 'Balde 4,5 kg',
      img: '/products/balde-45-front.png',
      desc: 'Para cafeterías, cocinas, gimnasios y repostería. 100% maní seleccionado, sin azúcar, sin aceites, sin conservantes.',
      waText: 'Hola Hardy, quiero info del balde de crema de maní de 4.5kg',
    },
    {
      tag: 'Crema de Maní · 23 kg',
      title: 'Balde 23 kg',
      img: '/products/balde-23-front.png',
      desc: 'Para producción continua, barras energéticas, helados y panificados. Mejor costo por kg de la línea.',
      waText: 'Hola Hardy, quiero info del balde de crema de maní de 23kg',
    },
  ];

  const baldesMiel = [
    {
      tag: 'Miel Líquida · 6 kg',
      title: 'Balde 6 kg',
      img: '/products/balde-miel-6-front.png',
      desc: 'Para cafeterías, restaurantes y pastelerías. Miel multifloral sin pasteurizar, sin procesar.',
      waText: 'Hola Hardy, quiero info de miel a granel 6kg',
    },
    {
      tag: 'Miel Líquida · 30 kg',
      title: 'Balde 30 kg',
      img: '/products/balde-miel-30-front.png',
      desc: 'Para producción a escala. Panificados, barras energéticas, bebidas. La mejor relación costo por kg.',
      waText: 'Hola Hardy, quiero info de miel a granel 30kg',
    },
  ];

  const usosMani = ['Bowls', 'Toppings', 'Rellenos', 'Barras', 'Repostería', 'Heladería', 'Cocina profesional', 'Producción'];
  const usosMiel = ['Endulzante natural', 'Panificados', 'Repostería', 'Bebidas', 'Salsas', 'Toppings', 'Producción'];

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }
        .granel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .granel-quien { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
        .uso-tag { transition: background 0.18s, color 0.18s; cursor: default; }
        @media (max-width: 900px) {
          .granel-grid { grid-template-columns: 1fr 1fr !important; }
          .granel-quien { grid-template-columns: 1fr 1fr !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 600px) {
          .granel-grid { grid-template-columns: 1fr !important; }
          .granel-quien { grid-template-columns: 1fr 1fr !important; }
          section { padding: 48px 20px !important; }
        }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: INK, color: PAPER, padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '20px' }}>── A granel</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(38px,6vw,68px)', margin: '0 0 20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Formatos a granel para<br /><em style={{ color: RED }}>uso profesional.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#bbb', maxWidth: '560px', lineHeight: 1.7, marginBottom: '36px' }}>
            Crema de maní y miel en volumen para gastronomía, repostería, cafeterías, producción e industria.
          </p>
          <a href={`${WA}?text=Hola%20Hardy,%20quiero%20información%20de%20productos%20a%20granel`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '13px 28px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Consultar por WhatsApp →
          </a>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section style={{ padding: '56px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '24px' }}>── ¿Para quién es?</div>
          <div className="granel-quien">
            {[
              { icon: '☕', t: 'Cafés y restaurants', d: 'Insumo para preparaciones, desayunos y carta.' },
              { icon: '🎂', t: 'Reposterías', d: 'Ingrediente para rellenos, coberturas y elaboraciones.' },
              { icon: '💪', t: 'Emprendedores', d: 'Barras, snacks proteicos y productos saludables.' },
              { icon: '🏭', t: 'Industria', d: 'Volúmenes altos para elaboración continua.' },
            ].map((c, i) => (
              <div key={i}
                onMouseEnter={() => setHovUso(10 + i)}
                onMouseLeave={() => setHovUso(null)}
                style={{
                  background: hovUso === 10 + i ? INK : PAPER,
                  color: hovUso === 10 + i ? PAPER : INK,
                  padding: '24px 20px', transition: 'background 0.22s',
                  borderTop: `3px solid ${hovUso === 10 + i ? RED : 'transparent'}`
                }}>
                <div style={{ fontSize: '22px', marginBottom: '12px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '16px', fontWeight: 500, margin: '0 0 6px' }}>{c.t}</h3>
                <p style={{ fontSize: '12px', color: hovUso === 10 + i ? '#aaa' : '#666', lineHeight: 1.5, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREMA DE MANÍ A GRANEL */}
      <section style={{ padding: '56px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '6px' }}>── Crema de maní a granel</div>
          <p style={{ fontSize: '13px', color: '#888', margin: '0 0 28px' }}>Para cocinas, cafeterías, repostería, heladerías y producción a escala.</p>
          <div className="granel-grid" style={{ marginBottom: '2px' }}>
            {baldesMani.map((b, i) => (
              <BaldCard key={i} {...b}
                hovered={hov === i}
                onEnter={() => setHov(i)}
                onLeave={() => setHov(null)} />
            ))}
          </div>
          {/* Usos chips */}
          <div style={{ background: PAPER_2, padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginRight: '8px' }}>Usos:</span>
            {usosMani.map((u, i) => (
              <span key={i} style={{ background: PAPER, padding: '4px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666' }}>{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MIEL A GRANEL */}
      <section style={{ padding: '56px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '6px' }}>── Miel a granel</div>
          <p style={{ fontSize: '13px', color: '#888', margin: '0 0 28px' }}>Para gastronomía, cafeterías, pastelería, producción y uso profesional.</p>
          <div className="granel-grid" style={{ marginBottom: '2px' }}>
            {baldesMiel.map((b, i) => (
              <BaldCard key={i} {...b}
                hovered={hov === 10 + i}
                onEnter={() => setHov(10 + i)}
                onLeave={() => setHov(null)} />
            ))}
          </div>
          <div style={{ background: PAPER, padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginRight: '8px' }}>Usos:</span>
            {usosMiel.map((u, i) => (
              <span key={i} style={{ background: PAPER_2, padding: '4px 12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#666' }}>{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 40px', background: INK, color: PAPER, textAlign: 'center' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(22px,4vw,32px)', fontWeight: 500, marginBottom: '14px' }}>
            ¿Querés consultar por volumen?
          </div>
          <p style={{ color: '#bbb', fontSize: '14px', marginBottom: '28px', lineHeight: 1.6 }}>
            Te asesoramos según el producto, el formato y la cantidad que necesitás.
          </p>
          <a href={`${WA}?text=Hola%20Hardy,%20quiero%20consultar%20por%20volumen%20a%20granel`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '13px 28px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Consultar por WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
