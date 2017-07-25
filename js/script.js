setInterval(function() {
  var currentTime = new Date();

  var hours = currentTime.getHours() % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var minutes = padding(currentTime.getMinutes())
  var seconds = padding(currentTime.getSeconds())
  var period = hours >= 12 ? "PM":"AM";

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

  var clock = document.getElementById('clock');
  clock.innerText = clockTime;
},1000);


var d = new Date();

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var n = weekday[d.getDay()];

var dd = padding(d.getDate());
var mm = padding(d.getMonth() + 1)
var yyyy = d.getFullYear();


var today = dd + " / " + mm + " / " + yyyy
var displayWeekday = document.getElementById('day');
var displayDate = document.getElementById('date');

whatDayIsIt();
whatDateIsIt();

function whatDayIsIt() {
  displayWeekday.innerText = n ;
}

function whatDateIsIt() {
  displayDate.innerText = today;
}

function padding(v) {
  return v < 10 ? '0' + v : v;
}
