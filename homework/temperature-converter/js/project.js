document.getElementById('click-me').onclick = calculatecel;

function calculatecel () {
	var celTemp = document.getElementById('celTemp').value;
	var fahRes = celTemp * (9/5) + 32;

document.getElementById('solution').innerHTML = fahRes;
// what is this bracket closing?
}

// spelling
dcoument.getElementById("click").onclick = calculatefah;

function calculatefah () {
	var fahTemp = document.getElementById('fahTemp').value;
	var celRes = (fahTemp - 32) * (5/9); 

document.getElementById('result').innerHTML = celRes;
// what is this bracket closing?
}
