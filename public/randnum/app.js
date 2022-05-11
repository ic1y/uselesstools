// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
document.getElementById('generaterand').addEventListener('click', function() {
	var min = Math.ceil(document.getElementById('minval').value), 
	max = Math.floor((document.getElementById('maxval').value));
	document.getElementById('randnumres').value = Math.floor(Math.random() * (max - min + 1) + min);
})