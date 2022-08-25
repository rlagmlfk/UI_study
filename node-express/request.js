const express = require('express')
const app = express()
// nodejs로부터 요청객체와 응답객체는 주입받음
app.get("/kh/:id", (req, res)=>{
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.query);
    console.log(`mem_id:${req.query.mem_id}, mem_pw:${req.query.mem_pw}`);
    res.send("안녕하세요. 서버의 응답입니다.");
});

app.listen(3001);

/* 
    http://localhost:3001/kh/tomato -> id값은 tomato
    http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123

*/