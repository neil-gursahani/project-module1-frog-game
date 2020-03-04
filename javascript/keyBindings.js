//this file is good

document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "ArrowLeft": 
            game.frog.turnLeft(); 
            console.log("Left key.")
            break;
        case "ArrowUp": 
            game.frog.moveForward(); 
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

// document.addEventListener("keydown", function(event) {
//     switch (event.code) {
//         case "ArrowLeft": 
//             game.frog.turnLeft(); 
//             console.log("Left key.")
//             break;
//         case "ArrowUp": 
//             game.frog.moveUp($frogImg); 
//             console.log("Forward key.")
//             break;
//         case "ArrowRight": 
//             game.frog.turnRight(); 
//             console.log("Right key.")
//             break;
//         case "ArrowDown": 
//             game.frog.moveDown($frogImg); 
//             console.log("Backward key.")
//             break;
//         default:
//             console.log("Wrong key.")
//     }

// })

// function moveVader(event) {
//     switch (event.key) {
//         case "ArrowUp":
//             event.preventDefault()
//             moveUp(vaderImg)
//             break;
//         case "ArrowDown":
//             event.preventDefault()
//             moveDown(vaderImg)
//             break;
//         case "ArrowRight":
//             event.preventDefault()
//             moveRight(vaderImg)
//             vaderImg.style.transform = "scale(1,1)"
//             break;
//         case "ArrowLeft":
//             event.preventDefault()
//             moveLeft(vaderImg)
//             vaderImg.style.transform = "scale(-1,1)"
//             break;
//         default:
//             break;
//     }
//     if (isTouching(vaderImg, officerImg)) {
//         alert("choked")
//         moveOff()
//     }
// }