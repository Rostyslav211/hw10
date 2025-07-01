const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

let scale = 1;
let direction = 1;
let position = 0;
let colorChange = 0;

const animate = setInterval(() => {
    scale += 0.05 * direction;
    if (scale > 1.5 || scale < 0.8) direction *= -1;
    box1.style.transform = `scale(${scale})`;

    position = (position + 5) % 360;
    box2.style.transform = `translateX(${Math.sin(position * Math.PI / 180) * 50}px)`;

    colorChange = (colorChange + 1) % 360;
    box3.style.backgroundColor = `hsl(${colorChange}, 80%, 60%)`;
}, 50);