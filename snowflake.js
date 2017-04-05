//var canvas = document.getElementById('mycanvas');
var canvas = $('#mycanvas')[0];
var context = canvas.getContext("2d");

console.dir(canvas);

$('#random_color').click(
    function(){
        items = ['blue', 'red', 'black', 'yellow']
        color = items[Math.floor(Math.random()*items.length)]
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);       
    }
);

var sprite = new Image();
sprite.src = 'snowflake.png'

var basket = new Image();
basket.src = 'basket.png'
var basket_x = 40;

var score = 0;
$('h1').html(score);

var myobj = {x: 50, y: 0}

$('#start_btn').click(
    function(){
         mainLoop();
    }
);

$('#stop_btn').click(
    function(){
         clearTimeout(running_loop);
    }
);


var running_loop = undefined;

mainLoop = function(){
    //console.log(new Date());
    //canvas.width = canvas.width - 1;
    draw();
    running_loop = window.setTimeout(mainLoop,1000/24);
}

var keyboard = {}

var handleKeyDown = function handleKeyDown(evt) {
    keyboard.keyDown = evt.keyCode;
    //console.log(keyboard.keyDown);
}

var handleKeyUp = function handleKeyUp(evt) {
    keyboard.keyDown = -1;
    //console.log(keyboard.keyDown);
}

document.onkeyup = handleKeyUp;
document.onkeydown = handleKeyDown;


draw = function(){
 
        context.fillStyle = "blue";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'red'; 
        var d = new Date();
        var pos_x = d.getTime() % canvas.width;
        var pos_y = (Math.random()*100) * (canvas.height/100);

        myobj.y = myobj.y + 10;
        if (myobj.y>canvas.height) {
            myobj.y = 0;
            
            if(basket_x>(myobj.x-30) && basket_x<(myobj.x+30)){
                score = score + 1
                $('h1').html(score);
            }
            myobj.x = (Math.random()*100) * (canvas.width/100);
            
        }
        //console.log (pos_x+':'+pos_y+':'+d.getTime()+':'+canvas.width);

        context.drawImage(sprite, 0, 0, sprite.width, sprite.height, myobj.x, myobj.y, sprite.width, sprite.height);

        if(keyboard.keyDown>0 && keyboard.keyDown == 39) {
            basket_x = basket_x + 10;
            
        }

        if(keyboard.keyDown>0 && keyboard.keyDown == 37) {
            basket_x = basket_x - 10;
        }


        context.drawImage(basket, 0, 0, basket.width, basket.height, basket_x, canvas.height-100, sprite.width, sprite.height);
        //context.fillRect(myobj.x, myobj.y, 50, 50); 

}
update = function(){}


