// Selección de elementos
const inputForm = document.querySelector('.container__form--input');
const buttonNotify = document.querySelector('.container__form--button');
const errorMessage = document.querySelector('.container__form--message');

// Inicialización: deshabilitar botón al cargar
buttonNotify.disabled = true;

// Event listener para validar el input
inputForm.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    //Regex del email
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(emailRegex.test(inputValue.trim())){
        buttonNotify.disabled = false;
        errorMessage.classList.add('hidden')
        inputForm.classList.remove('container__form--input-invalid')
        inputForm.classList.add('container__form--input-success')
    }else{
        buttonNotify.disabled = true;
        errorMessage.classList.remove('hidden')
        inputForm.classList.add('container__form--input-invalid')
        inputForm.classList.remove('container__form--input-success')
    }
});

// Event listener para el boton
buttonNotify.addEventListener('click', (e) => {
    e.preventDefault()

    //Obtner el valor del input
    const valueInput = inputForm.value;
    //Regex del email
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(valueInput.trim() === '' || !emailRegex.test(valueInput)){
        console.log('Email no valido')
    } else {
        inputForm.value = '';
        buttonNotify.disabled = true;
        errorMessage.classList.add('hidden')
        inputForm.classList.remove('container__form--input-invalid')
        inputForm.classList.remove('container__form--input-success')
    }

})

