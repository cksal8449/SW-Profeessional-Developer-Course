import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';

let choice = {
  rock : {
    name : 'Rock',
    img : 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg'
  },
  paper : {
    name : 'Paper', 
    img : 'https://dictionary.cambridge.org/ko/images/thumb/paper_noun_002_26402.jpg?version=5.0.305'
  },
  scissors : {
    name : 'Scissors',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtZOIPMrEps54-OsxSI1J50Pr5znQx6lDaA&usqp=CAU'
  }
}

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 유저랑 컴퓨터가 선택한 값 업데이트
  let play = (userChoice) => {
    setUserSelect(choice[userChoice])

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgment(choice[userChoice], comChoice))
  }

  // 컴퓨터 랜덤 값 선택
  let randomChoice = () => {
    // choice object 키값을 배열로 만들어주는 함수 사용
    // keys() : 객체의 key 값을 뽑아서 Array로 만들어주는 함수
    let itemArr = Object.keys(choice);
    
    // 0부터 2사이에 있는 랜덤 값
    // Math.floor 소수점 이하를 버리는 함수
    let randomItem = Math.floor(Math.random() * itemArr.length)
    let final = itemArr[randomItem]

    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final]
  }
  randomChoice()

  // 조건문으로 유저, 컴퓨터 중 누가 이겼는지 판단
  let judgment = (user, computer) => {
    // user가 이겼는지, computer 이겼는지
    // 어떤 값을 이용해서 판단할건지 결정
    // 사용자가 rock 컴퓨터가 scissors 사용자 win, com lose
    // 사용자가 선택한 값, 컴퓨터가 선택한 값 비교
    if(user.name == computer.name) {
      return 'tie'
    } else if(user.name == 'Rock') return computer.name == 'Scissors' ? 'win' : 'lose'
    else if(user.name == 'Paper') return computer.name == 'Rock' ? 'win' : 'lose'
    else if(user.name == 'Scissors') return computer.name == 'Paper' ? 'win' : 'lose'
  }

  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You" select={userSelect} result={result}/>
        <Box title="Computer" select={comSelect} result={result}/>
      </div>

      <div className="btn-list">
        <button onClick={() => play('scissors')} type='button'>가위</button>
        <button onClick={() => play('rock')} type='button'>바위</button>
        <button onClick={() => play('paper')} type='button'>보</button>
      </div>
    </div>
  );
}

export default App;