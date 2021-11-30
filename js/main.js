// Тренировочка

// let sign_up = document.getElementById("sign_up")
// sign_up.style.backgroundColor = "transparent"
// sign_up.style.color = "#DD3142"
// sign_up.style.border = "1px solid black"
//
// let first_input = document.getElementsByTagName("input")
// first_input[0].placeholder = ""
//
// let second_input = document.getElementsByTagName("input")
// second_input[1].placeholder = "example"
//
// let third_input = document.getElementsByTagName("input")
// third_input[2].placeholder = "email@email.com"
//
// let repeat = document.getElementsByTagName("label")
// repeat[4].remove()
//
// let repeat2 = document.getElementById("repeat_password")
// repeat2.remove()
//
// let a = document.getElementById("checkbox")
// a.checked = true
//
// let border = document.getElementsByTagName("input")
// let el = 0;
// for (el in border){
//     border[el].style.borderBottomColor = "red"
// }

window.onload = function () {
    let name = document.getElementById("name").onkeypress = function (event) {
        let letter = parseInt(event.key)
        if (isNaN(letter)) {
        } else {
            event.preventDefault()
        }
    }
    document.getElementById("username").onkeypress = function (event) {
        if (event.key === "." || event.key === ",") {
            event.preventDefault()
        }
    }
    let checkbox = document.getElementById("checkbox")
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            console.log("Флажок установлен");
        } else {
            console.log("Флажок не установлен");
        }
    })
    let sign_up = document.getElementById("sign_up")
    sign_up.addEventListener('click', () => {
        let input = document.getElementsByTagName("input")
        if (input[0].value === "") {
            alert("Введите имя")
            return false
        } else if (input[1].value === "") {
            alert("Введите username")
            return false
        } else if (input[2].value === "") {
            alert("Введите почту")
            return false
        } else if (input[3].value === "") {
            alert("Введите пароль")
            return false
        } else if (input[4].value === "") {
            alert("Повторите пароль")
            return false
        } else if (input[3].value !== input[4].value) {
            alert("Пароли не совпадают")
            return false
        } else if (checkbox.checked === false) {
            alert("Установите флажок")
        } else {
            alert("OKAY")
        }
    })
    let account = document.getElementById("checking")
    account.addEventListener('click', () => {
        document.getElementById("title").innerText = "Log in to the system"
        document.getElementById("sign_up").innerText = "Sign in"
        let input = document.getElementsByTagName("input")
        input[0].remove()
        input[3].remove()
        input[1].remove()
        let label = document.getElementsByTagName("label")
        label[0].remove()
        label[3].remove()
        label[1].remove()
        let check2 = document.getElementById("check")
        check2.remove()
        checkbox.remove()
        account.remove()
    })
}



