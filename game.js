var colors = ["red", "blue", "green", "yellow"];
var colorPattern = [];
var userPattern = [];

// Game Sequence //
function randomColorSequence() {
  var rn = Math.floor(Math.random() * 3) + 1; // rn = random number between 0 to 3
  var newColorPattern = colors[rn]; // register random color in arrow
  colorPattern.push(newColorPattern);

  // action for this color/button
  $("#" + newColorPattern)
    .fadeOut(100)
    .fadeIn(100);

  // play a sound related to random color
  playSound(newColorPattern);
}

// When click a color button //
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour); // register it in user color arrow
  $("#" + userChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(userChosenColour);
  greyButton(userChosenColour);
});

function playSound(name) {
  var colorSound = new Audio("./sounds/" + name + ".mp3");
  colorSound.play();
}

function greyButton(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Text update //
var started = false;
var level = 0;

$(document).keypress(function () {
  if (started == false) {
    started = true;
    $("h1").text("Level " + level);
  } else {
    level = level + 1;
    $("h1").text("Level " + level);
  }

  randomColorSequence();
});
