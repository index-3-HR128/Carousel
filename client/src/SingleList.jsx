import React from 'react';
import styles from './styles.css';


const SingleList = ({singleList, listLikeToggle}) => {
  let likeRender= () =>{
    if(singleList.like === true){
      return (
        <div>&hearts;</div>
      )
    }else{
      return (
        <div>X</div>
      )
    }
  }


  return(
    <div>
      <div>{singleList.list}</div>
      <div>
        <div onClick={(e)=>listLikeToggle(e,singleList)}>{likeRender()}</div>
      </div>
    </div>
  )
}


export default SingleList;