
// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListener()
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}



// Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {
    
    if (e.target.value.lenght > 0){
        console.log ('Prueba')
    } else {
        e.target.classList.add('border', 'border-red-500')
    }
}