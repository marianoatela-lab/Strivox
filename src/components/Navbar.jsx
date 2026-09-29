import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const navLinks = [
  { nombre: "Inicio", link: "/#inicio" },
  { nombre: "Planes", link: "/#planes" },
  { nombre: "Galeria", link: "/#galeria" },
  { nombre: "Contacto", link: "/contacto" },
];

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link className="logo" to="/">
          <i className="fa-solid fa-dumbbell"></i>
          Strivox
        </Link>

        <ul className="nav-links">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link to={item.link}>{item.nombre}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
