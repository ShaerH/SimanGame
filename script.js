var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColours[nextSequence()];
var gamePattern = [randomChosenColor];
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}
console.log(gamePattern);
