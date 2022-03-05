let light = 255;

function createGrid(number){
    let size = 500/number;


    let sqNum = (size.toString()+"px ").repeat(number) 

    let body = document.querySelector("body");

    let container = document.createElement("div");
    container.classList = "contain";
    
    container.style.display = "grid";
    container.style.gridTemplateColumns = sqNum;
    container.style.gridTemplateRows = sqNum;
    container.style.border = "1px solid black";

    for(let i=0; i < number**2; i++){
        let div = document.createElement("div");
        div.style.width = `${size}`;
        div.style.height = `${size}`;
        div.classList = "square";
        //div.addEventListener("mouseover", e => div.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
        div.addEventListener("mouseover", e => {

            div.style.backgroundColor = `rgb(${light.toString()},${light.toString()},${light.toString()})`;

            light-=15;

            console.log(div.style.backgroundColor);
        });

        

        container.appendChild(div);
    }

    body.appendChild(container);

    return number
}

let oldNumber = createGrid(16);

let clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", e => {

    let number = prompt("Number of squares per grid:");
    
    let body = document.querySelector("body");
    body.removeChild(document.querySelector(".contain"))

    oldNumber = createGrid(number||oldNumber);
    }
);