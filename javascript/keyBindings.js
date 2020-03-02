document.addEventListener("keydown", function(event) {
    // debugger
    switch (event.code) {
        case "ArrowLeft": 
            turnLeft(); //need to better reference this function
            console.log("Left key.")
            break;
        case "ArrowUp": 
            moveForward(); //need to better reference this function
            console.log("Forward key.")
            break;
        case "ArrowRight": 
            turnRight(); //need to better reference this function
            console.log("Right key.")
            break;
        case "ArrowDown": 
            moveBackward(); //need to better reference this function
            console.log("Backward key.")
            break;
        default:
            console.log("Wrong key.")
    }

})