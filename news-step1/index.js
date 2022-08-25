const content = document.createElement('div');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
/* 
    <ul>
        <li><a href="#">a</a></li>
        <li><a href="#">b</a></li>
        <li><a href="#">c</a></li>
    </ul>
*/
// 구조파악이 힘들다
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        // 자바스크립트로 태그를 만들기
        const ul = document.createElement("ul");
        for(let i=0;i<10;i++){
            const li = document.createElement("li");
            li.innerHTML = result[i].title; // text node 추가
            ul.appendChild(li);
        }
        document.getElementById("root").appendChild(ul);
    })
    .catch(error => console.log('error', error));

    /* 
    문제제기 
    DOM  구성을 코드적으로 작성하니 태그들의 위치, 위계, 구조가 명확하게 보이지 않는다.

    어떻게 하면 개선할 수 있을까..?
    해결 방법..?
    구조 파악이 힘들다...? 네...?
    DOM API를 최대한 사용하지 않는다
    createElement, appendChild, innerHTML 따위를 말함
    */