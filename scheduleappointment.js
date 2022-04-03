function checkTypeButton() {
    var getSelectedValue = document.querySelector('input[name="schedulerbuttons"]:checked');
    if(getSelectedValue != null) {
      document.getElementById("categorytype").innerHTML = getSelectedValue.value;
    return true
    }
    else {
      return false
    }
}

function checkDateButton() {
    var getSelectedValue = document.querySelector('input[name="selectiondate"]:checked');
    if((getSelectedValue != null) && (checkTypeButton() == true)) {
      document.getElementById("categorydate").innerHTML = getSelectedValue.value;
      return true
    }
    else if((getSelectedValue != null) && (checkTypeButton() == false)) {
      alert("Please select an appointment type")
      getSelectedValue.checked = false;
    }
    else {
      return false
    }
}

function checkTimeButton() {
    var getSelectedValue = document.querySelector('input[name="selectiontime"]:checked');
    if((getSelectedValue != null) && (checkDateButton() == true) && (checkTypeButton()==true)) {
      document.getElementById("categorytime").innerHTML = getSelectedValue.value;
      return true
    }
    else if((getSelectedValue != null) && (checkDateButton() == false) && (checkTypeButton()==true)) {
      alert("Please select a date")
      getSelectedValue.checked = false;
    }
    else if((getSelectedValue != null) && (checkDateButton() == false) && (checkTypeButton()==false)) {
      alert("Please select an appointment type and date")
      getSelectedValue.checked = false;
    }
    else {
      return false
    }
}

/*if (appointmentsLocal > 0) {
  appointments = appointmentsLocal;
}*/

var appointments = []
var appointmentsLocal =[];

/*if (appointmentsLocal > 0) {
  appointments = appointmentsLocal;
}*/

function formValidation() {
  if((checkTypeButton()==false) || (checkDateButton()==false)  || (checkTimeButton()==false)) {
    alert("Please fill out all fields");
  }
  else {
    let appointment = {
      type: document.querySelector('input[name="schedulerbuttons"]:checked').value,
      date: document.querySelector('input[name="selectiondate"]:checked').value,
      time: document.querySelector('input[name="selectiontime"]:checked').value
    }
    // check if local storage exists and initialize appointments
    if (localStorage.appointments)
    { appointmentsLocal = JSON.parse(localStorage.getItem('appointments'));
      appointments = appointmentsLocal;
    }
    // if no local storage appointments will be an empty array
    console.log(appointments);

    // add the new appointment from above
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }
}



/*function makeAppointment(type, date, time) {
  this.type = type;
  this.date = date;
  this.time = time;
}*/


/*function createAppointment(type, date, time) {
  this.type = type
  this.date = date
  this.time = time
}

   var appointment = new createAppointment(document.querySelector('input[name="schedulerbuttons"]:checked').value,
                                           document.querySelector('input[name="selectiondate"]:checked').value,
                                            document.querySelector('input[name="selectiontime"]:checked').value)

/*IGNORE FOR NOW: working on the code

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("backbutton").style.display = "none";
  } else {
    document.getElementById("backbutton").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("continuebutton").innerHTML = "Confirm Appointment";
  } else {
    document.getElementById("continuebutton").innerHTML = "Continue";
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}*/

/*function displayRadioValue() {
    var date = document.getElementsByName('selectiondate');
    for(var i = 0; i < date.length; i++) {
        if(date[i].checked)
          {
          document.getElementsByClassName("times").style.visibility = "visibile"
      }
  }
}*/

/*var type = document.getElementById("categorytype");
var date = document.getElementById("categorydate");
var time = document.getElementById("categorytime");*/