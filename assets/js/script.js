// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Declaration of the variables
    const boxes = document.querySelectorAll(".position");

    // Status game indicates the players turn
    let gameStatus = document.getElementById("gameStatus");
    let restart = document.getElementById("restart");
    
    // Create a array of empty value
    let boxValue = ["", "", "", "", "", "", "", "", ""];

    // Declare currentPlayer as a global variable to start the game 
    let currentPlayer = "X";
    let start = true;

    runGame();

    /**
     * This function initialize the game
     */
    function runGame() {
        // Add click event listeners to each position 
        boxes.forEach(position => position.addEventListener("click", positionClicked))
        restart.addEventListener("click", restartGame);
        updatePosition();        
    }

    /**
     * This function handle a position clicked on the Game box
     * @param {*} e - The click event 
     */
    function positionClicked() {
        const boxId = this.getAttribute("boxId");

        if (boxValue[boxId] === "" && start) {
            boxValue[boxId] = currentPlayer;
            this.textContent = currentPlayer;
            winnerPlayer();
            if (start) {
                changePlayer();
                updatePosition();
            }
        }
    }

    /**
     * This function switches the cuurent player
     */
    function changePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    /**
     * This function updates the position on the game with the current player turn
     * @param {HTMLDivElement} position 
     * @param {string} id 
     */
    function updatePosition() {
        // Display initial game status text indicating the current player's turn
        gameStatus.textContent = start ? `It's ${currentPlayer}'s turn` : "";

    }
    
    
    function winnerPlayer() {
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

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (boxValue[a] !== "" && boxValue[a] === boxValue[b] && boxValue[a] === boxValue[c]) {
                gameStatus.textContent = `Uhuuu ${currentPlayer} is the winner!`;
                start = false;
                return;
            }
        }

        if (!boxValue.includes("") && start) {
            gameStatus.textContent = "Awnn it's a Draw!";
            start = false;
        }
    }

    function restartGame() {

    }
});