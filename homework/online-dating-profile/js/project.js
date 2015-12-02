$(document).ready(function() {

var total = 0;


$('#likes').click(addOne)

	function addOne () {

	total = total + 1

	$('#count').text(total)
	}

})