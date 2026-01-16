import MercadoPago from "mercadopago";

const client = new MercadoPago({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function handler(event) {
  try {
    const { cart } = JSON.parse(event.body);

    const preference = {
      items: cart.map(item => ({
        title: item.nombre,
        unit_price: Number(item.precio),
        quantity: Number(item.cantidad),
        currency_id: "USD",
      })),
      back_urls: {
        success: "https://obeliscotours.netlify.app/success",
        failure: "https://obeliscotours.netlify.app/cancel",
      },
      auto_return: "approved",
    };

    const response = await client.preference.create({ body: preference });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.init_point }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
