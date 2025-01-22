import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail.jsx";
import { Link } from "react-router-dom";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const docRef = doc(db, "products", id);
                const dataDb = await getDoc(docRef);

                if (dataDb.exists()) {
                    const data = { id: dataDb.id, ...dataDb.data() };
                    setProduct(data);
                } else {
                    console.log("Producto no encontrado");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        getProduct();
    }, [id]);

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