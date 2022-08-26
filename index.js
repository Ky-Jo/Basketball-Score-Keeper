/*
 - Add a new game button
 - Highlight the leader
 - add more counters (period, foul, timer, etc)
 - change the design
*/



let homeScore = 0
let awayScore = 0

function newGame() {
    homeScore = 0
    updateHome()
    awayScore = 0
    updateAway()
}

function updateLeader() {
    let leader = document.getElementById("vsEl")
    
    if(homeScore < awayScore){
        leader.textContent = "VS>"
    } else if(homeScore > awayScore){
        leader.textContent = "<VS"
    } else{
        leader.textContent = "VS"
    }
}

function updateHome() {
    document.getElementById("homeScoreEl").textContent = homeScore
    updateLeader()
}

function updateAway() {
    document.getElementById("awayScoreEl").textContent = awayScore
    updateLeader()
}

function addHome1() {
    homeScore += 1
    updateHome()
}

function addHome2() {
    homeScore += 2
    updateHome()
}

function addHome3() {
    homeScore += 3
    updateHome()
}

function addAway1() {
    awayScore += 1
    updateAway()
}

function addAway2() {
    awayScore += 2
    updateAway()
}

function addAway3() {
    awayScore += 3
    updateAway()
}

