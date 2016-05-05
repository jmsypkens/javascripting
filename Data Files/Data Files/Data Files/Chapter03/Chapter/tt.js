var daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

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
    
// function to place day of month value in first p element
// within each table data cell that has an id

    function addCalendarDates() {
        var i = 1; 
        var paragraphs = "";
        
            do {
                var tableCell = document.getElementById("08-" + i);
                paragraphs = tableCell.getElementsByTagName("p");
                paragraphs[0].innerHTML = i; 
                i++; 
            } while (1 <= 31);
    }
    
// function to place opponents and gameLocation values in second p element within each table 
// data cell that has an id 

    function addGameInfo() {
        var paragraphs = "";
        
            for (var i = 0; i < 31; i++) {
                var date = i + 1; 
                var tableCell = document.getElementById("08-" + date); 
                
                paragraphs = tableCell.getElementsByTagName("p"); 
                
                if (gameLocation[i] === "away") {
                    paragraphs[1].innerHTML = "@ ";
                }
                
                if (gameLocation[i] === "home") {
                    paragraphs[1].innerHTML = "vs ";
                }
                
                paragraphs[1].innerHTML += opponents[i]; 
            }
    }
    
// function to create calendar

    function createCalendar() {
        addColumnHeaders();
        addCalendarDates();
        addGameInfo();
    }

// runs createCalendar() function when page loads 

window.addEventListener("load", createCalendar, false); 
