const canvas = document.getElementById('game-field');
const ctx = canvas.getContext('2d');

let core = {
    canvas: canvas,
    ctx: canvas.getContext('2d')
}

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function clearRect(x, y, w, h) {
    ctx.clearRect(x, y, w, h);
}

function textRect(text, font, x, y) {
    ctx.font = font;
    ctx.fillText(text, x, y);
}

function arcRect(x, y, r, pi, bool, color) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,pi,bool);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

export {core, drawRect, clearRect, textRect, arcRect};