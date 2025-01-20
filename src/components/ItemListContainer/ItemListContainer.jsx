import React from "react";
import { allProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting, category }) => {
    // Filtrar productos por categoría si está definida
    const products = category
        ? allProducts.filter(product => product.category === category)
        : allProducts;

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;