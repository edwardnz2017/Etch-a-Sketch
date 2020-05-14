const gridDiv = document.querySelector(".parent");

function makeGrid() {
    clearText();
    const x = prompt("How big should we make the grid? (1-100) ");
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < x; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", function () {
                box.style.backgroundColor = "black";
            });
            let boxWidth = (600/x) + "px";
            let boxHeight = (600/x) + "px";
            box.style.minHeight = boxHeight;
            box.style.minWidth = boxWidth;
            row.appendChild(box);
        }
        gridDiv.appendChild(row);
    }
}

function clearText() { 
    gridDiv.textContent = "";
};

makeGrid();