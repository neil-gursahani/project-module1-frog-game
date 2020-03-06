//this file is good

document.addEventListener("keydown", function(event) {
    console.log(`The frog's position: ${game.frog.position}`);   
    switch (event.code) {
        case "ArrowLeft": 
            game.frog.turnLeft(); 
            console.log("Left key.")
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
            console.log("Right key.")
            break;
        case "ArrowDown":
            if (game.frog.position[0] !== 0 && game.frog.position[0] !== 16 && game.frog.position[1] !== 0 && game.frog.position[1] !== 8) { 
                game.frog.moveBackward(); 
        } else {
            console.log("cannot do this.");
        }
            console.log("Backward key.")
            break;
        default:
            console.log("Wrong key.")
    }

})