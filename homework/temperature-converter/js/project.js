$(document).ready(function () {



$('#click-me').click (function (){
 var celTemp  = $('#celTemp').val();
 var fahRes = celTemp= celTemp * (9/5) + 32;
 fahRes = parseInt(fahRes)


$('#solution').text(fahRes)


})


$('#click').click (function (){
 var fahTemp  = $('#fahTemp').val()
 var celRes = (fahTemp - 32) * (5/9);
 
 celRes = parseInt(celRes)

$('.result').text(celRes)


})
})


document.getElementById('solution').innerHTML = fahRes;
// what is this bracket closing?
}

// spelling
dcoument.getElementById("click").onclick = calculatefah;


document.getElementById('result').innerHTML = celRes;
// what is this bracket closing?
}

