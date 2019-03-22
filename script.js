var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColours[nextSequence()];
var gamePattern = [randomChosenColor];
var userClickedPattern = [];



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$(".btn").on("click", function (i) {
    
    var userChosenColor = i.target.id;
    var sound = new Audio("sounds/"+ userChosenColor+".mp3");

    userClickedPattern.push(userChosenColor);

    sound.play();
    $("#"+userChosenColor).fadeOut(100).fadeIn(100);

    console.log(userClickedPattern);
});

