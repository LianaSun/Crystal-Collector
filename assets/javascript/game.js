$(document.readyState(function()) {

    //iables

    var counter = 0;
    var wins = 0;
    var losses = 0;

    function randomNum(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;
    }

    var targetNumber =randomNum(40,90);
    $(#"target").html(targetNumber);

    var crystalOne = randomNum(1, 12);
    var crystalTwo = randomNum(1, 12);
    var crystalThree = randomNum(1, 12);
    var crystalFour = randomNum(1, 12);

    function reset(){
        counter = 0;
        $("#target").html(targetNumber);
        targetNumber = randomNum (40,90);
        $("#playerScore").text(counter);
        crystalOne = randomNum(1, 12);
        crystalTwo = randomNum(1, 12);
        crystalThree = randomNum(1, 12);
        crystalFour = randomNum(1, 12);

    }

    $(#blueCrystal).on("click", function() {
        counter += crystalOne;
        WinLose();
        $(playerScore).text(counter);
    });

    $(#whiteCrystal).on("click", function() {
        counter += crystalTwo;
        WinLose();
        $(playerScore).text(counter);
    });

    $(#pinkCrystal).on("click", function() {
        counter += crystalThree;
        WinLose();
        $(playerScore).text(counter);
    });


    $(#purpleCrystal).on("click", function() {
        counter += crystalFour;
        WinLose();
        $(playerScore).text(counter);
    });
        
    function WinLose () {

        if (counter === targetNumber) {
            wins += ;
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