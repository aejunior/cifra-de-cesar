MIN_VALUE = 97;
MAX_VALUE = 122;

function rangeSlide(value) {
	document.getElementById('rangeValue').innerHTML = value;
}

async function cipherCrypto (e) {
	e.preventDefault();
	const valueName = $("#inputCipher").first().val();
	const valueDisplacement = Number.parseInt($("#rangeCipher").first().val());

	if (valueName && !/[^a-zA-Z]/.test(valueName)) {
		console.log(`Mensagem: ${valueName} \nDeslocamento: ${valueDisplacement}`);

		let codesString = valueName
			.toLowerCase() // ABC -> a, b, c
			.split('')
			.map(e => e.codePointAt(0));
		console.log(`ASCII: ${codesString.join(', ')}`);

		let cipherCodes = codesString.map(e => {
			let actualValue = e+valueDisplacement;
			if(actualValue > MAX_VALUE){
				return actualValue-26
			} else {
				return actualValue
			}
		})
		console.log(`ASCII encriptado: ${cipherCodes.join(', ')}`);

		let messageEncrypted = cipherCodes.map(e => String.fromCharCode(e));
		console.log(`Mensagem encriptada: ${messageEncrypted.join('')}`);

		$("#message-encrypted").text(`Mensagem encriptada: ${messageEncrypted.join("")}`);
	} else if (valueName === '') {
		return
	} else {
		alert("Insira apenas letras!");
	}
}

$(document).ready(() => {
	$("#formCipher").submit(cipherCrypto);
	$("#rangeCipher").change(cipherCrypto);
})