console.log('main.js connected')

var d = new Date
$('#date').text(d.toDateString())

var msTimer = setInterval(myTimer, 30);

function myTimer() {
  var date = new Date
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var millis = date.getMilliseconds()

  $("#hours").css("width", `${hours * 17.5}`)
  $("#minutes").css("width", `${minutes * 7}`)
  $("#millis").css("width", `${millis * .42}`)

  if(hours > 11) {
    $("#hours").text(`${hours - 12}` + ' PM')
  } else {
    $("#hours").text(`${hours}` + ' AM')
  }
  $("#minutes").text(`${minutes}` + ' minutes')
}
