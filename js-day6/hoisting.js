const btns = document.querySelectorAll('ul li');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',() =>{
        console.log(i); // 0 1 2
    });
}
// 호이스팅 문제를 즉시실행함수로 해결함
for (var x = 0; x < btns.length; x++) {
    ((index)=>{
        btns[x].addEventListener('click',() =>{
            console.log('index => ',index);
    });
    })(x);
}


// ES5 - var - 전역변수아 지역변수
// ES6 - let변경
// 호이스팅
// 블록 안에서 선언된 지역변수가 코드 블록 밖으로 나와
// 강제로 전역변수화 됨
