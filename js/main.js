const inputText = document.querySelector('.text-area');
const inputResult = document.querySelector('.message');
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-Decrypt');
const btnCopy = document.querySelector('.btn-copy');
const btnListen = document.querySelector('.btn-listen');
const bntReset = document.querySelector('.btn-reset');

const validate = (text) => {

    let char = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayus = /[A-Z]/g;
    let empty = "";

    if (text.match(mayus) || text.match(char)) {
        alert("Error, has ingresado un caracter especial o una mayuscula!");
        return true;
    } else if (text == empty) {
        alert("Error, no has ingresado un texto valido a encriptar!");
        return true;
    } else {
        return false;
    }
}

function cleanInputs() {
    location.reload();
}

function encrypt() {

    let text = inputText.value;

    if (validate(text) == false) {

        let encryptText = text
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        inputResult.value = encryptText;
        inputText.value = "";
    } else {
        cleanInputs();
        return;
    }
    return text;
}

function decrypt() {

    let encryptText = inputText.value;

    if (validate(encryptText) == false) {

        let text = encryptText
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        inputResult.value = text;
        inputText.value = "";
    } else {
        cleanInputs();
        return;
    }
    return encryptText;
}

function copy() {

    if (inputResult.value === "") {
        alert('Error, no hay ningún texto que copiar!!')
    } else {
        let encryptText = inputResult.value;
        navigator.clipboard.writeText(encryptText);
        alert("Texto Copiado, exitosamente!");
        inputResult.value = "";
        inputText.focus();
    }
}

function listen() {

    if (inputResult.value === "") {
        alert('Error, no hay ningun texto que escuchar!!!');
    } else {
        let encryptText = inputResult.value;
        let objMsg = new SpeechSynthesisUtterance();

        objMsg.text = encryptText;
        objMsg.lang = "es-Es";
        window.speechSynthesis.speak(objMsg);
    }
}

function btn_Encrypt() {
    const textEncrypt = encrypt();
    inputResult.style.backgroundImage = 'none';

}

function btn_Decrypt() {
    const textEncrypt = decrypt();
    inputResult.style.backgroundImage = 'none';
}
