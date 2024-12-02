import './App.css'
//import Banner from './components/Banner/Banner'
//import NavBar from "./components/NavBar"
import { NavBar} from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
    const handleCategoryClick = (category) => {
      alert(`Has seleccionado: ${category}`);
    };
  return (
    <div>
    <NavBar onCategoryClick={handleCategoryClick} />
    <ItemListContainer greeting="¡Bienvenido a Nike! Explora nuestros productos." />
    <div className="container mt-5">
      <h1>Bienvenido a Nike</h1>
      <p>Selecciona una categoría desde el menú.</p>
    </div>
  </div>
);
};

export default App
