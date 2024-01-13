// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Declaration of the variables
    let boxes = document.getElementsByClassName('position');
    // Status game indicates the players turn
    let gameStatus = document.getElementById("gameStatus");
    let restart = document.getElementById("restart");
    
    // Create a array of empty value
    let boxValue = Array(9).fill(null);
    // Declare currentPlayer as a global variable to start the game 
    let currentPlayer = "X";
    let start = false;

    runGame();

    /**
     * This function initialize the game
     */
    function runGame() {
        // Convert the HTMLColletion to an Array 
        let boxesArray = Array.from(boxes);

        // Add click event listeners to each position 
        boxesArray.forEach(position => position.addEventListener("click", positionClicked))
        
        // Display initial game status text indicating the current player's turn
        gameStatus.textContent = `It's ${currentPlayer} turn`;
    }

    /**
     * This function handle a position clicked on the Game box
     * @param {*} e 
     */
    function positionClicked(e) {
        const id = e.target.id

        if(!boxValue[id]){
            boxValue[id] =currentPlayer
            e.target.innerText = currentPlayer
        }
    }
    runGame()

    function changePlayer() {

    }

    function updatePosition(position, id ) {
        boxValue[id] = currentPlayer;
        id.textContent = currentPlayer;

    }

    function restartGame() {

    }
});