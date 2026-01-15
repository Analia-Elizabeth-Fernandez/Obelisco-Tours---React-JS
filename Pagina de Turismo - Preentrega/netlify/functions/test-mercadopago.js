import mercadopago from "mercadopago";

export async function handler(event) {
  try {
    // Solo probamos si podemos acceder a la librería
    if (!mercadopago) {
      throw new Error("MercadoPago no se cargó");
    }

    // Intentamos acceder a la configuración de acceso
    const accessToken = process.env.MP_ACCESS_TOKEN || "NO_TOKEN";
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "MercadoPago cargado correctamente",
        accessToken: accessToken,
        mercadopagoKeys: Object.keys(mercadopago),
      }),
    };
  } catch (error) {
    console.error("Error en test-mercadopago:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
