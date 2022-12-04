function adjustVolume(direction) {
	currentVolume = document.getElementById('player').volume;

	currentVolume = currentVolume + (direction == 'up' ? 0.1 : -0.1);

	if (currentVolume > 1) { currentVolume = 1; }
	if (currentVolume < 0) { currentVolume = 0; }

	document.getElementById('player').volume = currentVolume;
	document.getElementById('volumebadge').innerText = 'Volume: ' + Math.round(currentVolume * 100) + '%';
}

function updateAudioSrc() {
	var selected = 'media/' + document.getElementById('audio_src').value;

	document.getElementById("player").setAttribute('src', selected);
}

function setLoopState() {
	document.getElementById("player").loop = (document.getElementById("loopAudio").checked ? true : false);
}
