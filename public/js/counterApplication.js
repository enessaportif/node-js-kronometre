let counter;

function displayCounter() {         //time type'ına dönüştürmeden önce böyle deneyeyim dedim
  document.getElementById("counter").innerText = counter;
  counter = counter - 1;
  let count = setTimeout(displayCounter, 1000);
  if(counter < 0){
    document.getElementById("input-container").innerHTML = 
    `<input type="number" id="input-time" name="input-time">
    <button id="submit-time-btn" type="submit"></button>`;
    return;     //neden fonksiyondan çıkmıyor anlamadım
  };
};


document.getElementById("submit-time-btn").addEventListener("click", () =>{
 counter = document.getElementById("input-time").value;
 document.getElementById("counter").innerText = counter;
 displayCounter();
 document.getElementById("input-container").innerHTML = "";
});

