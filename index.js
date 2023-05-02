var noOfDrumsButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function playAudio(audioRefLink) {
    var audio = new Audio(audioRefLink);
    audio.play();   
}

function makeSound(key) {

    switch(key) {
        case "w":
            playAudio("sounds/tom-1.mp3");
          break;
        case "a":
            playAudio("sounds/tom-2.mp3");
          break;
          case "s":
            playAudio("sounds/tom-3.mp3");
          break;
        case "d":
            playAudio("sounds/tom-4.mp3");
          break;
          case "j":
            playAudio("sounds/snare.mp3");
          break;
        case "k":
            playAudio("sounds/crash.mp3");
          break;
          case "l":
            playAudio("sounds/kick-bass.mp3");
          break;

        default:
            playAudio("sounds/kick-bass.mp3");
      }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

