import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const handleCategoriaCheck = (event) => {
    const categoria = event.target.value;

    if (event.target.checked) {
      props.setCategoriasSeleccionadas([
        ...props.categoriasSeleccionadas,
        categoria,
      ]);
    } else {
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
