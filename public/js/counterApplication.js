let counterHour;
let counterMinute;
let counterSecond;
let counter;
let pauseChecker = 9999;

function displayCounter() {    //time type'ına dönüştürmeden önce böyle deneyeyim dedim
  document.getElementById("counter").innerText = counter;
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  if(pauseChecker === 1){
    return;
  }
  counterSecond = counterSecond - 1;
  if(counterSecond < 0){
    counterSecond = 59;
    counterMinute = counterMinute -1;
    if(counterMinute < 0){
      counterMinute = 59;
      counterHour = counterHour - 1
      if(counterHour < 0 && counterMinute == 59 && counterSecond == 59){ 
        return;
      }
    }
  };
  let count = setTimeout(displayCounter, 1000);
};

document.getElementById("submit-time-btn").addEventListener("click", () =>{
  counterSecond = document.getElementById("input-second").value;
  counterMinute = document.getElementById("input-minute").value;
  counterHour = document.getElementById("input-hour").value;
  counter = `${counterHour} : ${counterMinute} : ${counterSecond}`;
  document.getElementById("counter").innerText = counter;
  pauseChecker = 0;
  displayCounter();
});

document.getElementById("resume-btn").addEventListener("click", () => {
  pauseChecker = 0;
  displayCounter();
});

document.getElementById("pause-btn").addEventListener("click", () => {
  pauseChecker = 1;
})
