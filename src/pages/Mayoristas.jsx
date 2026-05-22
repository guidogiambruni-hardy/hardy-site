import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, WA, ESCALAS } from '../constants.js';

export default function Mayoristas() {
  const [hoveredEscala, setHoveredEscala] = useState(null);
  const [hoveredBeneficio, setHoveredBeneficio] = useState(null);
  const [hoveredProducto, setHoveredProducto] = useState(null);

  return (
    <div style={{ background:PAPER, color:INK, fontFamily:'Manrope, sans-serif', minHeight:'100vh' }}>
      <style>{`
        *{box-sizing:border-box;}
        .may-hero-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; max-width:1100px; margin:0 auto; }
        .may-productos-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
        .may-dist-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; max-width:1100px; margin:0 auto; }
        .may-dist-boxes { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .may-dist-boxes2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:900px){
          .may-hero-grid { grid-template-columns:1fr; gap:32px; }
          .may-hero-grid > div:last-child { display:none; }
          .may-productos-grid { grid-template-columns:1fr; }
          .may-dist-grid { grid-template-columns:1fr; gap:24px; }
          .may-dist-boxes { grid-template-columns:1fr 1fr; }
          section { padding-left:24px!important; padding-right:24px!important; }
        }
        @media(max-width:600px){
          section { padding-top:48px!important; padding-bottom:48px!important; padding-left:20px!important; padding-right:20px!important; }
          .may-hero-grid { gap:24px; }
          .may-dist-boxes { grid-template-columns:1fr 1fr; gap:8px; }
          h1 { font-size:clamp(36px,10vw,56px)!important; }
          h2 { font-size:clamp(24px,7vw,36px)!important; }
        }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background:INK, color:PAPER, padding:'80px 40px' }}>
        <div className="may-hero-grid">
          <div>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.25em', color:RED, textTransform:'uppercase', marginBottom:'20px' }}>── Mayoristas y distribuidores</div>
            <h1 style={{ fontFamily:'Fraunces, serif', fontSize:'clamp(42px,6vw,72px)', margin:'0 0 24px', fontWeight:500, letterSpacing:'-0.02em', lineHeight:1.05 }}>
              Sumá Hardy<br /><em style={{ color:RED }}>a tu negocio.</em>
            </h1>
            <p style={{ fontSize:'16px', color:'#bbb', maxWidth:'480px', lineHeight:1.7, marginBottom:'36px' }}>
              Cajas de crema de maní y miel para dietéticas, gimnasios, cafeterías, tiendas y distribuidores. Precios escalonados desde 3 cajas.
            </p>
            <a href={`${WA}?text=Hola%20Hardy,%20quiero%20información%20mayorista`} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-block', background:RED, color:PAPER, padding:'14px 28px', textDecoration:'none', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
              Consultar lista mayorista →
            </a>
          </div>
          <div style={{ overflow:'hidden', borderRadius:'2px' }}>
            <img src="/lifestyle/caja-mayoristas.png" alt="Caja HARDY" style={{ width:'100%', display:'block', objectFit:'cover' }} />
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section style={{ padding:'64px 40px', background:PAPER_2 }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.25em', color:RED, textTransform:'uppercase', marginBottom:'24px' }}>── Qué vendés</div>
          <div className="may-productos-grid">
            {[
              { tag:'Crema de Maní', title:'Natural y Crunchy', desc:'Frascos 380g en cajas de 15u. Alta rotación en dietéticas y gimnasios.', sub:'2 variedades · 380g · 15u/caja', idx:0 },
              { tag:'Miel', title:'Líquida y Sólida', desc:'Frascos 500g de miel pura multifloral. Sin azúcar agregada, sin aditivos.', sub:'2 variedades · 500g · 15u/caja', idx:1 },
            ].map(p => (
              <div key={p.idx}
                onMouseEnter={() => setHoveredProducto(p.idx)}
                onMouseLeave={() => setHoveredProducto(null)}
                style={{ background: hoveredProducto === p.idx ? INK : PAPER_2, color: hoveredProducto === p.idx ? PAPER : INK,
                  padding:'32px', transition:'background 0.22s, color 0.22s',
                  borderTop:`3px solid ${hoveredProducto === p.idx ? RED : 'transparent'}` }}>
                <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color:RED, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'10px' }}>{p.tag}</div>
                <h3 style={{ fontFamily:'Fraunces, serif', fontSize:'26px', fontWeight:500, margin:'0 0 12px' }}>{p.title}</h3>
                <p style={{ fontSize:'13px', color: hoveredProducto === p.idx ? '#bbb' : '#555', lineHeight:1.6, margin:'0 0 16px' }}>{p.desc}</p>
                <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color: hoveredProducto === p.idx ? '#888' : '#999', letterSpacing:'0.15em', textTransform:'uppercase' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCALAS */}
      <section style={{ padding:'64px 40px', background:PAPER }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'32px', flexWrap:'wrap', gap:'12px' }}>
            <div>
              <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.25em', textTransform:'uppercase', color:RED, marginBottom:'8px' }}>── Escalas</div>
              <h2 style={{ fontFamily:'Fraunces, serif', fontSize:'clamp(24px,4vw,36px)', fontWeight:500, margin:0 }}>Precios por volumen</h2>
            </div>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'#999' }}>1 caja = 15 unidades</div>
          </div>
          <div className="hardy-grid-5" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'2px' }}>
            {ESCALAS.map((s, i) => {
              const active = hoveredEscala === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHoveredEscala(i)}
                  onMouseLeave={() => setHoveredEscala(null)}
                  style={{ background: active ? INK : PAPER_2, color: active ? PAPER : INK,
                    padding:'28px 20px', borderTop:`3px solid ${active ? RED : 'transparent'}`,
                    textAlign:'center',
                    transition:'background 0.22s, color 0.22s', cursor:'default' }}>
                  <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color: active ? RED : '#999', marginBottom:'10px' }}>Desde</div>
                  <div style={{ fontFamily:'Fraunces, serif', fontSize:'32px', fontWeight:500, lineHeight:1, marginBottom:'4px' }}>{s.big}</div>
                  <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color: active ? '#bbb' : '#888', marginBottom:'16px' }}>{s.sub}</div>
                  <div style={{ width:'24px', height:'2px', background: active ? RED : INK + '30', margin:'0 auto 14px' }} />
                  <div style={{ fontFamily:'Fraunces, serif', fontSize:'15px', fontWeight:500 }}>{s.name}</div>
                  <div style={{ fontSize:'11px', color: active ? '#bbb' : '#777', marginTop:'4px', lineHeight:1.4 }}>{s.target}</div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop:'16px', padding:'16px 20px', background:PAPER_2, fontSize:'13px', color:'#555', textAlign:'center', lineHeight:1.5 }}>
            <em>Más volumen = mejor precio por unidad. ¿Movés mucho? <strong style={{ color:INK }}>Hablemos.</strong></em>
          </div>
        </div>
      </section>

      {/* DISTRIBUIDORES */}
      <section style={{ padding:'64px 40px', background:PAPER_2 }}>
        <div className="may-dist-grid">
          <div>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.25em', color:RED, textTransform:'uppercase', marginBottom:'16px' }}>── Para distribuidores</div>
            <h2 style={{ fontFamily:'Fraunces, serif', fontSize:'clamp(24px,4vw,36px)', fontWeight:500, margin:'0 0 12px', lineHeight:1.1 }}>Distribuí Hardy en tu zona</h2>
            <p style={{ fontSize:'14px', color:'#555', lineHeight:1.6, marginBottom:'20px' }}>Si ya tenés una red de distribución, Hardy es el complemento ideal. Dos productos de alta demanda, una sola marca.</p>
            <div className="may-dist-boxes2">
              {[{ v:'20 cajas', l:'Volumen entrada' }, { v:'30+ cajas', l:'Volumen creciente' }].map((t, i) => (
                <div key={i} style={{ background:PAPER, padding:'14px 16px' }}>
                  <div style={{ fontFamily:'Fraunces, serif', fontSize:'20px', fontWeight:500 }}>{t.v}</div>
                  <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color:'#888', letterSpacing:'0.15em', textTransform:'uppercase', marginTop:'4px' }}>{t.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background:INK, color:PAPER, padding:'40px', textAlign:'center' }}>
            <div style={{ fontFamily:'Fraunces, serif', fontSize:'24px', fontWeight:500, marginBottom:'12px' }}>¿Listo para vender Hardy?</div>
            <p style={{ fontSize:'13px', color:'#bbb', marginBottom:'24px', lineHeight:1.6 }}>Escribinos y te enviamos lista de precios y condiciones mayoristas.</p>
            <a href={`${WA}?text=Hola%20Hardy,%20quiero%20información%20mayorista`} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-block', background:RED, color:PAPER, padding:'14px 24px', textDecoration:'none', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
              Escribir por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding:'64px 40px', background:PAPER }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto' }}>
          <h2 style={{ fontFamily:'Fraunces, serif', fontSize:'clamp(22px,4vw,30px)', fontWeight:500, margin:'0 0 32px' }}>Beneficios al sumarte:</h2>
          <div className="hardy-grid-3" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2px' }}>
            {[
              { n:'01', t:'Precio escalonado', d:'Más cantidad, mejor precio por unidad.' },
              { n:'02', t:'Reposición rápida', d:'48-72hs. Coordinamos el envío según tu necesidad.' },
              { n:'03', t:'Soporte directo', d:'Un contacto para pedidos y logística.' },
              { n:'04', t:'Un solo proveedor', d:'Crema de maní y miel del mismo lugar.' },
              { n:'05', t:'10 años de marca', d:'Desde 2015. El consumidor ya busca HARDY por nombre.' },
            ].map((f,i) => (
              <div key={i}
                onMouseEnter={() => setHoveredBeneficio(i)}
                onMouseLeave={() => setHoveredBeneficio(null)}
                style={{ background: hoveredBeneficio === i ? INK : PAPER_2,
                  color: hoveredBeneficio === i ? PAPER : INK,
                  padding:'24px', transition:'background 0.22s, color 0.22s',
                  borderTop: `3px solid ${hoveredBeneficio === i ? RED : 'transparent'}`, cursor:'default' }}>
                <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'10px', color:RED, letterSpacing:'0.2em', marginBottom:'10px' }}>{f.n}</div>
                <h3 style={{ fontFamily:'Fraunces, serif', fontSize:'16px', fontWeight:500, margin:'0 0 8px' }}>{f.t}</h3>
                <p style={{ fontSize:'13px', color: hoveredBeneficio === i ? '#bbb' : '#555', lineHeight:1.5, margin:0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:'64px 40px', background:INK, color:PAPER, textAlign:'center' }}>
        <div style={{ maxWidth:'500px', margin:'0 auto' }}>
          <div style={{ fontFamily:'Fraunces, serif', fontSize:'clamp(24px,5vw,36px)', fontWeight:500, marginBottom:'14px' }}>¿Hablamos?</div>
          <p style={{ color:'#bbb', fontSize:'15px', marginBottom:'28px', lineHeight:1.6 }}>Escribinos y te respondemos con precios y condiciones para tu perfil.</p>
          <a href={`${WA}?text=Hola%20Hardy,%20quiero%20información%20para%20revender`} target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-block', background:RED, color:PAPER, padding:'14px 32px', textDecoration:'none', fontFamily:'JetBrains Mono, monospace', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
            Escribir por WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
