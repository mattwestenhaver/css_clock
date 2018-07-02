console.log('main.js connected')

var d = new Date
$('#date').text(d.toDateString())

var msTimer = setInterval(myTimer, 30);

function myTimer() {
  var date = new Date
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var millis = date.getMilliseconds()

  if (hours === 0) {
    $("#hours").css("width", 35)
  } else {
    $("#hours").css("width", `${hours * 35}`)
  }
  $("#minutes").css("width", `${minutes * 14}`)
  $("#millis").css("width", `${millis * .84}`)

  if (hours === 0) {
    $("#hours").text('12')
  } else if(hours > 11) {
    $("#hours").text(`${hours - 12}`)
  } else if(hours > 0 && hours < 12) {
    $("#hours").text(`${hours}`)
  }
  $("#minutes").text(`${minutes}`)
}
