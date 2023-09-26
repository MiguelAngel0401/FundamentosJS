const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo Saldra bien 😊'
            break;
        case 2:
            resp = 'Quiero vacaciones 😊'
            break;
        case 3:
            resp = 'Quiero comer 😊'
            break;
        case 4:
            resp = 'Quiero jugar 😊'
            break;
        case 5:
            resp = 'Quiero dormir 😊'
            break;
        case 6:
            resp = 'Quiero money money 😊'
            break;
        case 7:
            resp = 'Quiero mucha carne 😊'
            break;
            default:
                resp = 'No lo se 😢'
    }
    respuesta.innerHTML = resp;
}