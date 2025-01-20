import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data/data.js";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
    const { id } = useParams();

    // Buscar el producto por ID
    const product = allProducts.find(prod => prod.id === id);

    return (
        <div className="item-detail-container">
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <p>
                    Producto no encontrado.{" "}
                    <Link to="/" className="back-to-catalog">
                        Volver al catálogo
                    </Link>
                </p>
            )}
        </div>
    );
};

export default ItemDetailContainer;