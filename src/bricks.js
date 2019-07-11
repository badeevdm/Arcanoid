import {drawRect, clearRect} from './core'

class Enemies {
    constructor(row, col) {
        this.colors = ["#ff6f00", "#009688", "#FFC107","#ff6f00", "#009688"];
        this.color;
        this.arr = [];
        this.w = 135
        this.h = 25
        this.row = row
        this.col = col
        this.bonus = ['fastBall', 'slowBall', 'bigPlatform', 'smallPlatform']
    }

    init() {
        for (let i = 0; i <= this.col - 1; i++) {
            this.arr[i] = []
            for (let j = 0; j <= this.row - 1; j++) {
                //генерируем рандомный бонус в рандомный блок
                let chance = Math.round(100*Math.random());
                var randomBonus = false;
                if (chance > 65) {
                    randomBonus = this.bonus[Math.round(this.bonus.length * Math.random())];
                }
                this.arr[i][j] = {
                    x: 0,
                    y: 0,
                    w: this.w,
                    h: this.h,
                    state: 1,
                    color: this.colors[j],
                    bonus: randomBonus || false
                }
            }
        }
    }

    draw() {
        for (let i = 0; i <= this.col - 1; i++) {
            for (let j = 0; j <= this.row - 1; j++) {
                if (this.arr[i][j].state) {
                    let enemyX = this.arr[i][j].x
                    let enemyY = this.arr[i][j].y
    
                    enemyX = (i*(this.w+10)+5)+10
                    enemyY = (j*(this.h+10)+5)+10
    
                    this.arr[i][j].x = enemyX
                    this.arr[i][j].y = enemyY
    
                    drawRect(enemyX, enemyY, this.w, this.h, this.arr[i][j].color)
                }

            }
        }
    }

}

export default Enemies;