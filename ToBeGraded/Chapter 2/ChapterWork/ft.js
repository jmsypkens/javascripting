/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Jerry Sypkens
 *    Date:   4/27/2016 

 *    Filename: ft.js
 */
var photographerCost = 0;
var totalCost = 0; 
var memoryBook = false;
var reproductionRights = false; 


function resetForm() {
    document.getElementById("photognum").value = 1;
    document.getElementById("photoghrs").value = 2;
    document.getElementById("membook").checked = memoryBook;
    document.getElementById("reprodrights").checked = reproductionRights;
    document.getElementById("distance").value = 0;
}

document.addEventListener("load", resetForm, false); 