var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(".btn2").on("click", function () {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
        $(".btn2").fadeOut(0);
    }
});
$(document).keypress(function () {

    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function (i) {

    var userChosenColor = i.target.id;

    playSound(userChosenColor);

    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);


});

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;

}

function checkAnswer(currentlevel) {
    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");

        console.log("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();

        $(".btn2").fadeIn(0);

    }
}

function nextSequence() {
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    level = level + 1;
    $("h1").html("Level " + level);
}


function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


