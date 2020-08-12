

function clock() {
  var dateString = moment().format('MMMM Do YYYY, h:mm:ss a');
  $('#currentDay').html(dateString);
}

setInterval(clock, 1000);

var $container = $(".container");
var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

 $.each(workHours, function (index, value) {
     
    var backgroundColor = getTime(value)
    var $Row = $('<div>').addClass('row');
    var $Col1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
    var $Col2 = $('<div></div>').addClass('col-sm-8 past description '+backgroundColor+' time-' + value);
    var $Col3 = $('<button></button>').addClass('col-sm-1 saveBtn');
    var textarea = $('<textarea></textarea>').addClass('col-sm-5 input');
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
       
        $Row.append($Col1);
        $Row.append($Col2);
        $Col2.append(textarea);
        $Row.append($Col3);
        $Col3.append(icon);
        $container.append($Row);
 })

 $('.saveBtn').click(function () {
    var time = $(this).siblings('div.time').text();
    console.log(time);
    var input = $(this).siblings('div.description').children("textarea").val();
    console.log(input);
    localStorage.setItem(time, input);
 })
 
function getTime(current) {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   
 
   var format = hours >= 12 ? 'PM' : 'AM';  
   
   hours = hours ? hours : 12;  
   minutes = minutes < 10 ? '0' + minutes : minutes;
   var currentTime = hours + format;
 

   $.each(workHours, function (index, value) {
    console.log(value)
    $('.time-'+value+' .input').val(localStorage.getItem(value))
 })
   
   if(currentTime == current){
     
      return 'red'
   }
   if(hours == 12 && hours > parseInt(current) && current.includes('PM')){
      return 'green'
   }
   if(current.includes('AM') && format == 'PM'){

      return 'gray'
   } else if(format == 'AM' && current.includes('PM')){
      return 'green'
   }
   
   if(current.includes(format)){
      var currentNumber = parseInt(current.replace(format, ''))
      if(currentNumber <= hours){
         return 'gray'
      } else if(currentNumber == 12){
         return 'gray'
      } else {
         return 'green'
      }
   }
   console.log(hours + format);
   return ''
}