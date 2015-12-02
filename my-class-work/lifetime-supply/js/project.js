
document.getElementById('click-me').onclick = calculate;

function calculate () {
	var currentAge = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var numPerDay= document.getElementById('num-per-day').value;
	var lifetimeDrinks = (maxAge - currentAge) * 365 * numPerDay;

document.getElementById('solution').innerHTML = lifetimeDrinks;
document.getElementById('drink').innerHTML = favDrink;
}