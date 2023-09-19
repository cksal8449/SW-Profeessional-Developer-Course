import React from "react";

function User(){
  let name = 'Chanmi';
  return(
    <div>
     <h1 style={{color:'blue'}}>안녕하세요, {name == 'mi' ? name : '손'}님♥</h1>
    </div>
  )
}

export default User;