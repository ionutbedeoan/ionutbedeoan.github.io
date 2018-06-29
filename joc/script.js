var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;
var timp = document.getElementById("timeTaken");
var start = new Date().getTime();
var end;
var timeTaken;



easyBtn.addEventListener("click", function () {
    start = new Date().getTime();
    numSquares = 3;
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < 3; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    timp.textContent= "";
       messageDisplay.textContent = "";
});
hardBtn.addEventListener("click", function () {
    start = new Date().getTime();
    this.classList.add("selected");
    numSquares = 6;
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    messageDisplay.textContent = "";
    timp.textContent= "";
});

resetButton.addEventListener("click", function () {
    start = new Date().getTime();
    //generare noi culori
    colors = generateRandomColors(numSquares);
    //alegem o noua culoare random din vector
    pickedColor = pickColor();
    //schimbam colorDisplay sa fie la fel cu culoarea aleasa
    colorDisplay.textContent = pickedColor;
    //schimbare culori ale patratelor
    for (var i = 0; i < squares.length; i++) {
        // adaug culorile la fiecare patrat
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "Culori noi";
   timp.textContent= "";

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // adaug culorile la fiecare patrat
    squares[i].style.background = colors[i];
    //cand dau click pe un patrat
    squares[i].addEventListener("click", function () {
        // pun intr-o variabila culoarea patratatului ca sa o verific cu culoarea pe care trebuie sa o ghicesc, pentru a vedea daca am nimerit culoarea
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Corect!"
            resetButton.textContent = "Joc nou"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            end = new Date().getTime();
            timeTaken = (end - start) / 1000;
            timp.style.display ="inline";
            timp.innerHTML = "Timpul tau: " + timeTaken + " s.";




        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Gresit!";

        }
    });
};

function changeColors(color) {
    //schimbam culoarea la fiecare patrat
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;

    }
    timp.style.display = "none";
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
    timp.style.display = "none";

}

function generateRandomColors(num) {
    // fac un vector
    var arr = [];
    //adaugam numarul de culori random
    for (var i = 0; i < num; i++) {
        //alegem o culoare random si o bagam in vector
        arr[i] = randomColor();
    }
    //returnam vectorul
    return arr;
    timp.style.display = "none";
}

function randomColor() {
    // alegem un rosu intre 0 si 255
    var r = Math.floor(Math.random() * 256);
    //alegem un verde intre 0 si 255
    var g = Math.floor(Math.random() * 256);
    //alegem un albastru intre 0 si 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
    timp.style.display = "none";
}
