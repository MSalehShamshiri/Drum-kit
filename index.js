
const len = document.querySelectorAll(".drum").length

for (i = 0; i < len; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this.style.color = "white";
        bam(this.innerHTML);
        flash(this.innerHTML);
    });
};

document.addEventListener("keydown", function (x4) {
    bam(x4.key);
    flash(x4.key);
});

function bam(pressed) {
    switch (pressed) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "a":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;
        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
        case "d":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
        case "j":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "k":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "l":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        default: alert("Click on an instrument or press it's key on keyboard to rock!");
            break;
    };
};

function flash(selectedObject) {
    document.querySelector("." + selectedObject).classList.toggle("pressed");
    setTimeout(function () {
        document.querySelector("." + selectedObject).classList.toggle("pressed");
    }, 50);
};