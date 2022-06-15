const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const form = document.getElementById('form')
const name = document.getElementById('username')
const phone = document.getElementById('phone')
const Quantity = document.getElementById('Quantity')
const addres = document.getElementById('adds')

form.addEventListener('submit',(e) => {
    e.preventDefault();

    ValidateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}




const ValidateInputs = () =>{
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const QuantityValue = Quantity.value.trim();
    const addresValue = addres.value.trim();

    if(usernameValue === ''){
        setError(username, 'Name is required');
    }else{
        setSuccess(username)
    }

    if(phoneValue === ''){
        setError(phone, 'Phone Number is required');
    }else{
        setSuccess(phone);
    }

    if(QuantityValue === '' || QuantityValue < 1){
        setError(Quantity, 'Must be > 0');
    }else{
        setSuccess(Quantity);
    }

    if(addresValue === ''){
        setError(addres, 'Addres is required');
    }else{
        setSuccess(addres);
    }


}