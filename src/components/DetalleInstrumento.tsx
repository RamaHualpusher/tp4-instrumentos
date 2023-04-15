import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Instrumento } from '../types/Instrumento';

const DetalleInstrumento = () => {
    const { id } = useParams<{ id: string }>();
    const [instrumento, setInstrumento] = useState<Instrumento | undefined>();
    
    useEffect(() => {
      fetch('/instrumentos.json')
        .then(response => response.json())
        .then(data => {
          const instrumento = data.instrumentos.find((instrumento: Instrumento) => instrumento.id === id);
          setInstrumento(instrumento);
        })
        .catch(error => console.error(error));
    }, []);

  if (!instrumento) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1>{instrumento.instrumento}</h1>
          <img src={`/img/${instrumento.imagen}`} alt={instrumento.instrumento} className="img-fluid mb-4" />
          <p>{instrumento.descripcion}</p>
          <p>Precio: {instrumento.precio}</p>
          <p>
            Costo de envío:{" "}
            {instrumento.costoEnvio === "G" ? "Envío gratis" : `$${instrumento.costoEnvio}`}
          </p>
          <p>Cantidad vendida: {instrumento.cantidadVendida}</p>
          <Link to="/productos" className="btn btn-primary btn-lg">Volver a la lista</Link>
        </div>
      </div>
    </div>
  );
};

export default DetalleInstrumento;

