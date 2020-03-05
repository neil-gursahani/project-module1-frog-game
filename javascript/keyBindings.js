//this file is good

document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "ArrowLeft": 
            game.frog.turnLeft(); 
            console.log("Left key.")
            break;
        case "ArrowUp": 
            // debugger
            if (game.frog.position[0] !== 0 && game.frog.position[0] !== 16 && game.frog.position[1] !== 0 && game.frog.position[1] !== 8) 
            {
                // debugger
                game.frog.moveForward();    
            } else {
                // debugger
                return;
            }
            
            console.log("Forward key.")
            break;
        case "ArrowRight": 
            game.frog.turnRight(); 
            console.log("Right key.")
            break;
        case "ArrowDown": 
            game.frog.moveBackward(); 
            console.log("Backward key.")
            break;
        default:
            console.log("Wrong key.")
    }

})