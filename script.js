const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let isRunning = false;
let interval;
let minutes = 24;
let seconds = "59";



// Function to update timer display
function updateTimer() {
    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Start/Stop button functionality
startBtn.addEventListener("click", function () {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = "Pause";
        // timerContainer.style.border = "1px solid lightgray";

        interval = setInterval(() => {
            if (seconds > 0 || minutes > 0) {
                seconds--;
                if (seconds === 0 && minutes > 0) {
                    seconds = 59;
                    minutes--;
                }
                updateTimer();
            } else {
                clearInterval(interval);
                isRunning = false;
                startBtn.textContent = "Start";
            }
        }, 1000);
    } else {
        clearInterval(interval);
        isRunning = false;
        startBtn.textContent = "Start";
        // timerContainer.style.border = "2px solid red";
    }
});

// Reset button functionality
resetBtn.addEventListener("click", function () {
    clearInterval(interval);
    isRunning = false;
    minutes = 24;
    seconds = 59;
    updateTimer();
    startBtn.textContent = "Start";
});

// Initial display update
updateTimer();















/*
function filterDivs(category){
    let divs = document.getElementById("container");

    filterDivs.forEach(container => {
        if (category === 'all' || container.getAttributes('data-category') === category){
            container.style.display = 'block';
        } else{
            container.style.display = 'none'
        }
    })
}

*/





function filterDivs(category) {
    const containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        if (container.dataset.category === category) {
            container.style.display = "flex";
        } else {
            container.style.display = "none";
        }
    });
}


filterDivs('pomodoro');






const btnSound = "./src/son/old-radio-button-click-97549.mp3";

const btnClick = document.getElementById("start")

btnClick.addEventListener("click", () => {
    const audio = new Audio (btnSound);
    audio.play();
});


const secondBtnsound = "./src/son/old-radio-button-click-97549.mp3";

const secondBtnClick = document.getElementById("reset");

secondBtnClick.addEventListener("click", () => {
    const audio = new Audio (secondBtnsound);
    audio.play()
});



const shortSound = "./src/son/old-radio-button-click-97549.mp3";

const shortSoundbtn = document.getElementById("secondBtna");

secondBtna.addEventListener("click", () => {
    const audio = new Audio (secondBtnsound);
    audio.play()
});

const shortSoundb = "./src/son/old-radio-button-click-97549.mp3";

const shortSoundbtna = document.getElementById("secondBtnb");

secondBtnb.addEventListener("click", () => {
    const audio = new Audio (secondBtnsound);
    audio.play()
});


const longSound = "./src/son/old-radio-button-click-97549.mp3";

const longSoundbtn = document.getElementById("thirdBtna");

longSoundbtn.addEventListener("click", () => {
    const audio = new Audio (secondBtnsound);
    audio.play()
});


const longSoundb = "./src/son/old-radio-button-click-97549.mp3";

const longSoundbtnb = document.getElementById("thirdBtnb");

longSoundbtnb.addEventListener("click", () => {
    const audio = new Audio (secondBtnsound);
    audio.play()
});


// const finalBtnSound = "./src/son/old-radio-button-click-97549.mp3";

// const finalBtnClicks = document.querySelector(".start");

// finalBtnClicks.addEventListener("click", (){
//     const audio = new Audio (finalBtnSound);
//     audio.play()
// });







//short break timer
const secondTimer = document.getElementById("fiveMin")
const secondStartbtn = document.getElementById("secondBtna")
const secondResetbtn = document.getElementById("secondBtnb")

let isRunningsecond = false;
let secinterval;
let secMinutes = 4;
let secSeconds = 59;

function updateshortTimer(){
    secondTimer.innerHTML = `${secMinutes}:${secSeconds < 10 ? '0' + secSeconds : secSeconds}`;
}

secondStartbtn.addEventListener("click", function(){
    if (!isRunningsecond) {
        isRunningsecond = true;
        secondStartbtn.textContent = "Pause";

        secinterval = setInterval(() => {
            if (secSeconds > 0 || secMinutes > 0){
                secSeconds--;
                if (secSeconds === 0 && secMinutes > 0){
                    secSeconds = 59;
                    secMinutes--;
                }
                updateshortTimer();
            } else{
                clearInterval(secinterval); //
                isRunningsecond = false;
                secondStartbtn.textContent = "Start";
            }
        }, 1000);
    } else {
        clearInterval(secinterval);
        isRunningsecond = false;
        secondStartbtn.textContent = "Start"
    }
})


secondResetbtn.addEventListener("click", function(){
    clearInterval(secinterval);
    isRunningsecond = false;
    secMinutes = 4;
    secSeconds = 59;
    updateshortTimer();
    secondStartbtn.textContent = "Start";
});

updateshortTimer();


//longbreak timer
const displayTimer = document.getElementById("displayTimer");
const thirdStartBtn = document.getElementById("thirdBtna");
const thirdResetBtn = document.getElementById("thirdBtnb");

let isRunningthird = false;
let thirdinterval;
let thirdMinutes = 14;
let thirdSeconds = 59;

function updateLongTimer(){
    displayTimer.innerHTML = `${thirdMinutes}: ${thirdSeconds < 10 ? '0' + thirdSeconds : thirdSeconds}`;
}

thirdStartBtn.addEventListener("click", )

updateLongTimer()