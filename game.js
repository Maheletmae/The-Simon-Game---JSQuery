var colors = ["red", "blue", "green", "yellow"];
var colorPattern = [];
var userPattern = [];

var started = false;
var level = 0;

// Text update - beginning of game - keypress //
$(document).keypress(function () {
  // when press a key
  if (!started) {
    // if first key press, change text
    started = true;
    $("h1").text("Level " + level);
    rightColorSequence(); // add a color pattern
  }
});

// User Sequence - when user click on color button //
$(".btn").click(function () {
  var userColour = $(this).attr("id"); // take the id of the button clicked
  userPattern.push(userColour); // to add in the user arrow
  fadeInandOut(userColour);
  playSound(userColour);
  greyButton(userColour);
  checkAnswer(userPattern.length - 1);
});

// checking the answer //
function checkAnswer(Level) {
  if (userPattern[Level] != colorPattern[Level]) {
    // when the color clicked is wrong
    playSound("wrong");
    fadeInandOut("body");

    console.log("wrong");

    $("body").addClass("game-over");
    $("h1").text("Game over, press any key to restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  } else {
    if (userPattern.length === colorPattern.length) {
      // Call the sequence after a 1000 millisecond delay.
      setTimeout(function () {
        rightColorSequence();
      }, 1000);
    }
  }
}

// Game Sequence - random color sequence //
function rightColorSequence() {
  userPattern = []; // reset the pattern once the sequence is re-triggered
  level++;
  $("h1").text("Level " + level);
  var rn = Math.floor(Math.random() * 3) + 1; // rn = random number between 0 to 3
  var newColorPattern = colors[rn]; // random color
  colorPattern.push(newColorPattern); // to add inside arrow
  fadeInandOut(newColorPattern);
  playSound(newColorPattern);
}

// Actions
function playSound(name) {
  var colorSound = new Audio("./sounds/" + name + ".mp3");
  colorSound.play();
}
function fadeInandOut(currentColour) {
  $("#" + currentColour)
    .fadeOut(100)
    .fadeIn(100);
}
function greyButton(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  started = false;
  colorPattern = [];
}
