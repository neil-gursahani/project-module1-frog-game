class Turtles {
    constructor(position) {
        this.position = position;
        this.render();
    }

    animateSwimmingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 500)
    }

    animateSwimmingRight() {
        setInterval(()=> {
            this.position[0] += 1;
        }, 500)
    }

    render(){
        let $game = document.getElementById("frog-game")
        let $turtlesImg = document.createElement("img");
        $turtlesImg.setAttribute("class", "turtles");
        $turtlesImg.setAttribute("src", "../images/turtle-305209.svg");
        $turtlesImg.setAttribute("style", "color:blue;");
        $game.appendChild($turtlesImg);

        // $turtlesImg.style.left = `${this.position[0] * 10}%`;
        // $turtlesImg.style.top = `${this.position[1] * 10}%`;

    }
}