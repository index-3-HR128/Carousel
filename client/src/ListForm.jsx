import React from 'react';

const ListForm = ({listButtonRender,createNewList, cancelCreateListButton, submitCreateListbutton}) =>{
  if(listButtonRender === 'form'){
    return(
      <div>
        <form onSubmit={(e)=>submitCreateListbutton(e)}>
          <label>
            Name
            <div>
            <input
              name="ListName"
              placeholder="Ex. Summer Vacation" />
            </div>
            <div>
              <input type="cancel" value="Cancel" onClick={()=>cancelCreateListButton()}></input>
              <input type="submit" value="Create"></input>
            </div>
          </label>
        </form>
      </div>
    )
  }else{
    return(
      <div>
        <div onClick={()=>createNewList()}>
          Create a new list
        </div>
      </div>
    )
  }
}

export default ListForm;