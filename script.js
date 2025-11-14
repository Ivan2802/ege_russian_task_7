function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

import {data_words_mn, data_words_rp} from './data.js'
let data_words = data_words_mn
let word = document.querySelector('.word')
let btn = document.querySelector('.button_answer')
let answer = document.querySelector('.answer')
let st = document.querySelector('.status')
let real_answer = document.querySelector('.real_answer')
let btn_go = document.querySelector('.button_go')
let mn_btn = document.querySelector('.mn')
let rp_btn = document.querySelector('.rp')
let task = document.querySelector('.task')
let errors = document.querySelector('.errors')

mn_btn.addEventListener('click', () => {
    task.innerHTML = 'Множественное число'
    data_words = data_words_mn
})
rp_btn.addEventListener('click', () => {
    task.innerHTML = 'Родительный падеж (мн. ч)'
    data_words = data_words_rp
})
btn.addEventListener('click', () => {
    let rnd = getRandomInt(Object.keys(data_words).length)
    if (data_words[answer.value] == word.innerHTML) {
        st.innerHTML = 'ВЕРНО'
        st.style.color = 'green'
    } else {
        st.innerHTML = 'НЕ ВЕРНО'
        st.style.color = 'red'
        real_answer.innerHTML = Object.keys(data_words).filter(k => data_words[k] === word.innerHTML)
        errors.innerHTML += `<br> ${real_answer.innerHTML}`
    }
    btn_go.addEventListener('click', () => {
        answer.value = ''
        real_answer.innerHTML = ''
        st.innerHTML = ''
        rnd = getRandomInt(Object.keys(data_words).length)
        word.innerHTML = data_words[Object.keys(data_words)[rnd]]
        answer.value = word.innerHTML
    })
})

let currentButtonIndex = 0;
document.addEventListener('DOMContentLoaded', function() {
    answer.focus()
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            const buttons = ['.button_answer', '.button_go'];
            const currentButtonId = buttons[currentButtonIndex];
            
            const button = document.querySelector(currentButtonId);
            if (button) {
                button.click();
                currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
            }
        }
    });
});