const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isJumping = false;

const jump = () => {
    if (!isJumping) {
        isJumping = true;
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
            isJumping = false;
        }, 500);
    }
}

const checkCollision = () => {
    const pipePosition = pipe.getBoundingClientRect();
    const marioPosition = mario.getBoundingClientRect();

    if (
        pipePosition.left < marioPosition.right &&
        pipePosition.right > marioPosition.left &&
        marioPosition.bottom > 0 &&
        marioPosition.top < pipePosition.bottom
    ) {
        clearInterval(loop);

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
    }
}

const loop = setInterval(() => {
    checkCollision();
}, 10);

document.addEventListener('keydown', jump);