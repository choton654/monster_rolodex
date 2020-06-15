import React from 'react';
import './Card.css';

const Card = ({ monster }) => {
  return (
    <div className='card'>
      <img
        className='image-fluid img-thumbnail'
        src={`https://robohash.org/${monster.id}/?set=set2`}
        alt='monster'
      />
      <h2>{monster.name}</h2>
      <h3>{monster.email}</h3>
    </div>
  );
};

export default Card;
