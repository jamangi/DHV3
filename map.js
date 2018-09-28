let mapSize = [1000, 1000]
let mapRows = mapSize[1];
let mapCols = mapSize[0];
let origin = [0, 0]
let map = document.getElementById("map")




function createObject(folder, name, size, mapCell){
    let obj = document.createElement("div");
    obj.style.width = (size[0] * cellSize + debugBorder) + "px";
    obj.style.height = (size[1] * cellSize + debugBorder) + "px";
    obj.style.position = "absolute";
    obj.setAttribute("class", "object mapTile");
    obj.mapCell = mapCell;
    setMapPosition(obj);

    // let helper = document.createElement("div");
    // helper.setAttribute("class", "helper")


    let img = document.createElement("img");
    img.setAttribute("src", "images/"+folder+"/"+name);


    obj.append(img);
    // obj.append(helper);
    map.append(obj);
}


function setMapPosition(obj) {
    let coordinates = findMapCoordinates(obj.mapCell);
    obj.style.left = origin[0] + coordinates.left;
    obj.style.top = origin[0] + coordinates.top;
}

function findMapCoordinates(mapCell) {
    let col = mapCell % mapSize[0];
    let row = mapCell / mapSize[0];
    return {left: col * cellSize, top: row * cellSize};
}


function gameCellToMapCell(id) {
    return findMapCell(mapRow(gameRow(id)), mapCol(gameCol(id)));
}

function findMapCell(mapRow, mapCol){return (mapCols * mapRow) + mapCol;}
function mapRow(gameRow){return origin[1] + gameRow;}
function mapCol(gameCol){return origin[0] + gameCol;}
function gameRow(id) {return Math.floor(id / gameCols);}
function gameCol(id) {return id % gameCols;}

createObject("map/floor", "brownfloor_2_2.png", [2,2], 0);

