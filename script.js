import { clockImage, clockFontColor, calBackgroundColor, calFontColor, dateColor } from "./config.js";

const time = document.getElementById('cal-time');
const date = document.getElementById('cal-date');

function updateClock() {
  // clock
  document.getElementById("cal-clock-container").style.backgroundImage = "URL(" + clockImage + ")";
  document.getElementById("cal-clock-container").style.color = clockFontColor;

  document.getElementById("cal-table").style.backgroundColor = calBackgroundColor;
  document.getElementById("cal-table").style.color = calFontColor;

  
  var d = new Date();

  var year = d.getFullYear();
  var monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = monthsList[d.getMonth()];
  var day = d.getDate();
  var daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayOfWeek = daysList[d.getDay()];

  var hours = d.getHours();
  var mins = d.getMinutes();
  var seconds = d.getSeconds();
  var timeOfDay = "AM";

  if (hours > 11){
    if (hours !== 12){
      hours = hours - 12;
    }
    timeOfDay = "PM";
  }

  if (hours == 0){
    hours = 12;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.textContent = hours + ":" + mins + ":" + seconds + " " + timeOfDay;

  date.textContent = dayOfWeek + ", " + month + " " + day + ", " + year;

  // calendar

  var f = new Date(year, d.getMonth(), 1);
  var fDayOfWeek = f.getDay() + 1;

  var totalDays = new Date(year, d.getMonth(), 0).getDate();

  var calIndex = fDayOfWeek;
  var calDay = 1;

  while (calDay < totalDays + 1){
    if(calDay == day){
      document.getElementById(calIndex).style.backgroundColor = dateColor;
    }
    document.getElementById(calIndex).textContent = calDay;
    calIndex ++;
    calDay ++;
  }
}

setInterval(updateClock, 1000);
