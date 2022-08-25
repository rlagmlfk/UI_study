// 페이징 처리에 필요한 변수 선언받기
// insert here - current -> react에서는 redux
const store = {
    currentPage: 1,
}
const container = document.getElementById("main");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
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
function getNewsList(){
    console.log('getNewsList 호출성공');
    fetch(NEWS_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
            const newsList = [];
            let template = `
                <div>
                    <h1>Hacker News</h1>
                    <ul>
                        {{__news_list__}}
                    </ul>
                    <div>
                        <a href="#/page/{{__prev_page__}}">이전페이지</a>
                        <a href="#/page/{{__next_page__}}">다음페이지</a>
                    </div>
                </div>
            `;
            // insert here - 페이징 처리를 고려한 for문으로 변경
            for(let i=(store.currentPage - 1)*10; i< store.currentPage * 10;i++){
                //for(let i=0;i<30;i++){
                newsList.push(`
                    <li>
                        <a href='#${result[i].id}'>
                            ${result[i].title} (${result[i].comments_count})
                        </a>
                    </li>
                `);
            } ////////////// end of for문
            template = template.replace("{{__news_list__}}", newsList.join(""));
            template = template.replace("{{__prev_page__}}", store.currentPage > 1? store.currentPage -1 : 1);
            template = template.replace("{{__next_page__}}", store.currentPage + 1);
            container.innerHTML = template; // join 빈문자열을 하나로 묶어주는 함수
        })
        .catch(error => console.log('error', error));
}
const requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
    };

function getNewsContent() {
        const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 쓴다
        fetch(CONTENT_URL.replace("@id",id), requestOptions2)
            .then(response => response.json())
            .then(result => {
                container.innerHTML = `
                    <h1>${result.title}</h1>
                    <div>
                        <a href="#/page/${store.currentPage}">목록으로</a>
                    </div>
                `;
            })
            .catch(error => console.log('error', error));

}

function router() {
    const hashValue = location.hash; //#/page/2
    // http://localhost:5000/index.html# - 디폴트 처음일때
    // http://localhost:5000/index.html#3214567
    if (hashValue === ""){
        getNewsList();
    }
    // #/page/2 숫자 2(currentPage)는 이동해야 되는 이전페이지 번호임
    // "http://localhost:5000/index.html#/page/2" 가 있는 거야?
    else if(hashValue.indexOf("#/page/")>=0) {
        // hashValue.substring(7); 문자열
        store.currentPage = Number(hashValue.substring(7));
        console.log(store.currentPage); // 상세보기 전에 페이지 정보를 확인
        getNewsList();
    }
    else{
        getNewsContent();
    }
} //////// end of router

window.addEventListener("hashchange", router); // 이벤트 핸들러 매핑
router();