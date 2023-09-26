// Funciones de Orden Superior 
// High Order Functions
/* 
   Funciones que reciben funciones
   como parametros
*/

const myFunction = () => {
    console.log('Ejecuta Mi Funcion');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta Funcion One');
}

const funTwo = (username) => {
    console.log('Ejecuta Funcion Two');
    console.log('Hola' + username);
}

const funThree = (otherFunction) =>{
    console.log('Indica Funcion 3')
    otherFunction();
    console.log('Termina funcion 3')
}

funOne();
funTwo(' Miguel');
funTwo(' Clark Kent');
funThree(funOne);
funThree(() => console.log('Sorry una Arrow Function'));
