console.log('main.js connected')

var d = new Date
$('#date').text(d.toDateString())

var msTimer = setInterval(myTimer, 25);

function myTimer() {
  var date = new Date
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var seconds = date.getSeconds()
  var millis = date.getMilliseconds()

  if (hours === 0) {
    $("#hours").css("width", 26.25)
  } else {
    $("#hours").css("width", `${hours * 26.25}`)
  }

  if (minutes === 0) {
    $("#minutes").css("width", `${10.5}`)
  } else {
    $("#minutes").css("width", `${minutes * 10.5}`)
  }

  if (seconds === 0) {
    $("#seconds").css("width", `${10.5}`)
  } else {
    $("#seconds").css("width", `${seconds * 10.5}`)
  }

  $("#millis").css("width", `${millis * .63}`)

  if (hours === 0) {
    $("#hours").text('12')
  } else if(hours > 11) {
    $("#hours").text(`${hours - 12}`)
  } else if(hours > 0 && hours < 12) {
    $("#hours").text(`${hours}`)
  }
  
  $("#minutes").text(`${minutes}`)
  $("#seconds").text(`${seconds}`)
}
