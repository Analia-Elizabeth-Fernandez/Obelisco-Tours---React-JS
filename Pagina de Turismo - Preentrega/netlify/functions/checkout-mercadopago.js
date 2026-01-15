import MercadoPago from "mercadopago";

const mercadopago = new MercadoPago(process.env.MP_ACCESS_TOKEN, {
  locale: 'es-AR'
});


export async function handler(event) {
  const { cart } = JSON.parse(event.body);

  const preference = {
    items: cart.map(item => ({
      title: item.nombre,
      unit_price: item.precio,
      quantity: item.cantidad,
      currency_id: "USD",
    })),
    back_urls: {
      success: "https://obeliscotours.netlify.app/success",
      failure: "https://obeliscotours.netlify.app/cancel",
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return {
    statusCode: 200,
    body: JSON.stringify({ url: response.body.init_point }),
  };
}
