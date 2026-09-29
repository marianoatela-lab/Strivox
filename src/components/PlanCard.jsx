import "../styles/Cards.css";
import { Link } from "react-router-dom";

function PlanCard({
  id,
  plan,
  descripcion,
  precio,
  precioFinal,
  descuento,
  imagen,
  beneficios,
}) {
  return (
    <article className="cards">
      <img src={imagen} alt={plan} />
      <div className="cards-body">
        <h3>{plan}</h3>
        <p className="plan-description">{descripcion}</p>
        <p className="precio-sin-descuento">{precio}</p>
        <div className="precio-container">
          <p className="precio-final">{precioFinal}</p>
          <p className="descuento">{descuento}</p>
        </div>
        <div className="lista-beneficios">
          <ul>
            {beneficios.map((beneficio) => (
              <li key={beneficio.nombre}>
                {beneficio[id] ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  <i className="fa-solid fa-xmark icono-no-incluido"></i>
                )}
                {beneficio.nombre}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/contacto" className="btn">Quiero inscribirme!</Link>
      </div>
    </article>
  );
}

export default PlanCard;
