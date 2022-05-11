// https://stackoverflow.com/a/2450976 
function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}
	return array;
}
document.getElementById('shuffle').addEventListener('click', function() {
	document.getElementById('shuffleres').value = shuffle(document.getElementById('list').value.split('\n')).join('\n');
})