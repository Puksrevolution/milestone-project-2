"use strict";

// class for rendering purpose
class Renderer {

    // element = game field(id="game")
    constructor(element) {
        this.element = element;
        this.setup();
    }
    
    // function to create the div/ball for the game
    setup() {
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "10px";
        box.style.left = "40px";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.backgroundColor = "rgb(255, 2, 99)";
        box.style.borderRadius = "1000px";
        box.style.boxShadow = "0 0 3px rgb(0, 141, 160)";
        // adding div/ball to the game field 
        this.element.appendChild(box);
        // render gets accsess to box
        this.box = box;
    }

    // function to create the div/ball for the game
    render(position) {        
        this.box.style.top = position + "px";
    }
}

class Box {
    constructor() {
        this.position = 0;

        /**
        * Negative Speed: get up
        * positive Speed: get down
        */
        this.speed = 0;
    }
    // this function (position + 1px) will executed 10 times in a second,
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
        this.speed = this.speed - 20;
    }
}

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.element = element;
        this.setup();
    }

    setup() {
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        }, false);
    }

    start() {
        setInterval(() => {
            this.box.runLoop();
            // contains the gamefield, top border
            if (this.box.position < 0) {
                alert("The ball touched the top border");
            }
            if (this.box.position + 35 > this.element.clientHeight) {
                alert("The ball touched the bottom border");
            }
            this.renderer.render(this.box.position);
        }, 100);
    }
}

let game = new Game(document.getElementById("game"));
game.start()
