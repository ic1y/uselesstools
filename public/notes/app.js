const textarea = document.getElementById('textarea'),
fsize = document.getElementById('fsize');
autosize(textarea);
if(localStorage.getItem('textarea') != null) {
	textarea.value = localStorage.getItem('textarea');
}
if(localStorage.getItem('fsize') != null) {
	textarea.style.fontSize = localStorage.getItem('fsize') + 'px';
	fsize.value = localStorage.getItem('fsize');
}
textarea.addEventListener('input', function () {
	localStorage.setItem('textarea', textarea.value);
})
document.getElementById('copytext').addEventListener('click', function () {
	if('clipboard' in navigator) {
		navigator.clipboard.writeText(textarea.value).then(function() {
			alert('copied text to clipboard.')
		}).catch(function(err){
			alert('unable to copy text to clipboard.');
			console.log(err);
		});
	} else {
		return alert('clipboard api not supported.')
	}
})
document.getElementById('webshare').addEventListener('click', function () {
	if('share' in navigator) {
		navigator.share({text: textarea.value}).catch(function(err) {
			alert('web share failed.');
			console.log(err);
		});
	} else {
		return alert('web share api not supported.');
	}
})
document.getElementById('cleardata').addEventListener('click', function () {
	let conf = confirm('clear data?');
	if(conf == true) {
		localStorage.clear();
		location.reload();
	} else return;
})
fsize.addEventListener('input', function(e) {
	textarea.style.fontSize = e.target.value + 'px';
	localStorage.setItem('fsize',e.target.value);	
})