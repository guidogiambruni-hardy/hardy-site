import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Plus, Minus, ArrowRight, Check, Truck, Leaf, MessageCircle } from 'lucide-react';

const PRODUCTS_FEATURED = [
  { id: 'natural-380', name: 'Crema de Maní Natural', variant: 'Natural', size: '380g',
    desc: 'Maní tostado y procesado. Nada más.',
    tagline: 'Un ingrediente. Cero compromisos.',
    detail: '100% maní seleccionado de Córdoba. Sin azúcar agregada, sin aceites vegetales, sin conservantes. Lo que ves en la etiqueta es todo lo que hay adentro.',
    diferencial: '100% maní · Sin aditivos · Sin azúcar',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','117 kcal / 485 kJ'],['Carbohidratos','2 g'],['Proteínas','5,2 g'],['Grasas totales','9,8 g'],['— Grasas saturadas','1,3 g'],['— Grasas trans','0 g'],['Fibra alimentaria','1,8 g'],['Sodio','0 mg']],
    image: '/products/natural-380-front.png',
    lifestyle: '/products/natural-380-lifestyle.png', price: 5200 },
  { id: 'crunchy-380', name: 'Crema de Maní Crunchy', variant: 'Crunchy', size: '380g',
    desc: 'Maní tostado con trozos enteros.',
    tagline: 'Para los que saben lo que quieren.',
    detail: 'La misma base 100% natural con trozos enteros de maní que te recuerdan de dónde viene cada cucharada. Textura que se siente — no se disimula.',
    diferencial: 'Con trozos enteros · Textura real · Sin aditivos',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','117 kcal / 485 kJ'],['Carbohidratos','2 g'],['Proteínas','5,2 g'],['Grasas totales','9,8 g'],['— Grasas saturadas','1,3 g'],['— Grasas trans','0 g'],['Fibra alimentaria','1,8 g'],['Sodio','0 mg']],
    image: '/products/crunchy-380-front.png',
    lifestyle: '/products/crunchy-380-lifestyle.png', price: 5400 },
  { id: 'miel-liquida-500', name: 'Miel Líquida', variant: 'Líquida', size: '500g',
    desc: 'Miel pura de abeja, multifloral.',
    tagline: 'Miel como tiene que ser.',
    detail: 'Multifloral, cruda y sin procesar. Del panal directo al frasco, sin calor ni filtros que comprometan sus enzimas naturales, su aroma y sus propiedades.',
    diferencial: 'Sin pasteurizar · Sin procesar · Cruda',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','61 kcal / 255 kJ'],['Carbohidratos','16,4 g'],['— Azúcares','16,0 g'],['Proteínas','0,1 g'],['Grasas totales','0 g'],['Fibra alimentaria','0 g'],['Sodio','1 mg']],
    image: '/products/miel-liquida-front.png',
    lifestyle: '/products/miel-liquida-lifestyle.png', price: 6900 },
  { id: 'miel-solida-500', name: 'Miel Sólida', variant: 'Sólida', size: '500g',
    desc: 'Miel cristalizada naturalmente.',
    tagline: 'La cristalización es una señal de calidad.',
    detail: 'La miel que se vuelve sólida no está en mal estado — está en su estado más puro. Un proceso 100% natural que preserva enzimas, aromas y valor nutritivo intactos.',
    diferencial: 'Multifloral · Cristalización natural · 100% pura',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','61 kcal / 255 kJ'],['Carbohidratos','16,4 g'],['— Azúcares','16,0 g'],['Proteínas','0,1 g'],['Grasas totales','0 g'],['Fibra alimentaria','0 g'],['Sodio','1 mg']],
    image: '/products/miel-solida-front.png',
    lifestyle: '/products/miel-solida-lifestyle.png', price: 6900 },
];

const USES = [
  { title: 'Para arrancar el día', desc: 'Crema de maní natural sobre tostadas, en yogur, batidos o avena. La forma simple de empezar con energía.',
    image: '/lifestyle/use-desayuno.png', tag: 'Desayuno', product: 'Natural · 380g' },
  { title: 'Energía pre/post entreno', desc: 'Una cucharada de crunchy con banana, en shakes proteicos o barras caseras. Recuperación con un solo ingrediente.',
    image: '/lifestyle/use-fit.png', tag: 'Fit', product: 'Crunchy · 380g' },
  { title: 'Endulzá lo que comas', desc: 'Miel pura para tu café, té, repostería, panes o aderezos. Sin azúcar agregada, sabor genuino.',
    image: '/lifestyle/use-miel.png', tag: 'Sabor', product: 'Miel Líquida · 500g' },
];

const ARS = (n) => '$' + n.toLocaleString('es-AR');

export default function App() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [hoveredFormato, setHoveredFormato] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredPilar, setHoveredPilar] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch(e){} };
  }, []);

  const cartItems = useMemo(() => Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS_FEATURED.find(x => x.id === id);
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

  const RED = '#C0171E'; const INK = '#1A1A1A'; const PAPER = '#FAFAF8'; const PAPER_2 = '#F1EFE9';
  const WA = 'https://wa.me/5491135736956';

  return (
    <div style={{ background: PAPER, color: INK, fontFamily: 'Manrope, sans-serif', minHeight: '100vh' }}>

      {/* ANNOUNCEMENT */}
      <div style={{ background: INK, color: PAPER, fontFamily: 'JetBrains Mono, monospace',
        fontSize: '11px', letterSpacing: '0.2em', textAlign: 'center', padding: '9px 16px', textTransform: 'uppercase' }}>
        Crema de maní y miel · Envíos a todo el país · Mayoristas desde 3 cajas
      </div>

      {/* NAV */}
      <nav style={{ background: INK, color: PAPER, padding: '16px 40px', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #2a2a2a',
        position: 'sticky', top: 0, zIndex: 50, gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: PAPER, flexShrink: 0 }}>
          <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '28px', letterSpacing: '0.04em', lineHeight: 1 }}>HARDY</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', letterSpacing: '0.3em', color: RED, marginTop: '2px' }}>
            ALIMENTÁ TU INSTINTO
          </div>
        </Link>
        <div className="hardy-nav-links" style={{ display: 'flex', gap: '28px', fontSize: '11px',
          letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
          <Link to="/tienda" style={{ color: PAPER, textDecoration: 'none', opacity: 0.75 }}>Tienda</Link>
          <Link to="/mayoristas" style={{ color: PAPER, textDecoration: 'none', opacity: 0.75 }}>Mayoristas</Link>
          <Link to="/a-granel" style={{ color: PAPER, textDecoration: 'none', opacity: 0.75 }}>A granel</Link>
          <Link to="/recetas" style={{ color: PAPER, textDecoration: 'none', opacity: 0.75 }}>Recetas</Link>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
          <Link to="/tienda" className="hardy-comprar-btn" style={{ background: RED, color: PAPER,
            padding: '10px 18px', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Comprar
          </Link>
          <button onClick={() => setCartOpen(true)} style={{ background: 'transparent', color: PAPER,
            border: `1px solid rgba(255,255,255,0.3)`, padding: '9px 14px', cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em',
            display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase' }}>
            <ShoppingBag size={13} /> ({cartCount})
          </button>
          <button className="hardy-hamburger" onClick={() => document.getElementById('hardy-mobile-menu').classList.toggle('open')}
            style={{ display: 'none', background: 'transparent', border: `1px solid rgba(255,255,255,0.3)`, color: PAPER, padding: '8px 12px', cursor: 'pointer', fontSize: '16px' }}>
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div id="hardy-mobile-menu" style={{ display: 'none', background: INK, borderBottom: '1px solid #2a2a2a',
        padding: '20px 24px', flexDirection: 'column', gap: '16px',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        <Link to="/tienda" style={{ color: PAPER, textDecoration: 'none' }}>Tienda</Link>
        <Link to="/mayoristas" style={{ color: PAPER, textDecoration: 'none' }}>Mayoristas</Link>
        <Link to="/a-granel" style={{ color: PAPER, textDecoration: 'none' }}>A granel</Link>
        <Link to="/recetas" style={{ color: PAPER, textDecoration: 'none' }}>Recetas</Link>
      </div>

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .hardy-hero {
          position: relative; min-height: 100vh; width: 100%;
          background-image: url('/lifestyle/hero-duo-v2.png');
          background-size: cover; background-position: center right;
          display: flex; align-items: center; overflow: hidden; color: ${PAPER};
        }
        .hardy-hero::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.82) 30%, rgba(15,15,15,0.45) 60%, rgba(15,15,15,0) 100%);
          z-index: 1;
        }
        .hardy-hero::after {
          content: ''; position: absolute; right: -150px; top: -150px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, ${RED}1f 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }
        .hardy-hero-inner { position: relative; z-index: 2; padding: 0 64px; max-width: 720px; }
        .hardy-nav-links a:hover { opacity: 1 !important; }
        .product-card:hover img { transform: scale(1.04); }
        /* ── TABLET ─────────────────────────── */
        @media(max-width:900px) {
          .hardy-nav-links { display: none !important; }
          .hardy-comprar-btn { display: none !important; }
          .hardy-hamburger { display: block !important; }
          #hardy-mobile-menu.open { display: flex !important; }
          .hardy-hero-inner { padding: 0 24px !important; max-width: 100% !important; }
          .hardy-hero { min-height: 85vh !important; background-position: center center !important; }
          .hardy-hero::before { background: rgba(15,15,15,0.88) !important; }
          section[style*="padding: '80px"] { padding: 48px 24px !important; }
          section[style*="padding: '60px"] { padding: 40px 24px !important; }
          div[style*="gridTemplateColumns: 'repeat(4"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="gridTemplateColumns: 'repeat(3"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: '2fr"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: '40px"] { grid-template-columns: 1fr !important; }
          footer div[style*="gridTemplateColumns"] { grid-template-columns: 1fr 1fr !important; }
        }
        /* ── MOBILE ─────────────────────────── */
        @media(max-width:600px) {
          .hardy-hero { min-height: 100svh !important; }
          .hardy-hero-inner { padding: 0 20px !important; }
          .hardy-hero::before { background: rgba(15,15,15,0.92) !important; }
          .hardy-hero::after { display: none !important; }
          section[style*="padding"] { padding-left: 16px !important; padding-right: 16px !important; }
          div[style*="gridTemplateColumns: 'repeat(4"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="gridTemplateColumns: 'repeat(3"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: '2fr"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: '40px"] { grid-template-columns: 1fr !important; }
          div[style*="maxWidth: '1240px'"] { padding: 0 16px !important; }
          div[style*="maxWidth: '1100px'"] { padding: 0 16px !important; }
          footer div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
          .product-card-overlay { opacity: 1 !important; }
          /* Modal fullscreen en mobile */
          div[style*="maxWidth: '860px'"] { grid-template-columns: 1fr !important; max-height: 100dvh !important; border-radius: 0 !important; }
          div[style*="maxWidth: '860px'"] > div:first-child { display: none !important; }
          div[style*="maxWidth: '920px'"] { grid-template-columns: 1fr !important; max-height: 100dvh !important; border-radius: 0 !important; }
          div[style*="maxWidth: '920px'"] > div:first-child { display: none !important; }
          /* Recetas grid */
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
          /* Hero text */
          h1[style*="clamp(52px"] { font-size: clamp(42px, 12vw, 72px) !important; }
        }
        .product-card:hover img { transform: scale(1.04); }
        .product-card:hover .product-card-overlay { opacity: 1 !important; }
      `}</style>

      {/* HERO */}
      <section className="hardy-hero">
        <div className="hardy-hero-inner">
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em',
            color: RED, marginBottom: '28px', textTransform: 'uppercase' }}>
            ── 100% Natural · Sin aditivos
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(52px, 8vw, 112px)',
            lineHeight: 0.92, letterSpacing: '-0.02em', margin: 0, fontWeight: 500, color: PAPER }}>
            Alimentá tu<br />
            <em style={{ fontStyle: 'italic', color: RED }}>instinto.</em>
          </h1>
          <p style={{ marginTop: '32px', fontSize: '17px', lineHeight: 1.6, maxWidth: '480px',
            color: '#d0d0d0', fontWeight: 300 }}>
            Crema de maní y miel 100% naturales para tu rutina, tu negocio o tu producción.
            Un ingrediente. Sin aditivos. Envíos a todo el país.
          </p>
          <div style={{ marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#formato" style={{ background: RED, color: PAPER, padding: '18px 32px',
              textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
              letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-flex',
              alignItems: 'center', gap: '10px' }}>
              Elegir formato <ArrowRight size={13} />
            </a>
            <Link to="/tienda" style={{ background: 'rgba(255,255,255,0.08)', color: PAPER, padding: '18px 32px',
              textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px',
              letterSpacing: '0.15em', textTransform: 'uppercase', border: `1px solid rgba(255,255,255,0.3)` }}>
              Comprar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <div style={{ background: PAPER, borderBottom: `1px solid ${INK}15`, borderTop: `1px solid ${INK}15` }}>
        <div className="hardy-features-bar" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', borderLeft: `1px solid ${INK}15` }}>
          {[
            { t: '100% Natural', s: 'Sin conservantes. Sin aditivos.' },
            { t: 'Un solo ingrediente', s: 'Maní o miel. Nada más.' },
            { t: 'Envíos a todo el país', s: 'Coordinamos el envío para vos.' },
            { t: 'Mayoristas desde 3 cajas', s: 'Precio por volumen' },
          ].map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{ padding: '28px 32px', borderRight: `1px solid ${INK}15`, display: 'flex', gap: '14px', alignItems: 'center',
                background: hoveredFeature === i ? INK : 'transparent',
                transition: 'background 0.2s', cursor: 'default' }}>
              <div style={{ width: '8px', height: '8px', background: RED, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '14px', color: hoveredFeature === i ? PAPER : INK }}>{p.t}</div>
                <div style={{ fontSize: '12px', color: hoveredFeature === i ? '#aaa' : '#666', marginTop: '2px' }}>{p.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMATO SELECTOR */}
      <section id="formato" style={{ padding: '80px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em',
              color: RED, textTransform: 'uppercase', marginBottom: '14px' }}>── Elegí tu formato Hardy</div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 56px)',
              margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
              Comprá según tu <em style={{ color: RED }}>necesidad.</em>
            </h2>
            <p style={{ marginTop: '16px', fontSize: '15px', color: '#555', maxWidth: '560px', lineHeight: 1.6 }}>
              Frascos para tu casa, cajas para reventa o formatos a granel para uso profesional. Elegí el camino que mejor se adapta a vos.
            </p>
          </div>

          <div className="hardy-formato-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { label: 'Para tu casa', sublabel: 'Consumidor final',
                desc: 'Frascos de crema de maní y miel para todos los días. Coordinamos el envío a donde estés.',
                cta: 'Comprar frascos', to: '/tienda', dark: false,
                items: ['Crema de maní Natural 380g', 'Crema de maní Crunchy 380g', 'Miel Líquida 500g', 'Miel Sólida 500g'] },
              { label: 'Para tu negocio', sublabel: 'Mayoristas',
                desc: 'Cajas mayoristas para dietéticas, gimnasios, tiendas, cafeterías y distribuidores.',
                cta: 'Ver mayoristas', to: '/mayoristas', dark: false,
                items: ['Desde 3 cajas', 'Precio por volumen', 'Mix de crema de maní y miel', 'Reposición según stock disponible'] },
              { label: 'A granel', sublabel: 'A granel',
                desc: 'Formatos de mayor volumen para gastronomía, producción, repostería y uso profesional.',
                cta: 'Ver a granel', to: '/a-granel', dark: false,
                items: ['Crema de maní y miel a granel', 'Ideal para cocinas y producción', 'Mejor costo por kg', 'Consulta directa según volumen'] },
            ].map((s, i) => {
              const isActive = s.dark || hoveredFormato === i;
              return (
                <div key={i}
                  onMouseEnter={() => setHoveredFormato(i)}
                  onMouseLeave={() => setHoveredFormato(null)}
                  style={{ background: isActive ? INK : PAPER_2, color: isActive ? PAPER : INK,
                    padding: '40px 32px', display: 'flex', flexDirection: 'column',
                    transition: 'background 0.25s, color 0.25s', cursor: 'default' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: RED, marginBottom: '10px' }}>{s.sublabel}</div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 500,
                    marginBottom: '12px', lineHeight: 1.1 }}>{s.label}</div>
                  <div style={{ fontSize: '14px', opacity: 0.7, lineHeight: 1.6, marginBottom: '24px' }}>{s.desc}</div>
                  <ul style={{ margin: '0 0 28px', padding: 0, listStyle: 'none' }}>
                    {s.items.map((it, j) => (
                      <li key={j} style={{ fontSize: '13px', opacity: 0.8, paddingBottom: '8px',
                        borderBottom: `1px solid ${isActive ? 'rgba(255,255,255,0.1)' : `${INK}15`}`,
                        marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: RED, fontSize: '10px' }}>✓</span> {it}
                      </li>
                    ))}
                  </ul>
                  <div style={{ flex: 1 }} />
                  <Link to={s.to} style={{ display: 'inline-block', background: RED,
                    color: PAPER, padding: '14px 24px', textDecoration: 'none',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                    letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center',
                    opacity: isActive ? 1 : 0.75, transition: 'opacity 0.25s' }}>
                    {s.cta} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section style={{ padding: '80px 40px', background: PAPER_2 }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em',
                color: RED, textTransform: 'uppercase', marginBottom: '14px' }}>── Tienda</div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(32px, 4vw, 48px)',
                margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
                Los más <em style={{ color: RED }}>elegidos.</em>
              </h2>
            </div>
            <Link to="/tienda" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase', color: INK, textDecoration: 'none',
              borderBottom: `1px solid ${INK}`, paddingBottom: '2px' }}>
              Ver todos →
            </Link>
          </div>
          <div className="hardy-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }}>
            {PRODUCTS_FEATURED.map((p, pi) => {
              const hpActive = hoveredFormato === 100 + pi;
              return (
                <div key={p.id}
                  onMouseEnter={() => setHoveredFormato(100 + pi)}
                  onMouseLeave={() => setHoveredFormato(null)}
                  onClick={() => setModalProduct(p)}
                  style={{ background: hpActive ? INK : PAPER_2, overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', cursor: 'pointer',
                    transition: 'background 0.22s' }}>
                  <div style={{ aspectRatio: '1', overflow: 'hidden', background: hpActive ? '#111' : INK, position: 'relative', transition: 'background 0.22s' }}>
                    <img src={p.lifestyle} alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
                      display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                        letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>Ver detalle →</span>
                    </div>
                  </div>
                  <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                      letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginBottom: '4px' }}>
                      {p.variant} · {p.size}
                    </div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 500, lineHeight: 1.2,
                      color: hpActive ? PAPER : INK }}>{p.name}</div>
                    <div style={{ flex: 1 }} />
                    <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: `1px solid ${hpActive ? 'rgba(255,255,255,0.15)' : INK + '15'}`,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 500,
                        whiteSpace: 'nowrap', color: hpActive ? PAPER : INK }}>{ARS(p.price)}</div>
                      <button onClick={(e) => { e.stopPropagation(); addToCart(p.id); }}
                        style={{ background: RED, color: PAPER, border: 'none', padding: '10px 14px', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                          letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        + Agregar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* MODAL DETALLE PRODUCTO — HOME */}
      {modalProduct && (
        <div onClick={() => setModalProduct(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: INK, maxWidth: '860px', width: '100%', display: 'grid',
              gridTemplateColumns: '1fr 1fr', borderRadius: '2px', overflow: 'hidden', maxHeight: '90vh' }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden', background: '#111' }}>
              <img src={modalProduct.lifestyle} alt={modalProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', overflowY: 'auto' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                  <button onClick={() => setModalProduct(null)}
                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: PAPER,
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
                  color: PAPER, margin: '0 0 8px', fontWeight: 500, lineHeight: 1.1 }}>
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
                  <div style={{ borderLeft: `2px solid ${RED}`, background: 'rgba(192,23,30,0.08)',
                    padding: '8px 12px', marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                      color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em' }}>
                      {modalProduct.diferencial}
                    </span>
                  </div>
                )}
                {modalProduct.nutri && (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                      letterSpacing: '0.2em', color: RED, textTransform: 'uppercase', marginBottom: '6px' }}>
                      {`── ${modalProduct.nutriLabel || 'Información nutricional'}`}
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Manrope, sans-serif' }}>
                      {modalProduct.nutri.map(([k, v], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)',
                          background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                          <td style={{ padding: '5px 8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{k}</td>
                          <td style={{ padding: '5px 8px', fontSize: '12px', color: '#fff', textAlign: 'right', fontWeight: 500 }}>{v}</td>
                        </tr>
                      ))}
                    </table>
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', color: PAPER,
                  fontWeight: 500, marginBottom: '14px' }}>
                  {ARS(modalProduct.price)}
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                    color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>+ IVA</span>
                </div>
                <button onClick={() => { addToCart(modalProduct.id); setModalProduct(null); }}
                  style={{ width: '100%', background: RED, color: PAPER, border: 'none',
                    padding: '15px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  + Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RECETAS */}
      <section style={{ padding: '80px 40px', background: PAPER }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '14px' }}>
                ── Recetas
              </div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 56px)',
                margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
                Recetas con <em style={{ color: RED }}>Hardy.</em>
              </h2>
              <p style={{ marginTop: '14px', fontSize: '15px', color: '#555', maxWidth: '520px', lineHeight: 1.6 }}>
                Ideas simples para usar crema de maní y miel en desayunos, bowls, snacks y cocina diaria.
              </p>
            </div>
            <Link to="/recetas" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase', color: INK, textDecoration: 'none',
              borderBottom: `1px solid ${INK}`, paddingBottom: '2px', whiteSpace: 'nowrap' }}>
              Ver todas las recetas →
            </Link>
          </div>

          <div className="hardy-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
            {[
              { title: 'Tostadas con crema de maní y banana', desc: 'Desayuno simple, real y energético.',
                image: '/lifestyle/receta-tostadas.png', tag: 'Desayuno', producto: 'Natural · 380g',
                slug: 'tostadas-crema-mani-banana' },
              { title: 'Barritas energéticas', desc: 'Crocantes, nutritivas y cargadas de energía real.',
                image: '/lifestyle/receta-barritas.png', tag: 'Snacks', producto: 'Natural · Miel Sólida',
                slug: 'barritas-energeticas' },
              { title: 'Waffles de maní', desc: 'Livianos, nutritivos y llenos de sabor.',
                image: '/lifestyle/receta-waffles.png', tag: 'Desayuno', producto: 'Natural · Miel Sólida',
                slug: 'waffles-mani' },
            ].map((r, i) => (
              <div key={i} style={{ background: PAPER_2, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 2,
                    background: INK, color: PAPER, fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px' }}>
                    {r.tag}
                  </div>
                  <img src={r.image} alt={r.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.4s' }}
                    onMouseOver={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseOut={e => e.target.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                    letterSpacing: '0.15em', color: RED, textTransform: 'uppercase', marginBottom: '8px' }}>
                    {r.producto}
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 500,
                    margin: '0 0 8px', lineHeight: 1.2 }}>{r.title}</h3>
                  <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, margin: '0 0 20px', flex: 1 }}>{r.desc}</p>
                  <Link to={`/recetas/${r.slug}`} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase', color: INK, textDecoration: 'none',
                    borderBottom: `1px solid ${INK}`, paddingBottom: '1px', alignSelf: 'flex-start' }}>
                    Ver receta →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section style={{ background: INK, color: PAPER, padding: '80px 40px' }}>
        <div className="hardy-filosofia-layout" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.25em',
              color: RED, textTransform: 'uppercase', marginBottom: '20px' }}>── Filosofía · Desde 2015</div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 500, lineHeight: 1.1, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
              Nacimos en un gimnasio.<br />Aprendimos algo simple:<br /><em style={{ color: RED }}>lo que comés importa.</em>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(250,250,248,0.65)', lineHeight: 1.8, margin: 0 }}>
              HARDY nace de una forma de entender la alimentación: menos artificio, más calidad. Crema de maní y miel hechas con ingredientes nobles, sin ultraprocesados ni agregados innecesarios. Alimentos reales para quienes entrenan, trabajan, producen y eligen rendir mejor todos los días.
            </p>
          </div>
          <div>
            {[
              { n: '01', t: 'Un ingrediente, sin excepciones.', d: 'Maní seleccionado. Miel pura. Nada más.' },
              { n: '02', t: 'Calidad real, sin maquillaje.', d: 'Elegimos productos nobles y evitamos agregados innecesarios.' },
              { n: '03', t: 'Energía que viene de alimentos reales.', d: 'Para entrenar, cocinar, trabajar y sostener tu rutina.' },
              { n: '04', t: 'Sin azúcar. Sin aceite. Sin conservantes.', d: 'Lo que dice la etiqueta es lo que hay adentro.' },
            ].map((v, i) => (
              <div key={i}
                onMouseEnter={() => setHoveredPilar(i)}
                onMouseLeave={() => setHoveredPilar(null)}
                style={{ padding: '20px 16px', borderBottom: '1px solid rgba(250,250,248,0.1)',
                  display: 'grid', gridTemplateColumns: '40px 1fr', gap: '12px', alignItems: 'start',
                  background: hoveredPilar === i ? 'rgba(255,255,255,0.06)' : 'transparent',
                  transition: 'background 0.2s', cursor: 'default', borderLeft: hoveredPilar === i ? `3px solid ${RED}` : '3px solid transparent' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: RED, paddingTop: '3px' }}>{v.n}</span>
                <div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px', fontWeight: 700, marginBottom: '4px', color: hoveredPilar === i ? PAPER : PAPER }}>{v.t}</div>
                  <div style={{ fontSize: '13px', color: hoveredPilar === i ? 'rgba(250,250,248,0.8)' : 'rgba(250,250,248,0.55)', lineHeight: 1.6 }}>{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111', color: PAPER, padding: '60px 40px 32px' }}>
        <div className="hardy-footer-grid" style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '36px', letterSpacing: '0.04em', lineHeight: 1 }}>HARDY</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.3em', color: RED, marginTop: '4px' }}>ALIMENTÁ TU INSTINTO</div>
            <p style={{ marginTop: '20px', color: '#777', fontSize: '13px', lineHeight: 1.6, maxWidth: '280px' }}>
              Crema de maní y miel de un solo ingrediente. Hecho en Argentina.
            </p>
          </div>
          {[
            { t: 'Tienda', links: [{ l: 'Para tu casa', to: '/tienda' }, { l: 'Mayoristas', to: '/mayoristas' }, { l: 'A granel', to: '/a-granel' }] },
            { t: 'Marca', links: [{ l: 'Filosofía', to: '/' }, { l: 'Productos', to: '/tienda' }, { l: 'Recetas', to: '/recetas' }] },
            { t: 'Contacto', links: [{ l: 'Instagram', href: 'https://www.instagram.com/hardy.arg/' }, { l: 'WhatsApp', href: WA }, { l: 'TikTok', href: 'https://www.tiktok.com/@hardy.arg' }] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: RED, marginBottom: '18px' }}>{col.t}</div>
              {col.links.map((l, j) => l.to ? (
                <Link key={j} to={l.to} style={{ display: 'block', color: '#888', textDecoration: 'none',
                  fontSize: '13px', marginBottom: '10px' }}>{l.l}</Link>
              ) : (
                <a key={j} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', color: '#888', textDecoration: 'none', fontSize: '13px', marginBottom: '10px' }}>{l.l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #222', paddingTop: '24px', display: 'flex',
          justifyContent: 'space-between', color: '#555', fontSize: '11px',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', flexWrap: 'wrap', gap: '12px' }}>
          <div>© 2026 HARDY · hardy.ar</div>
          <div>UN INGREDIENTE. HECHO EN ARGENTINA.</div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href={`${WA}?text=Hola%20Hardy,%20quiero%20saber%20qué%20formato%20me%20conviene%20comprar`}
        target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 90,
          background: '#25D366', color: '#fff', width: '56px', height: '56px',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
        <MessageCircle size={24} fill="#fff" strokeWidth={0} />
      </a>

      {/* CART */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100 }} />
          <aside style={{ position: 'fixed', right: 0, top: 0, bottom: 0,
            width: 'min(420px,100vw)', background: PAPER, zIndex: 101, display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: INK, color: PAPER, padding: '20px 28px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: '20px', letterSpacing: '0.04em' }}>TU BOLSA</div>
              <button onClick={() => setCartOpen(false)}
                style={{ background: 'transparent', border: 'none', color: PAPER, cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ flex: 1, overflow: 'auto', padding: '20px 28px' }}>
              {cartItems.length === 0 && (
                <div style={{ textAlign: 'center', color: '#888', padding: '60px 0',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Tu bolsa está vacía
                </div>
              )}
              {cartItems.map(it => (
                <div key={it.id} style={{ display: 'flex', gap: '14px', paddingBottom: '18px',
                  marginBottom: '18px', borderBottom: `1px solid ${INK}15` }}>
                  <div style={{ width: '64px', height: '64px', background: '#f0f0f0', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src={it.image} alt={it.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px',
                      letterSpacing: '0.15em', color: RED, textTransform: 'uppercase' }}>{it.variant} · {it.size}</div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: '15px', fontWeight: 500, marginTop: '2px' }}>{it.name}</div>
                    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => updateQty(it.id, -1)} style={{ width: '22px', height: '22px',
                        background: PAPER_2, border: 'none', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center' }}><Minus size={11} /></button>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', minWidth: '18px', textAlign: 'center' }}>{it.qty}</span>
                      <button onClick={() => updateQty(it.id, 1)} style={{ width: '22px', height: '22px',
                        background: PAPER_2, border: 'none', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center' }}><Plus size={11} /></button>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '14px' }}>{ARS(it.subtotal)}</div>
                </div>
              ))}
            </div>
            {cartItems.length > 0 && (
              <div style={{ padding: '20px 28px', borderTop: `1px solid ${INK}15` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                    letterSpacing: '0.15em', textTransform: 'uppercase' }}>Total</span>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 500 }}>{ARS(cartTotal)}</span>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutStep('checkout'); }}
                  style={{ width: '100%', background: RED, color: PAPER, border: 'none', padding: '18px',
                    cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                    letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Finalizar compra →
                </button>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '10px', color: '#888',
                  fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>
                  Mercado Pago · Envío coordinado
                </div>
              </div>
            )}
          </aside>
        </>
      )}

      {/* CHECKOUT */}
      {checkoutStep === 'checkout' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,26,26,0.95)',
          zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ background: PAPER, padding: '56px', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
              letterSpacing: '0.25em', color: RED, textTransform: 'uppercase', marginBottom: '10px' }}>── Checkout</div>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', margin: '0 0 20px', fontWeight: 500 }}>
              Finalizá tu compra
            </h3>
            <div style={{ background: PAPER_2, padding: '16px', fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px', textAlign: 'left', marginBottom: '24px', lineHeight: 1.8 }}>
              Total: <strong>{ARS(cartTotal)}</strong><br />
              Envío: coordinado según tu zona y urgencia<br />
              Método: Mercado Pago
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleCheckout} style={{ background: RED, color: PAPER, border: 'none',
                padding: '14px 28px', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Pagar con Mercado Pago
              </button>
              <button onClick={() => setCheckoutStep(null)} style={{ background: INK, color: PAPER,
                border: 'none', padding: '14px 28px', cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace', fontSize: '11px',
                letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
