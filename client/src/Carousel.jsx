import React from 'react';
import Place from './Place.jsx';
import styles from './styles.css';

const Carousel = ({places, heartClicked}) => (
  <div className={styles.row}>
    <div className={styles.row__inner}>
    {places.map( (place) => (
      <Place
        key={place._id}
        place={place}
        heartClicked = {heartClicked} />
    ))}
    </div>
  </div>
);

export default Carousel;