import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dateInput=document.querySelector(`#datetime-picker`);
const startButton=document.querySelector("[data-start]")
startButton.disabled=true;
let timeFly;

const refs ={dateday:document.querySelector(`[data-days]`),
datehours:document.querySelector("[data-hours]"), 
dateminutes:document.querySelector("[data-minutes]"),
dateseconds:document.querySelector("[data-seconds]")
}

let interval
function convertMs(timeFly) {
  
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(timeFly/ day);
  // Remaining hours
  const hours = Math.floor((timeFly % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((timeFly % day) % hour) / minute);
  // Remaining seconds
const seconds = Math.floor((((timeFly % day) % hour) % minute) / second);
refs.dateday.textContent=days.toString().padStart(2,'0'),
refs.dateminutes.textContent=minutes.toString().padStart(2,'0'),
refs.datehours.textContent=hours.toString().padStart(2,'0'),
refs.dateseconds.textContent=seconds.toString().padStart(2,'0')

} 



flatpickr(dateInput,{ enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1, onClose(selectedDates) {
    console.log(selectedDates[0]);  if (selectedDates[0] - new Date() < 0) {
         alert('Please choose a date in the future');
    
        
        
        
        }else {startButton.removeAttribute('disabled');
        startButton.addEventListener('click', () => {
            startButton.setAttribute('disabled', true);
           
           interval= setInterval(() => {timeFly=selectedDates[0]-new Date();
            if (timeFly<=0) {clearInterval(interval);
              
            } else {convertMs(timeFly);
              
            }
            
              
              
              
            }, 1000);
            
            
          //
          
          
          });
    
          
    }
    
  },})



  
 