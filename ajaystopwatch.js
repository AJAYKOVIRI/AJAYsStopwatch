const timer = document.getElementById("stopwatch");
var hour = 0;
var minute = 0;
var second = 0;
var stoptime = true;

function startTime() {
  if (stoptime == true) {
    stoptime = false;
    timeLoop();
  }
}
function stopTime() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timeLoop() {
  if (stoptime == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second = second + 1;

    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }

    if (second < 10 ) {
      second = "0" + second;
    }
    if (minute < 10 ) {
      minute = "0" + minute;
    }
    if (hour < 10 ) {
      hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("timeLoop()", 1000);
  }
}
function resetTime() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hour = 0;
  second = 0;
  minute = 0;
}