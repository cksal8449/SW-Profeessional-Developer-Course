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

  // 유저랑 컴퓨터가 선택한 값 업데이트
  // let play = (userChoice) => {
  //   setUserSelect(choice[userChoice])
  //   let computerChoice = randomChoice()
  //   setComputerSelect(computerChoice);
  //   judgement(choice[userChoice], computerChoice);
  // }

  // 컴퓨터 랜덤 값 선택
  let randeomChoice = () => {
    // choice object 키값을 배열로 만들어주는 함수 사용
    // keys() : 객체의 key 값을 뽑아서 Array로 만들어주는 함수
    let itemArr = Object.keys(choice);

    // 0부터 2사이에 있는 랜덤 값
    // Math floor 소수점 이하를 버리는 함수
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem]
    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final];
  }
  randeomChoice()

  // 조건문으로 유저, 컴퓨터 중 누가 이겼는지 판단
  // let judgement = () => {
  //   if(user.name === computer.name) {
  //     return 'tie'
  //   } else if (user.name === 'Rock')
  //    return computer.name === 'Scissirs' ? 'win' : 'lose';
  //    else if (user.name === 'Paper')
  //    return computer.name === 'Rock' ? 'win' : 'los';
  // } 


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
