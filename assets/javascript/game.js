$(document).ready(function() {

    //Variables//

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function randomNum(){
        return Math.floor(Math.random() * 102) + 19;
    
    }

    var targetNumber = randomNum(40,90);
    $("#target").html(targetNumber);

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    var crystalFour =  Math.floor(Math.random() * 12) + 1;

    function reset(){
        counter = 0;
        $("#target").html(targetNumber);
        targetNumber = randomNum (40,90);
        $("#playerScore").text(counter);
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;

    }

    $("#blueCrystal").on("click", function() {
        counter += crystalOne;
        winLose();
        $(playerScore).text(counter);
    });

    $("#whiteCrystal").on("click", function() {
        counter += crystalTwo;
        winLose();
        $(playerScore).text(counter);
    });

    $("#pinkCrystal").on("click", function() {
        counter += crystalThree;
        winLose();
        $(playerScore).text(counter);
    });


    $("#purpleCrystal").on("click", function() {
        counter += crystalFour;
        winLose();
        $(playerScore).text(counter);
    });
        
    function winLose () {

        if (counter === targetNumber) {
            wins ++;
            alert("YOU WIN!!!! YOU'RE AMAZING!");
            $(win).text(wins);
            reset();
        } else if (counter > targetNumber) {
            losses += 1;
            alert ("Better luck next time, we still think you're cool");
            $(loss).text(losses);
            reset();
        }
    }
});