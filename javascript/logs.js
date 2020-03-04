class Logs {
    constructor(position) {
        this.position = position;
        this.render();
    }

    animateFloatingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 500)
    }

    animateFloatingRight() {
        setInterval(()=> {
            this.position[0] += 1;
        }, 500)
    }

    render(){
        let $game = document.getElementById("frog-game")
        let $logsImg = document.createElement("img");
        $logsImg.setAttribute("class", "logs");
        $logsImg.setAttribute("src", "../images/firewood-2024457.svg");
        $game.appendChild($logsImg);

        // $logsImg.style.left = `${this.position[0] * 10}%`;
        // $logsImg.style.top = `${this.position[1] * 10}%`;

    }
}