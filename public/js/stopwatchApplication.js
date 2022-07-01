let xhr = new XMLHttpRequest();
let stopwatchHour = 0;
let stopwatchMinute = 0;
let stopwatchSecond = 0;
let recentHour = 0;
let recentMinute = 0;
let recentSecond = 0;
let lapHour, lapMinute, lapSecond;
let lap;
let lapCount = 1;
let lapList = ``;
let stopwatch = `${stopwatchHour} : ${stopwatchMinute} : ${stopwatchSecond}`;
let startOrPause;

document.getElementById("stopwatch").innerText = stopwatch;

document.getElementById("start-btn").addEventListener("click",() => {    //başlatma eventi. delay buradan kaynaklı. kronometre 2 saniye geç başlıyor en başta.
  
  startOrPause = false;
  startStopwatch();
  document.getElementById("lap-btn").removeAttribute("disabled");
  document.getElementById("lap-btn").style = "display: inline";
  document.getElementById("reset-btn").style = "display: none";
  document.getElementById("start-btn").style = "display: none";
  document.getElementById("pause-btn").style = "display: inline";
});

document.getElementById("pause-btn").addEventListener("click", () => {    //durdurma eventi
  
  startOrPause = true;
  document.getElementById("lap-btn").style = "display: none";
  document.getElementById("reset-btn").style = "display: inline";
  document.getElementById("start-btn").style = "display: inline";
  document.getElementById("pause-btn").style = "display: none";
});

document.getElementById("reset-btn").addEventListener("click", () => {      //sıfırlama eventi

  resetStopwatch();
});

document.getElementById("lap-btn").addEventListener("click", () => {        //tur eventi 2saniye delay var çözemedim

  lapStopwatch();
});

function startStopwatch(){
  
  if(startOrPause){
    return;
  };
  document.getElementById("stopwatch").innerText = stopwatch;
  stopwatch = `${stopwatchHour} : ${stopwatchMinute} : ${stopwatchSecond}`;
  stopwatchSecond = stopwatchSecond + 1;
  if(stopwatchSecond > 59){
    stopwatchSecond = 0;
    stopwatchMinute = stopwatchMinute + 1;
    if(stopwatchMinute > 59){
      stopwatchMinute = 0;
      stopwatchHour = stopwatchHour + 1;
    }
  }
  let timer = setTimeout(startStopwatch, 1000);
};

function resetStopwatch() {

  stopwatchHour = 0;
  stopwatchMinute = 0;
  stopwatchSecond = 0;
  recentHour = 0;
  recentMinute = 0;
  recentSecond = 0;
  stopwatch = `${stopwatchHour} : ${stopwatchMinute} : ${stopwatchSecond}`;
  document.getElementById("stopwatch").innerText = stopwatch;

};

function lapStopwatch() {   // 2 saniye delay var çözemedim

  lapHour = stopwatchHour - recentHour;
  lapMinute = stopwatchMinute - recentMinute;
  lapSecond = stopwatchSecond - recentSecond;
  lap = `<li>${lapCount}_ ${lapHour} : ${lapMinute} : ${lapSecond}</li>`;
  lapList =+ lap;
  document.getElementById("laps-ul").innerHTML = lapList;
  recentHour = stopwatchHour;
  recentMinute = stopwatchMinute;
  recentSecond = stopwatchSecond;
  lapCount = lapCount + 1;
};



  // xhr.open("POST", "http://localhost:1000/stopwatch");
  // xhr.setRequestHeader("Accept", "text/plain");
  // xhr.setRequestHeader("Content-Type", "text/plain");
  // xhr.send(stopwatch);
