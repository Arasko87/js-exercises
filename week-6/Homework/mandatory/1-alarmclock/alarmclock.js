 
function setAlarm() {
  
  let inputValue = document.querySelector("#alarmSet").value;

  let enteredValue = document.querySelector("#timeRemaining");
  
      timer(inputValue,enteredValue);

      var myVar = setInterval(function(){

      inputValue = inputValue -1 ;
      timer(inputValue,enteredValue);

      if (inputValue === 0 ){
        playAlarm();
        clearInterval(myVar);
      }

    }, 1000);
}
function timer(time,any){

any.textContent = "Time Remaining 00: " + time ;

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");
audio.volume = 0.1;
function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
