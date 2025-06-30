import "../App.css";

function AboutUs() {
  return (
    <div className="container py-5" style={{ textAlign: "justify" }}>
      <h1 className="about-h1 mb-4">Sobre Exposphere</h1>
      <p className="mb-3" >
        Exposphere es una página web pensada para los amantes de la cultura.
        Aquí puedes descubrir museos de toda España, explorarlos por categorías
        y crear nuevas entradas sobre aquellos museos en los que hayas estado y
        que aún no estén en nuestra web.
      </p>
      <p className="mb-3">
        Nuestro objetivo es acercar el mundo de los museos a todas las personas,
        ofreciendo descripciones detalladas de cada lugar. Además, puedes
        compartir tu experiencia en la sección de comentarios o leer las
        opiniones de otros usuarios para asegurarte de que es el tipo de museo
        que estabas buscando.
      </p>
      <p className="mb-3">
        Si encuentras un museo que te guste y no quieres perder su información,
        puedes añadirlo a favoritos. Allí tendrás guardados todos los museos que
        te interesan para consultarlos fácilmente cuando quieras.
      </p>
      <p className="mb-3">
        Exposphere nació con la idea de hacer del conocimiento una experiencia
        accesible. ¡Únete a nuestra comunidad y empieza a explorar!
      </p>

      <div className="personal-section p-4 ">
        <h2 className="about-h2 mb-3">Sobre mí</h2>
        <p className="mb-2">
          ¡Hola! Mi nombre es María y soy una desarrolladora web en formación.
          Este proyecto forma parte del curso de desarrollo web que estoy
          realizando en Ironhack. Exposphere es mi proyecto final del módulo 2
          del curso, y es el resultado de todo lo que he aprendido hasta ahora.
        </p>
        <p className="mb-2">
          Mi formación previa hasta ahora siempre estuvo ligada al ámbito de las
          humanidades, donde he tenido la oportunidad de conocer sobre diversas
          culturas y visitar un montón de museos. Por eso, Exposphere es la
          combinación perfecta entre mi yo cultural del pasado y el yo
          tecnológico que quiero llegar a ser.
        </p>
        <p className="mb-2">
          Te invito a conocer más sobre mi trayectoria profesional a través de
          mis redes:
        </p>
        <ul className="list-unstyled">
          <li className="mb-2 d-flex align-items-center">
            <img
              src="/github.png"
              alt="GitHub icon"
              width="24"
              className="me-2"
            />
            <a
              href="https://github.com/mariajs99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-bold link-dark"
            >
              GitHub
            </a>
          </li>
          <li className="d-flex align-items-center">
            <img
              src="/linkedin.png"
              alt="Linkedin icon"
              width="24"
              className="me-2"
            />
            <a
              href="https://www.linkedin.com/in/mariadelmarjs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-bold link-dark"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
