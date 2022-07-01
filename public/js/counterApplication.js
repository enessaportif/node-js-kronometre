let counterHour;
let counterMinute;
let counterSecond;
let counter = document.getElementById("counter").innerText;
let pauseChecker;
let xhr = new XMLHttpRequest();
if (counter) {
  displayCounter();
}
function displayCounter() {
  //time type'ına dönüştürmeden önce böyle deneyeyim dedim
  document.getElementById("counter").innerText = counter;
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  if (pauseChecker) {
    return;
  }
  counterSecond = counterSecond - 1;
  if (counterSecond < 0) {
    counterSecond = 59;
    counterMinute = counterMinute - 1;
    if (counterMinute < 0) {
      counterMinute = 59;
      counterHour = counterHour - 1;
      if (counterHour < 0 && counterMinute == 59 && counterSecond == 59) {
        document.getElementById("pause-btn").style = "display: none";
        document.getElementById("submit-time-btn").style = "display: inline";
        return;
      }
    }
  }
  let count = setTimeout(displayCounter, 1000);
}

document.getElementById("submit-time-btn").addEventListener("click", () => {
  counterSecond = document.getElementById("input-second").value
    ? document.getElementById("input-second").value
    : 0;
  counterMinute = document.getElementById("input-minute").value
    ? document.getElementById("input-minute").value
    : 0;
  counterHour = document.getElementById("input-hour").value
    ? document.getElementById("input-hour").value
    : 0;

  if(counterHour < 0 || counterHour > 23 || counterMinute < 0 || counterMinute > 59 || counterSecond < 0 || counterSecond > 59){
    alert("Please enter a valid time!");
    return;
  }
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  xhr.open("POST", "http://localhost:1000/counter");

  xhr.setRequestHeader("Accept", "text/plain");
  xhr.setRequestHeader("Content-Type", "text/plain");
  console.log(counter);
  xhr.send(counter);
  pauseChecker = false;
  displayCounter();
  document.getElementById("submit-time-btn").style = "display: none";
  document.getElementById("pause-btn").style = "display: inline";
  document.getElementById("reset-btn").style = "display: inline";
});

document.getElementById("resume-btn").addEventListener("click", () => {
  pauseChecker = false;
  displayCounter();
  document.getElementById("pause-btn").style = "display: inline";
  document.getElementById("resume-btn").style = "display: none";
});

document.getElementById("pause-btn").addEventListener("click", () => {
  pauseChecker = true;
  document.getElementById("pause-btn").style = "display: none";
  document.getElementById("resume-btn").style = "display: inline";
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("submit-time-btn").style = "display: inline";
  document.getElementById("pause-btn").style = "display: none";
  document.getElementById("resume-btn").style = "display: none";
  document.getElementById("reset-btn").style = "display: none";
  counter = "";
  pauseChecker = true;
  xhr.open("POST", "http://localhost:1000/counter");
  xhr.send(counter);
});
