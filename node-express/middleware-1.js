const express = require('express'); // npm i --save-dev express
// NodeJS 에서 CommonJS 사용하면
// ES6 import express from "express"와 같음
const app = express();

app.get("/",(req,res,next)=>{
    console.log("first");
    next();
});


app.get("/",(req,res, next)=>{
    console.log("second");
    res.send('응답처리...');
    return; // 다음 middleware를 태우지 않아야 하면 return으로 중지시키기
    next();
});

app.get("/",(req,res)=>{
    console.log("third");
});


app.listen(3000);