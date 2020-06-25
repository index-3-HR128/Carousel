import React from 'react';
import ListForm from './ListForm.jsx';
import SingleList from './SingleList.jsx'

const LikeForm = ({
  user,
  listbuttonRender,
  createNewList,
  cancelCreateListButton,
  submitCreateListbutton,
  exitLikeFormClicked,
  likeListOnChange,
  clickedplace,
  listLikeToggle
  }) => {
  let list = [];
  let listOBJ = [];
  let unlist = [];

  for(let i=0;i<user.likeplace.length;i++){
    //if place is the same as place clicked
    if(user.likeplace[i].name === clickedplace._id){
      // insert item into listOBJ.
      listOBJ.push(user.likeplace[i])
      // insert list into list array
      list.push(user.likeplace[i].list)
      if(unlist.indexOf(user.likeplace[i].list) >= 0){
        const index = unlist.indexOf(user.likeplace[i].list);
        unlist.splice(index,1);
      }
    }else if(list.indexOf(user.likeplace[i].list) < 0 && unlist.indexOf(user.likeplace[i].list) < 0){
        //input it in unlist array
      unlist.push(user.likeplace[i].list);
    }
  }
  for(let i=0;i<unlist.length;i++){
    //create new object for the list that odes not contain place = place clicked
    let temp={
      _id: '',
      name: '',
      list: unlist[i],
      like: false
    }
    //input into listOBJ.
    listOBJ.push(temp);
  }
  console.log(listOBJ);


  return (
    <div>
      <div onClick={()=>exitLikeFormClicked()}>X</div>
      <div>
        <h3>Save to a list {clickedplace._id}</h3>
      </div>
      <div>
        <ListForm
          listButtonRender={listbuttonRender}
          createNewList={createNewList}
          cancelCreateListButton={cancelCreateListButton}
          submitCreateListbutton={submitCreateListbutton}
          likeListOnChange = {likeListOnChange}/>
      </div>
      <div>
        {listOBJ.map((singleList, index) => (
          <SingleList
            key={index}
            singleList = {singleList}
            listLikeToggle = {listLikeToggle}/>
        ))}
      </div>
    </div>
  )
}


export default LikeForm;

  //   if(clickedplace._id === user.likeplace[i].name && list.indexOf(user.likeplace[i].list) < 0 ){
  //     let temp ={
  //       id: user.likeplace[i]._id,
  //       name: user.likeplace[i].name,
  //       list: user.likeplace[i].list,
  //       like: user.likeplace[i].like
  //     }
  //     listOBJ.push(temp);
  //     list.push(user.likeplace[i].list)
  //   }else if(clickedplace._id === user.likeplace[i].name && list.indexOf(user.likeplace[i].list) >=0){
  //     for(let i in listOBJ){
  //       if(listOBJ[i].list === user.likeplace[i].list){
  //         listOBJ[i].id = user.likeplace[i]._id
  //         listOBJ[i].like = user.likeplace[i].like
  //       }
  //     }
  //   }
  //   else{
  //     if(list.indexOf(user.likeplace[i].list) < 0 ){
  //       let temp={
  //         id: '',
  //         list: user.likeplace[i].list,
  //         like: false
  //       }
  //       listOBJ.push(temp);
  //       list.push(user.likeplace[i].list)
  //     }
  //   }
  // }