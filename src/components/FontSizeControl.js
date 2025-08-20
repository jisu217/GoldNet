import React from 'react';
import './FontSizeControl.css';

const FontSizeControl = ({ increase, decrease, reset }) => {
  return (
    <div className="font-size-control">
      <span>글자 크기</span>
      <button onClick={decrease} title="글자 작게">-</button>
      <button onClick={reset} title="원래대로">100%</button>
      <button onClick={increase} title="글자 크게">+</button>
    </div>
  );
};

export default FontSizeControl;