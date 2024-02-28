let BAR_COUNT = 200;
let INTERVAL_TIME = 0.1;

let INTERVAL_ID = null;

let bubbleSortLoop1 = BAR_COUNT - 1;
let bubbleSortLoop2 = 0;

let innerDivHeight = new Array(BAR_COUNT);
let innerDivLeft = new Array(BAR_COUNT);
let myArray = new Array(BAR_COUNT);

$(function() {
    randomize();
    $("#randomize").click(randomize);
    $("#bubble-sort").click(bubbleSort);
});

function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

function isPositiveFloat(string) {
    const number = parseFloat(string);
    const isInteger = Number.isInteger(number);
    const isPositive = number > 0;
    return isInteger && isPositive;
}

function isPositiveInteger(string) {
    const number = Number(string);
    const isInteger = Number.isInteger(number);
    const isPositive = number > 0;
    return isInteger && isPositive;
}

function setInput() {
    let speed = $("#speed").val()
    if (!isEmpty(speed) && isPositiveFloat(speed)) {
        INTERVAL_TIME = parseFloat(speed.trim())
    }
    let barCount = $("#bar-count").val()
    if (!isEmpty(barCount) && isPositiveInteger(barCount)) {
        BAR_COUNT = Number(barCount.trim())
    }
}

function bubbleSort() {
    bubbleSortLoop1 = BAR_COUNT - 1;
    bubbleSortLoop2 = 0;
    intervalManager(bubbleSortMove, INTERVAL_TIME);
}

function bubbleSortMove() {
    if (bubbleSortLoop1 == 0) {
        clearInterval(INTERVAL_ID);
        return;
    }
    if (bubbleSortLoop2 == bubbleSortLoop1) {
        bubbleSortLoop1 = bubbleSortLoop1 - 1;
        bubbleSortLoop2 = 0;
        return;
    }
    let allBars = container.querySelectorAll("div");
    let current = bubbleSortLoop2,
        next = bubbleSortLoop2 + 1;

    var currentHeight = allBars[current].offsetHeight;
    var nextHeight = allBars[next].offsetHeight;

    if (currentHeight > nextHeight) {
        allBars[current].style.backgroundColor = "black";
        allBars[next].style.backgroundColor = "black";

        var temp1 = allBars[current].style.height;
        var temp2 = allBars[next].style.height;
        var temp3 = allBars[current].style.top;
        var temp4 = allBars[next].style.top;

        allBars[current].style.height = temp2;
        allBars[current].style.top = temp4;
        allBars[next].style.height = temp1;
        allBars[next].style.top = temp3;
        allBars[current].style.backgroundColor = "blue";
        allBars[next].style.backgroundColor = "blue";
    }

    bubbleSortLoop2 = bubbleSortLoop2 + 1;
}

function randomize() {
    // setInput()
    clearInterval(INTERVAL_ID);
    const container = document.getElementById("container");
    const height = container.offsetHeight;
    const width = container.offsetWidth;
    let inner_div_width = width / BAR_COUNT;

    for (i = 0; i < BAR_COUNT; i++) {
        var myDiv = document.createElement("div");
        myDiv.style.position = "absolute";
        myDiv.style.backgroundColor = "blue";
        myDiv.style.width = inner_div_width + "px";
        container.appendChild(myDiv);
    }
    let innerDiv = container.querySelectorAll("div");

    for (i = 0; i < BAR_COUNT; i++) {
        myArray[i] = height * i / BAR_COUNT;
    }
    // to remove the biasness we will do the randomize function 10 times
    for (let j = 0; j < 10; j++) {
        for (i = 0; i < BAR_COUNT; i++) {
            var x = Math.floor(Math.random() * BAR_COUNT)
            var y = Math.floor(Math.random() * BAR_COUNT)
            var temp = myArray[x];
            myArray[x] = myArray[y];
            myArray[y] = temp;
        }
    }
    for (i = 0; i < BAR_COUNT; i++) {
        innerDivHeight[i] = myArray[i];
        innerDivLeft[i] = i * inner_div_width;
        var innerDivTop = height - innerDivHeight[i];
        innerDiv[i].style.top = innerDivTop + "px";
        innerDiv[i].style.left = innerDivLeft[i] + "px";
        innerDiv[i].style.height = innerDivHeight[i] + "px";
    }
}

function intervalManager(animate, time) {
    if (INTERVAL_ID) {
        clearInterval(INTERVAL_ID);
    }
    INTERVAL_ID = setInterval(animate, time);
}