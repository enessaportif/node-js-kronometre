let counterHour;
let counterMinute;
let counterSecond;
let counter = document.getElementById("counter").innerText;
let pauseChecker = 9999;
let xhr = new XMLHttpRequest();
if (counter) {
  displayCounter();
}
function displayCounter() {
  //time type'ına dönüştürmeden önce böyle deneyeyim dedim
  document.getElementById("counter").innerText = counter;
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  if (pauseChecker === 1) {
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
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  xhr.open("POST", "http://localhost:1000/counter");

  xhr.setRequestHeader("Accept", "text/plain");
  xhr.setRequestHeader("Content-Type", "text/plain");
  console.log(counter);
  xhr.send(counter);
  pauseChecker = 0;
  displayCounter();
});

document.getElementById("resume-btn").addEventListener("click", () => {
  pauseChecker = 0;
  displayCounter();
});

document.getElementById("pause-btn").addEventListener("click", () => {
  pauseChecker = 1;
});
