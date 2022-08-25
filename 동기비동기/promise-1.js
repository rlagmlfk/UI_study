const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
    }, 2000);
    //reject('Fail');
});

p.then((ok) => {
    console.log('첫번째 성공');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('두번째 성공');
        },3000);
    })
}).then(function(ok){
    console.log(ok);
})
.catch((error)=>{
    console.log(error);
})
// 여러개의 비동기상황을 복잡하게 얽혀있거나 두개의 실행결과가 나왔을 때 또 제 3의 뭔가를 처리하는
// 단순하게 업무처리를 하기 위해 promise라는 객체를 지원해 주는 것이다.
