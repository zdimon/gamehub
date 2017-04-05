#Snowflake

Define division and canvas inside which allows to draw 2d 3d graphics in HTML document.
        
    <div id="myarea">
        <canvas id="mycanvas" width="800" height="480"></canvas>
    </div>

Get canvas.

    var canvas = document.getElementById('mycanvas');

or using jQuery

    var canvas = $('#mycanvas')[0];

Becouse $('#mycanvas') teturns jQuery object but in order to get a row html element we use [0] index.

Retriewing context.

    var context = canvas.getContext("2d");

The canvas context provides functions for drawing on the canvas.

Fill the canvas with a background.

    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);


Random color changing.

    <button id="random_color" class="btn btn-success">Fill rundom</button>

    $('#random_color').click(
        function(){
            items = ['blue', 'red', 'black', 'yellow']
            color = items[Math.floor(Math.random()*items.length)]
            context.fillStyle = color;
            context.fillRect(0, 0, canvas.width, canvas.height);       
        }
    );


Three main functions.

    mainLoop = function(){}
    draw = function(){}
    update = function(){}

Main loop.

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
        console.log(new Date());
        running_loop = window.setTimeout(mainLoop,1000/25);
    }


Drawing.

    mainLoop = function(){
        canvas.width = canvas.width - 1;
        draw();
        running_loop = window.setTimeout(mainLoop,1000/25);
    }

    draw = function(){

            items = ['blue', 'red', 'black', 'yellow']
            color = items[Math.floor(Math.random()*items.length)]
            context.fillStyle = color;
            context.fillRect(0, 0, canvas.width, canvas.height);   

    }


Jumping square.

        draw = function(){
 
            context.fillStyle = "blue";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'red'; 
            var d = new Date();
            var pos = d.getTime() % canvas.width;
            context.fillRect(pos, 100, 50, 50); 

        }


       var pos_y = (Math.random()*100) * (canvas.height/100);

Clearing canvas.

    context.clearRect(0, 0, canvas.width, canvas.height);

Move object.

    var myobj = {x: 50, y: 0}

    ...

    myobj.y = myobj.y + 10;
    if (myobj.y>canvas.height) {
        myobj.y = 0;
        myobj.x = (Math.random()*100) * (canvas.width/100);
    }
    context.fillRect(myobj.x, myobj.y, 50, 50); 


Drawing image.


    var sprite = new Image();
    sprite.src = 'snowflake.png'

    context.drawImage(sprite, 0, 0, sprite.width, sprite.height, myobj.x, myobj.y, sprite.width, sprite.height);


Handling a Key-Down Event.


    var keyboard = {}

    var handleKeyDown = function handleKeyDown(evt) {
        keyboard.keyDown = evt.keyCode;
        console.log(keyboard.keyDown);
    }

    var handleKeyUp = function handleKeyUp(evt) {
        keyboard.keyDown = -1;
        console.log(keyboard.keyDown);
    }

    document.onkeyup = handleKeyUp;
    document.onkeydown = handleKeyDown;


Create busket.


    var basket = new Image();
    basket.src = 'basket.png'    
    context.drawImage(basket, 0, 0, basket.width, basket.height, 10, canvas.height-100, sprite.width, sprite.height);


Move busket.


    var basket_x = 40;

    .....

    if(keyboard.keyDown>0 && keyboard.keyDown == 39) {
        basket_x = parseInt(basket_x) + 10;
        
    }

    if(keyboard.keyDown>0 && keyboard.keyDown == 37) {
        basket_x = parseInt(basket_x) - 10;
    }




    context.drawImage(basket, 0, 0, basket.width, basket.height, basket_x, canvas.height-100, sprite.width, sprite.height);


Detect caching.

        var score = 0;
        $('h1').html(score);

        ...

        if (myobj.y>canvas.height) {
            myobj.y = 0;
            if(basket_x>(myobj.x-30) && basket_x<(myobj.x+30)){
                score = score + 1
                $('h1').html(score);
            }
            myobj.x = (Math.random()*100) * (canvas.width/100);
            
        }    




