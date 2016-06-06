/* 
    JavaScript 6th Edition
    Chapter 7
    Hands-on Project 7-4

    Author: Jerry Sypkens    
    Date:   June 1, 2016 

    Filename: script.js
*/

"use strict"; 

// global variables 
var delivInfo = [];
var delivSummary = document.getElementById("deliverTo"); 

function processDeliveryInfo() {
    var prop;
    delivInfo.name = document.getElementById("nameinput").value; 
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    delivInfo.innerHTML = ''; 
    
    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>"; 
    }
   document.getElementById("deliverTo").style.display = "block"; 
}

function previewOrder() {
    processDeliveryInfo();
    document.querySelector("section").style.display = "block";
}

function makeEventListeners() {
    var submitButton = document.getElementById("previewBtn");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", previewOrder, false);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", previewOrder); 
    }
}

if (window.addEventListener) {
    window.addEventListener("load", makeEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", makeEventListeners); 
}