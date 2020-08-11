//Global variales 
var schedulehrs = [];
var availablehrs = {};
var minute = minutes();
var newDay = minutes().hour(0);
var currentTime = minutes.hour

// internal clock
function clock() {
var currentTime = new Date ( );
var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );
$('#currentDay').html(datestring)
}

setInterval(clock, 1000)

//create a grid for the calender 

var Work = ["9am", "10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
var $container = $(".container");
