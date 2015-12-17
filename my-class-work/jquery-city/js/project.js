$(document).ready(function() {


$(.thumb).click(fucntion(){
	var imgSrc = $(this).attr('src')

	$('#bigimage').attri('src, imgSrc')
	
})


	$('#second').click(function () {
  $('#bigimage').attr('src', 'img/2.jpg')
})

	$('#third').click(function () {
  $('#bigimage').attr('src', 'img/3.jpg')
})

$('#fourth').click(function () {
  $('#bigimage').attr('src', 'img/4.jpg')
})



})


