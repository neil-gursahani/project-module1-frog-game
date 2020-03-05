class Logs {
    constructor(position) {
        this.position = position;
        this.render();
        this.animateFloatingLeft();
    }

    animateFloatingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 500)
    }

    // animateFloatingRight() {
    //     setInterval(()=> {
    //         this.position[0] += 1;
    //     }, 500)
    // }

    render(){
        let $game = document.getElementById("frog-game")
        let $logsImg1 = document.createElement("img");
        let $logsImg2 = document.createElement("img");

        $logsImg1.setAttribute("class", "logs1");
        $logsImg2.setAttribute("class", "logs2");


        $logsImg1.setAttribute("src", "../images/firewood-2024457.svg");
        $logsImg2.setAttribute("src", "../images/firewood-2024457.svg");

        $logsImg1.style.left = `${this.position[0] * 10}%`;
        $logsImg2.style.left = `${this.position[0] * 10}%`;

        $logsImg1.style.top = `30%`;
        $logsImg2.style.top = `15%`;

        $logsImg1.style.width = `12%`;
        $logsImg2.style.width = `12%`;

        $game.appendChild($logsImg1);
        $game.appendChild($logsImg2);


        // $logsImg.style.left = `${this.position[0] * 10}%`;
        // $logsImg.style.top = `${this.position[1] * 10}%`;

    }
}