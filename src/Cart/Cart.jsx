import React from 'react';

const Cart = ({ selectedActors, remaining, totalCost }) => {
  console.log(selectedActors);
  return (
    <div>
      <h3>Total actors: {selectedActors.length}</h3>
      <h5>Remaining: {remaining}</h5>
      <h5>TotalCost: { totalCost}</h5>
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name} </li>
      ))}
    </div>
  );
};

export default Cart;