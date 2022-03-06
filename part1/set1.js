// ES6 set() 자료구조

// set()
// ES6에서 새롭게 도입한 데이터 자료구조
// value 들의 집합 또는 컬렉션
// 중복을 허용하지 않음
// 순서에 의미가 없음. (인덱스 접근 X)

// 일반적인 배열
let numbers = [1, 2, 3, 4, 5, 5];
console.log(numbers); // [ 1, 2, 3, 4, 5, 5 ]
console.log(numbers[4]); // 5
console.log(numbers[4]); // 5

// 사용법
// 생성 : new
// 추가 : add
// 삭제 : delete

// 생성
let alphaSet = new Set();
console.log(alphaSet); // Set(0) {} -> object set 객체를 반환

// 추가
alphaSet.add('A');
alphaSet.add('B');
alphaSet.add('C');
console.log(alphaSet); // Set(3) { 'A', 'B', 'C' }
console.log(alphaSet[0]); // undefined -> 배열과 다르게 인덱스 개념이 없음, 길이는 사이즈로 출력
console.log(alphaSet.size); // 3
alphaSet.add('A');
alphaSet.add('B');
alphaSet.add('C');

// 중복된 값을 넣어도 중복을 허용하지 않기 때문에 값에 변화가 없음.
console.log(alphaSet); // Set(3) { 'A', 'B', 'C' }
console.log(alphaSet.size); // 3

// 삭제
alphaSet.delete('C');
console.log(alphaSet); // Set(2) { 'A', 'B' }

// 모든 값 삭제
alphaSet.clear();
console.log(alphaSet); // Set(0) {}
