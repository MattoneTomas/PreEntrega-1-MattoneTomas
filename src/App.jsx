import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
    const handleCategoryClick = (category) => {
        // Aquí puedes manejar el clic en una categoría si es necesario
    };

    return (
        <Router>
            <div>
                <NavBar onCategoryClick={handleCategoryClick} />
                <Routes>
                    {/* Ruta para el catálogo */}
                    <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Nike! Explora nuestros productos." />} />

                    {/* Rutas específicas por categoría */}
                    <Route path="/camisetas" element={<ItemListContainer category="camisetas" />} />
                    <Route path="/shorts" element={<ItemListContainer category="shorts" />} />
                    <Route path="/zapatillas" element={<ItemListContainer category="zapatillas" />} />

                    {/* Ruta para el detalle del producto */}
                    <Route path="/detalle/:id/:category" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
