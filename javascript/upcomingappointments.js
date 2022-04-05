    //loop through "appointments" array to make HTML for new appointment on upcoming appointments page
     var appointmentsParsed = JSON.parse(localStorage.getItem('appointments'));
    for (var i = 0; i < appointmentsParsed.length; i++) {

        n = appointmentsParsed[i];

        var allAppointments = document.getElementById("allAppointments");

        var singleAppointment = document.createElement("div")
        singleAppointment.classList.add("singleAppointment")

        var dateIcon = document.createElement("i");
        dateIcon.classList.add("fas", "fa-regular", "fa-calendar-days");
        singleAppointment.appendChild(dateIcon);

        var dateInfo = document.createElement("h4");
        dateInfo.innerHTML = (n.date + " @ " + n.time)
        dateInfo.classList.add("allApptsDateTime")
        singleAppointment.appendChild(dateInfo);

        var typeIcon = document.createElement("i");
        typeIcon.classList.add("fas", "fa-solid", "fa-syringe");
        singleAppointment.appendChild(typeIcon);

        var typeInfo = document.createElement("h4");
        typeInfo.innerHTML = n.type
        typeInfo.classList.add("allApptsType")
        singleAppointment.appendChild(typeInfo);

        var locationIcon = document.createElement("i");
        locationIcon.classList.add("fas", "fa-solid", "fa-location-dot");
        singleAppointment.appendChild(locationIcon);

        var locationInfo = document.createElement("h4");
        locationInfo.innerText = "TCS Hall";
        singleAppointment.appendChild(locationInfo);

        var viewDetails = document.createElement("a");
        viewDetails.classList.add("viewDetails");
        var viewDetailsLink = document.createTextNode("View Details");
        viewDetails.appendChild(viewDetailsLink);
        viewDetails.href = "./appointmentdetails2.html";
        viewDetails.addEventListener("click", () => {
                    let appointment = n;
                    localStorage.setItem('appointment', JSON.stringify(appointment));
        })
        singleAppointment.appendChild(viewDetails);

        allAppointments.appendChild(singleAppointment);
    }