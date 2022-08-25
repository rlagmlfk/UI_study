export let count = 0;
// export가 여러개일 때 default는 뺀다
// export가 하나일 때 default 사용
export function increase(){
    count ++;
    console.log('increase : ' + count);
}
export function getCount(){
    return count;
}