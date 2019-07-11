function soundcollision() {
    var audio = new Audio();
    audio.src = './sound/Explosion10.wav'; 
    audio.play();
}

function soundBonus() {
    var audio = new Audio();
    audio.src = './sound/Beep3.wav'; 
    audio.play();
}

function endGame() {
    var audio = new Audio();
    audio.src = './sound/Shut_Down4.wav'; 
    audio.play();
}
export {soundcollision, soundBonus, endGame};