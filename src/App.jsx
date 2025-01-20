import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './components/CartWidget/CartContext';
import Cart from './components/CartWidget/Cart';

function App() {
    const handleCategoryClick = (category) => {
        // Aquí puedes manejar el clic en una categoría si es necesario
    };

    return (
        <Router>
            <div>
                <CartProvider>
                <NavBar onCategoryClick={handleCategoryClick} />
                <Routes>
                    {/* Ruta para el catálogo */}
                    <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Nike! Explora nuestros productos." />} />

                    {/* Rutas específicas por categoría */}
                    <Route path="/category/camisetas" element={<ItemListContainer category="camisetas" />} />
                    <Route path="category/shorts" element={<ItemListContainer category="shorts" />} />
                    <Route path="category/zapatillas" element={<ItemListContainer category="zapatillas" />} />
                    <Route path="/cart" element={<Cart /> }/>

                    {/* Ruta para el detalle del producto */}
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                </Routes>
                </CartProvider>
            </div>
        </Router>
    );
}

export default App;
