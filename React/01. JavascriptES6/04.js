// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자
let person = {
  name : 'jhon',
  age : '67'
}

// 삼항 연산자
// 조건 ? 참일 때 실행 할 코드 : 거짓일 때

// person이라는게 존재한다면, person.name
// 없다면 console.log에 '없다'.
console.log(person.name ? person.name : '없다')

// age가 18이상이라면, '성인 입니다'
// 아니라면 '미성년자 입니다'
console.log(person.age >= 18 ? '성인 입니다' : '미성년자 입니다')

// 삼항연산자 다중조건
// 65세 이상은 '노인 입니다'
// 다중 조건을 작성할 경우 조건을 소괄호로 묶어준다.
console.log((person.age >= 65) ? '노인 입니다': (person.age >= 18) ? '성인 입니다' : '미성년자 입니다')