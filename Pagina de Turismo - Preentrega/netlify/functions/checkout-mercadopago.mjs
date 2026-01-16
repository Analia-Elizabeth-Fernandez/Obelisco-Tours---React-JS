import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN 
});

export async function handler(event) {
  // Manejo de CORS (Preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: "Método no permitido" }) 
    };
  }

  try {
    const { cart } = JSON.parse(event.body);
    const preferenceInstance = new Preference(client);

    const response = await preferenceInstance.create({
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
    });

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ url: response.init_point }),
    };
  } catch (error) {
    console.error("Error MP:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message }),
    };
  }
}
