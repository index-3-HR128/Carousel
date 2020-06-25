import React from 'react';
import styles from './styles.css';


const TopBar = ({page, totalpage, leftArrowClicked, rightArrowClicked}) => (
  <div className={styles.outline} >
    <div className={styles.moreplacetostay}>
      <p>More Places to stay</p>
    </div>
    <div className={styles.topBar}>
      <button onClick={()=>rightArrowClicked()}>&gt;</button>
    </div>
    <div className={styles.topBar}>
      <button className="button" onClick={()=>leftArrowClicked()}>&lt;</button>
    </div>
    <div className={styles.topBar}>
      {page} / {totalpage}
    </div>


  </div>
)
export default TopBar;