const historySection = document.getElementById("history-section");
const historyButton = document.getElementById("history-button");
const historySVG = document.getElementById("history-svg");

historyClick();

function historyClick() {
    if (historySection.style.maxHeight !== "0px") {
        historySection.style.maxHeight = "0px";
        historyButton.style.backgroundColor = "var(--red)";
        historyButton.style.color = "var(--white)";
        historySVG.style.fill = "var(--white)";
    } else {
        historySection.style.maxHeight = "400px";
        historyButton.style.backgroundColor = "var(--red-active)";
        historyButton.style.color = "var(--light)";
        historySVG.style.fill = "var(--light)";
    }
};

historyButton.addEventListener('click', historyClick);


const natureSection = document.getElementById("nature-section");
const natureButton = document.getElementById("nature-button");
const natureSVG = document.getElementById("nature-svg");

natureClick();

function natureClick() {
    if (natureSection.style.maxHeight !== "0px") {
        natureSection.style.maxHeight = "0px";
        natureButton.style.backgroundColor = "var(--green)";
        natureButton.style.color = "var(--white)";
        natureSVG.style.fill = "var(--white)";
    } else {
        natureSection.style.maxHeight = "400px";
        natureButton.style.backgroundColor = "var(--green-active)";
        natureButton.style.color = "var(--light)";
        natureSVG.style.fill = "var(--light)";
    }
};

natureButton.addEventListener('click', natureClick);


const golfingSection = document.getElementById("golfing-section");
const golfingButton = document.getElementById("golfing-button");
const golfingSVG = document.getElementById("golfing-svg");

golfingClick();

function golfingClick() {
    if (golfingSection.style.maxHeight !== "0px") {
        golfingSection.style.maxHeight = "0px";
        golfingButton.style.backgroundColor = "var(--blue)";
        golfingButton.style.color = "var(--white)";
        golfingSVG.style.fill = "var(--white)";
    } else {
        golfingSection.style.maxHeight = "400px";
        golfingButton.style.backgroundColor = "var(--blue-active)";
        golfingButton.style.color = "var(--light)";
        golfingSVG.style.fill = "var(--light)";
    }
};

golfingButton.addEventListener('click', golfingClick);
