/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function renderPumpkin(){
    let img = document.createElement('IMG');
    let loc = document.getElementById('GB2');
    img.setAttribute('src', '/home/koin/code/pumpkin_battle/images/2x2Pumpkin.png');
    document.body.appendChild(loc);

}

renderPumpkin();