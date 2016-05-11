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
var autoAdvance = setInterval(rightAdvance, 5000);
var figureCount = 3; 

function populateFigures() {
   var filename; 
   var currentFig;
   
   if (figureCount === 3) {
      
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   clearInterval(autoAdvance);
   rightAdvance();
}


// check this -->
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
       if ((photoOrder[i] + 1) === 0) {
         photoOrder[i] = 1; 
       } else {
          photoOrder += 1;
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