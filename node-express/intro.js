// import express from "express";
// 아래에서 require를 사용하려면 package.json에 type:module이 아니라 commonjs로 변경해줌
//ES6를 사용하려면 type:module로 정의함

const express = require('express'); // npm i --save-dev express
// NodeJS 에서 CommonJS 사용하면
// ES6 import express from "express"와 같음
const app = express();

app.get("/",(req,res)=>{
    console.log("get");
    res.send("안녕하세요. 서버의 응답입니다.");
});

app.listen(3000);