/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-2

      Author: Jerry Sypkens
      Date:   June 1, 2016

      Filename: scripts.js
   */

"use strict";
//  Global Variables 
var selection = document.getElementById("dateSelected");
var result = document.getElementById("day");
var allDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];
var selectedDate;
var dayOfWeekNumber;
var dayOfWeekName; 

function lookUpDay() {
    selectedDate = new Date(selection.value);
    selectedDate.setUTCHours(12); 
    dayOfWeekNumber = selectedDate.getUTCDay();
    dayOfWeekName = allDaysOfWeek[dayOfWeekNumber];
    result.innerHTML = dayOfWeekName; 
}

function createEventListener() {
    var submitButton = document.getElementById("determineDay");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", lookUpDay, false); 
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", lookUpDay); 
    }
    // to clear last starting value and previous results on reload
    document.getElementById("dataSelected").value = ""; 
    document.getElementById("day").innerHTML = ""; 
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener); 
}