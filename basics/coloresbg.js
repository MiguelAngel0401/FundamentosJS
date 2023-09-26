const body = document.querySelector('body');
const h2 = document.querySelector('h2');
function setColor(){
    const caracteres = '0123456789ABCDEF';
    let rgbcolor = '#';
    for (let i = 0; i < 6; i++){
        rgbcolor += caracteres.charAt(Math.floor(Math.random() * 16))
    }
    body.style.background= rgbcolor;
    h2.innerHTML = rgbcolor;
}

setColor();