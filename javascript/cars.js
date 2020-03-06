class Cars {
    constructor(position) {
        this.position = position;
        this.render();
        // this.reRender();
        this.animateDrivingLeft();
    }

    animateDrivingLeft() {
        setInterval(()=> {
            this.position[0] -= 1;
        }, 400)
    }

    render(){
        let $game = document.getElementById("frog-game")
        let $carsImg = document.createElement("img");
        let $carsImg2 = document.createElement("img");
        let $carsImg3 = document.createElement("img");
        
        $carsImg.setAttribute("class", "cars cars1");
        $carsImg.setAttribute("id", "cars-id");
        $carsImg2.setAttribute("class", "cars cars2");
        $carsImg3.setAttribute("class", "cars cars3");

        $carsImg.setAttribute("src", "./images/ford-mustang-146580_640.png");
        $carsImg2.setAttribute("src", "./images/automobile-1299695_640.png");
        $carsImg3.setAttribute("src", "./images/cadillac.png");

        $carsImg.style.left = `${this.position[0] * 10}%`;
        $carsImg2.style.right = `${this.position[0] * 10}%`;
        $carsImg3.style.left = `${this.position[0] * 10}%`;

        $carsImg.style.top = `76%`;
        $carsImg2.style.top = `63%`;
        $carsImg3.style.top = `50%`;

        $carsImg.style.width = `12%`;
        $carsImg2.style.width = `12%`;
        $carsImg3.style.width = `12%`;

        $game.appendChild($carsImg);
        $game.appendChild($carsImg2);
        $game.appendChild($carsImg3);
    }

    reRender() {
        this.renderReferenceRepeated = setInterval(()=> {
           this.render();
        }, 400)
    }


}

