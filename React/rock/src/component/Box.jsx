import React from 'react';
import './Box.css';

const Box = (props) => {
  return (
    <div className="box-item">
      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img className='item-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslBxrOKMaRohjaOBJ_qEpkIE_4D-zEN49mg&usqp=CAU" alt="바위 이미지"/>
      <h2>{props.result}tie</h2>
    </div>
  );
};


export default Box;