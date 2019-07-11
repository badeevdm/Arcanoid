import {arcRect} from './core'
import {soundcollision, endGame} from './sounds'

class Ball {
    constructor(canvas) {
        this.radius = 10
        this.x = canvas.width/2
        this.y = canvas.height-50
        this.speed = 0.5
        this.dx = 1
        this.dy = -1
        this.canvas = canvas;
    }

    draw() {
        arcRect(this.x,this.y,this.radius,Math.PI*2,true,"black")
    }

    move() {
        if(this.y + this.radius + this.dy > this.canvas.height) {
            //Конец игры
            this.radius = 0
            endGame()
            return true
        }
        if (this.y + this.radius < this.radius) {
            soundcollision()
            this.dy = -this.dy
        }
        if(this.x + this.radius + this.dx > this.canvas.width) {
            soundcollision()
            this.dx = -this.dx
        }
        if (this.x + this.radius + this.dx < this.radius) {
            soundcollision()
            this.dx = -this.dx
        }

        this.x = this.x + this.speed * this.dx
        this.y = this.y + this.speed * this.dy
        arcRect(this.x,this.y,this.radius,Math.PI*2,true,"black")
        return false
    }

    fastSpeed(n) {
        this.speed = n;

        setTimeout(()=>{
            //Сбрасываем скорость по дефолту
            this.speed = 1;
        }, 5000) 
    }

    lowSpeed(n) {
        this.speed = n;

        setTimeout(()=>{
            //Сбрасываем скорость по дефолту
            this.speed = 1;
        }, 5000) 
    }
}

export default Ball;