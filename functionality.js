let gb = document.getElementById('gamebox');
let gbheight = gb.offsetHeight;
let gbwidth = gb.offsetWidth;
let shortest = gbheight < gbwidth? gbheight : gbwidth;

// cellsize is a fraction of shortest dimension
let cellSize = Math.floor(shortest / 10) - 2;

// calculate amount of expected cells
let cols = Math.floor(gbwidth / cellSize);
let rows = Math.floor(gbheight / cellSize);
let cellCount = cols * rows;

function initGrid() {
    // fill the gamebox with divs

    gb = document.getElementById('gamebox');
    gbheight = gb.offsetHeight;
    gbwidth = gb.offsetWidth;
    shortest = gbheight < gbwidth? gbheight : gbwidth;

    // cellsize is a fraction of shortest dimension
    cellSize = Math.floor(shortest / 10) - 2;

    // calculate amount of expected cells
    cols = Math.floor(gbwidth / cellSize);
    rows = Math.floor(gbheight / cellSize);
    cellCount = cols * rows;

    for (let id = 0; id < cellCount; id++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("id", id);
        cell.addEventListener("click", cellClick);
        cell.style.height = cellSize + "px";
        cell.style.width = cellSize + "px";
        gb.appendChild(cell);
    }

    for (let row = 0; row < rows; row++){
        for (let col = 0; col < cols; col++){
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.setAttribute("id", row * cols + col);
            cell.addEventListener("click", cellClick);
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";
            cell.style.left = col * cellSize + "px";
            cell.style.top = row * cellSize + "px";
        }
    }
}

function clearGrid() {
    // dispose of gamebox element

    let gb_parent = gb.parentNode;
    gb_parent.removeChild(gb);

    gb = document.createElement("article");
    gb.setAttribute("id", "gamebox");
    gb_parent.appendChild(gb);
}

function cellClick() {
    console.log(this.id);
    pathSearch(this.id);
}

function findCell(id){
    let col = id % cols;
    let row = Math.floor(id / cols);

    return {left: col * cellSize, top: row * cellSize};
}


window.onresize = function(event) {
    self.clearGrid()
    self.initGrid()
}
initGrid();