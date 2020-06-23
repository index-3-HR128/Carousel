import React from 'react';

const Place = ({place}) => (
  <div>
    <img src={place.picture} />
    <div>{place.title}</div>
  </div>
)

export default Place;