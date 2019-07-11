import {drawRect, clearRect} from './core'

export default class Platform {
    constructor(canvas) {
        //Начальное положение платформы и ее параметры
        this.canvas = canvas;
        this.x = this.canvas.width/2 - 55
        this.y = this.canvas.height-20
        this.width = 110
        this.height = 20
        this.color = '#F44336'
    }

    draw() {
        drawRect(this.x, this.y, this.width, this.height, this.color);
    }

    move(event) {
        let mouseC = {
            x: event.clientX,
            y: event.clientY
        }
        if ((mouseC.x - this.width/2 > this.canvas.offsetParent.offsetLeft && mouseC.x + this.width/2 < this.canvas.offsetParent.offsetLeft + this.canvas.width) 
            && (mouseC.y > this.canvas.offsetParent.offsetTop && mouseC.y < this.canvas.offsetParent.offsetTop + this.canvas.height) ) {
                this.x = ((mouseC.x - this.canvas.offsetParent.offsetLeft) - this.width/2)

        }   
    }

    bigPlatform(n) {
        this.x = this.x - n/2
        this.width = 110 + n/2
        if(timer) {
            clearTimeout(timer)
        }

        let timer = setTimeout(()=>{
            //Сбрасываем размеры по дефолту
            this.width = 110;
        }, 5000) 
    }

    smallPlatform(n) {
        this.x = this.x + n/2
        this.width = 110 - n/2
        if(timer) {
            clearTimeout(timer)
        }

        let timer = setTimeout(()=>{
            //Сбрасываем размеры по дефолту
            this.width = 110;
        }, 5000) 

    }
}