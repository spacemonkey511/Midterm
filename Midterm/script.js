function displayDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();
    var dateTimeString = dateString + ' ' + timeString;
  
    document.getElementById('mydate').innerText = dateTimeString;
  }
  
  window.onload = displayDateTime;
  