document.addEventListener("DOMContentLoaded",()=>{
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', comparar);
    let resultado = 1;

    //creo un arreglo con las opciones
    const opciones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    GenerarAlAzar();

    //creo una funcion para crear numeros a la zar
    function GenerarAlAzar(){
        let numeroRandom = Math.floor((Math.random() * opciones.length));
        let numeroRandom2 = Math.floor((Math.random() * opciones.length))

        //hago que me de dos numeros random para multiplicarlo y hacer mas grande el captcha
        resultado = opciones [numeroRandom2] * opciones [numeroRandom2];
        document.getElementById('numeroRandom').value = resultado;

    }
    // creo otra funcion para compara si lo que ingreso el usuario es valido 
    function comparar (e){
        e.preventDefault();
        let capcha = document.getElementById('Respuesta').value;
        if(resultado == capcha){
            let Aprueba = document.getElementById('verdaderoOFalso');
            Aprueba.innerHTML = "Formulario enviado con exito.";
        }
        
        else{
            let Desaprobado = document.getElementById('verdaderoOFalso');
            Desaprobado.innerHTML = "Fallo al enviar formulario.";
        }
    
    }

})