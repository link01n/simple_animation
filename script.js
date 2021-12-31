"use strict";


const btn = document.querySelector('.btn');//получаем кнопку по классу из document
let timerId;//задаем переменную без значения, чтобы она была видна для команды, останавливающей таймер
/*let i = 0;*/

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;//создаем переменную pos

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) { //когда pos достигнет 300, запуститься остановка таймера
            clearInterval(id);
        } else { //а пока pos не дошел до 300
            pos++; //увеличиваем pos на 1
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
