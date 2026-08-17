let totalRuns = 0;
let wickets = 0;

let legalBalls = 0;

let bowlerRuns = 0;
let bowlerWickets = 0;


// Two batsmen

let batsman1 = {
    name: "Rahul",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0
};

let batsman2 = {
    name: "Amit",
    runs: 0,
    balls: 0,
    fours: 0,
    sixes: 0
};


// 0 = Rahul
// 1 = Amit

let striker = 0;
let batsman1Out = false;
let batsman2Out = false;

let waitingForNewBatsman = false;


// Add runs

function addRuns(runs) {

    totalRuns += runs;

    bowlerRuns += runs;

    legalBalls++;

    // Get current striker

    let currentBatsman;

    if (striker === 0) {
        currentBatsman = batsman1;
    } else {
        currentBatsman = batsman2;
    }


    // Add runs to batsman

    currentBatsman.runs += runs;

    currentBatsman.balls++;


    // Count fours

    if (runs === 4) {
        currentBatsman.fours++;
    }


    // Count sixes

    if (runs === 6) {
        currentBatsman.sixes++;
    }


    // Change strike for odd runs

    if (runs === 1 || runs === 3) {

        changeStrike();

    }


    // Change strike after over

    if (legalBalls % 6 === 0) {

        changeStrike();

    }


    updateScoreboard();
}


// Change striker

function changeStrike() {

    if (striker === 0) {

        striker = 1;

    } else {

        striker = 0;

    }
}

//wicket
function wicket() {

    // Don't allow another wicket until new batsman comes
    if (waitingForNewBatsman) {
        alert("Select a new batsman first!");
        return;
    }

    wickets++;

    bowlerWickets++;

    legalBalls++;


    let currentBatsman;

    if (striker === 0) {

        currentBatsman = batsman1;
        batsman1Out = true;

    } else {

        currentBatsman = batsman2;
        batsman2Out = true;

    }


    // Ball faced by batsman
    currentBatsman.balls++;


    // New batsman required
    waitingForNewBatsman = true;


    updateScoreboard();
}

function addNewBatsman() {

    if (!waitingForNewBatsman) {

        alert("No wicket has occurred!");

        return;
    }


    let name =
        document.getElementById("newBatsman").value;


    if (name === "") {

        alert("Please select a batsman!");

        return;
    }


    let newBatsman = {

        name: name,

        runs: 0,

        balls: 0,

        fours: 0,

        sixes: 0

    };


    // Replace the dismissed batsman

    if (batsman1Out) {

        batsman1 = newBatsman;

        batsman1Out = false;

        striker = 0;

    } else if (batsman2Out) {

        batsman2 = newBatsman;

        batsman2Out = false;

        striker = 1;

    }


    waitingForNewBatsman = false;


    // Reset dropdown

    document.getElementById("newBatsman").value = "";


    updateScoreboard();
}


// Update scoreboard

function updateScoreboard() {

    document.getElementById("teamScore").innerText =
        totalRuns + " / " + wickets;


    document.getElementById("overs").innerText =
        Math.floor(legalBalls / 6) +
        "." +
        (legalBalls % 6);


    // Batsman 1

    document.getElementById("batsman1Name").innerText =
        (striker === 0 ? "⭐ " : "") + batsman1.name;

    document.getElementById("batsman1Runs").innerText =
        batsman1.runs;

    document.getElementById("batsman1Balls").innerText =
        batsman1.balls;

    document.getElementById("batsman1Fours").innerText =
        batsman1.fours;

    document.getElementById("batsman1Sixes").innerText =
        batsman1.sixes;


    // Batsman 2

    document.getElementById("batsman2Name").innerText =
        (striker === 1 ? "⭐ " : "") + batsman2.name;

    document.getElementById("batsman2Runs").innerText =
        batsman2.runs;

    document.getElementById("batsman2Balls").innerText =
        batsman2.balls;

    document.getElementById("batsman2Fours").innerText =
        batsman2.fours;

    document.getElementById("batsman2Sixes").innerText =
        batsman2.sixes;


    // Striker name

    document.getElementById("strikerName").innerText =
        striker === 0 ? batsman1.name : batsman2.name;


    // Bowler

    document.getElementById("bowlerOvers").innerText =
        Math.floor(legalBalls / 6) +
        "." +
        (legalBalls % 6);

    document.getElementById("bowlerRuns").innerText =
        bowlerRuns;

    document.getElementById("bowlerWickets").innerText =
        bowlerWickets;
}


// Reset

function resetScore() {

    totalRuns = 0;
    wickets = 0;

    legalBalls = 0;

    bowlerRuns = 0;
    bowlerWickets = 0;


    batsman1.runs = 0;
    batsman1.balls = 0;
    batsman1.fours = 0;
    batsman1.sixes = 0;


    batsman2.runs = 0;
    batsman2.balls = 0;
    batsman2.fours = 0;
    batsman2.sixes = 0;


    striker = 0;

    function wide() {
        totalRuns++;
        bowlerRuns++;       //Wide is not a legal ball then add a run in total runs
    
    }

    function NoBall() {
        totalRuns++;
        bowlerRuns++;       // no ball is not legal ball than add runs in total runs and bowler runs 
    }

    function Bye(){
        legalBalls++;           //bye is a legal ball 
        totalRuns++;

        if(legalBalls % 6 == 0 ) {      //if over is completed than change the strike 
            changeStrike();
        }
    }

    function legBye(){
        legalBalls++;
        totalRuns++;

        if (legalBalls % 6 == 0){
            changeStrike();
        }
    }


    updateScoreboard();
}