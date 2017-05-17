setInterval(function() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  } 
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

  var clock = document.getElementById('clock');
  clock.innerText = clockTime;
},1000);


var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var displayWeekday = document.getElementById('day');

whatDayIsIt();

function whatDayIsIt() {
  displayWeekday.innerText = n ;
}