// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Declaration of the variables
    const boxes = document.querySelectorAll(".position");

    // Status game indicates the players turn
    const gameStatus = document.getElementById("gameStatus");
    const restart = document.getElementById("restart");

    let scoreXDisplay = document.getElementById("scoreX");
    let scoreODisplay = document.getElementById("scoreO");
    
    // Create a array of empty value
    let boxValue = ["", "", "", "", "", "", "", "", ""];

    // Declare variables to track the current player, game state, and scores
    let currentPlayer = "X";
    let start = true;
    let scores = { X: 0, O: 0 };

    //Initialize the game
    runGame();

    /**
     * This function initialize the game  
     */
    function runGame() {
        // Add click event listeners to each position on the board and restart button
        boxes.forEach(position => position.addEventListener("click", positionClicked))
        restart.addEventListener("click", restartGame);
        restart.style.visibility = "hidden";
        updatePosition();        
    }

    /**
     * This function handle a position clicked on the Game box
     */
    function positionClicked() {
        const id = this.getAttribute("id");

        if (boxValue[id] === "" && start) {
            boxValue[id] = currentPlayer;
            this.textContent = currentPlayer;
            winnerPlayer();
            if (start) {
                changePlayer();
                updatePosition();
            }
        }
    }

    /**
     * This function switches the current player
     */
    function changePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    /**
     * This function updates the position on the game with the current player turn
     */
    function updatePosition() {
        // Display initial game status text indicating the current player's turn
        gameStatus.textContent = start ? `It's ${currentPlayer}'s turn` : "";
    }
    
    /**
     * Function to check for a winner or a draw
     * @returns Returns the result
     */
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
                restart.style.visibility = "visible";
                updateScores();
                start = false;
                return;
            }
        }

        if (!boxValue.includes("") && start) {
            gameStatus.textContent = "Awnn it's a Draw!";
            restart.style.visibility = "visible";
            start = false;
        }
    }

    /**
     * This function update and display the player scores
     */
    function updateScores() {
        scores[currentPlayer]++;
        scoreXDisplay.textContent = `Score X: ${scores.X}`;
        scoreODisplay.textContent = `Score O: ${scores.O}`;
    }
    
    /**
     * Function to restart the game
     */
    function restartGame() {
        restart.style.visibility = "hidden";
        boxValue = ["", "", "", "", "", "", "", "", ""];
        start = true;
        currentPlayer = "X";
        boxes.forEach(position => {
            position.textContent = "";
            start = true;
        });
        updatePosition();
    }
});