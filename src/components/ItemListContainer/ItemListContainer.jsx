import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";


const ItemListContainer = ({ greeting, category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const collectionRef = collection(db, "products");

                const q = category
                    ? query(collectionRef, where("category", "==", category))
                    : collectionRef;

                const dataDb = await getDocs(q);
                const data = dataDb.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProducts(data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        getProducts();
    }, [category]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;