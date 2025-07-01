const game = document.getElementById('game');
const scoreElement = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let score = 0;
let gameInterval;

function createBox() {
    const box = document.createElement('div');
    box.className = 'box';

    const x = Math.random() * (game.offsetWidth - 50);
    const y = Math.random() * (game.offsetHeight - 50);

    box.style.left = x + 'px';
    box.style.top = y + 'px';

    box.addEventListener('click', () => {
        score++;
        scoreElement.textContent = 'Очок: ' + score;
        box.remove();
    });

    game.appendChild(box);

    setTimeout(() => {
        if (box.parentNode) {
            box.remove();
        }
    }, 1000);
}

startBtn.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = 'Очок: 0';
    game.innerHTML = '';

    gameInterval = setInterval(createBox, 800);

    setTimeout(() => {
        clearInterval(gameInterval);
        game.innerHTML = '<p style="font-size: 24px; margin-top: 120px;">Гра закінчена! Очок: ' + score + '</p>';
    }, 10000);
});