"use strict"; 
// global vars 
var timesPi = 0; 
var favNumElement = document.getElementById("userNum");
var piResultElement = document.getElementById("piResult");


/* multiplies fav number w/ Pi */
function doPi() { 
 timesPi = favNumElement.value * 3.141592653; 
 piResultElement.innerHTML = timesPi;  
 return timesPi; 
}
            
/* adds event listener to button to activate doPi(); 
################################################## */ 
var submitButton = document.getElementById("submit"); 
            
if (submitButton.addEventListener) { 
  submitButton.addEventListener("click", doPi, false);
  } else if (submitButton.attachEvent) {
    submitButton.attachEvent("onclick", doPi); 
} 