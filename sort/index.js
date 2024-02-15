const BAR_COUNT = 50;
const container = document.getElementById("container");
const height = container.offsetHeight;
const width = container.offsetWidth;


var intervalId = null;
var i = 0;
var j = 0;

let randomize = function(){

};

let bubbleSort = function(){

};

let insertionSort = function(){

};

let mergeSort = function(){

};

function intervalManager(animate, time) {
    if(intervalID)
        clearInterval(intervalID);      
    intervalID =  setInterval(animate, time);
}

var inner_div_width = width / BAR_COUNT;
var innerDivHeight = new Array(BAR_COUNT);
var innerDivLeft = new Array(BAR_COUNT);
var myArray = new Array(BAR_COUNT);

for (i = 0; i < BAR_COUNT; i++) {
    var myDiv = document.createElement("div");
    myDiv.style.position = "absolute";
    myDiv.style.backgroundColor = "blue";
    myDiv.style.width = inner_div_width + "px";
    container.appendChild(myDiv);
}

var innerDiv = container.querySelectorAll("div");
$("#randomize").click(function() {
    for (i = 0; i < BAR_COUNT; i++) {
        myArray[i] = height * i / BAR_COUNT;
    }
    for (i = 0; i < BAR_COUNT; i++) {
        var x = Math.floor(Math.random() * BAR_COUNT)
        var y = Math.floor(Math.random() * BAR_COUNT)
        var temp = myArray[x];
        myArray[x] = myArray[y];
        myArray[y] = temp;
    }
    for (i = 0; i < BAR_COUNT; i++) {
        innerDivHeight[i] = myArray[i];
        innerDivLeft[i] = i * inner_div_width;
        var innerDivTop = height - innerDivHeight[i];
        innerDiv[i].style.top = innerDivTop + "px";
        innerDiv[i].style.left = innerDivLeft[i] + "px";
        innerDiv[i].style.height = innerDivHeight[i] + "px";
    }
});

$("#bubble-sort").click(function() {
    var newInnerdiv = container.querySelectorAll("div");
    for (i = 0; i < BAR_COUNT - 1; i++) {
        for (j = 0; j < BAR_COUNT - 1 - i; j++) {
            var h1 = newInnerdiv[j].offsetHeight;
            var h2 = newInnerdiv[j + 1].offsetHeight;
            if (h1 > h2) {
                newInnerdiv[j].style.backgroundColor = "black";
                newInnerdiv[j + 1].style.backgroundColor = "black";

                var temp1 = newInnerdiv[j].style.height;
                var temp2 = newInnerdiv[j + 1].style.height;
                var temp3 = newInnerdiv[j].style.top;
                var temp4 = newInnerdiv[j + 1].style.top;

                newInnerdiv[j].style.height = temp2;
                newInnerdiv[j].style.top = temp4;
                newInnerdiv[j + 1].style.height = temp1;
                newInnerdiv[j + 1].style.top = temp3;
                newInnerdiv[j].style.backgroundColor = "blue";
                newInnerdiv[j + 1].style.backgroundColor = "blue";

            }
        }
    }
});

