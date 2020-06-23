import React from 'react';

const TopBar = ({page, totalpage}) => (
  <div>
    <h2>More Places to stay</h2>
    <div>
      {page} / {totalpage}
    </div>
    <div>
      <button>Left</button>
    </div>
    <div>
      <button>Right</button>
    </div>
  </div>
)
export default TopBar;