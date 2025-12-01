const startQuizBtn = document.querySelector('.start-quiz-button');

startQuizBtn.addEventListener('mousedown', () => {
    startQuizBtn.style.backgroundColor = '#490a1f';
})

startQuizBtn.addEventListener('mouseup', () => {
    startQuizBtn.style.backgroundColor = '';
})


window.onload = () => {
    startQuizBtn.classList.add('pulse')
}