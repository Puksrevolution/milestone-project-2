// "use strict";
let modal = document.getElementById("countDown");
setTimeout(function(){
    modal.style.opacity = "0";   
}, 5500);

let countDown = 4;
let count = setInterval(function() {    
    countDown = countDown - 1;

    document.getElementById("countDownNr").innerHTML = countDown;

    // If the count down is finished, write some text
    if (countDown < 0) {
        clearInterval(count);
        document.getElementById("countDownNr").innerHTML = "Start";    
    }
}, 1000);

// class for rendering purpose
class Renderer {

    // element = game field(id="game")
    constructor(element) {
        this.element = element;
        this.setup();
    }
    
    // function to create the div/ball for the game
    setup() {
        let ball = document.createElement("div");
        ball.style.position = "absolute";
        ball.style.top = "10px";
        ball.style.left = "20%";
        ball.style.width = "35px";
        ball.style.height = "35px";
        ball.style.backgroundColor = "rgb(255, 2, 99)";
        ball.style.borderRadius = "1000px";
        ball.style.boxShadow = "0 0 3px rgb(0, 141, 160)";
        // adding div/ball to the game field 
        this.element.appendChild(ball);
        // render gets accsess to box
        this.ball = ball;
    }

    // function to create the div/ball for the game
    render(position) {        
        this.box.style.top = position + "px";
    }
}

class Ball {
    constructor() {
        this.position = 0;

        /**
        * Negative Speed: get up
        * positive Speed: get down
        */
        this.speed = 0;
    }
    // this function (position + 1px) will executed 40 times in a second,
    // connectet with function start on line 70
    runLoop() {
        // increase speed
        this.speed++;
        // this function increase the speed and positinon with every loop, function on line 70
        this.position = this.position + this.speed;

    }
    // this function let the div/ball move up 20px by every click on the game field
    // connected with function setup line 62
    // 20px per second moves the div/ball up
    moveUp() {
        this.speed = - 20;
    }
}

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.ball = new Ball();
        this.element = element;
        this.isRunning = true;  // stops the position loop
        this.setup();
    }

    setup() {
        this.element.addEventListener("click", () => {
            this.ball.moveUp();
        }, false);
    }

    alertBox(msg) {
        let gameOverBox = document.getElementById("gameOver");
        const messageBox = document.querySelector("#gameOverMessage");
        messageBox.innerHTML = msg;
        if (gameOverBox.style.display === "none") {
            gameOverBox.style.display = "block";
        } else {
            gameOverBox.style.display = "none";
        }
    }

    start() {
        let score = 0;
        let timer = setInterval(() => {
            score++;
            this.ball.runLoop();
            // contains the gamefield, top border
            if (this.ball.position < 0) {     
                this.isRunning = false;
                clearInterval(timer);       // stops the interval loop   
                this.alertBox("The ball touched the top border: " + score + " Points!");
            }
            if (this.ball.position + 35 > this.element.clientHeight) {
                this.isRunning = false;
                clearInterval(timer);                
                this.alertBox("The ball touched the bottom border: " + score + " Points!");
            }
            if (this.isRunning == true) {
            this.renderer.render(this.ball.position);
            }
        }, 25);
    }
}

let game = new Game(document.getElementById("game"));

setTimeout(function () {
  game.start();
}, 6200);