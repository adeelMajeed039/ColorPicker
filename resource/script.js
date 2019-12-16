
var squaress = [];

const display_codecontent = document.getElementById('displaycode'); 
const textcode = document.getElementById('textcode'); 
const colorcodehex = document.getElementById('hexcode');  
const colordisplay = document.getElementById('colorcode');
function getSize()
{
    const h = document.documentElement.clientHeight;
    const w = document.querySelector('.color-display').clientWidth;
    return {
            width: w,
            heigth: h
            };
}
function generateDivs(){
    const wh = getSize();
    const getWidth = wh.width;
    const getHeigth = wh.heigth;
    const width = document.querySelector('.color').offsetWidth;
    const height = document.querySelector('.color').clientHeight;   
    const par = document.getElementById('colors-display');
    par.innerHTML='';
    const newwidth = Math.floor(getWidth/width);
    const newheight = Math.floor(getHeigth/height);
    // console.log(newwidth);
    // console.log(newheight);
    for(let j = 1; j<=newheight - 1; j++){

        for(let i = 0; i <= newwidth - 1 ; i++){

            const setsquares = document.createElement ('div');
            setsquares.className = "color";
            par.appendChild(setsquares);
            setsquares.style.backgroundColor = randomColor();
            squaress.push([setsquares]);

        }
        // console.log(squaress);
    }
    gethovervalue();
}
// for (let i =0;i<squaress.length;i++){
    // console.log(squaress);
// }
function gethovervalue(){
const hoveritems = Array.from(document.querySelectorAll('.color'));
// console.log(hoveritems[3]);
// console.log(hoveritems);
hoveritems.forEach(hoveritems => {
    hoveritems.addEventListener('mouseenter',()=>{
        // console.log('ss');
        console.log(hoveritems.style.backgroundColor);
        document.getElementById('displaycode').style.visibility="visible";        

        document.getElementById('displaycode').style.background = hoveritems.style.backgroudColor;
        console.log(display_codecontent);
        colordisplay.style.background = hoveritems.style.backgroundColor;
        textcode.textContent = hoveritems.style.backgroundColor;
        textcode.style.background = hoveritems.style.backgroundColor;        
        colorcodehex.style.background = hoveritems.style.backgroundColor;

        // colorcodehex.textContent = hoveritems.style.backgroundColor.textContent.toString();
    })
    hoveritems.addEventListener('mouseleave', ()=>{
        document.getElementById('displaycode').style.visibility="hidden";
    })
})
}

function randomColor(){
	//pick a "red" from 0 - 255
    const r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
    const g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
    const b = Math.floor(Math.random() * 256);
    
    // rgbToHex(r, g, b);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}