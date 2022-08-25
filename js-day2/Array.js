// 배열
// 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
const colors = ["black", "green", "blue"];
console.log(colors);
// arrow function
colors.forEach((color) => console.log(color));
/* 옛날식 */
colors.forEach(function(color){
    console.log(`element ==> ${color}`);
});

colors[1] = "black";
colors.map((color)=> console.log("map", color));

// 배열 선언
const copy =[];

for(let i = 0;i<colors.length;i++){
    copy.push(colors[i]);
    console.log(`copy[${i}] : ${copy[i]}`);
}

colors.forEach(function(item){
    copy.push(item);
    console.log(`copy : ${copy}`);
});

function add(a, b){
    const result = a+b;
    return result;
}

// 객체처럼 쓰이게 됨
const add1 = function(a,b){
    const result = a+b;
    return result;
}

// 권장사항 화살표 함수 - 기존의 익명함수를 좀 더 쓰기 편하게 축약한 형태
const add2 = (a,b) => {
    const result = a+b;
    return result;
}

add2(3,4);
console.log(add2(3,4));

const msg = (txt) => {
    return txt;
}

// 내부로 전달되는 파라미터가 하나면 괄호는 생략 가능함
const msg2 = (txt) => txt;

console.log(msg2('hello arrow function'));

