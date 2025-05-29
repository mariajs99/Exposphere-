import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function EditMuseum() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/museos/${params.id}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setNombre(data.nombre || "");
        setDescripcion(data.descripcion || "");
        setHistoria(data.historia || "");
        setCiudad(data.ciudad || "");
        setHorario(data.horario || "");
        setImagen(data.imagen || "");
        setPrecio(data.precio || "");
        setCategoria(data.categoria || "");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteMuseum = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/museos/${params.id}`)
      .then(() => {
        navigate(`/explorar`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/museos/${params.id}`,
        updatedMuseum
      );
      navigate(`/detalles/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4">
      <div className="form-inline-container">
        <h2>Editar museo</h2>
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
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
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

          <Button variant="primary" type="submit">
            Editar museo
          </Button>
          <Button variant="danger" onClick={handleShow}>
            Borrar museo
          </Button>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Seguro que quieres borrar este museo? Esta acción no se puede
              deshacer.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  deleteMuseum();
                  handleClose();
                }}
              >
                Sí, borrar
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    </Container>
  );
}

export default EditMuseum;
