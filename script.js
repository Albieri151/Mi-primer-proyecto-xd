function validateText(text) {
    // Verifica si el texto contiene mayúsculas o caracteres especiales
    const regex = /^[a-z\s]*$/;  // Solo acepta letras minúsculas y espacios
    return regex.test(text);
}

function showAlert(message) {
    alert(message);  // Muestra una alerta con el mensaje
}

function encryptText() {
    let text = document.getElementById("input-text").value;

    if (!validateText(text)) {
        showAlert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = encryptedText;
}

function decryptText() {
    let text = document.getElementById("input-text").value;

    if (!validateText(text)) {
        showAlert("Solo se permiten letras minúsculas y sin caracteres especiales.");
        return;
    }

    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
