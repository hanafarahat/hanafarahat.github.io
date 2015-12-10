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

if (celRes > 26){
	$('body').css('background-color','red')
}
else if (fahRes > 75) {
	$('body').css('background-color', 'red')
}
else {
	$('body').css('background-color', 'blue')
}



})
})






