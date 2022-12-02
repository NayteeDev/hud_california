$(function () {
	window.addEventListener('message', function(event) {
		if (event.data.action == "setValue") {
			setValue(event.data.key, event.data.value);
		} else if (event.data.action == "updateStatus") {
			updateStatus(event.data.status);
		} else if (event.data.action == "setTalking") {
			setTalking(event.data.value);
		} else if (event.data.action == "setProximity") {
			setProximity(event.data.value);
		} else if (event.data.action == "toggle") {
			if (event.data.show) {
				$('#ui').show();
			} else {
				$('#ui').hide();
			}
		}
	});
});

function setValue(key, value) {
	$('#' + key + ' span').html(value);
}

function updateStatus(status) {
	var hunger = status[0];
	var thirst = status[1];
	var drunk = status[2];
	$('#hunger .bg').css('height', hunger.percent + '%');
	$('#water .bg').css('height', thirst.percent + '%');
	$('#drunk .bg').css('height', drunk.percent + '%');
}

function setProximity(value) {
	var speaker = 2;
	if (value == "whisper") {
		speaker = 1;
	} else if (value == "normal") {
		speaker = 2;
	} else if (value == "shout") {
		speaker = 3;
	}
	$('#voice img').attr('src', 'img/speaker' + speaker + '.png');
}	

function setTalking(value) {
	if (value) {
		$('#voice').css('border', '3px solid #03A9F4');
	} else {
		$('#voice').css('border', 'none');
	}
}

//API Shit
function colourGradient(p, rgb_beginning, rgb_end) {
    var w = p * 2 - 1;
    var w1 = (w + 1) / 2.0;
    var w2 = 1 - w1;
    var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2), parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2), parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
    return rgb;
};