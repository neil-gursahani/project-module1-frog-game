function renderFrog(){
    let aFrog = game.rover; // global game instance coming from ./game.js
    let $game = document.getElementById("frog-game")
    let $frogImg = document.createElement("img");
    $frogImg.setAttribute("id", "frog");

        switch(aFrog.direction){
            case "N":
                $frogImg.setAttribute("src", "../images/frog-forward.png");
                break;
            case "W":
                $frogImg.setAttribute("src", "../images/frog-right.png");
                break;
            case "S":
                $frogImg.setAttribute("src", "../images/frog-backward.png.png");
                break;
            case "E":
                $frogImg.setAttribute("src", "../images/frog-left.png.png");
                break;
            default:
                console.log("Direction unkown");
        }
        

    $frogImg.style.left = `${aRover.position[0] * 10}%`;
    $frogImg.style.top = `${aRover.position[1] * 10}%`;

    $game.appendChild($frogImg);
}