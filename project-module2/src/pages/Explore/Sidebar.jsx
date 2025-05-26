import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Sidebar(props) {

  const handleCategoriaCheck = (event) => {
    const categoria = event.target.value;
    
    if(event.target.checked) {
      props.setCategoriasSeleccionadas([...props.categoriasSeleccionadas, categoria])
    }else {
      props.setCategoriasSeleccionadas(props.categoriasSeleccionadas.filter((cadaCategoria) => cadaCategoria !== categoria))
    }
  }

  return (
    <Card style={{ width: "16rem", padding: "1rem" }}>
      <Card.Title>Filtrar por categoría</Card.Title>

      <Form>
        {props.categorias.map((cadaCategoria) => {
          return(
            <Form.Check
            key={cadaCategoria}
            type="checkbox"
            label={cadaCategoria}
            value={cadaCategoria}
            checked={props.categoriasSeleccionadas.includes(cadaCategoria)}
            onChange={handleCategoriaCheck}
          />
          )
        })}
      </Form>

      <hr />

      <Button variant="success" href="/añadir">
        Añadir nuevo museo
      </Button>
    </Card>
  );
}

export default Sidebar;
