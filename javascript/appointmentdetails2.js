
var appointmentsParsed = JSON.parse(localStorage.getItem('appointments'));


var appointment = JSON.parse(localStorage.getItem('appointment'));
document.getElementById("datetime").innerHTML = (appointment["date"] + " @ " + appointment["time"]);
document.getElementById("appttype").innerHTML = appointment["type"];

// Get the modal
var cancelPopup = document.getElementById("cancelpopup");

// Get the button that opens the modal
var cancelButton = document.getElementById("cancelbutton");

var noButton = document.getElementById("noButton");

var yesButton = document.getElementById("yesButton")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closepopup")[0];

// When the user clicks on the button, open the modal
cancelButton.onclick = function() {
  cancelPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cancelPopup.style.display = "none";
}

noButton.onclick = function() {
    cancelPopup.style.display = "none";
}

yesButton.onclick = function() {
    appointments = appointmentsParsed.splice(1);
    alert("You have canceled your apppointment!")
    localStorage.setItem('appointments', JSON.stringify(appointments))
}


/*var appointmentParsed = JSON.parse(localStorage.getItem('appointments'));
for (var i = 0; i < appointmentParsed.length; i++) {
    var appointments = JSON.parse(appointments[i]);
    localStorage.setItem('appointments', JSON.stringify(appointments))
}*/




/*var div = document.getElementById("singleAppointment");
    for(var i = 0; i < div.length; i++){
        if (clickDetails()) {
         console.log(appointment)
        }
}*/

/*        document.getElementById("datetime").innerHTML = (n.date + " @ " + n.time);
        document.getElementById("appttype").innerHTML = n.type;*/

/*var div = document.getElementById("singleAppointment");
{  var appointmentParsed = JSON.parse(localStorage.getItem('appointments'));
      for(var i = 0; i < div.length; i++){
            for (var n of appointmentParsed) {
               if (div[i] == appointmentParsed[n])
               document.getElementById("datetime").innerHTML = (n.date[i] + " @ " + n.time[i]);
               document.getElementById("appttype").innerHTML = n.type[i];
         }
   }
}*/


/*viewDetails.onclick = clickDetails();
function clickDetails() {
    document.getElementById("datetime").innerHTML = document.getElementsByClassName("allApptsDateTime");
      document.getElementById("appttype").innerHTML = document.getElementsByClassName("allApptsType");
}*/

/*var div = document.getElementsByClassName("singleAppointment");
{  var appointmentParsed = JSON.parse(localStorage.getItem('appointments'));
      for(var i = 0; i < div.length; i++){
            for (var n of appointmentParsed) {
               document.getElementById("datetime").innerHTML = (n.date[i] + " @ " + n.time[i]);
               document.getElementById("appttype").innerHTML = n.type[i];
         }
   }
}*/

/*console.log(div[i]);
      document.getElementById("datetime").innerHTML = document.getElementsByClassName("allApptsDateTime")[i];
      document.getElementById("appttype").innerHTML = document.getElementsByClassName("allApptsType")[i];
*/