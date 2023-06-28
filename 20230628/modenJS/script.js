// 상수, 변수
// 기존의 자바스크립트 ES5
// ES6, ES7, ES2019... ES6 => ESNEXT
// ECMASCRIT : 표준화된 스트립트 프로그래밍 언어

// ES6, var = Variable
// var name = '철수' 
// console.log(name)

// ES6, let / const
// let 변화하는 내용을 넣을 때 쓰는 변수선언법
// const = constant 상수, 변화하지 않는 내용을 담을때 쓴다.
let name = '철수'
name = '영희'
console.log(name)

const myName = '지우'
// myName = '피카츄'
console.log(myName)

// 함수
// Es5
function Multiply (number){
  return number * 2;
}
console.log(Multiply(2))


// ES6 화살표 함수
const Multiply2  = (number) => {
  return number * 2;
}
console.log(Multiply2(2))

// 화살표 함수에서, 매개변수 하나일때만 가능한 방법
const Multiply3 = number => number *2 
console.log(Multiply3(5))

// Class -객체지향 프로그래밍
// Es6
class Pokemon {
  constructor() {
    this.pokemonName = '피카츄'
  }
  showPokemonName () {
    // 포켓몬 이름을 출력해주는 메소드
    console.log(this.pokemonName)
  }
}

// extends = 확장한다. => super()를 넣어줘야함
class Trainer extends Pokemon{
  // 초기화 , trainerName 기본값 = '지우'
  constructor(trainerName = '지우') {
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName () {
    console.log(this.name) 
  }
}

const trainer = new Trainer('웅이')
// 클래스.name 재할당
// trainer.name = '피카츄'
trainer.showTrainerName()
trainer.showPokemonName()