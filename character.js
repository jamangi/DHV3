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
    let hDist = Math.abs(src - dest)
    let vDist = Math.abs(src - dest)
    let dist = Math.max(hDist, vDist)

    if (srcCell.left < destCell.left)      //go right
        go("Right", dist)
    else if (srcCell.left > destCell.left) //go left
        go("Left", dist)
    else if (srcCell.top < destCell.top)   //go down
        go("Down", dist)
    else if (srcCell.top > destCell.top)   //go up
        go("Up", dist)

    updateCharacter(myName, currentCell);
    setTimeout(simpleShortestPath, speed);
}

function go(dir, dist) {
    done = false;
    switch(dir){
        case "Right": currentCell += 1; break;
        case "Left": currentCell -= 1; break;
        case "Down": currentCell += gameCols; break;
        case "Up": currentCell -= gameCols; break;
    }
    facing = dir;
    mode = "Run"
    
    // update css top/left of character
}

function stop() {done = true; mode = "Sit"; updateCharacter(myName, currentCell);}

function updateCharacter (char, dest){
    // let character = document.getElementById(char);
    let characterImg = document.getElementById(char + "Img");
    let destCell = findCell(dest);
    character.style.top = (destCell.top + (debugBorder * gameRow(dest))) + "px";
    character.style.left = (destCell.left + (debugBorder * gameCol(dest))) + "px";
    character.style.transition = "left "+speed+"ms linear, top "+speed+"ms linear;"
    if (lastMode !== (mode+facing))
        characterImg.setAttribute("src", "images/"+char+"/"+char+mode+facing+".gif")
    lastMode = mode+facing;

}

function initCharacter(char) {
    character = document.createElement("div");
    let cImg = document.createElement("img");
    let helper = document.createElement("div");
    helper.setAttribute("class", "helper");
    cImg.setAttribute("src", "images/"+char+"/"+char+mode+facing+".gif");
    cImg.setAttribute("id", char+"Img")
    character.append(helper);
    character.append(cImg);

    character.setAttribute("id", char);
    character.setAttribute("class", "character");
    character.style.height = cellSize + "px";
    character.style.width = cellSize + "px";
    map.append(character);
    updateCharacter(myName, currentCell);

}

function clearCharacter(char){
    character = document.getElementById(char);
    parent = character.parentNode;
    parent.removeChild(character);
    // initCharacter(char);
}
