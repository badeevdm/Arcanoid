import {
    core
} from './core'
import Platform from "./platform"
import Enemies from "./bricks"
import Ball from './ball'
import {
    CollapseCheck
} from './collapse'


const canvas = core.canvas;
let row = 5
let col = 4

let enemy = new Enemies(row, col);
let ball = new Ball(canvas);
let player = new Platform(canvas);
let bonuses = []

let display = document.getElementById('display')
let overflow = document.querySelector('.overflow')
let button = document.getElementById('state')




document.addEventListener("mousemove", player.move.bind(player));

button.addEventListener('click', function() {
    overflow.classList.add('hide')
    startGame()
})

function init() {

    enemy.init();
    enemy.draw();
    ball.draw();
    player.draw();
}

function startGame() {
    init()
    let loop = setInterval(() => {
        core.ctx.clearRect(0, 0, canvas.width, canvas.height);
        enemy.draw();
        player.draw();
        ball.move();
        CollapseCheck(canvas, enemy, ball, bonuses, player);
        if (bonuses) {
            bonuses.forEach(item => {
                item.draw()
            })
        }
        if (ball.move()) {
            clearInterval(loop)
            overflow.children[0].children[0].innerHTML = 'Game Over'
            button.innerHTML = 'Заново'
            overflow.classList.remove('hide')
            button.addEventListener('click', function(){
                window.location.reload();
            })
        }
    }, 10);

}

init();