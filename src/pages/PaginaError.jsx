import { Link } from "react-router-dom";
import "../styles/PaginaError.css";

function PaginaError() {
  return (
    <main className="error-page">
      <h1>Error 404</h1>
      <p>La página que buscás no existe</p>
      <Link to="/" className="btn">
        Volver al inicio
      </Link>
    </main>
  );
}

export default PaginaError;
