var currentPlayer = "X"; // Starting player

function addSign(btn) {
    var button = document.getElementById(btn);
    if (button.innerHTML === "") {
        button.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}