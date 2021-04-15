// ----------Player Objects---------- //
// Player 1 //
const p1 = {
    score: 0,
    plus: document.querySelector("#p1Plus"),
    minus: document.querySelector("#p1Minus"),
    displayName: document.querySelector("#p1DisplayName"),
    scoreBoard: document.querySelector("#p1ScoreBoard"),
    inputName: document.querySelector("#p1InputName"),
};

// Player 2 //
const p2 = {
    score: 0,
    plus: document.querySelector("#p2Plus"),
    minus: document.querySelector("#p2Minus"),
    displayName: document.querySelector("#p2DisplayName"),
    scoreBoard: document.querySelector("#p2ScoreBoard"),
    inputName: document.querySelector("#p2InputName"),
};

// ----------Playing To---------- //
// Compare playingTo value with p1.score and p2.score.
let playingTo = 0;
// Selecting number to play to.
const selectPlayingTo = document.querySelector("#selectPlayingTo");
selectPlayingTo.addEventListener("change", function () {
    // Save selected value to play to playingTo value.
    playingTo = parseInt(this.value);
    // Reset
    reset();
});

// ----------Round Results---------- //
// Select the results table
const resultsTable = document.querySelector("#resultsTable");
let round = 0;

// ----------Other Setups---------- //
// Create a boolean value to keep track of whether p1.score or p2.score has
// reached playingTo, and prevent point increases.
let isGameOver = false;
// Select banner
const banner = document.querySelector("#banner");

// ----------Plus Minus Buttons---------- //
// Player 1 //
p1.plus.addEventListener("click", function () {
    plus(p1, p2);
});
p1.minus.addEventListener("click", function () {
    minus(p1, p2);
});

// Player 2 //
p2.plus.addEventListener("click", function () {
    plus(p2, p1);
});
p2.minus.addEventListener("click", function () {
    minus(p2, p1);
});

// ----------Reset Button---------- //
// Select reset button
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
    reset();
});

// ----------Player Name Input---------- //
p1.inputName.addEventListener("input", function () {
    p1.displayName.innerText = p1.inputName.value;
    if (p1.inputName.value === "") {
        p1.displayName.innerText = "Player 1";
    }
});
p2.inputName.addEventListener("input", function () {
    p2.displayName.innerText = p2.inputName.value;
    if (p2.inputName.value === "") {
        p2.displayName.innerText = "Player 2";
    }
});

// ----------Functions---------- //
// Function for adding a point.
function plus(player, opponent) {
    if (!isGameOver) {
        // If game is not over, add point.
        player.score++;
        // Then, if player reached playingTo value, game over.
        if (player.score === playingTo) {
            // When clicked again, if(!isGameOver) doesn't run anymore for both players.
            isGameOver = true;
            // When player wins, add the .winner class to player.
            player.displayName.classList.add("winner");
            player.scoreBoard.classList.add("winner");
            // Also add .loser class to opponent.
            opponent.displayName.classList.add("loser");
            opponent.scoreBoard.classList.add("loser");
            // Change header banner to player Wins!
            banner.innerText = `${player.displayName.innerText} Wins!`;
            // Record results
            recordResults(player, opponent);
        }
        // Display player's score on the score board.
        player.scoreBoard.innerText = player.score;
    }
}

// Function for deducting a point.
function minus(player, opponent) {
    // Only if player.score OR opponent.score !== playingTo.
    if (player.score && opponent.score !== playingTo) {
        isGameOver = false;
        // Allow deduction only for player if player wins, and the game is back on.
        player.score--;
        player.scoreBoard.innerText = player.score;
        player.displayName.classList.remove("winner");
        player.scoreBoard.classList.remove("winner");
        opponent.displayName.classList.remove("loser");
        opponent.scoreBoard.classList.remove("loser");
        banner.innerText = "Score Keeper";
    }
}

// Reset Function
function reset() {
    isGameOver = false;
    p1.score = 0;
    p1.scoreBoard.innerText = p1.score;
    p2.score = 0;
    p2.scoreBoard.innerText = p2.score;
    p1.displayName.classList.remove("winner", "loser");
    p1.scoreBoard.classList.remove("winner", "loser");
    p2.displayName.classList.remove("winner", "loser");
    p2.scoreBoard.classList.remove("winner", "loser");
    banner.innerText = "Score Keeper";
}

// Function for recording results in table
function recordResults(player, opponent) {
    // Add result to roundResults
    round++;
    const rowTable = document.createElement("tr");
    const roundNumTable = document.createElement("td");
    const winnerTable = document.createElement("td");
    const scoresTable = document.createElement("td");
    resultsTable.append(rowTable);
    rowTable.append(roundNumTable, winnerTable, scoresTable);
    roundNumTable.append(round);
    winnerTable.append(player.displayName.innerText);
    scoresTable.append(`${player.score} - ${opponent.score}`);
}
