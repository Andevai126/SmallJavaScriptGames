//set width and height of canvas
canvas.setAttribute('width', 500);
canvas.setAttribute('height', 700);

//returns random number between 0 and max
function randomInt(max){
    return Math.floor(Math.random() * max);
}

//starts loop
window.onload = function startloop() {
    //1000ms/50fps=20ms per refresh
    setInterval(game, 20);
}

var gamestate = 'start';
const width = 20;
const height = 25;

var balls;
var waitingballs;
var theball;
var xpower;
var ypower;
var xpowerball;
var ypowerball;
var clicks;
var shift;
function creategame(){
    balls = [width];
    for (var i = 0; i < width; i++){
        balls[i] = new Array(height);
        for (var j = 0; j < 15; j++){
            balls[i][j] = {'color': randomInt(6), 'empty': false};
        }
        for (var j = 15; j < height; j++){
            balls[i][j] = {'color': 0, 'empty': true};
        }
    }

    waitingballs = [randomInt(6), randomInt(6), randomInt(6)];
    theball = {'color': randomInt(6), 'x': 250, 'y': 675};
    xpower = 0;
    ypower = 0;
    xpowerball = 0;
    ypowerball = 0;
    clicks = 0;
    shift = 0;
}

//infinite loop
function game(){
    clearcanvas();

    if (gamestate == 'start'){
        rendertext(45, 330, 50, 'Click to start game!');
    }

    if (gamestate == 'playing'){
        calculate();
        renderline(250, 675, 250+xpower*75, 675-ypower*75, 255, 0, 0, 1, 3);
        for (var i = 0; i < width; i++){
            for (var j = 0; j < height; j++){
                if (balls[i][j].empty == false){
                    var c = getcolor(balls[i][j].color);
                    renderpoint(i*24+16 + ((j+shift)%2)*12, j*20+16, 11, c.red, c.green, c.blue, 1);
                }
            }
        }
        renderwaitingballs();
        renderball();
    }

    if (gamestate == 'lost'){
        rendertext(5, 330, 50, 'You lost! Click to restart.');
    }

    if (gamestate == 'won'){
        rendertext(5, 330, 50, 'You won! Click to restart.');
    }
}

//x and y of mouse
var mousex;
var mousey;

//logs mouse x and y relative of canvas
canvas.onmousemove = function(e) { 
    mousex = e.pageX - this.offsetLeft + canvas.width/2;
    mousey = e.pageY - this.offsetTop + canvas.height/2;
}

//when mouse clicked
canvas.onmouseup = function(e) {
    if (gamestate != 'playing'){
        if (e.button == 0){
            creategame();
            gamestate = 'playing';
        }
    }
    //left is 0, middle is 1, right is 2
    if (e.button == 0 && xpowerball == 0 && ypowerball == 0){
        xpowerball = xpower;
        ypowerball = ypower*-1;

        (clicks < 20) ? clicks += 1 : clicks = 0;
    }

    if (e.button == 1){ lower(); }
}

//paint line on canvas
function renderline(x1, y1, x2, y2, r, g, b, a, linewidth){
    var context = document.getElementById("canvas").getContext("2d");
    context.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    context.lineWidth = linewidth;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function clearcanvas(){
    var id = document.getElementById('canvas');
    const context = id.getContext('2d');
    context.clearRect(0, 0, id.width, id.height);
}

function calculate(){
    var angle = Math.atan( (675-mousey)/(-250+mousex) );
    if (mousex < 250){ angle -= Math.PI}
    xpower = Math.cos(angle);
    ypower = Math.sin(angle);
}

function renderpoint(x, y, radius, r, g, b, a){
    const context = document.getElementById('canvas').getContext("2d");
    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.fill();
}

function rendertext(x, y, height, text){
    const context = document.getElementById('canvas').getContext("2d");
    context.fillStyle = "black";
    context.font = height + 'px serif';
    context.fillText(text, x, y);
}

function getcolor(number){
    var red;
    var green;
    var blue;
    if (number == 0){ red = 255; green=0; blue=0; }
    if (number == 1){ red = 0; green=255; blue=0; }
    if (number == 2){ red = 0; green=0; blue=255; }
    if (number == 3){ red = 255; green=255; blue=0; }
    if (number == 4){ red = 255; green=0; blue=255; }
    if (number == 5){ red = 0; green=255; blue=255; }
    return {red, green, blue}
}




function renderball(){
    //update
    theball.x += xpowerball*15;
    theball.y += ypowerball*15;

    //wallcolision
    if (theball.x < 0+10)  { theball.x = 10;  xpowerball *= -1; }
    if (theball.x > 500-10){ theball.x = 490; xpowerball *= -1; }
    if (theball.y < 0+10)  { theball.y = 10;  ypowerball *= -1; }
    if (theball.y > 700-10){ theball.y = 690; ypowerball *= -1; }

    //ballcolision
    var closestball = findclosestball(theball.x, theball.y);
    if (closestball.distance < 15){
        var emptyspot = findclosestemptyspot(theball.x, theball.y);

        balls[emptyspot.x][emptyspot.y].empty = false;
        balls[emptyspot.x][emptyspot.y].color = theball.color;

        xpowerball = 0;
        ypowerball = 0;
        theball.x = 250;
        theball.y = 675;
        theball.color = waitingballs[2];
        waitingballs[2] = waitingballs[1];
        waitingballs[1] = waitingballs[0];
        waitingballs[0] = randomInt(6);

        checksurroundings(emptyspot.x, emptyspot.y);

        checkceilingconnection();

        if (clicks == 1){ lower(); }

        checkgamestate();
    }

    //render
    var c = getcolor(theball.color);
    renderpoint(theball.x, theball.y, 11, c.red, c.green, c.blue, 1);
}

var ballinfirstrow;
var ballinlastrow;
function checkgamestate(){
    ballinlastrow = false;
    ballinfirstrow = false;
    for (i = 0; i < width; i++){
        if (balls[i][24].empty == false){
            ballinlastrow = true;
        }
        if (balls[i][0].empty == false){
            ballinfirstrow = true;
        }
    }
    if (ballinlastrow == true){
        gamestate = 'lost';
    }
    if (ballinfirstrow == false){
        gamestate = 'won';
    }
}


function findclosestball(ballx, bally){
    var x = 0;
    var y = 0;
    var distance = 99999;
    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            if (balls[i][j].empty == false){
                var balldistance = Math.sqrt( (i*24+16 + ((j+shift)%2)*12 - ballx)**2 + (j*20+16 - bally)**2 );
                if (balldistance < distance){
                    distance = balldistance;
                    x = i;
                    y = j;
                }
            }
        }
    }
    return {x, y, distance}
}

function findclosestemptyspot(ballx, bally){
    var x = 0;
    var y = 0;
    var distance = 99999;
    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            if (balls[i][j].empty == true){
                var balldistance = Math.sqrt( (i*24+16 + ((j+shift)%2)*12 - ballx)**2 + (j*20+16 - bally)**2 );
                if (balldistance < distance){
                    distance = balldistance;
                    x = i;
                    y = j;
                }
            }
        }
    }
    return {x, y, distance}
}

function renderwaitingballs(){
    for (var i = 0; i < 3; i++){
        var c = getcolor(waitingballs[i]);
        renderpoint(150+i*24, 675, 11, c.red, c.green, c.blue, 1);
    }
}

function lower(){
    shift = 1-shift;
    for (var i = 0; i < 20; i++){
        for (var j = 24; j > 0; j--){
            balls[i][j] = balls[i][j-1];
        }
        balls[i][0] = {'color': randomInt(6), 'empty': false};
    }
}

function checksurroundings(x, y){
    //console.log('checksurroundings triggered');

    var color = balls[x][y].color;
    var tobechecked = [x+y*width];
    var connected = 0;

    function updateball(i, j){
        const checkedball = checkBall(i, j);
        if ( checkedball.empty == false && checkedball.color == color){
            if ( !(tobechecked.includes(i+j*width)) ){
                connected += 1;
                tobechecked.push(i+j*width);
            }
        }
    }

    for (var k = 0; k < tobechecked.length; k++){
        const n = Math.floor(tobechecked[k]/width);
        const m = tobechecked[k] % width;
        if (balls[m][n].color == color){
            var c = (n+shift+1)%2*-1;  
            updateball(m-1, n+0);
            updateball(m+1, n+0);
            updateball(m+0+c, n+1);
            updateball(m+1+c, n+1);
            updateball(m+0+c, n-1);
            updateball(m+1+c, n-1);
        }
    }

    if (connected > 1){
        for (var k = 0; k < tobechecked.length; k++){
            const n = Math.floor(tobechecked[k]/width);
            const m = tobechecked[k] % 20;
            if (balls[m][n].color == color){
                balls[m][n].empty = true;
            }
        }
    }
}

//returns values of adjecent tile, returns null if tile does not exist
function checkBall(x, y){
    var empty = null;
    var color = null;
    if ( (x >= 0 && x < width) && (y >= 0 && y < height) ){
        empty = balls[x][y].empty;
        color = balls[x][y].color;
    }
    return {empty, color};
}

function checkceilingconnection(){
    //console.log('checkceilingconnection triggered');

    var tobechecked = [];

    for (var i = 0; i < width; i++){
        tobechecked.push(i);
    }

    function updateball(i, j){
        const checkedball = checkBall(i, j);
        if ( checkedball.empty == false){
            if ( !(tobechecked.includes(i+j*width)) ){
                tobechecked.push(i+j*width);
            }
        }
    }

    for (var k = 0; k < tobechecked.length; k++){
        const n = Math.floor(tobechecked[k]/width);
        const m = tobechecked[k] % width;
        if (balls[m][n].empty == false){
            var c = (n+shift+1)%2*-1;  
            updateball(m-1, n+0);
            updateball(m+1, n+0);
            updateball(m+0+c, n+1);
            updateball(m+1+c, n+1);
            updateball(m+0+c, n-1);
            updateball(m+1+c, n-1);
        }
    }

    for (var i = 0; i < width; i++){
        for (var j = 0; j < height; j++){
            if ( !( tobechecked.includes(i+j*width) ) ){
                balls[i][j].empty = true;
            }
        }
    }
}