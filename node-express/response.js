const express = require('express')
const app = express()
// nodejs로부터 요청객체와 응답객체는 주입받음
app.get("/kh/:id", (req, res)=>{
    console.log(`mem_id:${req.query.mem_id}, mem_pw:${req.query.mem_pw}`);
    //res.send(`<font color=red>${req.query.mem_id}</font>`);
    //res.json({"mem_id":"apple"});
    res.sendStatus(400);
    return;
    // send는 두번 하루 수 없다.
    //res.send(`<font color=red>${req.query.mem_pw}</font>`);
});

app.listen(3001);

/* 
    http://localhost:3001/kh/tomato -> id값은 tomato
    http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123

*/