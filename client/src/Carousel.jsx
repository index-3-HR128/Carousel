import React from 'react';
import Place from './Place.jsx';
import styles from './styles.css';
// import ScrollView from './ScrollView.jsx';
// import ScrollElement from './ScrollElement.jsx';

const Carousel = ({places, heartClicked, likeplace}) => (
  <div className={styles.row}>
      <div className={styles.row__inner}>
        <ul className={styles.listul}>
          {places.map( (place) => (
            // <ScrollElement place={place}>
              <li className={styles.listli}>
              <Place
                key={place._id}
                place={place}
                heartClicked = {heartClicked}
                likeplace = {likeplace}/>
              </li>
          ))}
        </ul>
      </div>
  </div>
);

export default Carousel;