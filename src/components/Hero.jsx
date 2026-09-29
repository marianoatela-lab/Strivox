import "../styles/Hero.css";

function Hero({titulo, subtitulo, boton}) {
    return (
        <section id="inicio" className="hero">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <button className="btn" onClick={() => document.getElementById("planes").scrollIntoView({ behavior: "smooth" })}>{boton}</button>
        </section>
    );
}

export default Hero;