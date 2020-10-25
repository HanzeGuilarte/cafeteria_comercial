import aceite from "../assets/productos/aceite.jpg";
import pan from "../assets/productos/pan.jpg";
import pizza from "../assets/productos/pizza.jpg";
import pure from "../assets/productos/pure.jpg";
import queso from "../assets/productos/queso.jpg";

export default [
  {
    id: 1,
    nombre: "Aceite",
    precio: 50,
    peso: "5",
    tipo: "primitivo",
    unidad: "lt",
    descripcion: "lorem ipsum esto es una ejmeplo ",
    img: { aceite },
  },
  {
    id: 2,
    nombre: "Pan",
    precio: 60,
    peso: "80",
    tipo: "primitivo",
    unidad: "g",
    descripcion: "lorem ipsum esto es una ejmeplo ",
    img: { pan },
  },
  {
    id: 3,
    nombre: "Pure de Tomate",
    precio: 70.5,
    peso: "800",
    tipo: "primitivo",
    unidad: "g",
    descripcion: "lorem ipsum esto es una ejmeplo ",
    img: { pure },
  },
  {
    id: 4,
    nombre: "Pizza",
    precio: 30,
    peso: "300",
    tipo: "Elaborado",
    unidad: "g",
    descripcion: "lorem ipsum esto es una ejmeplo ",
    img: { pizza },
  },

  {
    id: 5,
    nombre: "Queso Gouda",
    precio: 30,
    peso: "2",
    tipo: "primitivo",
    unidad: "kg",
    descripcion: "lorem ipsum esto es una ejmeplo ",
    img: { queso },
  },
];
