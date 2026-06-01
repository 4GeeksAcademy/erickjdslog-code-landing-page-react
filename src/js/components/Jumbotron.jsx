import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 rounded mt-4 border">
      <h1 className="display-4">¡Bienvenidos!</h1>
      <p className="lead">
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
      </p>
      <button className="btn btn-primary btn-lg">¡Haz clic aquí!</button>
    </div>
  );
};

export default Jumbotron;