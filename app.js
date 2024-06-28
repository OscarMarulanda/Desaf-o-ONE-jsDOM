let boton = document.querySelector('h1')

boton.innerHTML = "Hora del Desafío"

function botonConsole(){
    console.log("El botón fue clickeado")
}

function brazil(){
    let ciudad = prompt("Ingresa el nombre de una ciudad en Brazil")
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

function amoJS(){
    alert("yo amo JS")
}

function sumaAB(){
    let numA = parseInt(prompt("ingrese el primer numero a ser sumado"));
    let numB = parseInt(prompt("ingrese el segundo numero a ser sumado"));

    alert(`la summa de ${numA} + ${numB} es ${numA + numB}`)
}