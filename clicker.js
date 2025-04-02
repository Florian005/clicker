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

function updateUI() {
    document.getElementById("score").innerText = score;
    document.getElementById("increment").innerText = increment_click;
    document.getElementById("cost").innerText = upgradeCost_click;
}