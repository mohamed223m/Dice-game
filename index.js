var namo1 ="";
var namo2 ="";
function names() {
    namo1 = prompt("Please enter your name !");
    namo2 = prompt("Please enter your name !");
    document.querySelector("#name1").innerHTML = namo1;
    document.querySelector("#name2").innerHTML = namo2;

}

function play() {
    var x = Math.floor((Math.random() * 5) + 1);
    var y = Math.floor((Math.random() * 5) + 1);
    if (x > y && namo1 !== "" && namo2 !== "") {
        document.querySelector("h1").innerHTML = namo1 + " Wins!";
    }
    else if (x < y && namo1 !== "" && namo2 !== "") {
        document.querySelector("h1").innerHTML = namo2 + " Wins!";
    }
    else if (x > y && namo1 === "" && namo2 === "") {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (x < y && namo1 === "" && namo2 === "") {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"

    }
    if (x === 1) {
        document.getElementById("xx").src = "dice1.png";
    }
    else if (x === 2) {
        document.getElementById("xx").src = "dice2.png";

    }
    else if (x === 3) {
        document.getElementById("xx").src = "dice3.png";

    }
    else if (x === 4) {
        document.getElementById("xx").src = "dice4.png";

    }
    else if (x === 5) {
        document.getElementById("xx").src = "dice5.png";

    }
    else if (x === 6) {
        document.getElementById("xx").src = "dice6.png";

    }

    if (y === 1) {
        document.getElementById("yy").src = "dice1.png";

    }
    else if (y === 2) {
        document.getElementById("yy").src = "dice2.png";

    }
    else if (y === 3) {
        document.getElementById("yy").src = "dice3.png";

    }
    else if (y === 4) {
        document.getElementById("yy").src = "dice4.png";

    }
    else if (y === 5) {
        document.getElementById("yy").src = "dice5.png";

    }
    else if (y == 6) {
        document.getElementById("yy").src = "dice6.png";

    }
}

