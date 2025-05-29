import Carousel from "react-bootstrap/Carousel";
import carrusel1 from "../assets/carrusel1.avif";
import carrusel2 from "../assets/carrusel2.avif";
import carrusel3 from "../assets/carrusel3.avif";
import "../App.css"

function Home() {
  return (
    <div className="home-container ">
      <div>
        <h1>Exposphere</h1>
        <h3>Explora los mejores museos de España</h3>
        <p>
          Descubre exposiciones únicas, consulta reseñas y guarda tus planes culturales favoritos en un solo lugar.
        </p>
      </div>

      <Carousel data-bs-theme="dark" style={{ padding: "30px" }}>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel1}
            alt="First slide"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption className="carrusel-caption">
            <h5>Museos que inspiran</h5>
            <p>Encuentra los espacios culturales más fascinantes del país.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" 
          src={carrusel2} 
          alt="Second slide" 
          style={{ maxHeight: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption className="carrusel-caption"> 
            <h5>Exposiciones para todos los gustos</h5>
            <p>Historia, ciencia, arte... Filtra y encuentra lo que más te gusta.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" 
          src={carrusel3} 
          alt="Third slide"
          style={{ maxHeight: "600px", objectFit: "cover" }} 
          />
          <Carousel.Caption className="carrusel-caption">
            <h5>Planifica tu próxima visita</h5>
            <p>
              Consulta opiniones, puntuaciones y guarda tus favoritos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Home;
