//retrieve a single appointment
var appointmentsParsed = JSON.parse(localStorage.getItem('appointments'));
var appointment = JSON.parse(localStorage.getItem('appointment'));
document.getElementById("datetime").innerHTML = (appointment["date"] + " @ " + appointment["time"]);
document.getElementById("appttype").innerHTML = appointment["type"];

//create variables for cancel appointment modal
var cancelPopup = document.getElementById("cancelpopup");
var cancelButton = document.getElementById("cancelbutton");
var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton")
var span = document.getElementsByClassName("closepopup")[0];

//open cancel appoointment modal
cancelButton.onclick = function() {
  cancelPopup.style.display = "block";
}

//close cancel appointment modal with x button
span.onclick = function() {
  cancelPopup.style.display = "none";
}

//close cancel appointment modal with no button
noButton.onclick = function() {
    cancelPopup.style.display = "none";
}

//cancel appointment and delete appointment from upcoming appointments page
yesButton.onclick = function() {
    appointments = appointmentsParsed.splice(1);
    alert("You have canceled your apppointment!")
    localStorage.setItem('appointments', JSON.stringify(appointments))
}