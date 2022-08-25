const ul = document.querySelector('ul');
const li = document.querySelector('li');
const item_delete = document.querySelector('.item_delete');
const btn_add = document.querySelector('.btn_add');
const input = document.querySelector('input');


/*      
const ul = document.querySelector('ul');
        const li = document.querySelector('li');
        const item = document.querySelector('.item');
        const item_name = document.querySelector('.item_name');
        const item_delete = document.querySelector('.item_delete');
        const item_divider = document.querySelector('.item_divider');
        const btn_add = document.querySelector('.btn_add');
        const input = document.querySelector('input');
        btn_add.addEventListener('click',()=>{
            // alert('입력');
            if(input.value.length > 0){
                li.appendChild(document.createTextNode(input.value));
                input.appendChild(item_delete);
                ul.appendChild(li);
                //li.appendChild(document.createTextNode(item.value));
                //item_delete.appendChild(document.createElement(input.value));
                //item_delete.appendChild(document.createTextNode('삭제'));
                //li.appendChild(item_delete);
                //item.appendChild(item_delete);
                input.value = "";    
            }
});
*/

// 삭제하기
const del_item = (event) => {
    //console.log(event.target);
    //console.log(event.target.parentNode);
    //console.log(event.target.parentNode.parentNode);
    const remove_item = event.target.parentNode.parentNode.parentNode;
    ul.removeChild(remove_item);
};


// 입력하기
const inputText = () => {

    if(input.value.length > 0){
        // console.log(input.value);
        const li = document.createElement('li');
        const item = document.createElement('div');
        const item_divider = document.createElement('div');
        li.className = 'item_row';
        item.className = 'item';
        
        ul.appendChild(li);
        li.appendChild(item);
        li.appendChild(item_divider);
        
        const item_name = document.createElement('span');
        const item_delete = document.createElement('button');
        const i = document.createElement('i');
        const text = input.value;
        
        item_name.className = 'item_name';
        item_name.textContent = text;
        item_delete.className = 'item_delete';
        item_divider.className = 'item_divider';
        i.className = 'far fa-trash-alt';
        
        item.appendChild(item_name);
        item.appendChild(item_delete);
        item_delete.appendChild(i);
    
        item_delete.addEventListener('click', del_item);
        input.value = '';
    }
};

// btn_add버튼 눌렀을 때 입력
btn_add.addEventListener('click', inputText);

// 엔터쳤을 때도 입력하기
input.addEventListener('keydown', (event) => {
    if(event.keyCode === 13){
        inputText();
    }
});

