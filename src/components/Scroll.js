import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid transparent', maxHeight: '700px', paddingLeft: '1em', paddingRight: '1em', display:'flex'}}>
      {props.children}
    </div>
  );
};

export default Scroll;