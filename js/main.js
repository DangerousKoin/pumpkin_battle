/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
document.getElementById('startButton').onclick = function(){
    console.log('i clicked start');
    renderPumpkins();
};
/*----- functions -----*/
function createGrids(){
    function createGarden(){
        document.getElementById('playerGarden').appendChild(div);
    }
}

function renderPumpkins(){
    console.log('rendering pumpkins...');
    let smPumpkin = "images/2x2Pumpkin.png";
    let mdPumpkin = "images/3x3Pumpkin.png";
    let lgPumpkin = "images/4x4Pumpkin.png";



    smallPumpkin('GA1', 'SP1');
    smallPumpkin('GC1', 'SP2');
    mediumPumpkin('GA8', 'MP1');
    mediumPumpkin('GD8', 'MP2');
    largePumpkin('GG1', 'LP1');

    function smallPumpkin(loc, num){
        let img = document.createElement('IMG');
        let div = document.createElement('DIV');
        div.style.zIndex = '2';
        div.style.width = '100px';
        div.style.height = '60px';
        div.style.margin = '-25px 0 0 0';
        img.src = smPumpkin;
        img.style.position = 'relative';
        img.id = num;
        img.class = 'pumpkin';
        div.appendChild(img);
        document.getElementById(loc).appendChild(div);
    }
    function mediumPumpkin(loc, num){
        let img = document.createElement('IMG');
        let div = document.createElement('DIV');
        div.style.zIndex = '2';
        div.style.width = '150px';
        div.style.height = '90px';
        div.style.margin = '-25px 0 0 0';
        img.src = mdPumpkin;
        img.style.position = 'relative';
        img.id = num;
        img.class = 'pumpkin';
        div.appendChild(img);
        document.getElementById(loc).appendChild(div);
    }
    function largePumpkin(loc, num){
        let img = document.createElement('IMG');
        let div = document.createElement('DIV');
        div.style.zIndex = '2';
        div.style.width = '200px';
        div.style.height = '120px';
        div.style.margin = '-25px 0 0 0';
        img.src = lgPumpkin;
        img.style.position = 'relative';
        img.id = num;
        img.class = 'pumpkin';
        div.appendChild(img);
        document.getElementById(loc).appendChild(div);
    }

}