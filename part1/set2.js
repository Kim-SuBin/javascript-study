// ES6 set() 자료구조
// 생성 시 추가와 Spread (펼침) 연산자 출력

// 생성 시 값을 추가하는 방법
let strSet = new Set().add('X').add('Y');
console.log(strSet); // Set(2) { 'X', 'Y' }

// 추가
strSet.add('A');
strSet.add('D');
strSet.add('B');
console.log(strSet); // Set(5) { 'X', 'Y', 'A', 'D', 'B' }
console.log(strSet.size); // 5

// Spread (펼침) 연산자 출력 -> iterable object 의 요소를 하나씩 분리하여 전개
let strArray = ['k', 'o', 'r', 'e', 'a'];
// 배열의 값을 하나씩 분리해서 한 줄에 출력
console.log(...strArray); // k o r e a
// 배열에 대한 값을 보여줌
console.log([...strArray]); // [ 'k', 'o', 'r', 'e', 'a' ]

let str = 'korea';
// 문자열의 각각의 문자를 분리해서 한 줄에 출력
console.log(...str); // k o r e a
// 문자열의 각각의 문자를 배열의 값으로 담아 출력
console.log([...str]); // [ 'k', 'o', 'r', 'e', 'a' ]

// 변수를 통해서가 아닌 문자열을 바로 입력해도 됨
console.log(...'hello');
console.log([...'hello']);

// set -> array
let fruitSet = new Set(['apple', 'banana', 'watermelon', 'strawberry']);
console.log(fruitSet); // Set(4) { 'apple', 'banana', 'watermelon', 'strawberry' }
// set 은 순서가 없기 때문에 인덱스 접근을 할 수 없음
console.log(fruitSet[0]); // undefined
// spread 연산자를 사용해 set 을 배열로 변환
let fruitArray = [...fruitSet];
console.log(fruitArray); // [ 'apple', 'banana', 'watermelon', 'strawberry' ]
// 배열로 변환했기 때문에 인덱스 접근 가능
console.log(fruitArray[0]); // apple
