import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
    <ScrollToHash />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                titulo="Gym Strivox"
                subtitulo="Your fitness journey starts here."
                boton="Ver todos los planes"
              />
              <Plans />
              <Galeria />
            </>
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
