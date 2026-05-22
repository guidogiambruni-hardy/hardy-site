export const RED = '#C0171E';
export const INK = '#1A1A1A';
export const PAPER = '#FAFAF8';
export const PAPER_2 = '#F1EFE9';
export const ARS = (n) => '$' + n.toLocaleString('es-AR');
export const WA = 'https://wa.me/5491135736956';

export const PRODUCTS = [
  { id: 'natural-380', name: 'Crema de Maní Natural', variant: 'Natural', size: '380g', line: 'frasco',
    desc: 'Maní tostado y procesado. Nada más.',
    tagline: 'Un ingrediente. Cero compromisos.',
    detail: '100% maní seleccionado de Córdoba. Sin azúcar agregada, sin aceites vegetales, sin conservantes. Lo que ves en la etiqueta es todo lo que hay adentro.',
    diferencial: '100% maní · Sin aditivos · Sin azúcar',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','117 kcal / 485 kJ'],['Carbohidratos','2 g'],['Proteínas','5,2 g'],['Grasas totales','9,8 g'],['— Grasas saturadas','1,3 g'],['— Grasas trans','0 g'],['Fibra alimentaria','1,8 g'],['Sodio','0 mg']],
    images: ['/products/natural-380-front.png', '/products/natural-380-open.png', '/products/natural-380-back.png'],
    price: 5200 },
  { id: 'crunchy-380', name: 'Crema de Maní Crunchy', variant: 'Crunchy', size: '380g', line: 'frasco',
    desc: 'Maní tostado con trozos enteros.',
    tagline: 'Para los que saben lo que quieren.',
    detail: 'La misma base 100% natural con trozos enteros de maní que te recuerdan de dónde viene cada cucharada. Textura que se siente — no se disimula.',
    diferencial: 'Con trozos enteros · Textura real · Sin aditivos',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','117 kcal / 485 kJ'],['Carbohidratos','2 g'],['Proteínas','5,2 g'],['Grasas totales','9,8 g'],['— Grasas saturadas','1,3 g'],['— Grasas trans','0 g'],['Fibra alimentaria','1,8 g'],['Sodio','0 mg']],
    images: ['/products/crunchy-380-front.png', '/products/crunchy-380-open.png', '/products/crunchy-380-back.png'],
    price: 5400 },
  { id: 'miel-liquida-500', name: 'Miel Líquida', variant: 'Líquida', size: '500g', line: 'frasco',
    desc: 'Miel pura de abeja, multifloral.',
    tagline: 'Miel como tiene que ser.',
    detail: 'Multifloral, cruda y sin procesar. Del panal directo al frasco, sin calor ni filtros que comprometan sus enzimas naturales, su aroma y sus propiedades.',
    diferencial: 'Sin pasteurizar · Sin procesar · Cruda',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','61 kcal / 255 kJ'],['Carbohidratos','16,4 g'],['— Azúcares','16,0 g'],['Proteínas','0,1 g'],['Grasas totales','0 g'],['Fibra alimentaria','0 g'],['Sodio','1 mg']],
    images: ['/products/miel-liquida-front.png', '/products/miel-liquida-open.png', '/products/miel-liquida-back.png'],
    price: 6900 },
  { id: 'miel-solida-500', name: 'Miel Sólida', variant: 'Sólida', size: '500g', line: 'frasco',
    desc: 'Miel cristalizada naturalmente.',
    tagline: 'La cristalización es una señal de calidad.',
    detail: 'La miel que se vuelve sólida no está en mal estado — está en su estado más puro. Un proceso 100% natural que preserva enzimas, aromas y valor nutritivo intactos.',
    diferencial: 'Multifloral · Cristalización natural · 100% pura',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','61 kcal / 255 kJ'],['Carbohidratos','16,4 g'],['— Azúcares','16,0 g'],['Proteínas','0,1 g'],['Grasas totales','0 g'],['Fibra alimentaria','0 g'],['Sodio','1 mg']],
    images: ['/products/miel-solida-front.png', '/products/miel-solida-open.png', '/products/miel-solida-back.png'],
    price: 6900 },
  { id: 'balde-45', name: 'Balde Crema de Maní', variant: 'Natural', size: '4,5 kg', line: 'balde',
    desc: 'Para cocinas, cafeterías y uso profesional.',
    tagline: 'Para quienes la consumen en serio.',
    detail: 'El formato ideal para cocinas profesionales, cafeterías, gimnasios y revendedores que necesitan calidad constante sin pagar precio minorista. Mismo maní 100% natural, en volumen real.',
    diferencial: 'Sin aditivos · Precio mayorista · Ideal para reventa',
    images: ['/products/balde-45-front.png', '/products/balde-45-open.png', '/products/balde-45-back.png'],
    price: 17708 },
  { id: 'balde-23', name: 'Balde Crema de Maní', variant: 'Natural', size: '23 kg', line: 'balde',
    desc: 'Formato industrial para producción a escala.',
    tagline: 'Escala sin compromisos.',
    detail: 'El formato para productores, distribuidores y fabricantes que necesitan crema de maní premium en volumen real. La misma calidad de siempre, pensada para producción a escala.',
    diferencial: 'Formato industrial · Producción a escala · Sin aditivos',
    images: ['/products/balde-23-front.png', '/products/balde-23-open.png', '/products/balde-23-back.png'],
    price: 84750 },
  { id: 'balde-miel-6', name: 'Balde Miel Líquida', variant: 'Miel', size: '6 kg', line: 'balde',
    desc: 'Miel líquida multifloral en formato gastronómico.',
    tagline: 'La misma calidad, en el volumen que necesitás.',
    detail: 'Miel líquida multifloral sin procesar, ideal para cafeterías, pastelerías, restaurantes y revendedores. La misma pureza del frasco, en el formato que escala tu negocio.',
    diferencial: 'Sin pasteurizar · Multifloral · Formato gastronómico',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','64 kcal / 268 kJ'],['Carbohidratos totales','16 g'],['— Azúcares totales','16 g'],['— Azúcares añadidos','0 g'],['Grasas trans','0 g'],['Proteínas','0 g'],['Grasas totales','0 g'],['Grasas saturadas','0 g'],['Fibra alimentaria','0 g'],['Sodio','0 mg']],
    images: ['/products/balde-miel-6-front.png', '/products/balde-miel-6-open.png', '/products/balde-miel-6-back.png'],
    price: 40500 },
  { id: 'balde-miel-30', name: 'Balde Miel Líquida', variant: 'Miel', size: '30 kg', line: 'balde',
    desc: 'Formato industrial de miel líquida multifloral.',
    tagline: 'Producción a escala. Calidad sin concesiones.',
    detail: 'El formato para productores, distribuidores y fabricantes que necesitan miel premium en volumen real. Multifloral, sin pasteurizar y con toda la pureza que garantiza la marca Hardy.',
    diferencial: 'Sin pasteurizar · Multifloral · Formato industrial',
    nutriLabel: 'Porción 20g (1 cucharada)',
    nutri: [['Valor energético','64 kcal / 268 kJ'],['Carbohidratos totales','16 g'],['— Azúcares totales','16 g'],['— Azúcares añadidos','0 g'],['Grasas trans','0 g'],['Proteínas','0 g'],['Grasas totales','0 g'],['Grasas saturadas','0 g'],['Fibra alimentaria','0 g'],['Sodio','0 mg']],
    images: ['/products/balde-miel-30-front.png', '/products/balde-miel-30-open.png', '/products/balde-miel-30-back.png'],
    price: 180000 },
];

export const BALDES = [
  { id: 'balde-45', name: 'Balde Crema de Maní', variant: 'Natural', size: '4,5 kg',
    desc: 'Para cocinas, cafeterías y reventa por volumen.',
    image: '/products/balde-45.png', lifestyle: '/lifestyle/balde-45-open.png' },
  { id: 'balde-23', name: 'Balde Crema de Maní', variant: 'Natural', size: '23 kg',
    desc: 'Formato industrial para producción a escala.',
    image: '/products/balde-23.png', lifestyle: '/lifestyle/balde-23-open.png' },
];

export const USES = [
  { title: 'Para arrancar el día', desc: 'Crema de maní natural sobre tostadas, en yogur, batidos o avena. La forma simple de empezar con energía.',
    image: '/lifestyle/use-desayuno.png', fallback: '/lifestyle/natural-380-open.png',
    tag: 'Desayuno', product: 'Natural · 380g' },
  { title: 'Energía pre/post entreno', desc: 'Una cucharada de crunchy con banana, en shakes proteicos o barras caseras. Recuperación con un solo ingrediente.',
    image: '/lifestyle/use-fit.png', fallback: '/lifestyle/crunchy-380-open.png',
    tag: 'Fit', product: 'Crunchy · 380g' },
  { title: 'Endulzá lo que comas', desc: 'Miel pura para tu café, té, repostería, panes o aderezos. Sin azúcar agregada, sabor genuino.',
    image: '/lifestyle/use-miel.png', fallback: '/lifestyle/miel-liquida-open.png',
    tag: 'Sabor', product: 'Miel Líquida · 500g' },
];

export const ESCALAS = [
  { name: 'Entrada', big: '3 cajas', sub: '45 unidades', target: 'Para arrancar', highlight: false },
  { name: 'Intermedio', big: '5 cajas', sub: '75 unidades', target: 'Tiendas / Gimnasios' },
  { name: 'Frecuente', big: '10 cajas', sub: '150 unidades', target: 'Dietéticas / Almacenes' },
  { name: 'Mayorista full', big: '15 cajas', sub: '225 unidades', target: 'Volumen regular' },
];

export const FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700&display=swap');
`;
