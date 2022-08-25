let ename = "scott"; // 전역 스코프
// 자바 스크립트에서는 함수 내부에 또다른 함수가 올 수 있다.
// 함수 선언 방법 2가지 있다
// 함수문
// 함수식
function methodA(){
    let i = 5;
    console.log(ename);
    console.log(i);
    // insert here - before
    // 스코프가 중복될 수 있다.
    // 함수 안에 함수가 올 수 있다. (중복스코프)
    // 호이스팅 실제로 코드가 실행되기 전에 내부 코드를 스캔하고 읽음 선언이 뒤라도 호출이 가능
    // innerMethod()가 호이스팅에 의해 끌어올려져서 호출이 가능해짐
    innerMethod();
    // 함수문
    function innerMethod(){
        let j = 10;
        console.log(i);
    }
    // insert here - after
    innerMethod();
    
    // 함수식일때 -before    
    // methodB(); 호출안됨
    // 함수식
    const methodB = function(){
        console.log('methodB');
    }
    // 함수식일때 -after
    methodB();
}

methodA();
// console.log(i); // 함수밖에서는 호출안됨


/* 
    글로벌 스코프 - member vaiable, global variable 전역변수
    : 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐
    함수 스코프 - 함수 안에서 정의됨 main.ival, sub.ival
    : 함수가 만들어졌다고 해서 스코프가 생김X, 호출해야함
    블록 스코프 
    : 좌중괄호 우중괄호
    : for(int i;1!=1;)

    LifeCycle
    init() -> service() -> destroy() 주체가 시스템(LiveServer)
*/