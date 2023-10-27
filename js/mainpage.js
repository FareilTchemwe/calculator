var board = document.getElementById("bd1");
function mainboard(val) {
    board.innerHTML += val;
}
function wipe(space) {
    board.innerHTML = space;  
}
function sum() {
    var display = board.innerText;
    display = eval(board.innerText);
    board.innerHTML = display;
}
