// https://ko.javascript.info/

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

// ----------------------- Class => 객체지향 프로그래밍 -------------------------
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

// ----------------- extends = 확장한다. => super()를 꼭 넣어줘야함 --------------------
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
  //내부 연산자를 끌어다 쓰는 방법 
  another(){
    this.showTrainerName()
  }
}

const trainer = new Trainer('웅이')
// 클래스.name 재할당
// trainer.name = '피카츄'
trainer.showTrainerName() //지우
trainer.showPokemonName() // 피카츄
trainer.another()

// ------------------------------- 스프레드 연산자 --------------------------
// 배열에서도 쓸 수 있고,
// 객체에서도 쓸 수 있다
const Pokemons = ['피카츄','고래파덕','이상해씨']
const newPoke = [ ...Pokemons, '파이리']
// Pokemons.forEach(Pokemon => newPoke.push(Pokemon))
// newPoke.push('파이리')
console.log(newPoke)

const numbers = [1,2,3]
// 4,5를 추가 해서 newNumbers 배열을 새로 생성
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)


const pokemonTrainer = {
  name:'지우',
  Pokemon: "피카츄"
}
console.log(pokemonTrainer.name)

const newTrainer = {
  ...pokemonTrainer,
  age:20
}

console.log(newTrainer)


const char = {
  enLength: 26,
}
// char의 내용을 복사해서
// alphaber : "characters" 속성을 추가해서
const num = {
  ...char,
  alphabet : "characters"
}
console.log(num)


// ---------------------------------- rest 연산자 -------------------------------
// args= arguments
const filterNumber =(...args) => {
return args.filter(number => {
  // 조건을 두가지 걸러낼때
  // OR
  if(number === 1 || number === 3 ){
    return number
  }
})
}
console.log(filterNumber(1,3,6,7,8))

// filter Alphabet
// alphabet
// 'a','b','c','d' 이 인수들을 필터링
// alphabet === 'a' 만 배열로 결과 만들기

const filterAlphabet =(...args) => {
  // return args.filter(alphabet => {
    // if(alphabet === 'a'){
    //   return alphabet
    // }

    return args.filter(char => char ==='a')
  }

console.log(filterAlphabet('a','b','c','d'))
// ['a'] , filter 메소드는 결과를 배열로 만들어준다.

// const Pokemons = ['피카츄','고래파덕','이상해씨']
// 변수명 : filterPokemon 
// 조건 : '피카츄'만 출력
// 결과 : ['피카츄'] 

const filterPokemon = (...args) => {
  return args.filter(pokemon => pokemon === '피카츄')
}
console.log(filterPokemon(...Pokemons))

// let res = 1 + '2'
// console.log(res) //'12'
// console.log (typeof res)


// ----------------------구조분해 - Destructuring ----------------------------
// structur = 구조
// de - 분해

const[a, b] = [1, 2]
console.log(a)
console.log(b)

// const Pokemons = ['피카츄','고래파덕','이상해씨']
// c,d,e 변수 3개에 구조분해 해서 담기
// console.log() 결과 출력

const[c,d,e] = Pokemons
console.log(c,d,e)
// const newMons = [Pokemons, '파이리']
// console.log(newMons)//[['피카츄','고래파덕','이상해씨'],'파이리']
// console.log(newMons.length)//2


// 공백으로 처리한 부분은 skip (건너뛴다)
const[first, ,second] = Pokemons
console.log(first, second) //'피카츄','이상해씨'


//------------------------- 객체 구조분해 ------------------------------
const { nickname, age } = {
  nickname : '홍길동',
  age : 16
}
console.log(nickname, age)

//-------------------------- map 배열 메소드---------------------------
// foEach / Map의 차이
// map은 결과를 새로운 배열로 반환해준다.


// const numbers = [1,2,3]
const doubleNumbers = numbers.map(num => num *2)
console.log(doubleNumbers) //[2,4,6]

// const Pokemons = ['피카츄','고래파덕','이상해씨']
// map을 활용해서 문자열을 더해주세요
// '너로 정했다'
// 변수명 namedPokemon
// console.log(namedPokemon)

const namedPokemon = Pokemons.map(Pokemons => Pokemons +',너로 정했다')
console.log(namedPokemon)