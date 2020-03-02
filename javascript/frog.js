class Frog {
    constructor(startingPosition) {
        this.direction = "N";
        this.travelLog = [];
        this.position = startingPosition;
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
        this.travelLog.push(this.position); 

        switch(this.direction) {
            case "N":
                if (this.travelLog[1] === 0) {
                    console.log("Cannot move more forward!");
                } else {
                    this.travelLog[1]--;
                }
                break;
            case "S":
                if (this.travelLog[1] === 14) {
                    console.log("Cannot move more forward!");
                } else {
                    this.travelLog[1]++;
                }
            case "E":
                if (this.travelLog[0] === 0) {
                    console.log("Cannot move more forward!");
                } else {
                    this.travelLog[0]--;
                }
            case "W":
                if (this.travelLog[0] === 16) {
                    console.log("Cannot move more forward!")
                } else {
                    this.travelLog[0]++;
                }
            default: 
                console.log("Incorrect moving forward input.")
        }
    }

    moveBackward() {
        this.travelLog.push(this.position); 

        switch(this.direction) {
            case "N":
                if (this.travelLog[1] === 14) {
                    console.log("Cannot move more backward!");
                } else {
                    this.travelLog[1]++;
                }
                break;
            case "S":
                if (this.travelLog[1] === 0) {
                    console.log("Cannot move more backward!");
                } else {
                    this.travelLog[1]--;
                }
            case "E":
                if (this.travelLog[0] === 16) {
                    console.log("Cannot move more backward!");
                } else {
                    this.travelLog[0]++;
                }
            case "W":
                if (this.travelLog[0] === 0) {
                    console.log("Cannot move more backward!")
                } else {
                    this.travelLog[0]--;
                }
            default: 
                console.log("Incorrect moving backward input.")
        }
    }

    // instructFrog (listOfCommands) {
    //     for (let i = 0; i < listOfCommands.length; i++) {
    //         switch(listOfCommands[i]) {
    //             case "l":
    //                 this.turnLeft();
    //                 break;
    //             case "r":
    //                 this.turnRight();
    //                 breakl
    //             case "f":
    //                 this.moveForward();
    //                 break;
    //             case "b":
    //                 this.moveBackward();
    //                 break;
    //             default: 
    //                 console.log("Wrong command!")
    //         }
    //     }
    // }

    // outOfBounds(){
    //     if(this.position[1] === 0 && this.direction === "N") {
    //         console.log("Don't make me do this!");
    //     } 
    //     else if(this.position[0] === 0 && this.direction === "W") {
    //         console.log("Don't make me do this!");
    //     } 
    //     else if(this.position[1] === 9 && this.position === "S") {
    //         console.log("Don't make me do this!");
    //     }
    //     else if(this.position[0] === 9 && this.direction === "E") {
    //         console.log("Don't make me do this!");
    //     }  else {
    //         return false
    //     }
    // }
        
        
}
