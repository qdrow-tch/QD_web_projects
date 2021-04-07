'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let text_content = document.querySelector(".text");
let navs_box = document.querySelectorAll(".nav-link");
navs_box.forEach(function(elem){
    elem.addEventListener("click", clickHandler);
})
let currentElem = navs_box[0];
/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
   changeText(event);
   changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    currentElem.classList.remove("active")
    event.target.classList.add("active");
    currentElem = event.target;

}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */

//Мне кажется я тут намудрил, вероятно есть хороший и более просто способ, если подскажите буду признателен

function changeText(event) {
    let reg_numb = /\d+/;
    let position = event.target.textContent.match(reg_numb);
    text_content.textContent = texts[`text${position[0]}`];
}