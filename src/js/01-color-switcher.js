const startButton=document.querySelector (`[data-start]`);
const stopButton=document.querySelector (`[data-stop]`);
startButton.addEventListener(`click`, start)
stopButton.addEventListener(`click`,stopChangeColor)

function start() { stopButton.disabled=false;
    startButton.disabled=true; timer=setInterval(startChangeColor,1000)
  
}
function startChangeColor() {
const colorGen = getRandomHexColor();
document.body.setAttribute('style', `background-color:${colorGen}`)

    }

function stopChangeColor(){
clearInterval(timer);

  stopButton.disabled=true;
  startButton.disabled=false;  
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  