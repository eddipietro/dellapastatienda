import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const categories = [

  {
    id: 2,
    path: "/category/Ravioles",
    name: "Ravioles",
  },
  {
    id: 3,
    path: "/category/Ñoquis",
    name: "Ñoquis",
  },
  {
    id: 4,
    path: "/category/Fideos",
    name: "Fideos",
  },
  {
    id: 5,
    path: "/category/Sorrentinos",
    name: "Sorrentinos",
  },  ,
  {
    id: 6,
    path: "/category/Salsas",
    name: "Salsas",
  },
];

const NavBar = () => {
  return (
    <section className="boxnav">
    
       <Link  to="/">   
          <img className="img-logo" src="logo.jpg"/>
          </Link>

      <div className="nav-items">
        <ul className="nav">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget />
 
  </section>
  );
};

export default NavBar;
