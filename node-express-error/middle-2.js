const express = require('express');
const app = express(); // 객체생성(heap, stack memory(함수의 호출 순서대로 first in last out))

app.get("/",(req, res, next) => { // all (use) 업무이름을 붙여서 반복되는 코드를 줄이기 위한 용도로 추가 get post
    console.log('first');
    // res.send('hello');
    next(new Error("error")); // 에러를 던진다 사용자에게 에러 결과가 그대로 출력되는 건 좋지 않음
    // 반드시 마지막 체인에서 에러 처리하는 코드를 추가해야 함
},
(req, res, next) => {
    console.log('first2');
    next();
});

app.use((req, res, next) => {
    //http://localhost:5000/6 와 같은 url로 요청하면 아래 메시지가 화면에 출력
    res.status(404).send("해당 url은 존재하지 않습니다.");
    next();
})

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