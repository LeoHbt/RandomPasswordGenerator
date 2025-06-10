const symbolArray = ['&', '(', ')', '-', '_', 'à', '=', '*', '$', '!', '%', '/', '@', '~', '#', 'A', 'a', 'B', 'b', 'C', 'C', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'K', 'k']
const passwordField = document.getElementById('passwordField')
const passwordButton = document.getElementById('passwordButton')
const passwordLength = document.getElementById('passwordLength')
const passwordSize = document.getElementById('passwordSize')
const copyIcon = document.getElementById('copyIcon')
const copiedMessage = document.querySelector('.copiedMessage')

// Réinitialise le mot de passe et met la valeur de taille du mot de passe a 7 au chargement de la page
passwordField.value = ''
passwordLength.value = 7
passwordSize.textContent = 7

// return un objet du tableau symbolArray
function randomCaracter() {
    let number = Math.floor(Math.random() * symbolArray.length)
    return symbolArray[number]
}

passwordButton.addEventListener('click', () => {
    let newPassword = []
    for (let i = 0; i < passwordLength.value; i++) {
    newPassword.push(randomCaracter())
    }
    let newPasswordJoined = newPassword.join('')

    passwordField.value = newPasswordJoined
})

// actualise en temps réel la taille du mot de passe choisie
passwordLength.addEventListener('input', () => {
    passwordSize.textContent = passwordLength.value
} )

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordField.value)

    copiedMessage.style.opacity = 1
    setTimeout(() => {
        copiedMessage.style.opacity = 0
    }, 2000);
})

document.addEventListener('mousemove', (e) => {
    copiedMessage.style.left = `${e.clientX + 5}px`;
    copiedMessage.style.top = `${e.clientY + 5}px`;
})