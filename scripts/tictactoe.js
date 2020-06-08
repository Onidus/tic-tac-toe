let gameboard = (function () {
    let square = document.querySelectorAll("#gameboard>div>div");
    let currentPlayer = 0;
    let gameOver = false;
    let plays = 0;
    
    let winCondition = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]];

    square.forEach((item) => {
        item.addEventListener("click", _makePlay);
    });


    function _newGame() {
        square.forEach((item) => {
            item.innerHTML = "&nbsp;";
            item.classList.remove("win");
        });
        gameOver = false;
        plays = 0;
    }
    
    function _makePlay() {
        if (gameOver == false){
            if (this.innerHTML == "&nbsp;"){
                if (currentPlayer == 0){
                    this.innerHTML = "X";
                }
                else {
                    this.innerHTML = "O";
                }
                _checkWin();
                _togglePlayer();
                plays++;
                if(plays == 9){
                    gameOver = true;
                }
            }
        }
        else{
            _newGame();
        }
    }

    function _togglePlayer(){
        if (currentPlayer == 0){
            currentPlayer = 1;
        } else{
            currentPlayer = 0;
        }
    }

    function _checkWin(){
        for (let i = 0; i < winCondition.length; i++){
            if (square[winCondition[i][0]].innerHTML == square[winCondition[i][1]].innerHTML
            && square[winCondition[i][0]].innerHTML == square[winCondition[i][2]].innerHTML
            && square[winCondition[i][0]].innerHTML != "&nbsp;"){
                square[winCondition[i][0]].classList.add("win");
                square[winCondition[i][1]].classList.add("win");
                square[winCondition[i][2]].classList.add("win");
                console.log(`The winner is Player${currentPlayer+1} and the position is ${winCondition[i]}` );
                gameOver = true;
            }
        }
    }

    return {}
})();

let player = (function (name) {
    this.name = name || "Player";
})();