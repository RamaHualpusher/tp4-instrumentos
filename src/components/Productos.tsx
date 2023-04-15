import React, { useEffect, useState } from 'react';
import ListaItem from './ListaItem';
import { Instrumento } from '../types/Instrumento';

interface Props {
  instrumento: Instrumento;
}


const Productos = () => {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    fetch('/instrumentos.json')
      .then(response => response.json())
      .then(data => setInstrumentos(data.instrumentos))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 text-center">
          <h1>Productos</h1>
          <div className="row">
            {instrumentos.map(instrumento => (
              <div className="col-12 mb-4" key={instrumento.id}>
                  <ListaItem instrumento={instrumento} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
