/*
      JavaScript 6th Edition
      Chapter 6
      Chapter case

      Snoot Flowers 
      Functions
      Author: Jerry Sypkens
      Date:   May 25, 2016

      Filename: snoot.js
*/

"use strict"; 
/* global variables */ 
var twentyNine = document.createDocumentFragment(); 
var thirty = document.createDocumentFragment(); 
var thirtyOne = document.createDocumentFragment(); 
var formValidity = true; 

function setupDays() {
      var dates = document.getElementById("delivDy").getElementsByTagName(
            "option");
            twentyNine.appendChild(dates[28].cloneNode(true));
            // add 29th
            thirty.appendChild(dates[28].cloneNode(true)); 
            thirty.appendChild(dates[29].cloneNode(true));
            // add 29th & 30th 
            thirtyOne.appendChild(dates[28].cloneNode(true));
            thirtyOne.appendChild(dates[29].cloneNode(true));
            thirtyOne.appendChild(dates[30].cloneNode(true));
            // add 29th, 30th, and 31st 
      }
      
function updateDays() {
      var deliveryDay = document.getElementById("delivDy");
      var dates = deliveryDay.getElementsByTagName("option");
      var deliveryMonth = document.getElementById("delivMo");
      var deliveryYear = document.getElementById("delivYr");
      var selectedMonth = deliveryMonth.options
      [deliveryMonth.selectedIndex].value; 
      
      while (dates[28]) {
             //remove child with index of 28 until this index is empty
            deliveryDay.removeChild(dates[28]); 
      }
      
      if (deliveryYear.selectedIndex === -1) {
            /* if no year is selected, choose the default year so length 
            of Feb can be determined */
            deliveryYear.selectedIndex = 0; 
      }
      
      if (selectedMonth === "2" && 
            deliveryYear.options[deliveryYear.selectedIndex].value === "2018") {
                  // if leap year, Feb has 29 days
                  deliveryDay.appendChild(twentyNine.cloneNode(true)); 
      } else if (selectedMonth === "4" || selectedMonth === "6" 
            || selectedMonth === "9" || selectedMonth === "11") {
                  deliveryDay.appendChild(thirty.cloneNode(true)); 
            } else if (selectedMonth === "1" || selectedMonth === "3" || 
                        selectedMonth === "5" || selectedMonth === "7" || 
                        selectedMonth === "8" || selectedMonth === "10" || 
                        selectedMonth === "12") { 
                  deliveryDay.appendChild(thirtyOne.cloneNode(true)); 
      }
}

// removes defauls selections 
function removeSelectDefaults() {
      var emptyBoxes = document.getElementsByTagName("select"); 
      
      for (var i = 0; i < emptyBoxes.length; i++) {
            emptyBoxes[i].selectedIndex = -1; 
      }
}

function zeroPlaceholder(){
      var messageBox = document.getElementById("customText"); 
      
      messageBox.style.color = "black"; 
      if (messageBox.value === messageBox.placehoder) {
            messageBox.value = ""; 
      }
}

function checkPlaceholder() {
      var messageBox = document.getElementById("customText"); 
      
      if (messageBox.value === "") {
            messageBox.style.color = "rgb(178, 184, 183)"; 
            messageBox.value = messageBox.placehoder; 
      }
}

function generatePlaceholder() {
      if (!Modernizr.input.placeholder) {
            var messageBox = document.getElementById("customText");
            messageBox.value = messageBox.placehoder; 
            messageBox.style.color = "rgb(178, 184, 183)"; 
      
      if (messageBox.addEventListener) {
            messageBox.addEventListener("focus", zeroPlaceholder, false); 
            messageBox.addEventListener("blur", checkPlaceholder, false);
      } else if (messageBox.attachEvent) {
            messageBox.attachEvent("onfocus", zeroPlaceholder); 
            messageBox.attachEvent("onblur", checkPlaceholder); 
      }
   }
}

function autocheckCustom() {
      var messageBox = document.getElementById("customText"); 
      
      if (messageBox.value !== "" && messageBox.value 
            !== messageBox.placehoder) { 
                  document.getElementById("custom").checked = "checked"; 
      }
}

function copyBillingAddress() {
      var billingInputElements = 
            document.querySelectorAll("#billingAddress input");
      var deliveryInputElements = 
            document.querySelectorAll("#deliveryAddress input");
      if (document.getElementById("sameAddr").checked) {
            for (var i = 0; i < billingInputElements.length; i++) {
                  deliveryInputElements[i + 1].value = 
                  billingInputElements[i].value;
            }
            document.querySelector("#deliveryAddress select").value = 
                  document.querySelector("#billingAddress select").value; 
      } else {
            for (var i = 0; i < billingInputElements.length; i++) {
                  deliveryInputElements[i + 1].value = "";
            }
            document.querySelector("#deliveryAddress select").selectedIndex = -1; 
      }
}

function validateAddress(fieldsetId) {
      var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
      var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
      var fieldsetValidity = true; 
      var elementCount = inputElements.length;
      var currentElement;
      
      try {
            for (var i = 0; i < elementCount; i++) {
                  currentElement = inputElements[i]; 
                  if (currentElement.value === "") {
                        currentElement.style.background = "rgb(255,233,233"; 
                        fieldsetValidity = false; 
                  } else {
                        currentElement.style.background = "white"; 
                  }
            }
           currentElement = document.querySelector("#" + fieldsetId + " select");
           //validate state select element
           if (currentElement.selectedIndex === -1) {
                 currentElement.style.border = "1px solid red"; 
                 fieldsetValidity = false; 
           } else {
                 currentElement.style.border = ""; 
           }
           
            if (fieldsetValidity === false) { 
                  if (fieldsetId === "billingAddress") {
                        throw "Please complete all Billing Address information.";
                  } else {
                        throw "Please complete all Delivery Address information.";
                  } 
            } else {
                  errorDiv.style.display = "none";
                  errorDiv.innerHTML = "";
            }
      }
      catch(msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg; 
            formValidity = false; 
      }
}

function validateDeliveryDate() {
      var selectElements = document.querySelectorAll("#deliveryDate select");
      var errorDiv = document.querySelector("#deliveryDate .errorMessage");
      var fieldsetValidity = true; 
      var elementCount = selectElements.length;
      var currentElement; 
      
      try {
            for (var i = 0; i < elementCount; i++) {
                  currentElement = selectElements[i];
                  if (currentElement.selectedIndex === -1) {
                        currentElement.style.border = "1px solid red"; 
                        fieldsetValidity = false; 
                  } else {
                        currentElement.style.border = "";
                  }
            }
            if (fieldsetValidity === false) {
                  throw "Please specify a delivery date."; 
            } else {
                  errorDiv.style.display = "none"; 
                  errorDiv.innerHTML = "";
            }
      }
      catch(msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg;
            formValidity = false; 
      }
}

function validatePayment() {
      var errorDiv = document.querySelector("#paymentInfo .errorMessage");
      var fieldsetValidity = true; 
      var ccNumElement = document.getElementById("ccNum"); 
      var selectElements =document.querySelectorAll("#paymentInfo select");
      var elementCount = selectElements.length;
      var cvvElement = document.getElementById("cvv");
      var cards = document.getElementsByName("PaymentType");
      var currentElement; 
      
      try {
            if (!cards[0].checked && !cards[1].checked
            && !cards[2].checked && !cards[3].checked) {
                        // verify that a card is selected
                        for (var i = 0; i < 4; i++) {
                              cards[i].style.outline = "1px solid red";
                        }
                  fieldsetValidity = false; 
            } else {
                  for (var i = 0; i < 4; i++) {
                        cards[i].style.outline = ""; 
                  }
            }
            
            if (ccNumElement.value === "") {
                  ccNumElement.style.background = "rgb(255,233,233)";
                  fieldsetValidity = false;
            } else {
                  ccNumElement.style.background = "white"; 
            }
            
            for (var i = 0; i < elementCount; i++) {
                  currentElement = selectElements[i]; 
                  if (currentElement.selectedIndex === -1) {
                        currentElement.style.border = "1px solid red"; 
                        fieldsetValidity = false; 
                  } else {
                        currentElement.style.border = ""; 
                  }
            }
            
            if (cvvElement.value === "") {
                  cvvElement.style.background = "rgb(255,233,233)";
                  fieldsetValidity = false;
            } else {
                  cvvElement.style.background = "white"; 
            }
            
            if (!fieldsetValidity) {
                  throw "Please complete all payment information.";
            } else {
                  errorDiv.style.display = "none"; 
            }
      } 
      catch(msg) {
            errorDiv.style.display = "block"; 
            errorDiv.innerHTML = msg; 
            formValidity = false; 
      }
}

function validateMessage() {
      var errorDiv = document.querySelector("#message .errorMessage");
      var msgBox = document.getElementById("customText");
      
      try {
            if (document.getElementById("custom").checked && 
            ((msgBox.value === "") || (msgBox.value === msgBox.placeholder))) {
                  throw "Please enter your message text."; 
            } else {
                  errorDiv.style.display = "none";
                  msgBox.style.background = "white";
            }
      }
      catch(msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg; 
            msgBox.style.background = "rgb(255,233,233)";
            formValidity = false; 
      }
}

function validateCreateAccount() {
      var errorDiv = document.querySelector("#createAccount .errorMessage");
      var usernameElement = document.getElementById("username");
      var pass1Element = document.getElementById("pass1");
      var pass2Element = document.getElementById("pass2");
      var passwordMismatch = false; 
      var invColor = "rgb(255, 233, 233)" ; 
      
      try {
            usernameElement.style.background = ""; 
            pass1Element.style.background = "";
            pass2Element.style.background = "";
            errorDiv.style.display = "none"; 
            
            if ((usernameElement.value !== "" && pass1Element.value !== ""
            && pass2Element.value !== "")) { 
                  if (pass1Element.value !== pass2Element.value) {
                        passwordMismatch = true; 
                        throw "Passwords do not match; please reenter.";
                  }
            }
            if(!(usernameElement.value === "" && pass1Element.value === "" 
            && pass2Element.value === "")) {
                  throw "Please complete all fields to create an account.";
            }
      }
      catch(msg) {
            errorDiv.innerHTML = msg; 
            errorDiv.style.display = "block"; 
            if (passwordMismatch) {
                  usernameElement.style.background = "";
                  pass1Element.style.background = invColor; 
                  pass2Element.style.background = invColor;
            } else {
                  if (usernameElement.value === "") { 
                        usernameElement.style.background = invColor; 
                  }
                  if (pass1Element.value === "") {
                        pass1Element.style.background = invColor;
                  }
                  if (pass2Element.value === "") {
                        pass2Element.style.background = invColor; 
                  }
            }
            formValidity = false; 
      }
} 

function validateNumbers() {
      var ccNotNum; 
      var cvvNotNum; 
      var ccNumElement = document.getElementById("ccNum"); 
      var ccElement = document.getElementById("cvv"); 
      var ccNumErrMsg = document.getElementById("ccNumErrorMessage");
      var cvvErrMsg = document.getElementById("cvvErrorMessage");
      
      try {
            if (isNaN(ccNumElement.value) || ccNumElement.value === "") {
                  ccNotNum = true; 
            } else {
                  ccNumElement.style.background = "";
                  ccNumErrmsg.style.display = "none"; 
            }
            if (isNaN(cvvElement.value) || cvvElement.value === "") {
                  cvvNotNum = true; 
            } else {
                  cvvElement.style.background = "";
                  cvvNotNum.style.display = "none"; 
            }
            if (ccNotNum || cvvNotNum) {
                  throw "must contain numbers only."; 
            }
      }
      catch(msg) {
            if (ccNotNum) {
                  ccNumElement.style.background = "rgb(255,233,233)"; 
                  cvvErrMsg.style.display = "block"; 
                  cvvErrMsg.innerHTML = "The card number " + msg; 
            }
            formValidity = false; 
      }
}

function validateForm(evt) {
      if (evt.preventDefault) {
            evt.preventDefault(); 
      } else {
            evt.returnValue = false; 
      }
      formValidity = true; 
      validateAddress("billingAddress");
      validateAddress("deliveryAddress");
      validateDeliveryDate();
      validatePayment(); 
      validateMessage();  
      validateCreateAccount();
      validateNumbers(); 
      
      if (formValidity === true) {
            document.getElementById("errorText").innerHTML = "";
            document.getElementById("errorText").innerHTML = "";
            document.getElementsByTagName("form")[0].submit(); 
      } else {
            document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order."
            document.getElementById("errorText").style.display = "block";
            scroll(0,0); 
      }
}

function createEventListeners() {
      var deliveryMonth = document.getElementById("delivMo");
      
      if (deliveryMonth.addEventListener) {
            deliveryMonth.addEventListener("change", updateDays, false); 
      } else if (deliveryMonth.attachEvent) {
             deliveryMonth.attachEvent("onchange", updateDays); 
      }
      
      var deliveryYear = document.getElementById("delivYr");
      
      if (deliveryYear.addEventListener) {
            deliveryYear.addEventListener("change", updateDays, false); 
      } else if (deliveryYear.attachEvent) {
            deliveryYear.attachEvent("onchange", updateDays); 
      }
      
      var messageBox = document.getElementById("customText");
      
      if (messageBox.addEventListener) {
            messageBox.addEventListener("blur", autocheckCustom, false);
      } else if (messageBox.attachEvent) {
            messageBox.attachEvent("onblur", autocheckCustom);
      }
      
      var same = document.getElementById("sameAddr");
      
      if (same.addEventListener) {
            same.addEventListener("click", copyBillingAddress, false);
      } else if (same.attachEvent) {
            same.attachEvent("onclick", copyBillingAddress);
      }
      
      var form = document.getElementsByTagName("form")[0];
      
      if (form.addEventListener) {
            form.addEventListener("submit", validateForm, false);
      } else if (form.attachEvent) {
            form.attachEvent("onsubmit", validateForm); 
      }
}

function setUpPage() {
      removeSelectDefaults();
      setupDays();
      createEventListeners();
      generatePlaceholder(); 
}

if (window.addEventListener) {
      window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
      window.attachEvent("onload", setUpPage); 
}

if (window.addEventListener) {
      window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
      window.attachEvent("onload", removeSelectDefaults); 
}