$(function() {
    var len = 50;
    var mainDiv = document.getElementById("container");
    var div_height = mainDiv.offsetHeight;
    var div_width = mainDiv.offsetWidth;
    var inner_div_width = div_width / len;

    var innerDivHeight = new Array(len);
    var innerDivLeft = new Array(len);
    var myArray = new Array(len);
    var i, j;
    for (i = 0; i < len; i++) {
        var myDiv = document.createElement("div");
        myDiv.style.position = "absolute";
        myDiv.style.backgroundColor = "blue";
        myDiv.style.width = inner_div_width + "px";
        mainDiv.appendChild(myDiv);
    }

    var innerDiv = mainDiv.querySelectorAll("div");
    $("#rndm").click(function() {
        for (i = 0; i < len; i++) {
            myArray[i] = div_height * i / len;
        }
        for (i = 0; i < len; i++) {
            var x = Math.floor(Math.random() * len)
            var y = Math.floor(Math.random() * len)
            var temp = myArray[x];
            myArray[x] = myArray[y];
            myArray[y] = temp;
        }
        for (i = 0; i < len; i++) {
            innerDivHeight[i] = myArray[i];
            innerDivLeft[i] = i * inner_div_width;
            var innerDivTop = div_height - innerDivHeight[i];
            innerDiv[i].style.top = innerDivTop + "px";
            innerDiv[i].style.left = innerDivLeft[i] + "px";
            innerDiv[i].style.height = innerDivHeight[i] + "px";
        }
    });

    $("#srt").click(function() {
        var newInnerdiv = mainDiv.querySelectorAll("div");
        for (i = 0; i < len - 1; i++) {
            for (j = 0; j < len - 1 - i; j++) {
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
                console.log(`iteration for ${i} ${j}`)
            }
        }
    });
});

let randomize = function(){

};

let bubbleSort = function(){

};

let insertionSort = function(){

};

let mergeSort = function(){

};