const caracterArray = ['&', '(', ')', '-', '_', 'à', '=']
const passwordField = document.getElementById('passwordField')
const passwordButton = document.getElementById('passwordButton')

function randomCaracter() {
    let number = Math.floor(Math.random() * caracterArray.length)
    return caracterArray[number]
}

passwordButton.addEventListener('click', () => {
    let newPassword = []
    for (let i = 0; i < 9; i++) {
        newPassword.push(randomCaracter())
    }
    let newPasswordJoined = newPassword.join('')
    console.log(newPasswordJoined)

    passwordField.value = newPasswordJoined
})

