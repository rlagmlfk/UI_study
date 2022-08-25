const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 
// 해커뉴스에서 제공하는 데이터셋을 활용해서 dom(html 요소 활용 -> React수업 선수학습)을 조작해보자
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // I/O 통신 -> dead lock, crash
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'; // I/O 통신 -> dead lock, crash

ajax.open('GET', NEWS_URL, false); // true:동기적처리, false:비동기처리
ajax.send(); // 전송이 일어난다
// 서버로부터 응답받은 내용을 출력하기
// console.log(ajax.response);
// 어떻게 클릭했는지 알 수 있는거니? - URL에 파라미터가 조금이라도 달라지면 새로운 요청이라고 판단하니까
// 서버에 다시 재요청이 일어날 수 있다. get 방식이더라도..
window.addEventListener('hashchange',function(){
    const id = location.hash.substr(1);
    // console.log('id',id);
    // console.log('CONTENT_URL.replace',CONTENT_URL.replace('@id',id));
    ajax.open('GET', CONTENT_URL.replace('@id',id), false); // true:동기적처리, false:비동기처리
    ajax.send(); // 전송이 일어난다
    const newContent = JSON.parse(ajax.response);
    this.alert('사용자가 선택한 뉴스 제목은? '+ newContent.title);
    // console.log(newContent);
}); 

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i < 30; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href=`#${newsFeed[i].id}`;
    //a.innerHTML = `${newsFeed[i].title}('57')`;
    a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
    li.appendChild(a);
    ul.appendChild(li);

}

document.getElementById('root').appendChild(ul);