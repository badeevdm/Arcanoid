import Bonus from './bonuses';
import { textRect } from './core'
import {soundBonus, soundcollision} from './sounds'

let score = 0;


export function CollapseCheck(canvas, enemy, ball, bonuses, player) {
    //столкновения шарика и блоков
    for (let i = 0; i < enemy.arr.length; i++) {
        for (let j = 0; j < enemy.arr[i].length; j++) {
            if (enemy.arr[i][j].state) {
                if (ball.x > enemy.arr[i][j].x && ball.x < enemy.arr[i][j].x + enemy.w && ball.y > enemy.arr[i][j].y && ball.y < enemy.arr[i][j].y + enemy.h) {
                    soundcollision();
                    score = score + 10;
                    ball.dy = -ball.dy
                    enemy.arr[i][j].state = 0
                    if (enemy.arr[i][j].bonus) {
                        bonuses.push(new Bonus(enemy.arr[i][j]))
                    }
                }
            }
        }
    }
    //Столкновение с игроком
    if(ball.y >= player.y && ball.x >= player.x && ball.x <= player.x + player.width && ball.y < player.y + player.height) {
        ball.dy = -ball.dy
    }
    //Столкновения бонусов с игроком
    bonuses.forEach((bonus, index, arr) => {
        //
        if (bonus.x > player.x && bonus.x  < player.x + player.width && bonus.y > player.y && bonus.y < player.y + player.height) {
            soundBonus()
            //бонусы
            if (bonus.typeBonus === 'fastBall') {
                ball.fastSpeed(1.5);
            }
            if (bonus.typeBonus === 'slowBall') {
                ball.lowSpeed(.5);
            }
            if (bonus.typeBonus === 'bigPlatform') {
                player.bigPlatform(50)
            }
            if (bonus.typeBonus === 'smallPlatform') {
                player.smallPlatform(30)
            }
            //если бонус упал на игрока удалить из массива
            arr.splice(index,1)
        }
        if (bonus.y > canvas.height) {
             //если бонус упал за пределы удалить из масива
            arr.splice(index,1)
        }
    });
    textRect(`Ваш счет: ${score}`, "15px Arial", 500, 480)
}