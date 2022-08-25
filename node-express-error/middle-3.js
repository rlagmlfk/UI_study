const express = require('express');
const app = express(); // 객체생성(heap, stack memory(함수의 호출 순서대로 first in last out))

/* 
    app.all과 app.use와의 차이점
    all은 정해진 url에 대해서만 반응함
    use는 tomato가 들어간 어떤 url에 대해서도 모두 반응함
    curl http://localhost:5000/tomato?mem_id=abc
    curl http://localhost:5000/api?mem_id=abc
    curl http://localhost:5000/tomato/bbb - 에러
    curl http://localhost:5000/api/bbb - 에러
*/
app.all("/api",(req,res,next) => {
    console.log('all');
    next();
});

app.use("/tomato",(req,res,next) => {
    console.log('use');
    next();
});


app.get("/:id",(req, res, next) => {
    console.log('middle1');
    res.send('Hello express!!!');
});

// 에러처리 핸들러 코드 추가
// 만일 이것을 안하면 사용자에게 에러메시지가 그대로 노출
// 이것은 해커에게는 아주 유용한 힌트를 제공함 - 보안상 좋지 않다
app.use((error, req, res, next) => {
    console.log(error);
    // 500번 서버 에러를 강제
    res.status(500).send("서버관리자에게 문의바랍니다.");
});

const port = 5000;
app.listen(port, () => {
    console.log(`The Express server is listening at port: ${port}`);
});