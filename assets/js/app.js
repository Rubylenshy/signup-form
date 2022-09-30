
const firstName = document.querySelector('input.firstName')
const lastName = document.querySelector('input.lastName')
const email = document.querySelector('input.email')
const password = document.querySelector('input.password')
const error = document.querySelectorAll('em')
const submitBtn = document.querySelector('button')
const show_password = document.querySelector('#show-pw')

// onkeyup()
// onblur()

//Email Validation

email.onkeyup = ()=>{

    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(.[a-z]+)?$/
    if (email.value.match(emailRegex)) {
        console.log('valid')
        error[2].style.display = 'none';
        email.classList.remove('error');
    }
    else if(email.value == ""){
        for (let i = 0; i < error.length; i++) {
            error[2].textContent = 'Email cannot be empty';
            email.classList.add('error');
        }
        console.log('invalid')
    }else{
        for (let i = 0; i < error.length; i++) {
            error[2].style.display = 'block';
            email.classList.add('error');
        }
        console.log('invalid')
    }
}
email.onblur = ()=>{
    if (email.value != '' && email.value.match(emailRegex)) {
        error[2].style.display = 'none';
        email.classList.remove('error');
        email.classList.add('valid');
    }
}

// First Name
firstName.onkeyup = ()=>{
    if (firstName.value == '' ) {
        for (let i = 0; i < error.length; i++) {
            error[0].style.display = 'block';
            firstName.classList.add('error');
            firstName.classList.remove('valid');
        }
    }
    else{
        error[0].style.display = 'none';
        firstName.classList.remove('error');
    }
}
firstName.onblur = ()=>{
    if (firstName.value != '' && firstName.value.length >= 2) {
        firstName.classList.add('valid');
        error[0].style.display = 'none';
    }
    else{
        firstName.classList.remove('valid');
    }
}


// Last Name

lastName.onkeyup = ()=>{
    if (lastName.value == '' ) {
        for (let i = 0; i < error.length; i++) {
            error[0].style.display = 'block';
            lastName.classList.add('error');
        }
    }
    else{
        error[0].style.display = 'none';
        lastName.classList.remove('error');
    }
}
lastName.onblur = ()=>{
    if (lastName.value != '' && lastName.value.length >= 2) {
        lastName.classList.add('valid');
    }
    else{
        firstName.classList.remove('valid');
    }
}


// Password

password.onkeyup = ()=>{
    if (password.value == '' ) {
        for (let i = 0; i < error.length; i++) {
            error[3].style.display = 'block';
            password.classList.add('error');
            password.classList.remove('valid');
        }
    }
    else{
        for (let i = 0; i < error.length; i++) {
            error[3].style.display = 'none';
            password.classList.remove('error');
            if (password.value.length >= 6) {
                password.classList.add('valid');
            }
            else{
                password.classList.remove('valid');
            }
        }
    }
}
password.onblur = ()=>{
    if (password.value != '' && password.value.length >= 6) {
        error[3].style.display = 'none';
        password.classList.remove('error');
        password.classList.add('valid');
    }   
}

// Show Password
function show(){
    if (password.type === 'password') {
        password.type = 'text';
    }else{
        password.type = 'password';
    }
};


submitBtn.addEventListener('click', ()=>{
    if (firstName.value != '' && lastName.value != '' && email.value != '' && password.value != '') {
        location.reload();
    }else{}
})