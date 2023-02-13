let hours = document.getElementById('hr');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let time = document.getElementById('time');

let hh = 0;
let mm = 0;
let ss = 0;
let id;

let start = () => {
	id = setInterval(startStopWatch, 1000);
};
let startStopWatch = () => {
	ss = (ss + 1) % 60;
	if (ss === 0) {
		mm = (mm + 1) % 60;
		if (mm === 0) {
			hh = (hh + 1) % 24;
		}
	}

	const tempTime = `${hh < 10 ? '0' + hh : hh} : ${
		mm < 10 ? '0' + mm : mm
	} : ${ss < 10 ? '0' + ss : ss}`;
	time.innerHTML = tempTime;
};

let stop = () => {
	clearInterval(id);
};
let reset = () => {
	clearInterval(id);
	hh = 0;
	mm = 0;
	ss = 0;

	const tempTime = '0' + hh + ' : ' + '0' + mm + ' : ' + '0' + ss;
	time.innerHTML = tempTime;
};
