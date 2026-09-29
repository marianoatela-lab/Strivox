import { useState } from "react";
import "../styles/Contact.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    esSocio: "",
    mensaje: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("Campo modificado:", name, "- Valor:", value);
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Datos Enviados", formData);

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      esSocio: "",
      mensaje: "",
    });
  }

  function handleReset() {
    console.log("Formulario limpiado");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      esSocio: "",
      mensaje: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="contact-section">
        <h1>Contacto</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresá tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresá tu teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo de Consulta:</label>
            <select
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>

              <option value="inscripcion">Inscripción a un plan</option>

              <option value="planes-precios">
                Consulta sobre planes y precios
              </option>

              <option value="turno-spa">Turno para spa o sauna</option>

              <option value="turno-clases">Turno para clases</option>

              <option value="problema-membresia">
                Problemas con la membresía
              </option>

              <option value="trabaja-con-nosotros">Trabajá con nosotros</option>

              <option value="otro">Otro</option>
            </select>
          </div>

          <fieldset>
            <legend>¿Sos socio de Strivox?</legend>

            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  id="socio-si"
                  name="esSocio"
                  value="si"
                  checked={formData.esSocio === "si"}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="socio-si">Sí</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="socio-no"
                  name="esSocio"
                  value="no"
                  checked={formData.esSocio === "no"}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="socio-no">No</label>
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              placeholder="Escribí tu consulta"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn">
              Enviar mensaje
            </button>

            <button type="button" className="btn" onClick={handleReset}>
              Limpiar formulario
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contacto;
