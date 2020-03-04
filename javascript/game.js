class Game {
    constructor(){
        this.frog = new Frog([8,7]);
        this.cars = new Cars([14,14]);
        this.turtles = new Turtles([14,9]);
        this.logs = new Logs([14,8]);
    }

    start(){
        
        this.renderRef = setInterval(()=> {
            let $game = document.getElementById("frog-game")
            $game.innerHTML = "";
            this.frog.render();
        
            for(let i = 0; i < this.cars.length; i++) {
                this.cars[i].render();
            }
            for(let i = 0; i < this.logs.length; i++) {
                this.logs[i].render();
            }
            for(let i = 0; i < this.turtles.length; i++) {
                this.turtles[i].render();
            }
            renderEverything()
        }, 200)
      
    }

    // collide(rover, gameObjects){
    //     for(let i = 0; i < gameObjects.length; i++){
    //         if(rover.position[0] === gameObjects[i].position[0] &&
    //             rover.position[1] === gameObjects[i].position[1]) {
    //                 gameObjects.splice(i,1);
    //                 return true;
    //             }
    //     }
    // }
}

let game = new Game();
game.start();