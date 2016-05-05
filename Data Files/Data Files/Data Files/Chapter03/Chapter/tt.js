var daysofWeek = ["Sunday", "Monday", "FoolsDay", "Wednesday", "Thursday", "Friday", "Saturday"]; 

var opponents = ["Lightning", "Combines", "Combines", "Combines",
"Lightning", "Lightning", "Lightning", "Lightning",
"Barn Raisers", "Barn Raisers", "Barn Raisers",
"Sodbusters", "Sodbusters", "Sodbusters",
"Sodbusters", "(off)", "River Riders", "River Riders", "River Riders",
"Big Dippers", "Big Dippers", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", 
"Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"]; 

var gameLocation = ["away", "away", "away", "away", "home", "home", "home", "home", "home", "home", "home", "away",
"away", "away", "away", "", "away", "away", "away", "away", "away", "away", "", "home", "home", "home", "home", "home", "home", "", ""];

// This function places daysOfWeek values in header row cells

    function addColumnHeaders() {
        var i = 0; 
        
        while (i < 7) {
            document.getElementsByTagName("th")[i].innerHTML = 
                daysofWeek[i];
                i++;
        }
    }

// runs addColumnHeaders() function when page loads 

window.addEventListener("load", addColumnHeaders(), false); 
