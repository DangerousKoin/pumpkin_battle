/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
document.getElementById('startButton').onclick = function(){
    console.log('i clicked start');
    renderPumpkin();
};
/*----- functions -----*/
function renderPumpkin(){
    console.log('rendering pumpkin...');
    let img = document.createElement('IMG');
    let node = document.createElement('DIV').style.zIndex = '2';
    
    img.src = "images/dirt.svg";
    
    node.appendChild.img;
    document.getElementById('GA1').appendChild(node);
}