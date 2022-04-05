# tarcot_homework6b

In Assignment 6B, I fininished building out the appointment scheduling, upcoming appointments, and homepage pages. In this README file, I will be detailing the function of each file.

Assets folder: The assets folder contains two images, which is the individual appointment barcode and the picture of CMU on the homepage

Javascript folder: The javascript folder contains four javascript files: appointmentdetails1.js, appointmentdetails2.hs, upcomingappointments.js, and scheduleappointment.js. Each javascript file corresponds to the html file of the same name. The function of each javascript file is further explained in the comments within each file.

CSS folder: The CSS folder contains one stylesheet titled style1.css. This stylesheet is used for all of the html files

index.html: This file is for the login page of the website, and is the first page the user sees. The user can enter their credentials and click the login button to get to the homepage.

homepage.html: This file is for the homepage of the website. Upon entering the homepage, the user can click on the "Schedule Appointment" tab or the "Appointments" tab to navigate to the other pages. Further down the page underneath the image is a split-screen that contains one feature on each side. The left side has an "Upcoming Appointments" feature, which allows the user to quickly see the details of their upcoming appointments and easily navigate to their details pages. The right side has a "Quick Scheduler" feature that allows the user to quickly schedule an appointment without having to navigate to the "Schedule Appointment" page. The "HealthConnect" logo on this page and the other pages allow the user to quickly navigate to the homepage.

scheduleappointment.html: This file is for the schedule appointment page of the website. The user can reach this page from the "Appointments" page, appointment details pages, or the homepage. In order to schedule an appointment, the user has to follow the steps in order; they first choose an appointment type, then choose a date, and finally choose a time. Step 4 allows the user to review their selections and ensure they are correct before submitting the form. Form validation functions on the associated javascript file (scheduleappointment.js) ensure that the user does not complete the steps out of order. After clicking "submit," the user is taken to an appointment details page (appointmentdetails1.html).

appointmentdetails1.html: This file is the appointment details page associated with the "Schedule Appointment" page. Upon clicking "submit" on the form, the user is taken to this details page. The details shown on this page correspond with the selections that the user made on the "Schedule Appointment" form. This page is associated with appointmentdetails1.js.

NOTE ABOUT APPOINTMENTDETAILS1: The user cannot cancel an appointment from this page, since I was unable to properly implement the functionality for it.

upcomingappointments.html: This file is the upcoming appointments page that shows all the upcoming appointments that the user has scheduled. A new appointment shows up on this page after the user submits the "Schedule Appointment" form. From here, the user can click on the "View Details" link on any appointment that will take them to the appointment details page (appointmentdetails2.html). When an appointment is canceled, the appointment will be removed from this page. This page is associated with upcomingappointments.js.

appointmentdetails2.html: This file is the appointment details page associated with the "Upcoming Appointments" page. I separated the two in order to better implement javascript. On this page, the user can cancel their appointment. The user will see a modal after clicking "Cancel" that asks them if they want to cancel. Clicking either "No" or the x button will close the modal. Clicking "Yes" creates an alert box that tells the user that their appointment has been canceled and takes them back to the "Upcoming Appointments" page. The "Upcoming Appointments" page now has been updated to have that appointment removed. This page is associated with appointmentdetails2.js.

pastappointments.html: This file displays the appointments that have already passed. There is no javascript functionality on this page, but the tabs and "HealthConnect" logo at the top takes the user to another page.

