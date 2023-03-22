let slider = document.querySelector('#slider')
let buttonElement = document.querySelector('#butto')
let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')
let charset = "abcdefghijlmnopqrstuvxzABCDEFGHIJLMNOPQRSTUVXZ1234567890"
let novasenha = ""

sizePassword.innerHTML = slider.value
slider.oninput =function (){
    sizePassword.innerHTML =this.value
}
function generatePassword(){
    let pass = ""

    for(let i = 0, n = charset.length; i< slider.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }
    
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
}
function copypassword(){
    alert('Senha copiada com sucesso')
    navigator.clipboard.writeText(novasenha)
}

     

