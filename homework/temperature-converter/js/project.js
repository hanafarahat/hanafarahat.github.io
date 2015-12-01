document.getElementById('click-me').onclick = calculatecel;

function calculatecel () {
	var celTemp = document.getElementById('celTemp').value;
	var fahRes = celTemp * (9/5) + 32;

document.getElementById('solution').innerHTML = fahRes;
}


dcoument.getElementById("click").onclick = calculatefah;

function calculatefah () {
	var fahTemp = document.getElementById('fahTemp').value;
	var celRes = (fahTemp - 32) * (5/9); 

document.getElementById('result').innerHTML = celRes;
}
