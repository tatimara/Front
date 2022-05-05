var si = true; //Primera entrada
var sum = true; //Suma-resta
let resultado = 0;
var avanza;
var parar;

const suma = () => {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    a = parseInt(a);
    b = parseInt(b);
    if (si){
        resultado = a + b;
        si = false;
    } else {
        resultado = resultado + b;
    }
    document.getElementById('contador').innerHTML = resultado;
    sum = true;
}


const resta = () => {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    a = parseInt(a);
    b = parseInt(b);
    if (si) {
        resultado = a - b;
        si = false;
    } else {
        resultado = resultado - b;
    }
    document.getElementById('contador').innerHTML = resultado;
    sum = false;
}

const reset = () => {
    resultado = 0;
    document.getElementById('contador').innerHTML = 0;
}

const start = () => {
    if (sum){
        avanza = setInterval('suma()',1000);
    } else {
        avanza = setInterval(('resta()',1000));
    }
    avanza;
}

const pausa = () => {
    parar = clearInterval(avanza);
    parar;
}



