import { useState } from 'react';
import Box from './component/Box';


let choice = {
  rock : {
    name: 'Rock',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslBxrOKMaRohjaOBJ_qEpkIE_4D-zEN49mg&usqp=CAU'
  },
  paper : {
    name : 'Paper',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JfmPQiuDsvL7wyeQiqqXm313FsXdhvmqyg&usqp=CAU'
  },
  scissors : {
    name : 'Scissors',
    img:'https://e7.pngegg.com/pngimages/162/334/png-clipart-pokemon-x-and-y-pokemon-go-pokemon-battle-revolution-scyther-pokemon-go-leaf-vertebrate.png'
  }
}

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult]= useState(null);

  let play = () => {

  }

  return (
    <div className="App">
      <div className='box-list'>
      <Box title="You"/>
      <Box title="Computer"/>
      </div>
      <div className="btn-list">
      <button type='button'>가위</button>
      <button type='button'>바위</button>
      <button type='button'>보</button>
      </div>
    </div>
  );
}

export default App;
