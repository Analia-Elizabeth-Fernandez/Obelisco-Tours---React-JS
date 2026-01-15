// checkout-mercadopago.js
const MercadoPago = require("mercadopago");

const mercadopago = new MercadoPago(process.env.MP_ACCESS_TOKEN, {
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004", // opcional, solo si tienes integrator_id
});

exports.handler = async function(event) {
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

    const response = await mercadopago.preferences.create(preference);

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
};
