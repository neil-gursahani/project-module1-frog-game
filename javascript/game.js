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
}

let game = new Game();
game.start();