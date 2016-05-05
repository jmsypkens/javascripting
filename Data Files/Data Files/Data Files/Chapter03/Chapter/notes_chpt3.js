// Notes

// 1. example of array constructor: 
// var arrayName = new Array(number of elements here); 

    var someBigArray = new Array(200); 

/* 2. while Statments
    while (expression) {
        statments
    }
*/ 
    // incrementing count 
    var count = 0; 
    while (count <= 10) {
        document.write(count + "<br/>");
        count++; 
        }
        document.write("<p>You have printed 10 numbers! How cool right?</p>");
        
    // decrementing count
    var count = 10;
    while (count > 0) {
        document.write(count + "<br />");
        count --;
    }
    document.write("<p>Houston, we have liftoff!</p>")
    
// 3. For statements 
/* 
    for (counter_declaration; condition; counter_operation) {
        statements 
    }
*/ 

    var cooldudes = ["Michael Jordan", "Steve Jobs", "Muhammad Ali", "Elon Musk", "Erlich Bachman"];
    
    for (var count = 0; count < cooldudes.length; count++) {
        document.write(cooldudes[count] + "<br />"); 
    }