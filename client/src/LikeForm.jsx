import React from 'react';
import ListForm from './ListForm.jsx';
import SingleList from './SingleList.jsx'

const LikeForm = ({user, listbuttonRender, createNewList, cancelCreateListButton, submitCreateListbutton}) => {
  let list = [];

  for(let i=0;i<user.likeplace.length;i++){
    if(list.indexOf(user.likeplace[i].list) < 0){
      list.push(user.likeplace[i].list)
    }
  }

  return (
    <div>
      <div>X</div>
      <div>
        <h3>Save to a list</h3>
      </div>
      <div>
        <ListForm
          listButtonRender={listbuttonRender}
          createNewList={createNewList}
          cancelCreateListButton={cancelCreateListButton}
          submitCreateListbutton={submitCreateListbutton}/>
      </div>
      <div>
        {list.map( (singleList, index) => (
          <SingleList
            key={index}
            singleList = {singleList} />
        ))}
      </div>
    </div>
  )
}


export default LikeForm;