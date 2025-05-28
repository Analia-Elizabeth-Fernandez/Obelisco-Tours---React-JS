import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProductos = ({ productos }) => {
    // console.log(productos);

    const { id } = useParams()

    const product = productos.find(producto => producto.id == id == parseInt(id));

    return (
        <div style={{ padding: '20px' }}>
            {product ? (
                <>
                    <h2>{product.nombre}</h2>
                    <img src={product.imagen} alt={product.nombre} style={{ width: '400px' }} />
                    <p><strong>Precio:</strong> ${product.precio}</p>
                    <p>{product.description}</p>
                </>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    );
};

export default DetallesProductos;
