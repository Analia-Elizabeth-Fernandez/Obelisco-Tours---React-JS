import mercadopago from "mercadopago";

// En v2 ya no se usa .configure(), se instancia con el token
const mp = new mercadopago({
  access_token: process.env.MP_ACCESS_TOKEN,
});

export async function handler(event) {
  try {
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

    const response = await mp.preferences.create(preference);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.body.init_point }),
    };
  } catch (error) {
    console.error("Error en la función de checkout:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
