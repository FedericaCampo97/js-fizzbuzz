//collego l'id
let element = document.getElementById ('number');

//Creo un ciclo
for (let i = 1; i < 101; i++) {
    //Verifico se i numeri sono multipli di 3 e di 5
    const div = document.querySelector("div.square")
    let element = document.createElement('div');
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
        console.log('BuzzFizz');
        element.innerHTML = 'BuzzFizz'
        element.style.background = "red";
        div.append(element)

    //Altrimenti se è divisibile per 3
    } else if (Number.isInteger(i/3)) {
        console.log('Fizz');
        element.innerHTML = 'Fizz'
        element.style.background = "yellow"
        div.append(element)
    //Altrimenti se è divisibile per 5
    } else if (Number.isInteger(i/5)) {
        console.log('Buzz');
        element.innerHTML = 'Buzz'
        element.style.background = "orange"
        div.append(element)
    //Altrimenti
    } else {
        console.log (i)
        element.innerHTML = i
        div.append(element)

    }

    
}

