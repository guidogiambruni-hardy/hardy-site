import React from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, WA } from '../constants.js';

export default function Productor() {
  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}`}</style>
      <Nav />

      <section style={{ background: INK, color: PAPER, padding: '100px 40px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '20px' }}>── Productores</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(42px,6vw,72px)', margin: '0 0 24px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Insumo de calidad<br />para tu <em style={{ color: RED }}>producción.</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#bbb', maxWidth: '620px', lineHeight: 1.7, marginBottom: '40px' }}>
            Crema de maní y miel pura en formatos a granel. El ingrediente limpio que tu elaboración necesita — sin aditivos, sin azúcar agregada, sin vueltas.
          </p>
          <a href={`${WA}?text=Hola%20Hardy,%20soy%20productor%20y%20quiero%20información%20de%20formatos%20a%20granel`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 32px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Consultar por WhatsApp →
          </a>
        </div>
      </section>

      {/* Productos */}
      <section style={{ padding: '80px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '32px' }}>── Formatos para producción</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
            <div style={{ background: INK, color: PAPER, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/lifestyle/balde-23-open.png" alt="Balde 23kg" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Crema de Maní · 23 kg</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Balde industrial</h3>
                <p style={{ fontSize: '14px', color: '#bbb', lineHeight: 1.6, margin: '0 0 20px' }}>Para fabricantes de barras, helados, repostería profesional y cualquier elaboración a escala. Máximo rendimiento por kilo.</p>
                <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20del%20balde%20de%2023kg`} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: RED, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: `1px solid ${RED}`, paddingBottom: '2px' }}>
                  Consultar precio →
                </a>
              </div>
            </div>
            <div style={{ background: PAPER, overflow: 'hidden', border: `1px solid ${INK}10` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img src="/lifestyle/miel-liquida-open.png" alt="Miel granel" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: RED, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Miel · Formato producción</div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500, margin: '0 0 12px' }}>Miel a granel</h3>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.6, margin: '0 0 20px' }}>Miel pura multifloral para elaboración de productos. Sin aditivos, sin azúcar agregada. Ingrediente limpio para tu receta.</p>
                <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20de%20miel%20a%20granel%20para%20producción`} target="_blank" rel="noopener noreferrer"
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
            {[
              { n: '01', t: 'Máximo rendimiento', d: 'El mejor costo por kilo de todo nuestro portfolio. Para producción continua.' },
              { n: '02', t: 'Ingrediente limpio', d: 'Sin azúcar agregada, sin aceite, sin conservantes. Lo que dice la etiqueta es lo que hay adentro.' },
              { n: '03', t: 'Entrega coordinada', d: 'Coordinamos la logística según tu volumen y frecuencia de pedido.' },
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

      <section style={{ padding: '80px 40px', background: INK, color: PAPER, textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Fraunces, serif', fontSize: '36px', fontWeight: 500, marginBottom: '16px' }}>¿Usás crema de maní o miel en tu producción?</div>
          <p style={{ color: '#bbb', fontSize: '16px', marginBottom: '32px', lineHeight: 1.6 }}>Hablemos de volumen, frecuencia y logística. Te armamos una propuesta para ambos productos.</p>
          <a href={`${WA}?text=Hola%20Hardy,%20soy%20productor%20y%20quiero%20una%20propuesta%20para%20crema%20de%20maní%20y%20miel`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: RED, color: PAPER, padding: '16px 40px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Escribir por WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
