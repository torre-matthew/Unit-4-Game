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

$("#randnum").text(targetNum);
$("#user-total").text(userTotal);
$(".wins").text(wins);
$(".losses").text(losses);

function scoringLogic () {
    if (userTotal === targetNum) {
        winnerNewGame();
    }else if (userTotal > targetNum) {
        loserNewGame();
    }
}

function winnerNewGame () {
    $("#user-total").text(userTotal);
    wins++;
    $(".wins").text(wins);
    alert("yous a bad mothafucker");
    $("#randnum").text(targetNum);
    $("#user-total").text("0");
}

function loserNewGame () {
    $("#user-total").text(userTotal);
    $(".losses").text(losses);
    losses++;
    alert("LOSER!!!!!");
    $("#randnum").text(targetNum);
    $("#user-total").text("0");
    
}

//These four click handlers assign values to the crystals and have them change the total score when clicked.
$(".crystal-blue").on("click", function blueClicks() {
$("#user-total").text(userTotal);
userTotal += blueVal;
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

// function scoreLogic () {
//     $(".crystal-blue").on("click", blueClicks());
//     $(".crystal-green").on("click", greenClicks());
//     $(".crystal-red").on("click", redClicks());
//     $(".crystal-purple").on("click", purpleClicks());

//     if (userTotal === targetNum) {
//         $("#user-total").text(userTotal);
//         alert("you's a bad mothafucker");
//         wins++;
//         $(".wins").text(wins);
//     }else if (userTotal > targetNum) {
//         alert("LOSER!!!!!");
//         losses++;
//         $(".losses").text(losses);
//     }
 
// }

// scoreLogic();






// if the sum that is calculating as user clicks a crystal equals randum number, they win
    // reset everything and ++ the win in this scenario
// if the sum this calculated as the user clicks a crystal is greater than randum number they lose
    // reset everthing and ++ loses in this scenario.

});