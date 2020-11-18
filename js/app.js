
// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#btnReset');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListener()
function eventListener() {
    document.addEventListener('DOMContentLoaded', iniciarApp);


    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    btnReset.addEventListener('click', resetearFormulario())

    formulario.addEventListener('submit', enviarMail);
}



// Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e) {

    // Validacion de "asunto" y "mensaje"    
    if (e.target.value.length > 0 ) {

        //Elimina errores
        const error = document.querySelector('p.error');
        if(error){
        error.remove();}
    

        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    // Validacion de "email"
    if(e.target.type === 'email'){
        if(er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if(error){
            error.remove();}
    
            e.target.classList.remove('border', 'border-red-500')
            e.target.classList.add('border', 'border-green-500')
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

        mostrarError('Email no valido');
        }
    }  

    // Activar el boton "enviar" cuando estan los tres campos validados
    if (er.test(email.value) !== '' && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');    
    if (errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function enviarMail(e){
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout (() => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'El email se envio correctamente';
        parrafo.classList.add('border', 'border-green-500', 'background-green-100', 'text-green-500', 'p-1', 'mb-5', 'text-center')

        formulario.insertBefore(parrafo, spinner);
        
        setTimeout(() => {
            parrafo.remove();

            resetearFormulario();
        }, 2000);

    }, 3000 )
}

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}