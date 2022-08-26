/*
 - Add a new game button
 - Highlight the leader
 - add more counters (period, foul, timer, etc)
 - change the design
*/



let homeScore = 0
let guestScore = 0

function newGame() {
    homeScore = 0
    updateHome()
    guestScore = 0
    updateGuest()
}

function updateLeader() {
    let leader = document.getElementById("vsEl")
    
    if(homeScore < guestScore){
        leader.textContent = "VS>"
    } else if(homeScore > guestScore){
        leader.textContent = "<VS"
    } else{
        leader.textContent = "VS"
    }
}

function updateHome() {
    document.getElementById("homeScoreEl").textContent = homeScore
    updateLeader()
}

function updateGuest() {
    document.getElementById("guestScoreEl").textContent = guestScore
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

function addGuest1() {
    guestScore += 1
    updateGuest()
}

function addGuest2() {
    guestScore += 2
    updateGuest()
}

function addGuest3() {
    guestScore += 3
    updateGuest()
}

