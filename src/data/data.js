import airMaxImage from "/air-max.jpg";
import nikeProImage from "/nike-pro.jpeg";
import drifitshorts from "/dri-fit-shorts.webp";

const allProducts = [
    {
      id: "1",
      name: "Zapatillas Nike Air Max",
      price: 17500,
      image: airMaxImage,
      description : "Diseñadas para un rendimiento superior y estilo icónico, las Nike Air Max ofrecen comodidad y amortiguación inigualables, ideales para entrenar o lucir casual.",
      category: "zapatillas"
    },
    {
      id: "2",
      name: "Camiseta Nike Pro",
      price: 70000,
      image: nikeProImage,
      description : "Mantente fresco y seco con los shorts Nike Dri-FIT, confeccionados con tecnología que expulsa el sudor para ofrecer máxima comodidad durante cualquier actividad.",
      category: "camisetas"
    },
    {
      id: "3",
      name: "Shorts Nike Dri-FIT",
      price: 50000,
      image: drifitshorts,
      description : "La camiseta Nike Pro combina ajuste ceñido y materiales transpirables, perfecta para entrenamientos intensos o como capa base para mayor rendimiento.",
      category: "shorts"
    },
  ];


  export { allProducts } 