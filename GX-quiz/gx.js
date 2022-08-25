// 해커뉴스 1단계 5단계 수업 리뷰
// ul 안에 li태그 추가하기
const items = document.querySelector('.items'); // ul 태그
// 사용자가 입력한 운동명을 받기 위한 객체 찾기
const input = document.querySelector('.footer_input');
// 버튼 이벤트 처리
const btn_add = document.querySelector('.btn_add'); // + 추가 버튼

function addItem(){
    // 추가하기
    const text = input.value;
    if(text === "") {
        input.focus();
        return;
    }
    // 아이템 만들기
    const item = createItem(text);
    items.appendChild(item);
    // 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    input.value = '';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    const item = document.createElement('div');
    item.setAttribute('class','item');
    const item_name = document.createElement('span');
    item_name.setAttribute('class','item_name');
    // 클릭 후 innerHTML or innerText or
    item_name.innerText = text; // item_name.textContent = text;
    const item_delete = document.createElement('button');
    item_delete.setAttribute('class','item_delete');
    item_delete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    item_delete.addEventListener('click', () => {
        items.removeChild(itemRow);
    });
    const item_divider = document.createElement('div');
    item_divider.setAttribute('class','item_divider');
    // div에 name넣기
    item.appendChild(item_name);
    // div에 삭제버튼 넣기
    item.appendChild(item_delete);
    // li태그에 div넣기
    itemRow.appendChild(item);
    // li태그에 구분선 추가
    itemRow.appendChild(item_divider);

    return itemRow;
}

// 추가버튼 눌렀을 때 item 추가하기
btn_add.addEventListener('click', () => {
    // 추가하는 함수 호출
    addItem()
});

// 엔터했을 경우도 동일하게 처리
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addItem();
    }
})