function add(a,b){
    return a+b;
}
console.log(add(1,2));
console.log(add(2,3));
let colors = require('colors'); //outputs green text
console.log(colors.rainbow('hello'));
console.log(colors.green('hello NodeJS'));

console.log('test');
// nodemon은 node monitor의 약자로, 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가
// 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈이다.
// nodemon을 설치하면 재시작 없이 코드를 자동 반영할 수 있다.
// npm i nodemon -g