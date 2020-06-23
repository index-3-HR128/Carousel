import React from 'react';

const SingleList = ({singleList}) => (
  <div>
    <div>{singleList}</div>
    <div>
      <button type="submit">like</button>
    </div>
  </div>
)

export default SingleList;