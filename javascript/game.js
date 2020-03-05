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

    isCollide($frog, $cars) {
        const $playerRect = $frog.getBoundingClientRect();
        const $obstacleRect = $cars.getBoundingClientRect();
        return !(
            $playerRect.top + $playerRect.height < $obstacleRect.top ||
            $playerRect.top > $obstacleRect.top + $obstacleRect.height ||
            $playerRect.left + $playerRect.width < $obstacleRect.left ||
            $playerRect.left > $obstacleRect.left + $obstacleRect.width
        );
    }

    isSplash($frog, $logs) {
        debugger
        if ($frog.position[0] !== $logs.position[0] && $frog.position[1] !== $logs.position[1]) {
            
        } if ($frog.position[0] >= 0 && $frog.position[0] <=16 && $frog.position[1] >= 1 && $frog.position[1] <= 2) {
            document.querySelector(".frog").setAttribute("src", "../images/splash.png");
            console.log("gameover");
            clearInterval(game.renderRef);

        }
        else {
            console.log("The frog jumped on the log.")
        }

    }
}

let game = new Game();
game.start();
game.isCollide(game.cars);
game.isSplash(game.frog);