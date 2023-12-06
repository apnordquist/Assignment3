/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayRate = 35



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
let mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click", highlight(mondayButton));

let tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click", highlight(tuesdayButton));

let wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click", highlight(wednesdayButton));

let thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click", highlight(thursdayButton));

let fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click", highlight(fridayButton));
// not sure why function is not working correctly
function highlight(dayButton) {
    dayButton.classList.add("clicked");
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);

function clearDays() {
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDay = document.getElementById("half");
let fullDay = document.getElementById("full");

halfDay.addEventListener("click",changeRate)

function changeRate () {
    fullDay.classList.contains("clicked") ? fullDay.classList.remove("clicked") : fullDay.classList.add("clicked");
    halfDay.classList.contains("clicked") ? halfDay.classList.remove("clicked") : halfDay.classList.add("clicked");
    halfDay.classList.contains("clicked") ? dayRate = 20 : dayRate = 35
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


