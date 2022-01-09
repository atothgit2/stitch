var canvas;
var context;


function getMousePos(e) {
    var canBoundX = canvas.offsetLeft;
    var canBoundY = canvas.offsetTop;
    var x = e.clientX - canBoundX,
        y = e.clientY - canBoundY;

    return {x: x, y: y};
}


function drag_click(e) {
    console.log(getMousePos(e));
}

function drag(e) {
    console.log(getMousePos(e));
}

function drag_stop(e) {
    console.log(getMousePos(e));
}

function draw() {
    canvas = $("#mainCanvas")[0];
    context = canvas.getContext('2d');
    context.strokeStyle =  "#000";
    context.lineWidth = 4;
    context.lineCap = "round";

    $(canvas).mousedown(function (e) {
        drag_click(e);
    });
    $(canvas).mousemove(function (e) {
        drag(e);
    });
    $(canvas).mouseup(function (e) {
        drag_stop(e);
    });
}


$(document).ready(draw()); 