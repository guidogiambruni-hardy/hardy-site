import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, WA } from '../constants.js';

export default function Gastronomico() {
  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}`}</style>
      <Nav />

      {/* Hero */}
      <section style={{ background: INK, color: PAPER, padding: '100px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '20px' }}>── Gastronómico</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(42px,6vw,72px)', margin: '0 0 24px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Para cafés, restaurants<br />y <em style={{ color: RED }}>reposterías.</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#bbb', maxWidth: '620px', lineHeight: 1.7, marginBottom: '40px' }}>
            Crema de maní y miel en formato balde. Menor costo por kilo, calidad constante, sin aditivos. El insumo que tu cocina necesita.
          </p>
          <a href={`${WA}?text=Hola%20Hardy,%20tengo%20un%20negocio%20gastronómico%20y%20quiero%20información`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 32px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Consultar por WhatsApp →
          </a>
        </div>
      </section>

      {/* Productos */}
      <section style={{ padding: '80px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '32px' }}>── Nuestros formatos para vos</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            {/* Crema de maní */}
            <div style={{ background: INK, color: PAPER, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/lifestyle/balde-45-open.png" alt="Balde Crema de Maní 4,5kg" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Crema de Maní · 4,5 kg</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Balde mediano</h3>
                <p style={{ fontSize: '14px', color: '#bbb', lineHeight: 1.6, margin: '0 0 20px' }}>Para cocinas, cafeterías y pastelerías con consumo regular. Crema de maní 100% natural, sin azúcar ni aditivos.</p>
                <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20del%20balde%20de%20crema%20de%20maní%204.5kg`} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: RED, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1px solid ${RED}`, paddingBottom: '2px' }}>
                  Consultar precio →
                </a>
              </div>
            </div>
            {/* Miel */}
            <div style={{ background: PAPER, overflow: 'hidden', border: `1px solid ${INK}10` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/lifestyle/miel-liquida-open.png" alt="Miel Hardy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Miel · Formato gastronómico</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Miel pura</h3>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: '0 0 20px' }}>Miel multifloral 100% pura. Ideal para repostería, aderezos, tés y café. Sin azúcar agregada, sabor genuino.</p>
                <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20de%20miel%20en%20formato%20gastronómico`} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: RED, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1px solid ${RED}`, paddingBottom: '2px' }}>
                  Consultar precio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section style={{ padding: '80px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '40px', fontWeight: 500, margin: '0 0 48px' }}>¿Por qué elegir Hardy?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
            {[
              { n: '01', t: 'Menor costo por kilo', d: 'Comprás más y pagás menos por unidad. El formato ideal para uso frecuente.' },
              { n: '02', t: 'Sin aditivos, siempre', d: '100% maní o miel pura. Sin azúcar, sin aceite, sin conservantes. Lo mismo de siempre.' },
              { n: '03', t: 'Reposición rápida', d: 'Pedidos en 48-72hs hábiles. Coordinamos el envío según tu necesidad.' },
            ].map((f, i) => (
              <div key={i} style={{ background: PAPER_2, padding: '32px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', marginBottom: '16px' }}>{f.n}</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 500, margin: '0 0 12px' }}>{f.t}</h3>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: INK, color: PAPER, textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', fontWeight: 500, marginBottom: '16px' }}>¿Tu negocio usa crema de maní o miel?</div>
          <p style={{ color: '#bbb', fontSize: '16px', marginBottom: '32px', lineHeight: 1.6 }}>Contactanos y te armamos una propuesta según tu volumen de consumo.</p>
          <a href={`${WA}?text=Hola%20Hardy,%20tengo%20un%20negocio%20gastronómico%20y%20quiero%20una%20propuesta`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 40px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Escribir por WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
