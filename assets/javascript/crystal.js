$("document").ready(function (){
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

let userTotal = 0;
let wins = 0;
let losses = 0;
console.log("blue " + blueVal);
console.log("green " + greenVal);
console.log("purple " + purpleVal);
console.log("red " + redVal);

$("#randnum").text(targetNum);
$("#user-total").text(userTotal);
$(".wins").text(wins);
$(".losses").text(losses);

//These four click handlers assign values to the crystals and have them change the total score when clicked.
$(".crystal-blue").on("click", function () {
userTotal += blueVal;
$("#user-total").text(userTotal);
if (userTotal === targetNum) {
    $("#user-total").text(userTotal);
    alert("yous a bad mothafucker");
}else if (userTotal > targetNum) {
    alert("LOSER!!!!!");
}
});

$(".crystal-green").on("click", function () {
userTotal += greenVal;
$("#user-total").text(userTotal);
if (userTotal === targetNum) {
    $("#user-total").text(userTotal);
    alert("yous a bad mothafucker");
}else if (userTotal > targetNum) {
    alert("LOSER!!!!!");
}
});

$(".crystal-purple").on("click", function () {
userTotal += purpleVal;
$("#user-total").text(userTotal);
if (userTotal === targetNum) {
    $("#user-total").text(userTotal);
    alert("yous a bad mothafucker");
}else if (userTotal > targetNum) {
    alert("LOSER!!!!!");
}
});

$(".crystal-red").on("click", function () {
userTotal += redVal;
$("#user-total").text(userTotal);
if (userTotal === targetNum) {
    $("#user-total").text(userTotal);
    alert("yous a bad mothafucker");
}else if (userTotal > targetNum) {
    alert("LOSER!!!!!");
}
});
 






// clicking a crystal displays the value of that crystal on the page
// value of the crystals are added together and displayed on the page
    //this will need to show the number incrementing as crystals are clicked

// if the sum that is calculating as user clicks a crystal equals randum number, they win
    // reset everything and ++ the win in this scenario
// if the sum this calculated as the user clicks a crystal is greater than randum number they lose
    // reset everthing and ++ loses in this scenario.

});