var counterElement = document.getElementById("counterNumber");

var decrementBtn = document.getElementById("decrement");

var incrementBtn = document.getElementById("increment");

var clearBtn = document.getElementById("clear");

var counter = counterElement.innerText;

// Decrement function 

function decrement() 
    {
        if(counter > 0)
        {
            counter--;
            console.log(counter);
            counterElement.innerText = counter;
        }

        else if(counter < 1) 
        {
            document.getElementById("errorText"). style. display = "block";
            document.getElementById("clear"). style. display = "block";
        }
    }

// Increment function 

function increment() 
    {
        counter++;
        console.log(counter);
        counterElement.innerText = counter;
        document.getElementById("errorText"). style. display = "none";
        document.getElementById("clear"). style. display = "block";
    }

// Clear or reset function

function clear() 
    {
        counter = 0;
        console.log(counter);
        counterElement.innerText = counter;
        document.getElementById("errorText"). style. display = "none";
        document.getElementById("clear"). style. display = "none";
    }

// Button clicks
    
decrementBtn.onclick = decrement;

incrementBtn.onclick = increment;

clearBtn.onclick = clear;
