const express = require('express')
const app = express()
app.use(express.json());
// nodejs로부터 요청객체와 응답객체는 주입받음
app.post("/", (req, res)=>{
    console.log(req.body);
});

app.listen(3000);

/* 
    http://localhost:3000/kh/tomato -> id값은 tomato
    http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123

*/