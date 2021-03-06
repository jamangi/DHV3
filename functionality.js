function initGrid() {
    // fill the gamebox with divs

    gb = document.getElementById('gamebox');
    gbheight = gb.offsetHeight;
    gbwidth = gb.offsetWidth;
    shortest = gbheight < gbwidth? gbheight : gbwidth;

    // cellsize is a fraction of shortest dimension
    cellSize = (shortest / fraction);

    // calculate amount of expected cells
    gameCols = Math.floor(gbwidth / (cellSize + debugBorder));
    let gameColsRemainder = gbwidth % gameCols;
    gameRows = Math.floor(gbheight / (cellSize + debugBorder));
    let gameRowsRemainder = gbheight % gameRows;
    cellCount = gameCols * gameRows;

    for (let id = 0; id < cellCount; id++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", id);
        cell.addEventListener("click", cellClick);
        cell.style.height = cellSize + (gameRowsRemainder / gameRows) + "px";
        cell.style.width = cellSize + (gameColsRemainder / gameCols) + "px";
        gb.appendChild(cell);
    }

    // for (let row = 0; row < rows; row++){
    //     for (let col = 0; col < cols; col++){
    //         let cell = document.createElement("div");
    //         cell.setAttribute("class", "cell");
    //         cell.setAttribute("id", row * cols + col);
    //         cell.addEventListener("click", cellClick);
    //         cell.style.height = cellSize + "px";
    //         cell.style.width = cellSize + "px";
    //         cell.style.left = col * cellSize + "px";
    //         cell.style.top = row * cellSize + "px";
    //     }
    // }
}

function clearGrid() {
    // dispose of gamebox element

    let gb_parent = gb.parentNode;
    gb_parent.removeChild(gb);

    gb = document.createElement("article");
    gb.setAttribute("id", "gamebox");
    gb_parent.appendChild(gb);
    clearCharacter("titan");
}

function cellClick() {
    console.log(this.id);
    clickedCell = this.id;
    if (done === true)
        pathSearch(this.id);
}

function findCell(id){
    let col = id % gameCols;
    let row = Math.floor(id / gameCols);

    return {left: col * cellSize, top: row * cellSize};
}



window.onresize = function(event) {
    // clearGrid()
    clearAll();
    initMap();
    initGrid();
    initMapTiles("brownfloor_2_2.png");
    initCharacter(myName);
}
