const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let isRunning = false;
let interval;
let minutes = 24;
let seconds = 59;
/*
function startTimer(){
    // document.getElementById("timer").innerHTML = setInterval();
    document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

}
*/
/*

startBtn.addEventListener("click", function (){
    if(!isRunning){
        isRunning = true;
        startBtn.textContent = "Stop"
    }
    interval = setInterval (() => {
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
            startButton.textContent = "Start";
        }
    }, 1000);
} else {
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = "Start";
}
});
*/

















// Function to update timer display
function updateTimer() {
    timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Start/Stop button functionality
startButton.addEventListener("click", function () {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = "Stop";
        timerContainer.style.border = "1px solid lightgray";

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
        timerContainer.style.border = "2px solid red";
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
