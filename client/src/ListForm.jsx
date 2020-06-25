import React from 'react';

const ListForm = ({listButtonRender,createNewList, cancelCreateListButton, submitCreateListbutton, likeListOnChange}) =>{
  if(listButtonRender === 'form'){
    return(
      <div>
        <form onSubmit={(e)=>submitCreateListbutton(e)}>
          <label>
            Name
            <div>
            <input
              name="ListName"
              placeholder="Ex. Summer Vacation"
              onChange = {(e)=>likeListOnChange(e)}/>
            </div>
            <div>
              <input type="button" name="cancel" value="Cancel" onClick={()=>cancelCreateListButton()}></input>
              <input type="submit" name="submit" value="Create" ></input>
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