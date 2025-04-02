let score = 0;
let increment_click = 1;
let upgradeCost_click = 10;
let increment_second = 0;
let upgradeCost_second = 10;

function incrementScore() {
    score += increment_click;
    updateUI();
}

function buyUpgrade() {
    if (score >= upgradeCost_click) {
        score -= upgradeCost_click;
        increment_click++;
        upgradeCost_click = Math.floor(upgradeCost_click * 1.5);
        updateUI();
    }
}

function buyUpgradeSecond() {
    if (score >= upgradeCost_second) {
        score -= upgradeCost_second;
        increment_second++;
        upgradeCost_second = Math.floor(upgradeCost_second * 1.5);
        updateUI();
    }
}

function updateUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("increment").innerText = increment_click;
    document.getElementById("cost").innerText = upgradeCost_click;
    document.getElementById("secondIncrement").innerText = increment_second;
    document.getElementById("secondCost").innerText = upgradeCost_second;
}

function addPointsPerSecond() {
    score += increment_second;
    updateUI();
}

setInterval(addPointsPerSecond, 1000);
