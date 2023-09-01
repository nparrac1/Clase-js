/* console.log("Hola Mundo");

$(document).ready(function(){
    alert("Hello, World!");
}); */

/* function hola(){
    alert("Hola mundo en js");
} */

/* function verde(){
    document.getElementsByClassName("verde")[0].style.backgroundColor ="green";
}

function azul(){
    document.getElementById("azul").style.backgroundColor="blue";
    
}

function reset(){
    document.getElementById("azul").style.backgroundColor="red";
    
} */


/* function girar(){
    document.getElementsByClassName('verde')[0].style.animation = 'fading 4s infinite';
    
} */


function sumar(){
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var resultado = Number(numero1) + Number(numero2)
    console.log("El resultado de la suma es: " + resultado)
}

function restar(){
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var resultado = Number(numero1) - Number(numero2)
    console.log("El resultado de la resta es: " + resultado)
}
function divi(){
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var resultado = Number(numero1) / Number(numero2)
    console.log("El resultado de la division es: " + resultado)
}
function multi(){
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var resultado = Number(numero1) * Number(numero2)
    console.log("El resultado de la multiplicacion es: " + resultado)
}