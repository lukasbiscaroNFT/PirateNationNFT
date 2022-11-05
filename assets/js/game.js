const pirate = document.querySelector('.pirate')
const cannonball = document.querySelector('.cannonball')
const span = document.querySelector('.player-username')
const cloud = document.querySelector('.cloud')
const gameOver = document.querySelector('.game-over')
const meters = document.querySelector('.meters')
const buttonRestart = document.querySelector('.restart-button')
const textGameOver = document.querySelector('.game-over-text')

window.onload = () => {
    const playerUserName = localStorage.getItem('playerUserName')
    span.innerHTML = playerUserName.toUpperCase()
}

let counterMeters = 0

const timeRunning = setInterval(() => {
    counterMeters++
    meters.innerHTML = counterMeters
}, 1500);

const jump = () => {
    pirate.classList.add('jump')
    setTimeout(() => {
        pirate.classList.remove('jump')
    }, 500)
}

document.addEventListener('keydown', jump)

const loop = setInterval(() => {

    const cannonballPosition = cannonball.offsetLeft
    const piratePosition = Number(window.getComputedStyle(pirate).bottom.replace('px', ''))
    const cloudPosition = cloud.offsetLeft

    if (cannonballPosition <= 220 && cannonballPosition > 0 && piratePosition < 74) {

        cannonball.style.animation = 'none'
        cannonball.style.left = `${cannonballPosition}px`
        pirate.style.animation = 'none'
        pirate.style.bottom = `${piratePosition}px`
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`

        clearInterval(timeRunning)

        gameOver.classList.remove('display')
        textGameOver.innerHTML = `You navigated for ${counterMeters} meters, but you got caught...good luck next time!`

    }
}, 0);

buttonRestart.onclick = () => {
    window.location.reload()
}
