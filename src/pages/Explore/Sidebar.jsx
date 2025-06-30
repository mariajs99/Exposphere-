import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Sidebar(props) {

  // Maneja el cambio al seleccionar/deseleccionar una categoría
  const handleCategoriaCheck = (event) => {
    const categoria = event.target.value;

    if (event.target.checked) {
      // Si se marca el checkbox, se añade la categoría al array de seleccionadas
      props.setCategoriasSeleccionadas([
        ...props.categoriasSeleccionadas,
        categoria,
      ]);
    } else {
      // Si se desmarca, se elimina la categoría del array de seleccionadas
      props.setCategoriasSeleccionadas(
        props.categoriasSeleccionadas.filter(
          (cadaCategoria) => cadaCategoria !== categoria
        )
      );
    }
  };

  return (
    <Card className="sidebar-style">

      <Card.Title className="sidebar-title">Filtrar por categoría</Card.Title>

      <Form>
        {props.categorias.map((cadaCategoria) => {
          return (
            <Form.Check
              key={cadaCategoria}
              type="checkbox"
              label={cadaCategoria}
              value={cadaCategoria}
              checked={props.categoriasSeleccionadas.includes(cadaCategoria)}
              onChange={handleCategoriaCheck}
              className="sidebar-checkbox"
            />
          );
        })}
      </Form>

      <hr />
      <Link to="/añadirMuseo">
        <Button variant="success" className="orange-button">Añadir nuevo museo</Button>
      </Link>
    </Card>
  );
}

export default Sidebar;
