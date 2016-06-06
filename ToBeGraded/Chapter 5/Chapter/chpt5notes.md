# Chapter 5 Notes 
#### Accessing an Elements CSS Properties 

You can change an elements CSS properties through the DOM. 

Format example: ```element.style.property```

Code example: 
```document.getElementById("logo").style.display = "none";```


When css properties have a hyphen such as ```font-family```,
you need to specify it by removing the hypen in Javascript 
and capitalizing the first letter after the Hyphen. 

Code Example: 
``` var font = document.getElementById("logo").style.fontFamily;```


You can also use this code to look up an href attribute and assign that
value to a variable(example 1) or assign a new value to an attribute(example 2).

Example 1: ```var homeURL = document.getElementById("homeLink").href;```

Example 2: ```document.getElementById("homeLink").href = "http://w3.org";```

###### Programming Concepts - Getting and setting values. 
You can reference properties of DOM objects in two different ways:
    1. To get a value. 
    2. To set a value. 
    
to get... 
    ```captionText = document.getElementById("logoImage").alt; ```

to set ...
    ``` document.getElementById("logoImage").alt = captionText;```

#### Adding and Removing Document Nodes 

Creating nodes: you create a new element node using the createElement()
method of the Document object. 

Code Syntax: ``` document.createElement("element");```
Code Example: ``` document.createElement("div");```
