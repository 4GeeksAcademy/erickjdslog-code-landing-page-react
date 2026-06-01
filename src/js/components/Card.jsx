import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="card h-100 text-center border-danger-subtle shadow-sm">
      <img src="https://placehold.co/500x325?text=Foto" className="card-img-top" alt="Comida" />
      <div className="card-body">
        <h5 className="card-title text-danger">{title}</h5>
        <p className="card-text text-muted">{text}</p>
      </div>
      <div className="card-footer bg-white border-top-0 pb-4">
        <button className="btn btn-outline-danger">Saber más</button>
      </div>
    </div>
  );
};

export default Card;