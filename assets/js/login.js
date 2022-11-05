const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('.login-form')

function validateInput({ target }) {
    if (target.value.length >= 3) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

function clickSubmit(event) {
    event.preventDefault()
    localStorage.setItem('playerUserName', input.value)
    window.location = './gamepage.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', clickSubmit)
