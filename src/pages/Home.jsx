import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Galeria from "../components/Galeria";

function Home() {
  return (
    <>
      <Hero
        titulo="Gym Strivox"
        subtitulo="Your fitness journey starts here."
        boton="Ver todos los planes"
      />
      <Plans />
      <Galeria />
    </>
  );
}

export default Home;
