class Cars {
    constructor(position) {
        this.position = position;
        this.render();
    }

    animateDrivingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 500)
    }

    animateDrivingRight() {
        setInterval(()=> {
            this.position[0] += 1;
        }, 500)
    }

    render(){
        let $game = document.getElementById("frog-game")
        let $carsImg = document.createElement("img");
        $carsImg.style.left = `${this.position[0] * 10}%`;
        $carsImg.setAttribute("class", "cars");
        $carsImg.setAttribute("src", "../images/ford-mustang-146580.svg");
        $game.appendChild($carsImg);

        // $carsImg.style.left = `${this.position[0] * 10}%`;
        // $carsImg.style.top = `${this.position[1] * 10}%`;

    }
}