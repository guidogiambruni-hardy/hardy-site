import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus, MessageCircle } from 'lucide-react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { RED, INK, PAPER, PAPER_2, ARS, WA, PRODUCTS } from '../constants.js';

function ProductCard({ p, onAdd, onOpenModal }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="hardy-product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpenModal(p)}
      style={{ background: hovered ? INK : PAPER_2,
        border: `1px solid ${hovered ? 'transparent' : INK + '10'}`,
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        cursor: 'pointer', transition: 'background 0.22s', minHeight: '100%' }}>
      {/* Imagen — clickeable junto con todo el card */}
      <div style={{ position: 'relative', background: hovered ? '#1a1a1a' : '#f5f5f3', transition: 'background 0.22s' }}>
        <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
          <img src={p.images[imgIdx]} alt={`${p.name} ${p.variant}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: '16px' }} />
        </div>
        {/* Thumbnails */}
        <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: '6px' }}>
          {p.images.map((src, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
              style={{ width: '26px', height: '26px', padding: 0,
                border: `2px solid ${i === imgIdx ? (hovered ? '#fff' : INK) : '#ccc'}`,
                background: hovered ? '#222' : '#fff', cursor: 'pointer', overflow: 'hidden', borderRadius: '2px' }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </button>
          ))}
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
          letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginBottom: '4px' }}>
          {p.variant} · {p.size}
        </div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 500, marginBottom: '6px',
          color: hovered ? PAPER : INK }}>{p.name}</div>
        <div style={{ fontSize: '13px', color: hovered ? '#aaa' : '#666', marginBottom: '16px', lineHeight: 1.5 }}>{p.desc}</div>
        <div style={{ flex: 1 }} />
        <div style={{ paddingTop: '14px', borderTop: `1px solid ${hovered ? 'rgba(255,255,255,0.15)' : INK + '15'}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {p.price ? (
            <>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 500,
                whiteSpace: 'nowrap', color: hovered ? PAPER : INK }}>{ARS(p.price)}</div>
              <button className="hardy-add-btn" onClick={(e) => { e.stopPropagation(); onAdd(p.id); }}
                style={{ background: RED, color: PAPER, border: 'none', padding: '10px 14px', cursor: 'pointer',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                  letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span className="add-btn-full">+ Agregar</span>
                <span className="add-btn-short">+</span>
              </button>
            </>
          ) : (
            <>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                color: hovered ? '#aaa' : '#888', letterSpacing: '0.1em' }}>A consultar</span>
              <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20del%20${encodeURIComponent(p.name + ' ' + p.size)}`}
                target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                style={{ background: RED, color: PAPER, border: 'none', padding: '10px 14px',
                  cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                  letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Consultar →
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Consumidor() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  const frascos = PRODUCTS.filter(p => p.line === 'frasco');
  const baldesMani = PRODUCTS.filter(p => p.line === 'balde' && !p.id.startsWith('balde-miel'));
  const baldesMiel = PRODUCTS.filter(p => p.id.startsWith('balde-miel'));

  const cartItems = useMemo(() => Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return null;
    return { ...p, qty, subtotal: p.price * qty };
  }).filter(Boolean), [cart]);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cartItems.reduce((s, i) => s + i.subtotal, 0);
  const addToCart = (id) => { setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 })); setCartOpen(true); };
  const updateQty = (id, delta) => setCart(c => {
    const n = { ...c }; const v = (n[id] || 0) + delta;
    if (v <= 0) delete n[id]; else n[id] = v; return n;
  });
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-preference', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems })
      });
      const data = await response.json();
      if (!response.ok) { alert('No pudimos iniciar el checkout.'); return; }
      window.location.href = data.init_point;
    } catch(e) { alert('Error iniciando Mercado Pago.'); }
  };

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');*{box-sizing:border-box;}
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
          div[style*="maxWidth: '860px'"]{grid-template-columns:1fr!important;border-radius:0!important;max-height:100dvh!important;overflow-y:auto!important;}
          div[style*="maxWidth: '920px'"]{grid-template-columns:1fr!important;border-radius:0!important;max-height:100dvh!important;overflow-y:auto!important;}
          div[style*="repeat(2, 1fr)"]{grid-template-columns:1fr!important;}
          h2[style*="clamp"]{font-size:clamp(28px,7vw,42px)!important;}
          h1[style*="clamp"]{font-size:clamp(36px,9vw,56px)!important;}
          img{max-width:100%!important;}
          /* Tabs tienda */
          button[style*="letterSpacing"]{font-size:10px!important;padding:10px 14px!important;}
        }
      `}</style>
      <Nav cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      {/* Hero */}
      <section style={{ background: PAPER_2, padding: '60px 40px 40px', borderBottom: `1px solid ${INK}10` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '12px' }}>── Tienda</div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px,5vw,56px)', margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
            Comprá <em style={{ color: RED }}>directo.</em>
          </h1>
          <p style={{ color: '#666', fontSize: '16px', marginTop: '12px', marginBottom: 0 }}>Enviamos a todo el país. Coordinamos el envío según tu zona y volumen. Pagás con Mercado Pago.</p>
        </div>
      </section>

      {/* Sin tabs: todo en una sola sección */}

      {/* Productos unificados — grilla 4×4 simétrica */}
      <section style={{ padding: '60px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* FRASCOS — 4 col */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '4px' }}>── Frascos</div>
            <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Crema de maní y miel · 380g–500g · Por unidad</p>
          </div>
          <div className="hardy-tienda-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', marginBottom: '2px' }}>
            {frascos.map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} onOpenModal={(prod) => { setModalProduct(prod); setModalImgIdx(0); }} />)}
          </div>

          {/* BALDES — mismo grid 4 col, misma card */}
          <div style={{ marginTop: '40px', marginBottom: '20px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: RED, marginBottom: '4px' }}>── Baldes</div>
            <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Crema de maní y miel a granel · Uso gastronómico, producción y reventa</p>
          </div>
          <div className="hardy-tienda-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px' }}>
            {baldesMani.map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} onOpenModal={(prod) => { setModalProduct(prod); setModalImgIdx(0); }} />)}
            {baldesMiel.map(p => <ProductCard key={p.id} p={p} onAdd={addToCart} onOpenModal={(prod) => { setModalProduct(prod); setModalImgIdx(0); }} />)}
          </div>
        </div>
      </section>

      {/* ENVÍOS */}
      <section style={{ background: INK, color: PAPER, padding: '64px 40px' }}>
        <div className="hardy-envios-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '16px' }}>── Envíos</div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 500, margin: '0 0 16px', lineHeight: 1.1 }}>
              Coordinamos el envío <em style={{ color: RED }}>para vos.</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.7, margin: '0 0 12px' }}>
              Enviamos a todo el país. El costo y el tiempo de entrega dependen de tu zona, el volumen del pedido y la urgencia — por eso lo coordinamos personalmente.
            </p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.7, margin: '0 0 28px' }}>
              Antes de finalizar tu compra, escribinos y te damos el detalle exacto del envío sin sorpresas.
            </p>
            <a href={`${WA}?text=Hola%20Hardy!%20Quiero%20saber%20el%20costo%20de%20envío%20a%20mi%20zona`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: RED, color: PAPER, padding: '14px 28px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Consultar envío →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { icon: '📍', t: 'Todo el país', d: 'Llegamos a cualquier provincia. Coordinamos directamente con vos.' },
              { icon: '⚡', t: 'Según tu urgencia', d: 'Si necesitás el pedido rápido, lo resolvemos. Hablamos y buscamos la mejor opción.' },
              { icon: '📦', t: 'Según tu volumen', d: 'El envío se calcula en función de lo que pedís — frascos, baldes o cajas mayoristas.' },
              { icon: '💬', t: 'Sin sorpresas', d: 'Te confirmamos el costo antes de que pagues. Nada oculto, todo claro.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>{f.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{f.t}</div>
                  <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.5 }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp */}
      <a href={`${WA}?text=Hola%20Hardy`} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 90,
          background: '#25D366', color: '#fff', width: '56px', height: '56px',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
        <MessageCircle size={24} fill="#fff" strokeWidth={0} />
      </a>

      {/* Cart */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100 }} />
          <aside style={{ position: 'fixed', right: 0, top: 0, bottom: 0, width: 'min(420px,100vw)', background: PAPER, zIndex: 101, display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: INK, color: PAPER, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '20px', letterSpacing: '0.04em' }}>TU BOLSA</div>
              <button onClick={() => setCartOpen(false)} style={{ background: 'transparent', border: 'none', color: PAPER, cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ flex: 1, overflow: 'auto', padding: '20px 28px' }}>
              {cartItems.length === 0 && (
                <div style={{ textAlign: 'center', color: '#888', padding: '60px 0', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Tu bolsa está vacía</div>
              )}
              {cartItems.map(it => (
                <div key={it.id} style={{ display: 'flex', gap: '14px', paddingBottom: '18px', marginBottom: '18px', borderBottom: `1px solid ${INK}15` }}>
                  <div style={{ width: '64px', height: '64px', background: '#f5f5f5', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={it.images[0]} alt={it.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.15em', color: RED, textTransform: 'uppercase' }}>{it.variant} · {it.size}</div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: '15px', fontWeight: 500, marginTop: '2px' }}>{it.name}</div>
                    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => updateQty(it.id, -1)} style={{ width: '22px', height: '22px', background: PAPER_2, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Minus size={11} /></button>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', minWidth: '18px', textAlign: 'center' }}>{it.qty}</span>
                      <button onClick={() => updateQty(it.id, 1)} style={{ width: '22px', height: '22px', background: PAPER_2, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plus size={11} /></button>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '14px' }}>{ARS(it.subtotal)}</div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 && (
              <div style={{ padding: '20px 28px', borderTop: `1px solid ${INK}15` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Total</span>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500 }}>{ARS(cartTotal)}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutStep('checkout'); }}
                  style={{ width: '100%', background: RED, color: PAPER, border: 'none', padding: '18px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Finalizar compra →
                </button>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '10px', color: '#888', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>Mercado Pago · Envío coordinado</div>
              </div>
            )}
          </aside>
        </>
      )}


      {/* MODAL DETALLE PRODUCTO */}
      {modalProduct && (
        <div onClick={() => setModalProduct(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
            overflowY: 'auto' }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: INK, maxWidth: '920px', width: '100%', display: 'grid',
              gridTemplateColumns: '1fr 1fr', borderRadius: '2px', overflow: 'hidden',
              maxHeight: '92vh', position: 'relative' }}>
            {/* Imagen con selector */}
            <div style={{ display: 'flex', flexDirection: 'column', background: '#111' }}>
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative', minHeight: '320px' }}>
                <img src={modalProduct.images[modalImgIdx]} alt={modalProduct.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block',
                    padding: '24px', transition: 'opacity 0.2s' }} />
              </div>
              {/* Miniaturas */}
              <div style={{ display: 'flex', gap: '8px', padding: '12px 16px',
                borderTop: '1px solid rgba(255,255,255,0.08)', justifyContent: 'center' }}>
                {modalProduct.images.map((src, i) => (
                  <button key={i} onClick={() => setModalImgIdx(i)}
                    style={{ width: '52px', height: '52px', padding: '4px',
                      border: `2px solid ${i === modalImgIdx ? RED : 'rgba(255,255,255,0.2)'}`,
                      background: '#1a1a1a', cursor: 'pointer', borderRadius: '2px', overflow: 'hidden' }}>
                    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </button>
                ))}
              </div>
            </div>
            {/* Contenido */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', overflowY: 'auto' }}>
              <div>
                {/* X cerrar */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <button onClick={() => setModalProduct(null)}
                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
                      width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer',
                      fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    ×
                  </button>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                  letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '6px' }}>
                  {modalProduct.variant} · {modalProduct.size}
                </div>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(20px,2.5vw,28px)',
                  color: '#fff', margin: '0 0 8px', fontWeight: 500, lineHeight: 1.1 }}>
                  {modalProduct.name}
                </h3>
                {modalProduct.tagline && (
                  <p style={{ fontFamily: 'Fraunces, serif', fontSize: '13px', color: RED,
                    fontStyle: 'italic', margin: '0 0 14px' }}>"{modalProduct.tagline}"</p>
                )}
                {modalProduct.detail && (
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.68)',
                    lineHeight: 1.75, margin: '0 0 16px', fontFamily: 'Manrope, sans-serif' }}>
                    {modalProduct.detail}
                  </p>
                )}
                {modalProduct.diferencial && (
                  <div style={{ borderLeft: `2px solid ${RED}`, paddingLeft: '12px',
                    background: 'rgba(192,23,30,0.08)', padding: '8px 12px', marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                      color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>
                      {modalProduct.diferencial}
                    </span>
                  </div>
                )}
                {/* Tabla nutricional */}
                {modalProduct.nutri && (
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                      letterSpacing: '0.2em', color: RED, textTransform: 'uppercase',
                      marginBottom: '8px' }}>{`── Información nutricional · ${modalProduct.nutriLabel || 'por porción'}`}</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Manrope, sans-serif' }}>
                      {modalProduct.nutri.map(([k, v], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)',
                          background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                          <td style={{ padding: '6px 8px', fontSize: '12px',
                            color: 'rgba(255,255,255,0.55)' }}>{k}</td>
                          <td style={{ padding: '6px 8px', fontSize: '12px',
                            color: '#fff', textAlign: 'right', fontWeight: 500 }}>{v}</td>
                        </tr>
                      ))}
                    </table>
                  </div>
                )}
              </div>
              <div>
                {modalProduct.price ? (
                  <>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', color: '#fff',
                      fontWeight: 500, marginBottom: '14px', letterSpacing: '-0.02em' }}>
                      {ARS(modalProduct.price)}
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                        color: 'rgba(255,255,255,0.35)', marginLeft: '8px', letterSpacing: '0.1em' }}>
                        + IVA
                      </span>
                    </div>
                    <button onClick={() => { addToCart(modalProduct.id); setModalProduct(null); }}
                      style={{ width: '100%', background: RED, color: '#fff', border: 'none',
                        padding: '15px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      + Agregar al carrito
                    </button>
                  </>
                ) : (
                  <a href={`${WA}?text=Hola%20Hardy,%20quiero%20info%20del%20${encodeURIComponent(modalProduct.name + ' ' + modalProduct.size)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', width: '100%', background: '#25D366', color: '#fff',
                      border: 'none', padding: '15px', cursor: 'pointer',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                      letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
                    Consultar por WhatsApp →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {checkoutStep === 'checkout' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.95)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ background: PAPER, padding: '56px', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '10px' }}>── Checkout</div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', margin: '0 0 20px', fontWeight: 500 }}>Finalizá tu compra</h3>
            <div style={{ background: PAPER_2, padding: '16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', textAlign: 'left', marginBottom: '24px', lineHeight: 1.8 }}>
              Total: <strong>{ARS(cartTotal)}</strong><br />
              Envío: coordinado según zona y urgencia<br />
              Método: Mercado Pago
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleCheckout} style={{ background: RED, color: PAPER, border: 'none', padding: '14px 28px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Pagar con Mercado Pago</button>
              <button onClick={() => setCheckoutStep(null)} style={{ background: INK, color: PAPER, border: 'none', padding: '14px 28px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Volver</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
