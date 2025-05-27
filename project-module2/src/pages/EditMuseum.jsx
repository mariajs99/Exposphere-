import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditMuseum() {
  const params = useParams();

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [historia, setHistoria] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [horario, setHorario] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/detalles/${params.id}`)
      .then((response) => {
        console.log(response);
        setNombre(response.nombre);
        setDescripcion(response.descripcion);
        setHistoria(response.historia);
        setCiudad(response.setCiudad);
        setHorario(response.horario);
        setImagen(response.imagen);
        setPrecio(response.precio);
        setCategoria(response.categoria);
        setLatitud(response.latitud);
        setLongitud(response.setLongitud);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedMuseum = {
      nombre,
      descripcion,
      historia,
      ciudad,
      horario,
      imagen,
      precio,
      categoria,
      latitud,
      longitud,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/detalles/${params.id}`
      );
      navigate(`/detalles/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="EditMuseumPage">
      <h3>Edit the Project</h3>

      <Container className="mt-4">
        <h2>Añadir nuevo museo</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Historia</Form.Label>
            <Form.Control
              as="textarea"
              value={historia}
              onChange={(e) => setHistoria(e.target.value)}
              rows={4}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Horario</Form.Label>
            <Form.Control
              type="text"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Latitud</Form.Label>
            <Form.Control
              type="text"
              value={latitud}
              onChange={(e) => setLatitud(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Longitud</Form.Label>
            <Form.Control
              type="text"
              value={longitud}
              onChange={(e) => setLongitud(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
          Editar museo
        </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditMuseum;
