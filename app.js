let cal = document.getElementById('calcular');
let resp = document.getElementById('respuesta');

cal.addEventListener('click', perfectos);

function perfectos() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    if (n1 <= 0) {
        resp.innerHTML = 'El primer numero debe ser mayor a 0.';
    }else if(n2 <=n1){
        resp.innerHTML = 'El numero debe ser mayor a el primer numero.';
    }
    let cont=0;
    for (let i = n1; i <= n2; i++) {
        if (n2 % i == 0) {
            cont+=i;
        }
        resp.innerHTML = cont;
    }
    //let r = n1 + n2;
    //resp.innerHTML = 'Los numeros perfectos son: ' + r;
    //resp.innerHTML = 'Los numeros perfectos son: ' + n1;
}