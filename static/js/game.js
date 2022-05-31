initGame();

function initGame() {
    generateFruit()

}

function generateFruit() {
    let board = document.querySelector('#game_board')
    let newFruit = document.createElement('div')
    newFruit.classList.add("fruit")
    board.append(newFruit)
    // console.log(Math.floor(Math.random() * 11))
}