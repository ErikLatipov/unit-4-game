//GLOBAL VARIABLES

//crystal var
var crystal = {
    gold:
    {
        name: "Gold",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
    grey:
    {
        name: "Grey",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    }

};

//scores
var currentScore = 0;
var targetScore = 0;

//winsloses
var winCount = 0;
var lossCount = 0;



//FUNCTIONS


//helper function for getting random numbers
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min; 
}

    //start game and restart game
var startGame = function(){
    
    //reset the current score

     currentScore = 0;
    
    //set new target score

    targetScore = getRandom(19,120);

    //set different values for each crystals between 1 and12

    crystal.gold.value = getRandom(1,12);
    crystal.blue.value = getRandom(1,12);
    crystal.grey.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);

//change the html to reflect all  of the changes

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    
    
    console.log("----------------------")
    console.log("Target Score: " + targetScore);
    console.log("Gold " + crystal.gold.value + "| Blue :" + crystal.blue.value + "| Grey :" + crystal.grey.value + "| Green :" + crystal.green.value);
    console.log("----------------------")
}


//respond to clicks on the crystals
var addValues = function(crystal){

    currentScore = currentScore + crystal.value;
    console.log("Your score: " + crystal.value);

    $("#yourScore").html(currentScore);

    //call the checkwin function
    checkWin();
}



///////check if user won or lost and reset the game
var checkWin = function(){

    ///check if currentscore is larger than targetscore
    if(currentScore > targetScore) {
        alert("Sorry. You lost!")
        console.log("You Lost")
        
        //add to lost counter
        lossCount++;
////////change loss count html
        $("#lossCount").html(lossCount);

        startGame();
    }
    
    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!")

        //add win counter
        winCount++;
        ///change wincount html
        $("#winCount").html(winCount);
        ////restart the game
        startGame();
    }


}


////starts the game the first time

startGame();

//MAIN PROCESS
$("#gold").click(function() {
addValues(crystal.gold);
});

$("#blue").click(function() {
    addValues(crystal.blue);
    });

$("#grey").click(function() {
    addValues(crystal.grey);
        });

$("#green").click(function() {
    addValues(crystal.green);
            });