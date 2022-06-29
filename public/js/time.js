function displayCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let amOrPm = hours < 12 ? "AM" : "PM";
  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
  document.getElementById("clock").innerText = timeString;
  let timer = setTimeout(displayCurrentTime, 1000);
}
function addZero(component) {
  return component < 10 ? "0" + component : component;
}
displayCurrentTime();