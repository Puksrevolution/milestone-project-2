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
    render() {        
        this.box.style.top = "40px";
    }
}

let renderer = new Renderer(document.getElementById("game"));

setInterval(() => {
    renderer.render();
}, 1000);
