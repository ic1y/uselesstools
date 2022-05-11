/*const startbtn = document.getElementById('start'),
day = document.getElementById('day'),
hour = document.getElementById('hour'),
min = document.getElementById('min'),
sec = document.getElementById('sec');
var active = interval = false;
function toggleReadOnly() {
	[day,hour,min,sec].forEach(function(e) {e.readOnly = !e.readOnly});
}
function endTimer() {
	interval = false;
	clearInterval(interval);
	active = !active;
	toggleReadOnly();
	startbtn.innerText = 'start timer';
}
startbtn.addEventListener('click', function() {
	if(!active) {
		active = !active;
		startbtn.innerText = 'stop timer'
		toggleReadOnly();		
		var endTime = (day.value * 86400 + hour.value * 3600 + min.value * 60 + sec.value)*1000 + Date.now();
		interval = setInterval(() => {
			var remainingTime = endTime - Date.now();
			if(remainingTime <= 0) {
				endTimer()
				return;			
			}
			day.value = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
			hour.value = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			min.value = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
			sec.value = Math.floor((remainingTime % (1000 * 60)) / 1000);
		}, 1000)
	} else {
		if(interval) endTimer()
	}
})*/