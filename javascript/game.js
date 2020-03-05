class Game {
    constructor(){
        this.frog = new Frog([8,7]);
        this.cars = new Cars([14,14]);
        this.turtles = new Turtles([14,9]);
        this.logs = new Logs([14,8]);
        
    }

    start(){
        this.renderRef = setInterval(()=> {
            let $game = document.getElementById("frog-game");
            $game.innerHTML = "";
            this.frog.render();
            this.cars.render();
            this.logs.render();
        
            // for(let i = 0; i < this.cars.length; i++) {
            //     this.cars[i].render();
            // }
            for(let i = 0; i < this.logs.length; i++) {
                this.logs[i].render();
            }
            for(let i = 0; i < this.turtles.length; i++) {
                this.turtles[i].render();
            }
            renderEverything()
        }, 10)
      
    }

    // collide(frog, cars){
    //     debugger
    //     for(let i = 0; i < cars.length; i++){
    //         if(frog.position[0] === cars[i].position[0] &&
    //             frog.position[1] === cars[i].position[1]) {
    //                 frog.splice(0,2);
    //                 // cars.splice(i,1);
    //                 return true;
    //             }
    //     }
    // }

    isCollide($frog, $obstacle) {
        const $playerRect = $frog.getBoundingClientRect();
        const $obstacleRect = $obstacle.getBoundingClientRect();
        return !(
            $playerRect.top + $playerRect.height < $obstacleRect.top ||
            $playerRect.top > $obstacleRect.top + $obstacleRect.height ||
            $playerRect.left + $playerRect.width < $obstacleRect.left ||
            $playerRect.left > $obstacleRect.left + $obstacleRect.width
        );
    }
}

let game = new Game();
game.start();
game.collide();