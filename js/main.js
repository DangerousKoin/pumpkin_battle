/*----- constants -----*/
const letters = 'ABCDEFGHIJ'.split('');
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
document.getElementById('startButton').onclick = function(){
    console.log('i clicked start');
    renderGrids();
    renderPumpkins();
    // renderBat('FE4', 'LR', 'FBat1');
    // renderBat('FC8', 'UD', 'FBat2');
    // damagePumpkin('GG3', 'UD', 'GBat1');
};
/*----- functions -----*/
function renderGrids(){
    renderGarden();
    renderFence();
    function renderGarden(){
        for (row = 0; row < 10;){
            letters.forEach(createDiv);
            function createDiv(ltr, idx){
                let div = document.createElement('DIV');
                div.style.width = '100%';
                div.class = 'dirt';
                div.style.backgroundColor = '#6F532A';
                div.style.backgroundImage = "url('./images/1x1Dirt.png')";
                div.style.backgroundSize = '100%';
                if (idx === 0){row++;};
                div.id = 'G' + ltr + row;
                div.textContent = ltr + row;
                document.getElementById('playerGarden').appendChild(div);
            }
        }
        
    }
    function renderFence(){
        for (row = 0; row < 10;){
            letters.forEach(createDiv);
            function createDiv(ltr, idx){
                let div = document.createElement('DIV');
                div.style.width = '100%';
                div.class = 'dirt';
                div.style.backgroundColor = '#a77b39';
                div.style.backgroundImage = "url('./images/1x1Fence.png')";
                div.style.backgroundSize = '100%';
                if (idx === 0){row++;};
                div.id = 'F' + ltr + row;
                div.textContent = ltr + row;
                document.getElementById('battlePlan').appendChild(div);
            }
        }
        
    }
}
function renderBat(loc, dir, num){
    console.log('rendering bat...')
    let img = document.createElement('IMG');
    let div = document.createElement('DIV');
    if (dir === 'UD'){
        div.style.transform = 'rotate(90deg)';
        div.style.width = '30px';
        div.style.height = '150px';
        div.style.margin = '-85px 0 0 -45px';
        img.style.height = '40px';
        img.style.width = '90px';
    }else{
        div.style.width = '150px';
        div.style.height = '30px';
        div.style.margin = '-25px 0 0 0';
    }
    div.style.zIndex = '3';
    img.src = 'images/1x3Bat.png';
    img.style.position = 'relative';
    img.id = num;
    img.class = 'bat';
    div.appendChild(img);
    document.getElementById(loc).appendChild(div);
}
function renderPumpkins(){
    console.log('rendering pumpkins...');
    let smPumpkin = 'images/2x2Pumpkin.png';
    let mdPumpkin = 'images/3x3Pumpkin.png';
    let lgPumpkin = 'images/4x4Pumpkin.png';

    smallPumpkin('GA1', 'SPum1');
    smallPumpkin('GC1', 'SPum2');
    mediumPumpkin('GA8', 'MPum1');
    mediumPumpkin('GD8', 'MPum2');
    largePumpkin('GG1', 'LPum1');

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
function damagePumpkin(loc, dir, num){
    console.log('damaging pumpkin...')
    let img = document.createElement('IMG');
    let div = document.createElement('DIV');
    if (dir === 'UD'){
        div.style.width = '30px';
        div.style.height = '150px';
        div.style.margin = '-85px 0 0 -50px';
    }else{
        div.style.width = '150px';
        div.style.height = '30px';
        div.style.margin = '-25px 0 0 0';
    }
    div.style.zIndex = '5';
    img.src = 'images/1x1Dirt.png';
    img.style.position = 'relative';
    img.id = num;
    img.class = 'damage';
    div.appendChild(img);
    document.getElementById(loc).appendChild(div);
}