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
     * @param {*} e - The click event 
     */
    function positionClicked(e) {
        const id = e.target.id
        // Check the position is not empty and update the current player
        if(!boxValue[id]){
            boxValue[id] =currentPlayer;
            e.target.innerText = currentPlayer;
        }
        //Update the position
        updatePosition(e.target, id);

        // envolke the next player turn
        changePlayer();
    }

    /**
     * This function switches the cuurent player
     */
    function changePlayer() {
        currentPlayer = (currentPlayer == "X") ? "O" : "X";
        gameStatus.textContent = `It's ${currentPlayer} turn`;
    }

    /**
     * This function updates the position on the game with the current player turn
     * @param {HTMLDivElement} position 
     * @param {string} id 
     */
    function updatePosition(position, id ) {
        position.textContent = currentPlayer;

    }
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    function winnerPlayer() {

    }

    function restartGame() {

    }
});