import promoravioles from '../assets/img/promoravioles.jpg'
import ravioles from '../assets/img/ravioles.jpg'
import rjyq from '../assets/img/rjyq.jpg'
import ryv from '../assets/img/ryv.jpg'
import ricota from '../assets/img/ricota.jpg'
import pjyq from '../assets/img/pjyq.jpg'
import pyv from '../assets/img/pyv.jpg'
import sorrentinos from '../assets/img/sorrentinos.jpg'
import promoñoquis from '../assets/img/promoñoquis.jpg'
import ñoquis from '../assets/img/ñoquis.jpg'
import promocinta from '../assets/img/promofideos.jpg'
import promofinitos from '../assets/img/promofinitos.jpg'
import fideos from '../assets/img/fideos.jpg'
import blanca from '../assets/img/blanca.jpg'
import bolognesa from '../assets/img/bolognesa.jpg'
import fileto from '../assets/img/fileto.jpg'
import mixta from '../assets/img/mixta.jpg'
import pesto from '../assets/img/pesto.jpg'


const products = [
  {
    id: 1,
    nombre: "Promo Ravioles de Ricota",
    img: promoravioles,
    precio: 1000,
    stock: 100,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    nombre: "Ravioles de Ricota Jamon y Queso",
    img: rjyq,
    precio: 280,
    stock: 55,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    nombre: "Ravioles de Ricota y Verdura",
    img: ryv,
    precio: 280,
    stock: 60,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    nombre: "Ravioles de Ricota",
    img: ricota,
    precio: 280,
    stock: 10,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    nombre: "Ravioles de Pollo Jamon y Queso",
    img: pjyq,
    precio: 320,
    stock: 20,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    nombre: "Ravioles de Pollo y Verdura",
    img: pyv,
    precio: 320,
    stock: 20,
    categoria: "Ravioles",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    nombre: "Sorrentinos",
    img: sorrentinos,
    precio: 380,
    stock: 10,
    categoria: "Sorrentinos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    nombre: "Promo Ñoquis",
    img: promoñoquis,
    precio: 1300,
    stock: 20,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    nombre: "Ñoquis Tricolor",
    img: promoñoquis,
    precio: 350,
    stock: 10,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    nombre: "Ñoquis de Calabaza",
    img: ñoquis,
    precio: 1300,
    stock: 20,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    nombre: "Ñoquis de Ricota",
    img: ñoquis,
    precio: 350,
    stock: 10,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    nombre: "Ñoquis de Espinaca",
    img: ñoquis,
    precio: 1300,
    stock: 20,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 13,
    nombre: "Ñoquis de Papa",
    img: ñoquis,
    precio: 350,
    stock: 10,
    categoria: "Ñoquis",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 14,
    nombre: "Promo Fideos Cinta ",
    img: promocinta,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 15,
    nombre: "Promo Fideos Finitos",
    img: promofinitos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 16,
    nombre: "Fideos Finitos al Huevo",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 17,
    nombre: "Fideos Cinta al Huevo",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 18,
    nombre: "Fideos Finitos de Morron",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 19,
    nombre: "Fideos Cinta de Morron",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 20,
    nombre: "Fideos Finitos de Espinaca",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 21,
    nombre: "Fideos Cinta de Espinaca",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 22,
    nombre: "Fideos Finitos de Calabaza",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 23,
    nombre: "Fideos Cinta de Remolacha",
    img: fideos,
    precio: 350,
    stock: 10,
    categoria: "Fideos",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 24,
    nombre: "Salsa Blanca",
    img: blanca,
    precio: 200,
    stock: 10,
    categoria: "Salsas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 25,
    nombre: "Salsa Bolognesa ",
    img: bolognesa,
    precio: 200,
    stock: 10,
    categoria: "Salsas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 26,
    nombre: "Salsa Fileto",
    img: fileto,
    precio: 200,
    stock: 10,
    categoria: "Salsas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 27,
    nombre: "Salsa Mixta",
    img: mixta,
    precio: 200,
    stock: 10,
    categoria: "Salsas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 28,
    nombre: "Salsa Pesto",
    img: pesto,
    precio: 200,
    stock: 10,
    categoria: "Salsas",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
 
];

export const getProds = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = products.filter(
      (prod) => prod.categoria === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(productosFiltrados) : resolve(products);
    }, 1000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
    const productoEncontrado = products.find((prod) => prod.id === Number(id));
    setTimeout(() => {
      resolve(productoEncontrado);
    }, 1000);
  });
};
