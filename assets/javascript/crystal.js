$("document").ready(function (){
// give each crystal a randomly generated number between 1-6
var blueVal = Math.floor((Math.random()*6) + 1);
var greenVal = Math.floor((Math.random()*6) + 1);
var purpleVal = Math.floor((Math.random()*6) + 1);
var redVal = Math.floor((Math.random()*6) + 1); 
// create four variables to use as a multiplier that will determin how many times one of the crystals will need to be clicked to get the randum number.
var clicks1 = Math.floor((Math.random()*3) + 1);
var clicks2 = Math.floor((Math.random()*3) + 1);
var clicks3 = Math.floor((Math.random()*3) + 1);
var clicks4 = Math.floor((Math.random()*3) + 1);

// Have the randum number that user is trying to guess display as the sum of the equation above
var targetNum = blueVal*clicks1 + greenVal*clicks2 + purpleVal*clicks3 + redVal*clicks4;

var userTotal = 0;
var wins = 0;
var losses = 0;
console.log("blue " + blueVal);
console.log("green " + greenVal);
console.log("purple " + purpleVal);
console.log("red " + redVal);

// var numbers = {
//     blueVal: Math.floor((Math.random()*6) + 1),
//     greenVal: Math.floor((Math.random()*6) + 1),
//     purpleVal: Math.floor((Math.random()*6) + 1),
//     redVal: Math.floor((Math.random()*6) + 1),
//     clicks1: Math.floor((Math.random()*3) + 1),
//     clicks2: Math.floor((Math.random()*3) + 1),
//     clicks3: Math.floor((Math.random()*3) + 1),
//     clicks4: Math.floor((Math.random()*3) + 1), 
//     targetNum: numbers.blueVal*numbers.clicks1 + numbers.greenVal*numbers.clicks2 + numbers.purpleVal*numbers.clicks3 + numbers.redVal*numbers.clicks4,
// }
// console.log(numbers.targetNum);

$(".wins").text(wins);
$(".losses").text(losses);

    $("#randnum").text(targetNum);
    $("#user-total").text(userTotal);

function scoringLogic () {
    if (userTotal === targetNum) {
        winnerNewGame();
    }else if (userTotal > targetNum) {
        loserNewGame();
    }
}

function winnerNewGame () {
    $("#user-total").text(userTotal);
    confirm("Great Job!! Play again?");
    wins++;
    $(".wins").text(wins);
    userTotal = 0;
    $("#user-total").text(userTotal);
}

function loserNewGame () {
    $("#user-total").text(userTotal);
    confirm("Sorry, " + userTotal + " is too high. Play again?" );
    losses++;
    $(".losses").text(losses);
    userTotal = 0;
    $("#user-total").text(userTotal);
    targetNum = blueVal*clicks1 + greenVal*clicks2 + purpleVal*clicks3 + redVal*clicks4;
    $("#randnum").text(targetNum);
}

//These four click handlers assign values to the crystals and have them change the total score when clicked.


$(".crystal-blue").on("click", function blueClicks() {
    userTotal += blueVal;
    $("#user-total").text(userTotal);
    scoringLogic();
});

$(".crystal-green").on("click", function  greenClicks() {
    userTotal += greenVal;
    $("#user-total").text(userTotal);
    scoringLogic();
});

$(".crystal-purple").on("click", function purpleClicks() {
    userTotal += purpleVal;
    $("#user-total").text(userTotal);
    scoringLogic();
});

$(".crystal-red").on("click", function redClicks() {
    userTotal += redVal;
    $("#user-total").text(userTotal);
    scoringLogic();
});


});