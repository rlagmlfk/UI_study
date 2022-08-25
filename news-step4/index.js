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
            newsList.push("<ul>");
            for(let i=0;i<30;i++){
                newsList.push(`
                    <li>
                        <a href='#${result[i].id}'>
                            ${result[i].title} (${result[i].comments_count})
                        </a>
                    </li>
                `);
            } ////////////// end of for문
            newsList.push("</ul>");
            container.innerHTML = newsList.join("");
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
                        <a href="#">목록으로</a>
                    </div>
                `;
            })
            .catch(error => console.log('error', error));

}

function router() {
    // console.log(location.hash);#3214567
    const hashValue = location.hash;
    // 첫 진입이면
    if (hashValue === ""){
        getNewsList();
    }else{
        getNewsContent();
    }
} //////// end of router

window.addEventListener("hashchange", router); // 이벤트 핸들러 매핑
router();