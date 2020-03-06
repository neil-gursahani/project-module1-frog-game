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

    // for (let i = 0; i < logs.length; i++) {
        // debugger
        // const $logRect = logs.getBoundingClientRect();
        // const $playerRect = frog.getBoundingClientRect();

        // console.log(`This is the top of log: ${Math.ceil($logRect.top)}`);
        // console.log(`This is the left of log: ${Math.ceil($logRect.left)})`);
        // console.log(`This is the right of log: ${Math.ceil($logRect.right)}`);

        // console.log(`This is the top of frog: ${Math.ceil($playerRect.top)}`);
        // console.log(`This is the left of frog: ${Math.ceil($playerRect.left)}`);
        // console.log(`This is the right of frog: ${Math.ceil($playerRect.right)}`);

        if (game.frog.position[0] >= 0 && game.frog.position[0] <=16 && game.frog.position[1] >= 1 && game.frog.position[1] <= 2) {
           debugger
            if(game.isCollide(frog, logs[0]) || game.isCollide(frog, logs[1])){
                console.log("the frog is on the log")
                return;
            } else {
                document.querySelector(".frog").setAttribute("src", "./images/splash.png");
                clearInterval(game.renderRef);
                // clearInterval(game.cars.renderReferenceRepeated);
            }
    }
        
    // }   
    

    // if(game.isSplash(game.frog, logs)){
    //     document.querySelector(".frog").setAttribute("src", "./images/splash.png");
    //     clearInterval(game.renderRef);
    //     // clearInterval(game.cars.renderReferenceRepeated);
    // }
}

