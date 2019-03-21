'use strict';
let beans=document.querySelector('#beans');
let count= document.querySelector('.beancount');
count.textContent=beans.value;
beans.oninput = function () {
    count.textContent=beans.value;
}