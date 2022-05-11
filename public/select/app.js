function select(array) {
	return array[Math.floor(Math.random()*array.length)];
}
document.getElementById('select').addEventListener('click', function() {
	document.getElementById('selectres').value = select(document.getElementById('list').value.split('\n'));
})