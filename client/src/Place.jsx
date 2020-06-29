import React from 'react';
import styles from './styles.css';

const Place = ({place, heartClicked, likeplace}) => {
  const superhostRender = () =>{
    if(place.superhost === true){
      return (
        <span className={styles.superhost}> superhost </span>
      )
    }
  }

  const placetype = () => {
    return(
      <div className={styles.placetype}>
        {place.type}
        <span className={styles.placedot}>·</span>
        {place.bed}
      </div>
    )

  }

  const checkLikePlace = () => {
    let result = false;
    let placeId = place._id;
    for(let i=0;i<likeplace.length;i++){
      if(likeplace[i].name === place._id && likeplace[i].like === true){
        result = result || true;
      }
    }
    if(result){
      return styles.heartYesLike
    }else{
      return styles.heartNoLike
    }

  }

  const ratingRender = ()=>{
    if(place.rating !== undefined){
      return (
          <span>
            <span className={styles.star}>&#9733;</span>
            <span className={styles.placerating}> {place.rating} </span>
            <span className={styles.placereview}>&nbsp;({place.totalReview})</span>
          </span>
      )
    }
  }
  const id = place._id;
  return (
    <div className={styles.container}>
      <div className={styles.flexbox_container}>
        <img className={styles.placeimg} src={place.picture} width="265" height="177" />
        <button className={styles.heartbutton} onClick={()=>heartClicked(place)}>
          <div className={styles.heartTextFix}>
            <svg className={checkLikePlace()} viewBox="0 0 32 29.6">
              <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                  c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>
          </div>
        </button>

      </div>
      <div className={styles.firstlinetext}>
        {superhostRender()} {placetype()} {ratingRender()}
      </div>
      <div className={styles.placetext}>
        {place.title}
      </div>
      <div className={styles.placepricediv}>
        <span className={styles.placeprice}>${place.price}</span> / night
      </div>
    </div>
  )
}

export default Place;

