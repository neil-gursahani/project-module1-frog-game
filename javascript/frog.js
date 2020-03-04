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
        //this.currentLocation.push(this.position); 
        switch(this.direction) {
            case "N":
                if (this.position[1] === 0) {
                    console.log("Cannot move more forward!");
                } else {
                    this.position[1]--;
                }
                break;
            case "S":
                if (this.position[1] === 14) {
                    console.log("Cannot move more forward!");
                } else {
                    this.position[1]++;
                }
            case "E":
                if (this.position[0] === 0) {
                    console.log("Cannot move more forward!");
                } else {
                    this.position[0]++;
                }
            case "W":
                if (this.position[0] === 16) {
                    console.log("Cannot move more forward!")
                } else {
                    this.position[0]--;
                }
            default: 
                console.log("Incorrect moving forward input.")
        }
    }

    moveBackward() {
        //this.position.push(this.position); 

        switch(this.direction) {
            case "N":
                if (this.position[1] === 14) {
                    console.log("Cannot move more backward!");
                } else {
                    this.position[1]++;
                }
                break;
            case "S":
                if (this.position[1] === 0) {
                    console.log("Cannot move more backward!");
                } else {
                    this.position[1]--;
                }
            case "E":
                if (this.position[0] === 16) {
                    console.log("Cannot move more backward!");
                } else {
                    this.position[0]--;
                }
            case "W":
                if (this.position[0] === 0) {
                    console.log("Cannot move more backward!")
                } else {
                    this.position[0]++;
                }
            default: 
                console.log("Incorrect moving backward input.")
        }
        
    }

    // moveUp(person) {
    //     let topPosition = window.getComputedStyle(person).getPropertyValue('top')
    //     if (person.style.top === "0px") {
    //         return
    //     } else {
    //         let position = parseInt(topPosition)
    //         position -= 30
    //         person.style.top = `${position}px`
    //     }
    // }
    // moveDown(person) {
    //     let topPosition = window.getComputedStyle(person).getPropertyValue('top')
    //     if ((fromPxToNumber(person.style.top) + person.height) >= window.innerHeight) {
    //         return
    //     } else {
    //         let position = parseInt(topPosition)
        
    //         position += 30
    //         person.style.top = `${position}px`
    //     }
    // }

    render(){
        let $game = document.getElementById("frog-game")
        let $frogImg = document.createElement("img");
        $frogImg.setAttribute("class", "frog");
    
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

    
        $frogImg.style.left = `${(this.position[0] * (100/16)) - (200/16)}%`;
        $frogImg.style.top = `${(this.position[1] * (100/14)) - 200/14}%`;
    
        $game.appendChild($frogImg);
    }
        
}

let $frogImg = document.createElement("img");
