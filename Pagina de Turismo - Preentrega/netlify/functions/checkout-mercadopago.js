import mercadopago from "mercadopago";

// Configura tu token de Mercado Pago desde las Environment Variables de Netlify
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);

export async function handler(event) {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No se recibió body en la petición" }),
      };
    }

    const { cart } = JSON.parse(event.body);

    if (!cart || cart.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Carrito vacío" }),
      };
    }

    // Crea la preferencia de pago
    const preference = {
      items: cart.map((item) => ({
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
    console.error("Error en checkout-mercadopago:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
