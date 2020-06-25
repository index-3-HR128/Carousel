import React from 'react';
import styles from './styles.css';

const Place = ({place, heartClicked}) => {
  const ratingRender = ()=>{
    if(place.rating !== undefined){
      return (
        <span>{place.rating} ({place.totalReview})</span>
      )
    }
  }
  const id = place._id;
  return (
  <div className={styles.tile}>
    <div className={styles.container}>
      <div>
        <img src={place.picture} width="230" height="150" />
        <button className={styles.heartbutton}onClick={()=>heartClicked(place)}>&hearts;</button>
      </div>
      <div>{place.type} · {place.bed} {ratingRender()}</div>
      <div>{place.title}</div>
      <div><span><b>${place.price}</b></span> / night</div>
    </div>
  </div>
  )
}

export default Place;

