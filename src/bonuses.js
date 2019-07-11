import {arcRect} from './core'

class Bonus {
    constructor(brick) {
        this.color = "#ff1744"
        this.fall = 0.75
        this.x = brick.x + brick.w / 2
        this.y = brick.y + brick.h / 2
        this.radius = brick.h / 2
        this.typeBonus = brick.bonus
    }

    draw() {
        if (this.typeBonus === 'fastBall') {
            this.color = '#ff1744'
        }
        if (this.typeBonus === 'slowBall') {
            this.color = '#00897b'
        }
        if (this.typeBonus === 'smallPlatform') {
            this.color = '#ffee58'
        }
        if (this.typeBonus === 'bigPlatform') {
            this.color = '#3d5afe'
        }
        this.y = this.y + this.fall;
        arcRect(this.x, this.y, this.radius, Math.PI * 2, false,this.color)
    }


}

export default Bonus;