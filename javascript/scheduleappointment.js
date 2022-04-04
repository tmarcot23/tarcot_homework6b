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


var appointments = []
var appointmentsLocal =[];

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
    if (localStorage.appointments)
    { appointmentsLocal = JSON.parse(localStorage.getItem('appointments'));
      appointments = appointmentsLocal;
    }
    console.log(appointments);
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }
}