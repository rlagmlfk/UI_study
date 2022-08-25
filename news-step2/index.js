const content = document.createElement('div');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
/* 
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
*/
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    .then(response => response.json())
    .then(result => {
        const ul = document.createElement("ul");
        for(let i=0;i<10;i++){
            const div = document.createElement("div");
            div.innerHTML = `
                <li>
                    <a href='#${result[i].id}'>
                        ${result[i].title} (${result[i].comments_count})
                    </a>
                </li>
            `;
            ul.appendChild(div.firstElementChild);
            document.getElementById("root").appendChild(ul);
            // document.getElementById("root").appendChild(ul);
        }
        document.getElementById("root").appendChild(ul);
        document.getElementById("root").appendChild(content);
    })
    .catch(error => console.log('error', error));

    const requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
    };

    window.addEventListener("hashchange", () => {
        console.log(location.hash);
        const id = this.location.hash.substring(1); // #31914288에서 첫번째 자리 #은 잘라내고 쓴다
        fetch("https://api.hnpwa.com/v0/item/@id.json".replace("@id",id), requestOptions2)
            .then(response => response.json())
            // callback
            // .then(result => console.log(result))
            .then(result => {
                const title = this.document.createElement("h1");
                title.innerHTML = result.title;
                content.appendChild(title);
            })
            .catch(error => console.log('error', error));
    });