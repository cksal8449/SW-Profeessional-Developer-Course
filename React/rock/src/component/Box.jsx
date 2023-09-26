import React from 'react';
import './Box.css';

const Box = (props) => {
  return (
    <div className="box-item">
      <h1>{props.title}</h1>
      {/* 
      null error 해결 방법 => 조건부 렌더링 
      null이 아닐떄만 값이 렌더링 되도록
      */}
      <h2>{props.select && props.select.name}</h2>
      <img className='item-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslBxrOKMaRohjaOBJ_qEpkIE_4D-zEN49mg&usqp=CAU" alt="바위 이미지"/>
      <h2>{props.result}tie</h2>
    </div>
  );
};


export default Box;