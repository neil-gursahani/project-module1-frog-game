class Frog {
    constructor(startingPosition) {
        this.direction = "N";
        this.prevLocations = [];
        this.position = startingPosition;
        this.render();
    }
    
    turnLeft() {
        switch(this.direction) {
            case "N": 
                this.direction = "W"
                break;
            case "S":
                this.direction = "E"
                break;
            case "E":
                this.direction = "N"
                break;
            case "W":
                this.direction = "S"
                break;
            default:
                console.log("Incorrect turn left input.")
        }
    }

    turnRight() {
        switch(this.direction) {
            case "N": 
                this.direction = "E"
                break;
            case "S":
                this.direction = "W"
                break;
            case "E":
                this.direction = "S"
                break;
            case "W":
                this.direction = "N"
                break;
            default:
                console.log("Incorrect turn right input.")
        }
    }

    moveForward() {
        switch(this.direction) {
            case "N": 
                this.position[1]--;
                break;
            case "S": 
                this.position[1]++;
                break;
            case "E": 
                this.position[0]++;
                break;
            case "W": 
                this.position[0]--;
                break;
            default: 
                console.log("Incorrect moving forward input.")
        }
    }

    moveBackward() {
        switch(this.direction) {
            case "N": 
                this.position[1]++;
                break;
            case "S": 
                this.position[1]--;
                break;
            case "E": 
                this.position[0]--;
                break;
            case "W": 
                this.position[0]++;
                break;
            default: 
                console.log("Incorrect moving backward input.")
        }
    }

    render(){
        let $game = document.getElementById("frog-game")
        let $frogImg = document.createElement("img");
        $frogImg.setAttribute("class", "frog");
        $frogImg.setAttribute("id", "frog-id");

        let $frogEndPoint = document.createElement("div");
        let $frogPond = document.createElement("div");
        let $frogGrass = document.createElement("div");
        let $frogRoad = document.createElement("div");
        let $frogStartingPoint = document.createElement("div");

        $frogEndPoint.setAttribute("class", "ending-point");
        $frogPond.setAttribute("class", "pond");
        $frogGrass.setAttribute("class", "grass");
        $frogRoad.setAttribute("class", "road");
        $frogStartingPoint.setAttribute("class", "starting-point");


        $frogEndPoint.setAttribute("style", "height: 10vh; width: 100%; background-color: green;");
        $frogPond.setAttribute("style", "height: 23vh; background-color: blue;");
        $frogGrass.setAttribute("style", "height: 12.5vh; background-color: green;");
        $frogRoad.setAttribute("style", "height: 33vh; background-color: grey;");
        $frogStartingPoint.setAttribute("style", "height: 11vh; background-color: green;");
    
            switch(this.direction){
                case "N":
                    $frogImg.setAttribute("src", "../images/frog-forward.png");
                    break;
                case "W":
                    $frogImg.setAttribute("src", "../images/frog-left.png");
                    break;
                case "S":
                    $frogImg.setAttribute("src", "../images/frog-backward.png");
                    break;
                case "E":
                    $frogImg.setAttribute("src", "../images/frog-right.png");
                    break;
                default:
                    console.log("Direction unkown");
            }

        $frogImg.style.left = `${(this.position[0] * 6)}%`;
        $frogImg.style.top = `${(this.position[1] * 12.8)}%`;
        $frogImg.style.width = `5%`;
    
        $game.appendChild($frogImg);
        $game.appendChild($frogEndPoint);
        $game.appendChild($frogPond);
        $game.appendChild($frogGrass);
        $game.appendChild($frogRoad);
        $game.appendChild($frogStartingPoint);
    }
        
}

let $frogImg = document.createElement("img");
