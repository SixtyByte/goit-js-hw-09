import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dateInput=document.querySelector(`#datetime-picker`);
const startButton=document.querySelector("[data-start]")
const refs ={dateday:document.querySelector(`[data-days]`),
datehours:document.querySelector("[data-hours]"), 
dateminutes:document.querySelector("[data-minutes]"),
dateseconds:document.querySelector("[data-seconds]")
}
console.log (refs)


console.log(startButton)
startButton.addEventListener(`click`,convertMs)


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr(dateInput,{ enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1, onClose(selectedDates) {
    console.log(selectedDates[0]); if (selectedDates[0] - new Date() < 0) {
         alert('Please choose a date in the future');
        
        
        
        }
    
  },})




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }