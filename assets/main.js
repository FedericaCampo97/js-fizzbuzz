//collego l'id
let element = document.getElementById ('number');

//Creo un ciclo
for (let i = 1; i < 11; i++) {
    //Verifico se i numeri sono multipli di 3 e di 5
    if (Number.isInteger(i/3) && (i/5)) {
        console.log(i);
    } else {
        console.log(i)
    }
    if (Number.isInteger(i/3)) {
        console.log('Fizz');
    } else {
        console.log(i)
    }
    if (Number.isInteger(i/5)) {
        console.log('Buzz');
    } else {
        console.log(i)
    }
}