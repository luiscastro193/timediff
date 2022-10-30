"use strict";
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const difference = document.getElementById('difference');

function toSeconds(time) {
	return Number(time.h.value) * 3600 + Number(time.m.value) * 60 + Number(time.s.value);
}

function format(timeValue) {
	return timeValue.toString().padStart(2, '0');
} 

function toString(seconds) {
	let hours = Math.trunc(seconds / 3600);
	seconds %= 3600;
	let minutes = Math.trunc(seconds / 60);
	seconds %= 60;
	return [hours, minutes, seconds].map(format).join(':').replace(/^[0:]+/, '');
}

function updateDifference() {
	difference.textContent = toString(Math.abs(toSeconds(time1) - toSeconds(time2)));
}

function selectInput(input) {
	setTimeout(function() {
		try {
			input.setSelectionRange(0, input.value.length);
		}
		catch(e) {
			input.select();
		}
	}, 0);
}

for (let input of document.querySelectorAll('input')) {
	input.addEventListener('input', updateDifference);
	input.addEventListener('mouseenter', () => input.focus());
	input.addEventListener('focus', () => selectInput(input));
}

updateDifference();
