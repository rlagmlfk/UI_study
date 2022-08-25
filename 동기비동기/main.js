function add(x) {
    return x+2;
}

function account(a, b, cb){
    setTimeout(() => {
        cb(a+b); // 30
    }, 2000);
}

const result = add(3);
// console.log(result); return이 없으면 undefined
const temp = result;
//    앞의 문이 실행되기 전에는 그 다음엔 실행하지 못한다 종속성을 갖는다, 의존관계 동기코드이다.

const result2 = account(10,20, (result)=>{
    console.log('result : ',result);
});
const temp2 = result2;
console.log('temp2 : ', temp2);
/* 

*/