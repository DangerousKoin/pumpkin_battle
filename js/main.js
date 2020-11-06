/*----- constants -----*/
const letters = 'ABCDEFGHIJ'.split('');
/*----- app's state (variables) -----*/
let selectedItem = 'smPum1';
/*----- cached element references -----*/
const startBtn = document.getElementById('startButton');
const introScn = document.getElementById('introScreen');
const gdnRdyBtn = document.getElementById('gardenReady');

/*----- event listeners -----*/
startBtn.onclick = function(){
    init();
    introScn.remove();
    startBtn.remove();
    // renderDamage('GA1', 'UD', 'DMG1');
    // renderDamage('GB1', 'LR', 'DMG2');
};
gdnRdyBtn.onclick = function(){
    renderBat('FD4', 'LR', 'fbat1');
}
window.onclick = function(e) {
    if (e.target.id === 'imgsmPum1'){
        selectedItem = 'smPum1';
    } else if (e.target.id === 'imgsmPum2'){
        selectedItem = 'smPum2';
    } else if (e.target.id === 'imgmdPum1'){
        selectedItem = 'mdPum1';
    } else if (e.target.id === 'imgmdPum2'){
        selectedItem = 'mdPum2';
    } else if (e.target.id === 'imglgPum1'){
        selectedItem = 'lgPum1';
    }else if (e.target.id === 'imgfbat1'){
        selectedItem = 'fbat1';
    }
    dragElement(document.getElementById(selectedItem));
}
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/*----- functions -----*/
function init(){
    renderGrids();
    renderPumpkins();
    gdnRdyBtn.style.display = 'block';
    // renderBat('FD4', 'LR', 'fbat1');
}
function renderGrids(){
    let mainDiv1 = document.getElementById('battlePlan');
    let mainDiv2 = document.getElementById('playerGarden');
    mainDiv1.style.width = '500px';
    mainDiv1.style.height = '300px';
    mainDiv2.style.width = '500px';
    mainDiv2.style.height = '300px';
    renderGarden();
    renderFence();
    function renderGarden(){
        for (row = 0; row < 10;){
            letters.forEach(createDiv);
            function createDiv(ltr, idx){
                let div = document.createElement('DIV');
                div.style.width = '48px';
                div.style.height = '28px';
                div.class = 'dirt';
                div.style.backgroundColor = '#6F532A';
                div.style.backgroundImage = "url('./images/1x1Dirt.png')";
                div.style.backgroundSize = '100%';
                div.style.border = '1px solid rgba(255,255,255,25%';
                if (idx === 0){row++;};
                div.id = 'G' + ltr + row;
                document.getElementById('playerGarden').appendChild(div);

                let divText = document.createElement('DIV');
                divText.style.width = '50px';
                divText.style.height = '20px';
                divText.textContent = ltr + row;
                divText.style.margin = '5px 0';
                divText.style.display = 'relative';
                divText.style.textAlign = 'center';
                div.appendChild(divText);
            }
        }
        
    }
    function renderFence(){
        for (row = 0; row < 10;){
            letters.forEach(createDiv);
            function createDiv(ltr, idx){
                let div = document.createElement('DIV');
                let divText = document.createElement('DIV');
                div.style.width = '48px';
                div.style.height = '28px';
                div.class = 'dirt';
                div.style.backgroundColor = '#a77b39';
                div.style.backgroundImage = "url('./images/1x1Fence.png')";
                div.style.backgroundSize = '100%';
                div.style.border = '1px solid rgba(200,200,200,25%';
                if (idx === 0){row++;};
                div.id = 'F' + ltr + row;
                document.getElementById('battlePlan').appendChild(div);

                divText.style.width = '50px';
                divText.style.height = '20px';
                divText.textContent = ltr + row;
                divText.style.margin = '5px 0';
                divText.style.display = 'relative';
                divText.style.textAlign = 'center';
                div.appendChild(divText);
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
        // div.style.margin = '-91px 0 0 -45px';
        img.style.height = '40px';
        img.style.width = '90px';
    }else{
        div.style.width = '150px';
        div.style.height = '30px';
        // div.style.margin = '-31px 0 0 0';
    }
    div.style.zIndex = '4';
    div.style.position = 'absolute';
    div.style.cursor = 'move';
    div.id = num;
    img.style.zIndex = '3';
    img.style.position = 'relative';
    img.style.cursor = 'move';
    img.style.border = '1px solid rgba(255,0,255,100%)';
    img.src = 'images/1x3Bat.png';
    img.id = 'img' + num;
    img.class = 'bat';
    div.appendChild(img);
    document.getElementById(loc).appendChild(div);
}
function renderPumpkins(){
    console.log('rendering pumpkins...');
    let smPumpkin = 'images/2x2Pumpkin.png';
    let mdPumpkin = 'images/3x3Pumpkin.png';
    let lgPumpkin = 'images/4x4Pumpkin.png';

    smallPumpkin('GA1', 'smPum1');
    smallPumpkin('GC1', 'smPum2');
    mediumPumpkin('GA8', 'mdPum1');
    mediumPumpkin('GD8', 'mdPum2');
    largePumpkin('GG1', 'lgPum1');

    function smallPumpkin(loc, num){
        let img = document.createElement('IMG');
        let div = document.createElement('DIV');
        div.style.zIndex = '2';
        div.style.width = '100px';
        div.style.height = '60px';
        // div.style.margin = '-31px 0 0 0';
        div.style.position = 'absolute';
        // div.style.marginTop = "-30px";
        div.id = num;
        img.src = smPumpkin;
        img.style.position = 'relative';
        img.style.cursor = 'move';
        img.style.border = '1px solid rgba(0,255,0,100%)';
        img.id = 'img' + num;
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
        // div.style.margin = '-31px 0 0 0';
        div.style.position = 'absolute';
        // div.style.marginTop = "-30px";
        div.id = num;
        img.src = mdPumpkin;
        img.style.position = 'relative';
        img.style.cursor = 'move';
        img.style.border = '1px solid rgba(0,255,0,100%)';
        img.id = 'img' + num;
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
        // div.style.margin = '-31px 0 0 0';
        div.style.position = 'absolute';
        // div.style.marginTop = "-30px";
        div.id = num;
        img.src = lgPumpkin;
        img.style.position = 'relative';
        img.style.cursor = 'move';
        img.style.border = '1px solid rgba(0,255,0,100%)';
        img.id = 'img' + num;
        img.class = 'pumpkin';
        div.appendChild(img);
        document.getElementById(loc).appendChild(div);
    }

}
function renderDamage(loc, dir, num){
    console.log('damaging pumpkin...')
    let img = document.createElement('IMG');
    let div = document.createElement('DIV');
    if (dir === 'UD'){
        div.style.width = '48px';
        div.style.height = '88px';
        div.style.margin = '-31px 0 0 -1px';
        img.src = 'images/1x3Damage.png';
        img.style.width = '48px';
        img.style.height = '88px';
    }else{
        div.style.width = '148px';
        div.style.height = '28px';
        div.style.margin = '-31px 0 0 -1px';
        img.src = 'images/3x1Damage.png';
        img.style.width = '148px';
        img.style.height = '28px';
    }
    div.style.zIndex = '6';
    div.style.position = 'relative';
    div.class = 'damage';
    img.style.border = '1px solid rgba(255,0,0,100%';
    img.style.zIndex = '5';
    img.style.position = 'relative';
    img.id = num;
    div.appendChild(img);
    document.getElementById(loc).appendChild(div);
}