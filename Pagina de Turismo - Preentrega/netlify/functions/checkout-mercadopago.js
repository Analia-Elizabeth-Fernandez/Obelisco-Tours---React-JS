// Cambiamos la forma de importar
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configuramos el cliente
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN 
});

export async function handler(event) {
  // Solo permitir peticiones POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { cart } = JSON.parse(event.body);

    // Creamos la instancia de Preference usando el cliente
    const preferenceInstance = new Preference(client);

    const preferenceData = {
      body: {
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
      }
    };

    // Usamos el método create de la instancia
    const response = await preferenceInstance.create(preferenceData);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: response.init_point }),
    };
  } catch (error) {
    console.error("Error Mercado Pago:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
