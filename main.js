"use strict";
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const difference = document.getElementById('difference');

function toSeconds(time) {
	return Number(time.h.value) * 3600 + Number(time.m.value) * 60 + Number(time.s.value);
}

function format(timeValue) {
	timeValue = timeValue.toString();
	return timeValue.padStart(2 + timeValue.replace(/^[^.]+/, '').length, '0');
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

for (let input of document.querySelectorAll('input')) {
	input.addEventListener('input', updateDifference);
	input.addEventListener('mouseenter', () => input.focus());
	input.addEventListener('focus', () => input.select());
}

updateDifference();
