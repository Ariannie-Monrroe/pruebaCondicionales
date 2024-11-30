// VARIABLES
const imagen = document.querySelector(".imgParteUno")
const calcular = document.getElementById("calcular")
const btn = document.getElementById("btnPassword")

// EJERCICIO UNO
imagen.addEventListener('click', () => {
    if (imagen.style.border) {
        imagen.style.border = ''
    }
    else {
        imagen.style.border = '5px solid #f06292'
    }
})

// EJERCICIO DOS
calcular.addEventListener('click', () => {
    const sticker1 = Number(document.querySelector("#sticker1").value) || 0
    const sticker2 = Number(document.querySelector("#sticker2").value) || 0
    const sticker3 = Number(document.querySelector("#sticker3").value) || 0
    const resultado = document.getElementById("resultado1")
    const total = sticker1 + sticker2 + sticker3

    if (total <= 10) {
        resultado.innerHTML= (`Llevas ${total} stickers.`)
    }
    else {
        resultado.innerHTML= (`Llevas demasiados stickers.`)
    }
})

// EJERCICIO TRES
btnPassword.addEventListener('click', () =>{
    const acceso = digit1.value + digit2.value + digit3.value
    if (acceso === '911' || acceso === '714') {
        resultado.innerHTML = 'Contraseña Correcta'
    }
    else{
        resultado.innerHTML = 'Contraseña Incorrecta'
    }
})
