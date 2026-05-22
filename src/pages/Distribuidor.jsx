import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, WA, ESCALAS } from '../constants.js';

export default function Distribuidor() {
  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}`}</style>
      <Nav />

      <section style={{ background: INK, color: PAPER, padding: '100px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '20px' }}>── Distribuidores</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(42px,6vw,72px)', margin: '0 0 24px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Distribuí Hardy<br /><em style={{ color: RED }}>en tu zona.</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#bbb', maxWidth: '620px', lineHeight: 1.7, marginBottom: '40px' }}>
            Crema de maní y miel Hardy para tu portfolio de distribución. Dos productos premium, una sola marca, precio competitivo por volumen.
          </p>
          <a href={`${WA}?text=Hola%20Hardy,%20soy%20distribuidor%20y%20quiero%20información`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 32px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Consultar por WhatsApp →
          </a>
        </div>
      </section>

      {/* Productos */}
      <section style={{ padding: '80px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '32px' }}>── Qué distribuís</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '48px' }}>
            <div style={{ background: INK, color: PAPER, padding: '40px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Crema de Maní</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Natural y Crunchy</h3>
              <p style={{ fontSize: '14px', color: '#bbb', lineHeight: 1.6, margin: 0 }}>Frascos 380g y baldes 4,5kg y 23kg. El producto más vendido de la línea. Alta rotación en dietéticas, gimnasios y tiendas naturales.</p>
            </div>
            <div style={{ background: PAPER, padding: '40px', border: `1px solid ${INK}10` }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Miel</div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Líquida y Sólida</h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: 0 }}>Frascos 500g y formatos a granel. Miel pura multifloral, sin aditivos. Complemento natural de la crema de maní en el mismo cliente.</p>
            </div>
          </div>

          {/* Escala */}
          <div style={{ background: PAPER, padding: '40px', borderTop: `4px solid ${RED}` }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#666', marginBottom: '32px' }}>Escala para distribuidores</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
              {[{ l: 'Entrada distribuidor', v: '30 cajas', s: '450 unidades' }, { l: 'Volumen medio', v: '60 cajas', s: '900 unidades' }, { l: 'Volumen alto', v: '+100 cajas', s: 'Precio a negociar' }].map((t, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>{t.l}</div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '32px', fontWeight: 500, lineHeight: 1 }}>{t.v}</div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{t.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: INK, color: PAPER, textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', fontWeight: 500, marginBottom: '16px' }}>Hablemos de tu zona</div>
          <p style={{ color: '#bbb', fontSize: '16px', marginBottom: '32px', lineHeight: 1.6 }}>Cada zona es distinta. Contactanos y armamos una propuesta personalizada para crema de maní y miel.</p>
          <a href={`${WA}?text=Hola%20Hardy,%20quiero%20ser%20distribuidor%20de%20crema%20de%20maní%20y%20miel`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 40px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Escribir por WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
