import gym1 from "../assets/img/gym1.jpg";
import maquinas1 from "../assets/img/maquinas 1.jpg";
import maquinas2 from "../assets/img/maquinas 2.jpg";
import planBlack from "../assets/img/PlanBlack.png";
import planEssential from "../assets/img/PlanEssential.png";
import planPlus from "../assets/img/PlanPlus.png";
import sauna1 from "../assets/img/sauna 1.jpg";
import sauna from "../assets/img/sauna.jpg";
import "../styles/Galeria.css";

const imagenesGaleria = [
  { id: 1, imagen: gym1, descripcion: "Sala principal del gimnasio"},
  { id: 2, imagen: maquinas1, descripcion: "Sector de máquinas de musculación"},
  { id: 3, imagen: maquinas2, descripcion: "Equipamiento para entrenamiento."},
  { id: 4, imagen: planBlack, descripcion: "Presentación del Plan Black"},
  { id: 5, imagen: planEssential, descripcion: "Presentación del Plan Essential"},
  { id: 6, imagen: planPlus, descripcion: "Presentación del Plan Plus"},
  { id: 7, imagen: sauna, descripcion: "Sector de sauna"},
  { id: 8, imagen: sauna1, descripcion: "Instalaciones del spa y sauna"},
];

function Gallery() {
  return (
    <section className="galeria-section" id="galeria">
      <div className="galeria-container">
        <h2>Galería</h2>
        <div className="imagenes">
          {imagenesGaleria.map((foto) => (
            <img
              className="galeria-item"
              key={foto.id}
              src={foto.imagen}
              alt={foto.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
