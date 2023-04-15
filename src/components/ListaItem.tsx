import React from 'react';
import { Link } from 'react-router-dom';
import { Instrumento } from '../types/Instrumento';
import DetalleInstrumento from './DetalleInstrumento';

interface Props {
  instrumento: Instrumento;
}

const ListaItem = ({ instrumento }: Props) => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-3">
          <Link to={`/productos/${instrumento.id}`}>
            <img
              src={`./img/${instrumento.imagen}`}
              className="card-img"
              alt={instrumento.instrumento}
            />
          </Link>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/productos/${instrumento.id}`} className="text-decoration-none text-dark">
                {instrumento.instrumento}
              </Link>
            </h5>
            <p className="card-text">{instrumento.descripcion}</p>
            <p className="card-text">${instrumento.precio}</p>
          </div>
          <div className="card-footer">
            <Link to={`/productos/${instrumento.id}`} className="btn btn-primary float-right">
              Ver Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaItem;
