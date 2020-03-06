class Game {
    constructor(){
        this.frog = new Frog([8,7]);
        this.cars = [new Cars([11,14])];
        this.turtles = new Turtles([14,9]);
        this.logs = new Logs([11,2]);
    }

    start(){
        this.renderRef = setInterval(()=> {
            let $game = document.getElementById("frog-game");
            $game.innerHTML = "";
            this.frog.render();
            this.cars[0].render();
            this.logs.render();
        
            renderEverything()
        }, 100)
      
    }

    reRendered(){
        setInterval(() => {
            debugger
            this.cars.push(new Cars([14,14]));
            this.cars[this.cars.length-1].render();
            this.render();
        }, 300);

    }
    
    isCollide(frogImage, obstacleImage) {
        const $playerRect = frogImage.getBoundingClientRect();
        const $obstacleRect = obstacleImage.getBoundingClientRect();
        return !(
            $playerRect.top + $playerRect.height < $obstacleRect.top ||
            $playerRect.top > $obstacleRect.top + $obstacleRect.height ||
            $playerRect.left + $playerRect.width < $obstacleRect.left ||
            $playerRect.left > $obstacleRect.left + $obstacleRect.width
        );
    }

    // isSplash($frog, $logs) {
    //     debugger
    //     if ($frog.position[0] !== $logs.position[1] && $frog.position[1] !== $logs.position[0]) {
            
    //     } if ($frog.position[0] >= 0 && $frog.position[0] <=16 && $frog.position[1] >= 1 && $frog.position[1] <= 2) {
    //         document.querySelector(".frog").setAttribute("src", "./images/splash.png");
    //         console.log("gameover");
    //         clearInterval(game.renderRef);
    //         // clearInterval(game.cars.renderReferenceRepeated);

    //     }
    //     else {
    //         // console.log("The frog jumped on the log.")
    //     }

    // }
}

let game = new Game();
game.start();
// game.reRendered();
// game.isCollide(game.frog, game.cars);
// game.isSplash(game.frog);