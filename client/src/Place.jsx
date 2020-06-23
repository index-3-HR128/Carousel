import React from 'react';

const Place = ({place}) => {
  const ratingRender = ()=>{
    if(place.rating !== undefined){
      return (
        <span>{place.rating} ({place.totalReview})</span>
      )
    }
  }

  return (
  <div>
    <img src={place.picture} />
    <div>{place.type} · {place.bed} {ratingRender()}</div>
    <div>{place.title}</div>
    <div><span>${place.price}</span> / night</div>
  </div>
  )
}

export default Place;

