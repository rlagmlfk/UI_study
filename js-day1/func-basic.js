// 함수
// 함수도 객체이다
// 메소드 오버로딩, 오버라이딩 지원 없음

function hap(a, b){
    const result = a+b;
    return a+b;
}

console.log(hap(1,3));

let lastName = '김';
let firshtName = '춘추';
let fullName = `${lastName} ${firshtName}`
let lastName2 = '이';
let firshtName2 = '순신';
let fullName2 = `${lastName} ${firshtName}`

function namePrint(firshtName, lastName){
    return `${firshtName} ${lastName} `;
}

console.log(namePrint(firshtName, lastName));
console.log(namePrint(firshtName, lastName));

// total변수도 hap과 동일한 메모리 주소를 갖는다.
const total = hap;
console.log(hap(2,3));
console.log(total(2,3));