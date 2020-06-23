import React from 'react';
import Place from './Place.jsx';

const Carousel = ({places}) => (
  <div>
    {places.map( (place) => (
      <Place key={place._id}place={place} />
    ))}

  </div>
);

export default Carousel;