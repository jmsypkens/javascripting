/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
//  autoAdvance = setInterval(rightAdvance, 5000);
var figureCount = 3; 

/* add src values to img elements based on order specified in photoOrder Array. */ 
function populateFigures() {
   var filename; 
   var currentFig;
   
   for (var i = 1; i < 4; i++) {
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg"; 
      currentFig = document.getElementsByTagName("img")[i - 1];
      currentFig.src = filename; 
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

// creates Event Listeners 
function createEventListeners() { 
   var leftarrow = getElementById("leftarrow");
   
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow); 
   }
   
   var rightarrow = getElementById("rightarrow");
   
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false); 
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow); 
   }
   
   var mainFig = document.getElementsByTagName("img")[1]; 
   
   if (mainFig.addEventListener) {
      mainFig. addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig); 
   }
}

/* open center figure in separate window */
function zoomFig() {
   
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}