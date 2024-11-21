//initial dificulty settings
const arraywidth = 15;
const arrayheight = 10;
const totalBoms = 25;
const tileSize = 45;

//game state
var gamestate = 'start';

//array with all tiles with their properties
var array = [];

//define canvas
const canvas = document.getElementById('canvas');

//set width and height of canvas
canvas.setAttribute('width', arraywidth*tileSize);
canvas.setAttribute('height', arrayheight*tileSize);

//x and y of mouse
var mousex;
var mousey;

//define images
var imageStart = new Image();
imageStart.src = './images/start.png';
var imageLost = new Image();
imageLost.src = './images/lost.png';
var imageWon = new Image();
imageWon.src = './images/won.png';
var imageHidden = new Image();
imageHidden.src = './images/hidden.png';
var imageFlag = new Image();
imageFlag.src = './images/flag.png';
var imageBom = new Image();
imageBom.src = './images/bom.png';
var image0 = new Image();
image0.src = './images/0.png';
var image1 = new Image();
image1.src = './images/1.png';
var image2 = new Image();
image2.src = './images/2.png';
var image3 = new Image();
image3.src = './images/3.png';
var image4 = new Image();
image4.src = './images/4.png';
var image5 = new Image();
image5.src = './images/5.png';
var image6 = new Image();
image6.src = './images/6.png';
var image7 = new Image();
image7.src = './images/7.png';
var image8 = new Image();
image8.src = './images/8.png';
var image = [image0, image1, image2, image3, image4, image5, image6, image7, image8];

//starts loop
window.onload = function startloop() {
    //1000ms/50fps=20ms per refresh
    setInterval(game, 20);
}

//infinite loop
function game(){
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //draw image as large as possible exactly in the middle, only works with square images
    function drawscreen(a){
        context.fillStyle = 'rgb(255, 255, 255)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        var ratio;
        (canvas.width > canvas.height) ? ratio = 1 : ratio = 0;
        context.drawImage(a, (canvas.width/2-canvas.height/2)*ratio, (canvas.height/2-canvas.width/2)*(1-ratio), canvas.height*ratio+canvas.width*(1-ratio), canvas.height*ratio+canvas.width*(1-ratio));
    }

    //all gamestates
    if (gamestate == 'start'){
        drawscreen(imageStart);
    }
    if (gamestate == 'won'){
        drawscreen(imageWon);
    }
    if (gamestate == 'lost'){
        drawscreen(imageLost);
    }
    if (gamestate == 'playing'){
        var visibleTiles = 0;
        for (var i = 0; i < arraywidth; i++){
            for (var j = 0; j < arrayheight; j++){
                renderTile(i, j);
                if (array[i][j].tileState == 'visible'){
                    visibleTiles++;
                    if (array[i][j].isBom == true){
                        gamestate = 'lost';
                    }
                }
            }
        }
        if (arraywidth*arrayheight == visibleTiles+totalBoms && gamestate != 'lost'){
            gamestate = 'won';
        }
    }
    
    console.log(gamestate);
}

//logs mouse x and y relative of canvas
canvas.onmousemove = function(e) { 
    mousex = Math.floor( (e.pageX - this.offsetLeft + arraywidth*tileSize/2) / tileSize);
    mousey = Math.floor( (e.pageY - this.offsetTop + arrayheight*tileSize/2) / tileSize);
}

//when mouse clicked
canvas.onmouseup = function(e) {
    //whilst not playing, create new game when canvas is clicked
    if (gamestate != 'playing'){
        createNewGame();
        gamestate = 'playing';
    }else{
        //left is 0, middle is 1, right is 2
        if (e.button == 0){
            if (array[mousex][mousey].tileState != 'flagged'){
                array[mousex][mousey].tileState = 'visible';
                checkForEmptyTiles(mousex, mousey);
            }
        }
        if (e.button == 2){
            if (array[mousex][mousey].tileState == 'flagged'){
                array[mousex][mousey].tileState = 'hidden';
            } else if (array[mousex][mousey].tileState == 'hidden'){
                array[mousex][mousey].tileState = 'flagged';
            }
            
        }
    }
}

//when mouse leaves canvas, hide onhover filter
canvas.onmouseleave = function() {
    mousex = canvas.width;
    mousey = canvas.height;
}

//create array
function createNewGame(){
    for (var i = 0; i < arraywidth; i++){
        array[i] = new Array(arrayheight).fill(null).map(()=> ({'isBom': false, 'tileState': 'hidden', 'adjecentBoms' : 0}));
    }

    //returns random number between 0 and max
    function randomInt(max){
        return Math.floor(Math.random() * max);
    }

    //fills array with boms at random positions
    var counter = 0;
    while (counter < totalBoms){
        const x = randomInt(arraywidth);
        const y = randomInt(arrayheight);
        if (array[x][y].isBom == false){
            array[x][y].isBom = true;
            counter++;
        }
    }

    //fill array with info about boms at adjecent tiles
    for (var i = 0; i < arraywidth; i++){
        for (var j = 0; j < arrayheight; j++){
            const sumAdjecentBoms = (
                checkTile(i-1, j+1).isBom +
                checkTile(i+0, j+1).isBom +
                checkTile(i+1, j+1).isBom +
                checkTile(i-1, j+0).isBom +
                checkTile(i+1, j+0).isBom +
                checkTile(i-1, j-1).isBom +
                checkTile(i+0, j-1).isBom +
                checkTile(i+1, j-1).isBom
            );
            array[i][j].adjecentBoms = sumAdjecentBoms;
        }
    }
}

//when an empty tile is clicked, check for more empty tiles
function checkForEmptyTiles(x, y){
    var emptyTiles = [x*arraywidth+y];

    //check the tile, possibly show them and/or add them to the array
    function updateTile(i, j){
        const tile = checkTile(i, j);
        if (tile.isBom != null && tile.isBom == false){
            if (tile.tileState != 'flagged'){
                array[i][j].tileState = 'visible';
            }
            if ( tile.adjecentBoms == 0 && !(emptyTiles.includes(i*arraywidth+j)) ){
                emptyTiles.push(i*arraywidth+j);
            }
        }
    }

    //loop through all tiles that still need to be checked and update their surrounding tiles
    for (var k = 0; k < emptyTiles.length; k++){
        const m = Math.floor(emptyTiles[k]/arraywidth);
        const n = emptyTiles[k] % arraywidth;
        if (array[m][n].adjecentBoms == 0){
            updateTile(m-1, n+1);
            updateTile(m+0, n+1);
            updateTile(m+1, n+1);
            updateTile(m-1, n+0);
            updateTile(m+1, n+0);
            updateTile(m-1, n-1);
            updateTile(m+0, n-1);
            updateTile(m+1, n-1);
        }
    }
}

//returns values of adjecent tile, returns null if tile does not exist
function checkTile(x, y){
    var isBom = null;
    var tileState = null;
    var adjecentBoms = null;
    if ( (x >= 0 && x < arraywidth) && (y >= 0 && y < arrayheight) ){
        isBom = array[x][y].isBom;
        tileState = array[x][y].tileState;
        adjecentBoms = array[x][y].adjecentBoms;
    }
    return {isBom, tileState, adjecentBoms};
}

//render tile on canvas
function renderTile(x, y){
    const context = canvas.getContext("2d");
    const tile = array[x][y];

    //on mouse hover
    (x == mousex && y == mousey) ? context.globalAlpha = 0.5 : context.globalAlpha = 1;

    //draw different images with different tile states
    if (tile.tileState == 'hidden'){
        context.drawImage(imageHidden, x*tileSize, y*tileSize, tileSize, tileSize);
    }
    if (tile.tileState == 'visible'){
        if (tile.isBom == true){
            context.drawImage(imageBom, x*tileSize, y*tileSize, tileSize, tileSize);
        }else{
            context.drawImage(image[tile.adjecentBoms], x*tileSize, y*tileSize, tileSize, tileSize);
        }
    }
    if (tile.tileState == 'flagged'){
        context.drawImage(imageFlag, x*tileSize, y*tileSize, tileSize, tileSize);
    }
}