/* Detecting button press  */

// Storing nnumber of buttons 
var noOfButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButton; i++) {
    // Adding "Event listener" to listen each click and will triggers the anonymous function  
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            // Adding "this" to identify which button got clicked 
            var buttonWord = this.innerHTML;

            makeSound(buttonWord);

            buttonAnimation(buttonWord);
        }
    );
}

/* using keyboard event listener to detecting keyboard press */

// Now we aremaking whole webPage to listen our keyboard press
document.addEventListener("keydown",
function (event) {
        // keydown is an event and the key is the keyboard key which got pressed
        makeSound(event.key);

        // passing key which triggered the event 
        buttonAnimation(event.key);
    }
);

// making a function for detecting which key got clicked 
function makeSound(key) {
    // Adding swtich statement 
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: alert("Sorry you have press " + buttonWord);
    }
}

// Adding animation 
function buttonAnimation(currentKey){
    // finding the button which has the current key and assigning to a variable 
    var activeButton = document.querySelector("." + currentKey);

    // adding class using Javascript 
    activeButton.classList.add("pressed");

    // Adding a timeout function 
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}