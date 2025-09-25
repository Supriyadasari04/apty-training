"use strict";

const countdownInput = document.getElementById("countdown-input");
const startCountdownBtn = document.getElementById("start-countdown");
const countdownDisplay = document.getElementById("countdown-display");

let countdownTimeout;

startCountdownBtn.addEventListener("click", () => {
  let time = parseInt(countdownInput.value, 10);
  if (isNaN(time) || time <= 0) return;
  countdownDisplay.textContent = time;
  clearTimeout(countdownTimeout);

  function tick() {
    time--;
    countdownDisplay.textContent = time;
    if (time > 0) {
      countdownTimeout = setTimeout(tick, 1000);
    }
  }

  countdownTimeout = setTimeout(tick, 1000);
});

let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = document.getElementById("stopwatch-display");
const startStopwatchBtn = document.getElementById("start-stopwatch");
const stopStopwatchBtn = document.getElementById("stop-stopwatch");
const resetStopwatchBtn = document.getElementById("reset-stopwatch");

startStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    const minutes = Math.floor(stopwatchTime / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
});

stopStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
});

resetStopwatchBtn.addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchDisplay.textContent = "0:00";
});
