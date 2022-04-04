if (localStorage.appointments)
{   var appointmentParsed = JSON.parse(localStorage.getItem('appointments'));
    for (var n of appointmentParsed) {
        document.getElementById("datetime").innerHTML = (n.date + " @ " + n.time);
        document.getElementById("appttype").innerHTML = n.type;
    }
}
