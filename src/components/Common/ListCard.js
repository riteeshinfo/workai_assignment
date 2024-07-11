// src/components/Common/ListCard.js
import React from 'react';

const ListCard = ({ items, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
