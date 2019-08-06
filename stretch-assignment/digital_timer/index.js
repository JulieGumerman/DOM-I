let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msTens = document.getElementById("msHundreds");
let msHundreds = document.getElementById("msTens");

let clickMe = document.createElement("button");
clickMe.textContent = "Hear my story of woe."
document.querySelector(".digits").append(clickMe);

let i = 0;
let txt = "I didn't have enough time, or I didn't use it wisely. Anyway, I don't have a timer, but I have this really cool typewriter feature instead."
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".whining").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

clickMe.addEventListener("click", typeWriter);