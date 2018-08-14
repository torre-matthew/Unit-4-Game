

// give each crystal a randomly generated number between 1-6
let blueVal = Math.floor((Math.random()*6) + 1);
let greenVal = Math.floor((Math.random()*6) + 1);
let purpleVal = Math.floor((Math.random()*6) + 1);
let redVal = Math.floor((Math.random()*6) + 1); 
// create four variables to use as a multiplier that will determin how many times one of the crystals will need to be clicked to get the randum number.
let clicks1 = Math.floor((Math.random()*3) + 1);
let clicks2 = Math.floor((Math.random()*3) + 1);
let clicks3 = Math.floor((Math.random()*3) + 1);
let clicks4 = Math.floor((Math.random()*3) + 1);

// Have the randum number that user is trying to guess display as the sum of the equation above
let targetNum = blueVal*clicks1 + greenVal*clicks2 + purpleVal*clicks3 + redVal*clicks4;

console.log(targetNum);

$("#randnum").text(targetNum);

// Assign values to the crystals
// clicking a crystal displays the value of that crystal on the page
// value of the crystals are added together and displayed on the page
    //this will need to show the number incrementing as crystals are clicked

// if the sum that is calculating as user clicks a crystal equals randum number, they win
    // reset everything and ++ the win in this scenario
// if the sum this calculated as the user clicks a crystal is greater than randum number they lose
    // reset everthing and ++ loses in this scenario.
