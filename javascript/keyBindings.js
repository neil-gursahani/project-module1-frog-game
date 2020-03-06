document.addEventListener("keydown", function(event) {
    console.log(`The frog's position: ${game.frog.position}`);   
    switch (event.code) {
        case "ArrowLeft": 
            game.frog.turnLeft(); 
            break;
        case "ArrowUp": 
            if (game.frog.position[0] !== 0 && game.frog.position[0] !== 16 && game.frog.position[1] !== 0 && game.frog.position[1] !== 8) 
            {
                game.frog.moveForward(); 
            } else {
                console.log("cannot do this.")
            }
            break;
        case "ArrowRight": 
            game.frog.turnRight(); 
            break;
        case "ArrowDown":
            if (game.frog.position[0] !== 0 && game.frog.position[0] !== 16 && game.frog.position[1] !== 0 && game.frog.position[1] !== 8) { 
                game.frog.moveBackward(); 
        } else {
            console.log("cannot do this.");
        }
            break;
        default:
            console.log("Wrong key.")
    }

})