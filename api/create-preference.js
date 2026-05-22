export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No hay productos en la bolsa' });
    }

    const preferenceItems = items.map((item) => ({
      title: item.name || item.title || 'Producto HARDY',
      quantity: Number(item.qty || item.quantity || 1),
      unit_price: Number(item.price),
      currency_id: 'ARS'
    }));

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
  items: preferenceItems,
  back_urls: {
    success: 'https://hardy-site-opal.vercel.app/?payment=success',
    failure: 'https://hardy-site-opal.vercel.app/?payment=failure',
    pending: 'https://hardy-site-opal.vercel.app/?payment=pending'
  },
  auto_return: 'approved',
  external_reference: `hardy-${Date.now()}`
})
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: 'Error creando preferencia de Mercado Pago',
        detail: data
      });
    }

    return res.status(200).json({
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Error inesperado',
      detail: error.message
    });
  }
}
