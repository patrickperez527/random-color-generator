const color = document.querySelector('.color');
const btn = document.getElementById('btn');

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomRGB = () => [
    randomNumber(0,255),
    randomNumber(0,255),
    randomNumber(0,255)
];

btn.addEventListener('click', e => {
    const rgb = randomRGB();
    const content = `RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    document.body.style.background = content;
    color.textContent = content;
})