document.addEventListener('DOMContentLoaded', () => {
    let botonCalidoOscuro = document.getElementById('botonCalidoOscuro');
    let comprobante = 'oscuro'; 

    botonCalidoOscuro.addEventListener('click', () => {
        if (comprobante === 'oscuro') {
            document.body.classList.remove('bodyOscuro');
            document.body.classList.add('bodyCalido');
            comprobante = 'calido'; 
            botonCalidoOscuro.innerHTML = 'Cambiar a Modo Oscuro';
        } else {
            document.body.classList.remove('bodyCalido');
            document.body.classList.add('bodyOscuro');
            comprobante = 'oscuro'; 
            botonCalidoOscuro.innerHTML = 'Cambiar a Modo cálido';
        }
    });
});