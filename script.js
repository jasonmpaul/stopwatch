function clockTimer(a) {
	setInterval(a, 1000);
}

function startWatch() {
	clockTimer(startWatch);
	const newTimer = new Date(2000,0,0,0,0,0,0);
	document.getElementById("clock__timer").innerHTML = newTimer.getHours() + ':' + newTimer.getMinutes() + ':' + newTimer.getSeconds() + ':' + newTimer.getMilliseconds();
}