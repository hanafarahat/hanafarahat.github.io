$(document).ready(function() {

var total = 0;

$('#a10').click(addTen)

	function addTen () {

	total = total + 10

	$('#out').text(total)
	}
		
$('#a20').click(addTwenty)

	function addTwenty () {

	total = total + 20

	$('#out').text(total)
}
$('#a30').click(addThirty)

	function addThirty () {

	total = total + 30

	$('#out').text(total)
}
$('#n10').click(minusTen)

	function minusTen () {

	total = total - 10

	$('#out').text(total)
}

$('#n20').click(minusTwenty)

function minusTwenty () {

	total = total - 20

	$('#out').text(total)
}
$('#n30').click(minusThirty)

	function minusThirty () {

	total = total - 30

	$('#out').text(total)
}

$('#red').click(turnRed)
	function turnRed () {
		$('#out').css('background-color', 'red')
	}

$('#blue').click(turnBlue)
	function turnBlue () {
		$('#out').css('background-color', 'blue')
	}
$('#out').click(turnWhite)
	function turnWhite () {
		$('#out').css('background-color', 'white')
	}

})




