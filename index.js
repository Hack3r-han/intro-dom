function change() {
    // let colorBlue = document.querySelector('.redSquare').style.backgroundColor = "blue";
    // let shapeRectangle = document.querySelector('.redSquare').style.width = "200px";

    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.margin = ".5%";

    document.querySelector(".redSquare").appendChild(div);
}
