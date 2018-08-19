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
    

    
    $(".wins").text(wins);
    $(".losses").text(losses);
    $("#randnum").text(targetNum);
    $("#user-total").text(userTotal);

    function initializeGame () {
    blueVal = "";
    greenVal = "";
    purpleVal = "";
    redVal = ""; 
    clicks1 = "";
    clicks2 = "";
    clicks3 = "";
    clicks4 = "";
    targetNum = "";
    
    $("#randnum").empty();

    blueVal = Math.floor((Math.random()*6) + 1);
    greenVal = Math.floor((Math.random()*6) + 1);
    purpleVal = Math.floor((Math.random()*6) + 1);
    redVal = Math.floor((Math.random()*6) + 1); 
    clicks1 = Math.floor((Math.random()*3) + 1);
    clicks2 = Math.floor((Math.random()*3) + 1);
    clicks3 = Math.floor((Math.random()*3) + 1);
    clicks4 = Math.floor((Math.random()*3) + 1);
    console.log("blue " + blueVal + " " + clicks1);
    console.log("green " + greenVal + " " + clicks2);
    console.log("purple " + purpleVal + " " + clicks3);
    console.log("red " + redVal + " " + clicks4);
    
    targetNum = blueVal*clicks1 + greenVal*clicks2 + purpleVal*clicks3 + redVal*clicks4; 
    $("#randnum").text(targetNum);
    
    }
    
    function scoringLogic () {
        if (userTotal === targetNum) {
           let playAgain = confirm("Great Job!! Play again?");
                if (playAgain === true) {
                    wins++;
                    $(".wins").text(wins);
                    userTotal = 0;
                    $("#user-total").text(userTotal);
                    initializeGame();        
                }else {
                   alert("Thanks for playing!!"); 
                }           
           
        }else if (userTotal > targetNum) {
           let playAgain = confirm("Sorry, " + userTotal + " is too high. Play again?" );
                if (playAgain === true) {
                    losses++;
                    $(".losses").text(losses);
                    userTotal = 0;
                    $("#user-total").text(userTotal);
                    initializeGame();
                }else {
                    alert("Thanks for playing!!");
                }        
        }
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