//varibles
const dayHours = [];
const table = document.getElementById('myTable')
const d = new Date("2020-09-06T17:47:30.01");
d.getHours(); // => 
d.getMinutes(); // =>  
d.getSeconds(); // =>

const availableHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
function clock() {

var Date = new Date();
var hh = date.getHour();
var mm = datye.getMinutes();

hh = hh < 10 ? '0'+hh : hh;
mm = mm < 10 ? '0'+mm : mm;

curr_time = hh+ ':'+mm;
return curr_time;

}


<div class="col-sm col-md-10 description">
   <div class="input-group">
  <Text class="weekday"></Text>
  <button class="save-button d-flex center align-center"></button>
      </div>
   </div>;


$(".saveBtn").on("click", function () {
   //get nearby values.
   console.log(this);
   var text = $(this).siblings(".description").val();
   var time = $(this).parent().attr("id");

   //set items in local storage.
   localStorage.setItem(time, text);
})
if (curr_time = d){
   return "red" 
}
if else {

   return "green"

}

