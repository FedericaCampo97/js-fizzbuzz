//collego l'id
let element = document.getElementById ('number');

//Creo un ciclo
for (let i = 1; i < 101; i++) {
    //Verifico se i numeri sono multipli di 3 e di 5
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
        console.log('Buzz-Fizz');
    //Altrimenti se è divisibile per 3
    } else if (Number.isInteger(i/3)) {
        console.log('Fizz');
    //Altrimenti se è divisibile per 5
    } else if (Number.isInteger(i/5)) {
        console.log('Buzz');
    //Altrimenti
    } else {
        console.log (i)
    }
}