var buttonStart;
var buttonPause;
var buttonReset;
var divTempo;
var timerId;
var tempo = 0;

window.onload = init;

function init(){
  buttonStart = document.getElementById("start");
  buttonStart.onclick = start;

  buttonPause = document.getElementById("pause");
  buttonPause.onclick = pause;
  buttonPause.disabled = true;

  buttonReset = document.getElementById("reset");
  buttonReset.onclick = reset;

  divTempo = document.getElementById("tempo");
}

function reset(){
  tempo = 0;
  divTempo.innerText = tempo.toFixed(1) + "s";
}

function pause(){
  clearInterval(timerId);
  buttonPause.disabled = true;
  buttonStart.disabled = false;
}

function start(){
  timerId = setInterval( print , 100 );
  buttonPause.disabled = false;
  buttonStart.disabled = true;
}

function print(){
  tempo = tempo + 0.1;
  divTempo.innerText = tempo.toFixed(1) + "s";
}
