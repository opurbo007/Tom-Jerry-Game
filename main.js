let jerry = document.querySelector('.jerry');
let tom = document.querySelector('.tom');
let gameOver = document.querySelector('.gameOver');
let score = 0;
let loop = true;
let backAudio = new Audio('music.mp3');

setTimeout(() => {
    backAudio.play();
},1000)

document.onkeydown = function (e) {
    console.log(e);
    if (e.keyCode == 38) {
        // let jerry = document.querySelector('.jerry');
        jerry.classList.add('jerryJump');
        setTimeout(() => {
            jerry.classList.remove('jerryJump');
        }, 700);
        
    }
    else if (e.keyCode == 39) {
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = jerryX + 210 + "px";
    }
    else if (e.keyCode == 37) {
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = (jerryX - 210) + "px";
    }
}

setInterval(() => {
    jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
    jerryY = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));

    tomX = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    tomY = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));
    
    diffX = Math.abs(jerryX - tomX);
    diffY = Math.abs(jerryY - tomY);

    console.log(diffX, diffY);

    if (diffX < 110 && diffY < 110) {
        gameOver.style.visibility = 'visible';
        tom.classList.remove('tomRun');
        
        setTimeout(() => {
           
            backAudio.pause();
        },100)
        
    }
    else if(diffX < 180 &&loop){
        score += 1;
        loop = false;
        scoreUpdate(score);
        setTimeout(() => {
            loop = true;
        },1000)
    }

}, 100);

function scoreUpdate(score) {
    scoreCon.innerHTML = "Score: " + score;
}
