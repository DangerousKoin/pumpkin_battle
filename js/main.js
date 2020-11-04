/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
document.getElementById('startButton').onclick = function(){
    console.log('i clicked start');
    renderPumpkin();
};
/*----- functions -----*/
function createGrids(){
    function createGarden(){
        document.getElementById('playerGarden').appendChild(div);
    }
}

function renderPumpkin(){
    console.log('rendering pumpkin...');
    let img = document.createElement('IMG');
    let div = document.createElement('DIV');
    div.style.zIndex = '2';
    img.src = "images/2x2Pumpkin.png";
    img.style.position = 'absolute';
    div.appendChild(img);
    document.getElementById('GA1').appendChild(div);
}