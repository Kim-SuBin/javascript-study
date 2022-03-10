// ES6 set() 자료구조 - 반복

let strArr = ['a', 'b', 'c', 'd', 'e'];

// for
console.log("===for===");
for (let i = 0; i < strArr.length; i++) {
    console.log(i); // 인덱스 번호가 순서대로 출력됨
    console.log(strArr[i]); // 배열의 값이 순서대로 출력됨
}


// for .. in
// 인덱스 번호만 출력 (문자열도 동일)
for (let i in strArr) {
    console.log(i);
}


// for .. of
// 배열의 값만 출력 (문자열도 동일)
for (let i of strArr) {
    console.log(i);
}


// forEach
console.log("===forEach===");
strArr.forEach(function(x) {
    console.log(x); // 배열의 값이 순서대로 출력됨
});
// 위의 코드를 줄여 아래와 같이 작성할 수 있음
strArr.forEach( value => console.log(value));


// Set 반복 - for .. of, keys(), values(), entries()
let animalSet = new Set(['tiger', 'lion', 'dog', 'cat', 'rabbit']);
console.log("===Set===");

// set 은 of를 통해 값을 출력하는 것은 가능하지만, 인덱스 개념이 없기 때문에 in을 통한 출력은 할 수 없음
for (let i of animalSet) {
    console.log(i); // set 의 값이 하나씩 출력됨
}

// keys() 메서드
// 반복할 수 있는 iterator (반복자) 객체를 반환 받음
// iterator 객체 내에는 next() 메서드가 존재함
const keyItr = animalSet.keys();
console.log(keyItr); // [Set Iterator] { 'tiger', 'lion', 'dog', 'cat', 'rabbit' }
// next() 메서드를 이용해 각각의 값을 출력할 수 있음
console.log(keyItr.next().value); // tiger
console.log(keyItr.next().value); // lion
console.log(keyItr.next().value); // dog
console.log(keyItr.next().value); // cat
console.log(keyItr.next().value); // rabbit

// value() 메서드
// keys() 메서드와 유사한 방식으로 동작
const valueItr = animalSet.values();
console.log(valueItr); // [Set Iterator] { 'tiger', 'lion', 'dog', 'cat', 'rabbit' }
console.log(valueItr.next().value); // tiger
console.log(valueItr.next().value); // lion
console.log(valueItr.next().value); // dog
console.log(valueItr.next().value); // cat
console.log(valueItr.next().value); // rabbit

// entries() 메서드
// set 각각의 요소들을 가져와 쌍으로 만들어줌
let nameSet = new Set();
nameSet.add('라이언');
nameSet.add('춘식이');
nameSet.add('어피치');

const nameEntries = nameSet.entries();

for (let i of nameEntries) {
    console.log(i); // 요소를 key 와 value 한 쌍으로 만들어 반환함.
}
/* 출력값
[ '라이언', '라이언' ]
[ '춘식이', '춘식이' ]
[ '어피치', '어피치' ]
 */

// 좀 더 정확하게 알아보기 위해 배열을 사용해보자
let nameArray = [...nameSet];
console.log(nameArray); // [ '라이언', '춘식이', '어피치' ]
// 배열에 대한 key 와 value 값을 출력해보면 index 와 값의 배열이 출력되는 것을 확인할 수 있음
const nameArrEntries = nameArray.entries();
for (let i of nameArrEntries) {
    console.log(i);
}
/*
[ 0, '라이언' ]
[ 1, '춘식이' ]
[ 2, '어피치' ]
*/