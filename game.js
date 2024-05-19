var colors = ["red", "blue", "green", "yellow"];
var colorPattern = [];
var userPattern = [];

function randomColorSequence() {
  var rn = Math.floor(Math.random() * 3) + 1; // rn = random number between 0 to 3
  var newColorPattern = colors[rn]; // random color registered
  colorPattern.push(newColorPattern);

  $("#" + newColorPattern)
    .fadeOut(100)
    .fadeIn(100); // action for this color/button

  var colorSound = new Audio("./sounds/" + newColorPattern + ".mp3");
  colorSound.play();
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);
  console.log(userPattern);
});
