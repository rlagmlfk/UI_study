// 자료형
/* 

    원시형 타입(primative type) - 단일 데이터, Stack공간에 담김
    :문자, 숫자, 논리형, undefinded - 변수를 선언하고 값을 할당하지 않으면 undefined가 저장됨
    참조형 타입(Reference type) - 복합 데이터 {key:value} - Heap공간에 담김
    {
        id:'tomato',
        pw:'123'

    }
    :값이 위치하고 있는 참조 주소값만 메모리에 저장 - 함수도 객체이다
    null - 특정 변수의 값을 비워둘때
    , array(object type) - 연관된 값들을 그룹으로 묶어서 관리
    , 객체 - Object 데이터를 key라는 인덱싱을 통해서 자료를 구조적으로 묶어놓은 상태

*/

let v;
console.log(v);
v = null;
console.log(v);
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null);
console.log(typeof undefined);

let name = 'tomato';
let color = 'red';
let display = '🍅';

let tomato = {
    name: 'tomato',
    color: 'red',
    display: '🍅',
}

console.log(tomato);
console.log(tomato.name);
console.log(tomato.color);
console.log(tomato.display);

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체타입은 참조값(메모리 주소, 레퍼런스)

let orange = {
    name: '오렌지',
}

let apple = orange;
apple.name='사과';
console.log(orange); // 사과
console.log(apple); // 사과

const myCar = {
    name: '소나타',
    color: 'red',
    speed: 50,
}

const himCar = {
    name: '소나타',
    color: 'red',
    speed: 50,
}
console.log(myCar == himCar);
console.log(myCar === himCar);
console.log(myCar.name == himCar.name);
console.log(myCar.name === himCar.name);

let herCar = himCar;
console.log(herCar == himCar);
console.log(herCar === himCar);

// 선언무
let y;
y=2; // 표현식, 할당문
let x = (y = 2);
console.log('x'+x);

// 지수(거듭제곱) **

console.log(Math.pow(5,2));
console.log(5**2);

// +연산자 주의
let text;
text =10+'10'; // 숫자와 문자열을 더하면 문자열로 변환
console.log(text);

// 할당연산자
let i = 1;
i +=2; // 먼저 더하고 나중에 대입 축약버전
console.log(i);
i *=2; // 먼저 곱하고 나중에 대입 축약버전
console.log(i);
i -=2; // 먼저 빼고 나중에 대입 축약버전
console.log(i);
