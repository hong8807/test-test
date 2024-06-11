let timer = null;
let seconds = 0;

window.onload = function () {
    document.getElementById('setMinutes').addEventListener('input', function () {
        seconds = this.value * 60;
    });
};

function startTimer() {
    if (timer !== null) return;
    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            displayTime();
        } else {
            stopTimer();
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    displayTime();
}

function displayTime() {
    const h = parseInt(seconds / 3600);
    const m = parseInt((seconds % 3600) / 60);
    const s = parseInt(seconds % 60);
    document.getElementById('display').textContent = 
        `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}
