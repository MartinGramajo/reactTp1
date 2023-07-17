import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  // aqui va la logica
  const [inicial, setInicial] = useState("from changed state");

  // function
  const cambiarEstado = () => {
    setInicial("nuevo valor pero con función");
  };

  return (
    <>
      <h1> {nuevoTitulo}</h1>
      <h2> {inicial} </h2>
      <Button
        variant="primary"
        // onClick={() => setInicial("nuevo valor del estado")}
        onClick={cambiarEstado}
      >
        Cambiar estado
      </Button>
    </>
  );
};

export default Titulo;
