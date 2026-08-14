let totalRuns = 0;
let wickets = 0;

let batsmanRuns = 0;
let balls = 0;
let fours = 0;
let sixes = 0;

let bowlerRuns = 0;
let bowlerWickets = 0;
let legalBalls = 0;


function addRuns(runs) {

    totalRuns += runs;
    batsmanRuns += runs;
    bowlerRuns += runs;

    balls++;
    legalBalls++;

    if (runs === 4) {
        fours++;
    }

    if (runs === 6) {
        sixes++;
    }

    updateScoreboard();
}


function wicket() {

    wickets++;
    bowlerWickets++;

    balls++;
    legalBalls++;

    updateScoreboard();
}


function updateScoreboard() {

    document.getElementById("teamScore").innerText =
        totalRuns + " / " + wickets;

    document.getElementById("overs").innerText =
        Math.floor(legalBalls / 6) + "." + (legalBalls % 6);

    document.getElementById("batsmanRuns").innerText =
        batsmanRuns;

    document.getElementById("balls").innerText =
        balls;

    document.getElementById("fours").innerText =
        fours;

    document.getElementById("sixes").innerText =
        sixes;

    document.getElementById("bowlerOvers").innerText =
        Math.floor(legalBalls / 6) + "." + (legalBalls % 6);

    document.getElementById("bowlerRuns").innerText =
        bowlerRuns;

    document.getElementById("bowlerWickets").innerText =
        bowlerWickets;
}


function resetScore() {

    totalRuns = 0;
    wickets = 0;

    batsmanRuns = 0;
    balls = 0;
    fours = 0;
    sixes = 0;

    bowlerRuns = 0;
    bowlerWickets = 0;
    legalBalls = 0;

    updateScoreboard();
}