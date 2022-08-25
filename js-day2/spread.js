// 전개연산자
const colors = ["red", "green", "blue"];
// ...은 스프레드 연산자(react관련)
const colors2 = [...colors, "black"];
console.log(colors2);
// 스프레드 연산자로 처리하지 않으면 괄호가 안쪽에 또 나옴
const colors3 = ["gray", ...colors2];
console.log(colors3);

let dept1 = [10,20,30];
let dept2 = [40,50,60];
let dept3 = [...dept1, ...dept2];
console.log(dept3);

let dept = {
    deptno: 10,
    dname: "개발부",
    loc: "제주",
}

let emp = {
    empno : 7566,
    ename : 'King',
    hiredate : '2022-05-17',
};

let obj3 ={...dept, ...emp};
console.log(obj3);

let obj4 = {...emp, empno: 7800, ename: 'john', hiredate: '2000-11-28'};
console.log(obj4);

let depts =[
    {deptno:10, dname:'총무부', loc: '인천'},
    {deptno:20, dname:'개발부', loc: '제주'},
    {deptno:30, dname:'기획부', loc: '부산'},
]

let depts2 = [...depts, {deptno: 40, dname: '인사부', loc:'서울'}];
console.log(depts2);
let depts3 = [...depts2, {dept: 50}];
console.log(depts3);