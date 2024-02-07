const mainTitle = document.querySelector('#counter');
let i = 0;
const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click',()=>{
    i++;
    mainTitle.textContent = i;
})

btnDecrement.addEventListener('click',()=>{
    i-- ;
    mainTitle.textContent = i;
})
btnReset.addEventListener('click',()=>{
    i=0 ;
    mainTitle.textContent = i;
})
