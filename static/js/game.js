initGame();

function initGame() {
    alert('script working')
    generateFruit()
    // Your game can start here, but define separate functions, don't write everything in here :)

}

function generateFruit() {
    let map = document.querySelector('#map')
    // To prevent generating food over the snake
    // while (map.children[food].classList.contains("snake-body")) {
    //     food = Math.floor(Math.random() * 100);
    // }
    // Placing food on the map
    let newFruit = document.createElement('div')
    map.append(newFruit)
    map.children[0].classList.add("fruit")
}