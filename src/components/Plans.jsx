import PlanCard from "./PlanCard";
import "../styles/Plans.css";
import planEssential from "../assets/img/PlanEssential.png";
import planPlus from "../assets/img/PlanPlus.png";
import planBlack from "../assets/img/PlanBlack.png";

const planes = [
  {
    id: "essential",
    plan: "Plan Essential",
    descripcion: "Entrená cuando quieras en una sola sede.",
    precio: "$65.000",
    precioFinal: "$49.900",
    descuento: "23% OFF",
    imagen: planEssential,
  },
  {
    id: "plus",
    plan: "Plan Plus",
    descripcion: "Entrená en cualquiera de nuestras sedes en Argentina",
    precio: "$95.000",
    precioFinal: "$74.900",
    descuento: "21% OFF",
    imagen: planPlus,
  },
  {
    id: "black",
    plan: "Plan Black",
    descripcion: "Entrená en cualquiera de nuestras sedes en Argentina",
    precio: "$130.000",
    precioFinal: "$99.900",
    descuento: "23% OFF",
    imagen: planBlack,
  },
];

const beneficios = [
  {
    nombre: "Sala de musculación",
    black: true,
    plus: true,
    essential: true,
  },
  {
    nombre: "Clases grupales",
    black: true,
    plus: true,
    essential: true,
  },
  {
    nombre: "Acceso a la pileta",
    black: true,
    plus: true,
    essential: false,
  },
  {
    nombre: "Spa y sauna",
    black: true,
    plus: false,
    essential: false,
  },
  {
    nombre: "Nutricionista",
    black: true,
    plus: false,
    essential: false,
  },
  {
    nombre: "Invitado mensual",
    black: true,
    plus: false,
    essential: false,
  },
];

function Plans() {
  return (
    <section className="plans-section" id="planes">
      <div className="plans-container">
        <h2>Planes</h2>
        <div className="cards-grid">
          {planes.map((plan) => (
            <PlanCard
              key={plan.id}
              id={plan.id}
              plan={plan.plan}
              descripcion={plan.descripcion}
              precio={plan.precio}
              precioFinal={plan.precioFinal}
              descuento={plan.descuento}
              imagen={plan.imagen}
              beneficios={beneficios}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
