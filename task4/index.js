const timeInput = document.getElementById('time-input');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const countdown = document.getElementById('countdown');

let timer;

startBtn.onclick = function () {
    const seconds = parseInt(timeInput.value);
    if (isNaN(seconds)) return;

    clearInterval(timer);
    countdown.textContent = `Залишилось: ${seconds} сек`;

    let timeLeft = seconds;
    timer = setInterval(() => {
        timeLeft--;
        countdown.textContent = `Залишилось: ${timeLeft} сек`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Час вийшов!');
        }
    }, 1000);
};

stopBtn.onclick = function () {
    clearInterval(timer);
    countdown.textContent = '';
};