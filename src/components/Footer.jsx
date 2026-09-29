import "../styles/Footer.css";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    id: 1,
    titulo: "Strivox",
    enlaces: [
      { nombre: "Inicio", url: "/" },
      { nombre: "Contacto", url: "/contacto" },
    ],
  },
  {
    id: 2,
    titulo: "Planes",
    enlaces: [
      { nombre: "Essential", url: "/#planes" },
      { nombre: "Plus", url: "/#planes" },
      { nombre: "Black", url: "/#planes" },
    ],
  },
  {
    id: 3,
    titulo: "Comunidad",
    enlaces: [
      { nombre: "Galería", url: "/#galeria" },
      {
        nombre: "Instagram",
        url: "https://www.instagram.com",
        esExterno: true,
      },
      { nombre: "Facebook", url: "https://www.facebook.com", esExterno: true },
      { nombre: "YouTube", url: "https://www.youtube.com", esExterno: true },
      { nombre: "WhatsApp", url: "https://web.whatsapp.com/", esExterno: true },
    ],
  },
];

function Footer() {
  return (
    <footer>
      <div>
        <h2 className="h2-principal">Strivox</h2>
      </div>
      <div className="social-media">
        <p className="text-social-media">Seguinos</p>
        <div className="icons-social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="footer-columns">
        {footerColumns.map((columna) => (
          <div className="footer-column" key={columna.id}>
            <h3>{columna.titulo}</h3>
            <ul>
              {columna.enlaces.map((enlace) => (
                <li key={enlace.nombre}>
                  {enlace.esExterno ? (
                    <a href={enlace.url} target="_blank">
                      {enlace.nombre}
                    </a>
                  ) : (
                    <Link to={enlace.url}>{enlace.nombre}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
