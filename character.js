let currentCell = 0;
let clickedCell = 0
let done = true;
let pathSearch = simpleShortestPath;
let speed = 150;


function simpleShortestPath() {
    let src = currentCell;
    let dest = clickedCell;
    console.log("current cell: "+currentCell)
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

    updateCharacter("user", currentCell);
    setTimeout(simpleShortestPath, speed);
}

function go(dir) {
    done = false;
    switch(dir){
        case "right": currentCell += 1; break;
        case "left": currentCell -= 1; break;
        case "down": currentCell += cols; break;
        case "up": currentCell -= cols; break;
    }
    // update css top/left of character
}

function stop() {done = true;}

function updateCharacter (cId, dest){
    let character = document.getElementById(cId);
    let destCell = findCell(dest);
    character.style.top = (destCell.top + debugBorder) + "px";
    character.style.left = (destCell.left + debugBorder) + "px";

}

function initCharacter() {
    let character = document.createElement("div");
    let cImg = document.createElement("img");
    let helper = document.createElement("div");
    helper.setAttribute("class", "helper");
    cImg.setAttribute("src", "images/dog/dog_sleep.gif");
    character.append(helper);
    character.append(cImg);

    character.setAttribute("id", "user");
    character.setAttribute("class", "character");
    character.style.height = cellSize + "px";
    character.style.width = cellSize + "px";
    gb.append(character);

}



initCharacter();
updateCharacter("user", currentCell);