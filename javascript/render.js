function renderEverything(){
    let frog = document.querySelector(".frog")
    let cars = document.querySelectorAll(".cars");
    let logs = document.querySelectorAll(".logs");

    for (let i = 0; i < cars.length; i++) {
        if(game.isCollide(frog, cars[i])){
        document.querySelector(".frog").setAttribute("src", "./images/splat-42890.svg");
        clearInterval(game.renderRef);
        // clearInterval(game.cars.renderReferenceRepeated);
    }   
}

    if (game.frog.position[0] >= 0 && game.frog.position[0] <=16 && game.frog.position[1] >= 1 && game.frog.position[1] <= 2) {
        if(game.isCollide(frog, logs[0]) || game.isCollide(frog, logs[1])){
            return;
        } else {
            document.querySelector(".frog").setAttribute("src", "./images/splash.png");
            clearInterval(game.renderRef);
            // clearInterval(game.cars.renderReferenceRepeated);
        }
    }
}

