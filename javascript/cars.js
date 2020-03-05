class Cars {
    constructor(position) {
        this.position = position;
        this.render();
        this.animateDrivingLeft();
    }

    animateDrivingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 600)
    }

    // animateDrivingRight() {
    //     setInterval(()=> {
    //         this.position[0] += 1;
    //     }, 500)
    // }

    render(){
        let $game = document.getElementById("frog-game")
        let $carsImg = document.createElement("img");
        let $carsImg2 = document.createElement("img");
        let $carsImg3 = document.createElement("img");
        
        $carsImg.setAttribute("class", "cars1");
        $carsImg.setAttribute("id", "cars-id");
        $carsImg2.setAttribute("class", "cars2");
        $carsImg3.setAttribute("class", "cars3");

        $carsImg.setAttribute("src", "../images/ford-mustang-146580_640.png");
        $carsImg2.setAttribute("src", "../images/ford-mustang-146580_640.png");
        $carsImg3.setAttribute("src", "../images/ford-mustang-146580_640.png");

        $carsImg.style.left = `${this.position[0] * 10}%`;
        $carsImg2.style.left = `${this.position[0] * 10}%`;
        $carsImg3.style.left = `${this.position[0] * 10}%`;

        $carsImg.style.top = `78%`;
        $carsImg2.style.top = `68%`;
        $carsImg3.style.top = `58%`;

        $carsImg.style.width = `10%`;
        $carsImg2.style.width = `10%`;
        $carsImg3.style.width = `10%`;
        
        
        $game.appendChild($carsImg);
        $game.appendChild($carsImg2);
        $game.appendChild($carsImg3);


    }
}

