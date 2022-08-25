function dongInput(){
    let dong = prompt('동이름을 입력하세요');
    if(dong === null || dong.length == 0){
    alert("동이름을 입력하세요");
    return;
    }else{
    action(dong);
    }
}

function choice(zipcode, address){
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#address').value = address;
    // 값이 선택되면 조회 결과 화면 지워주세요
    document.getElementById("root").innerHTML = "";

}


function action(dong){
    console.log('사용자가 입력한 동이름 :' +dong);
    const ajax = new XMLHttpRequest();

const ZIPCODE_URL = 'http://localhost:8000/dev_web/json/jsonZipcodeList.jsp?dong='+dong; //I/O 통신 ->  dead lock , crash
ajax.open('GET', ZIPCODE_URL, false);//true:동기적처리, false:비동기처리
ajax.send();// 전송이 일어난다

console.log(ajax.response);
const address = JSON.parse(ajax.response);
console.log('size : ',address.length);
const table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('width','400');
const htr = document.createElement('tr');
const th1 = document.createElement('th');
th1.appendChild(document.createTextNode('우편번호'));
const th2 = document.createElement('th');
th2.appendChild(document.createTextNode('주소'));
htr.appendChild(th1);
htr.appendChild(th2);
table.appendChild(htr);
for (let i = 0; i < address.length; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const a = document.createElement('a');
    a.href="javascript:choice('"+address[i].zipcode+"','"+address[i].address+"')";
    td.setAttribute('width','90');
    a.appendChild(document.createTextNode(`${address[i].zipcode}`));
    td.appendChild(a);
    const td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(`${address[i].address}`));
    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);
}

document.getElementById('root').appendChild(table);
}
