let currentCell = 0;
let pathSearch = simpleShortestPath;


function simpleShortestPath(dest) {
    let src = currentCell;
    console.log("current cell: "+currentCell)
    console.log("dest cell: "+dest)
    if (src == dest){
        stop();
        return;
    }

    let srcCell = findCell(src); // returns coordinates of cell
    let destCell = findCell(dest);

    if (srcCell.left < destCell.left)      //go right
        go("right")
    else if (srcCell.left > destCell.left) //go left
        go("left")
    else if (srcCell.top < destCell.top)   //go down
        go("down")
    else if (srcCell.top > destCell.top)   //go up
        go("up")
    simpleShortestPath(dest);
}

function go(dir) {
    switch(dir){
        case "right": currentCell += 1; break;
        case "left": currentCell -= 1; break;
        case "down": currentCell += cols; break;
        case "up": currentCell -= cols; break;
    }
}

function stop() {}