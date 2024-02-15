var top_max = 450;
var left_max = 950;
var top_position;
var left_postion;
var hit_top = 0;
var hit_left = 0;
var img;
var intervalID = null;

function anim() {
    const existingBouncy = document.querySelector('.bouncing');
    if (existingBouncy) {
        existingBouncy.remove();
    }

    var box = document.getElementById("box");

    img = document.createElement("IMG");
    img.setAttribute("src", "smiley_face.gif");
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");
    img.className = "bouncing"
    top_position = Math.floor(Math.random() * top_max);
    left_postion = Math.floor(Math.random() * left_max);

    img.style.top = top_position + "px";
    img.style.left = left_postion + "px";

    box.appendChild(img);
    intervalManager(move, 0.1);
}

function intervalManager(animate, time) {
    if(intervalID)
        clearInterval(intervalID);      
    intervalID =  setInterval(animate, time);
 }

function move() {
    if (hit_top == 0) {
        top_position = top_position + 1;
        if (top_position == top_max) {
            hit_top = 1;
        }
    } else {
        top_position = top_position - 1;
        if (top_position == 0) {
            hit_top = 0;
        }
    }
    img.style.top = top_position + "px";

    if (hit_left == 0) {
        left_postion = left_postion + 1;
        if (left_postion == left_max) {
            hit_left = 1;
        }
    } else {
        left_postion = left_postion - 1;
        if (left_postion == 0) {
            hit_left = 0;
        }
    }
    img.style.left = left_postion + "px";

}