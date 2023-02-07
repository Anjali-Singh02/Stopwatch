let hours = document.getElementById('hr');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');

let hh = 0
let mm = 0
let ss = 0
let id;

let start = () => {
    id = setInterval(startStopWatch, 1000)
}
let startStopWatch = () => {
    if (ss == 59) {
        if (min == 59) {
            hh++;
        }
        else {
            min++;
        }
    }
    else {
        ss++;
    }

    hours.innerHTML = (hh < 10) ? "0" + hh : hh;
    minutes.innerHTML = (mm < 10) ? "0" + mm : mm;
    seconds.innerHTML = (ss < 10) ? "0" + ss : ss;
}

let stop = () => {
    clearInterval(id);
}
let reset = () => {
    hh = 0
    mm = 0
    ss = 0
    hours.innerHTML = (hh < 10) ? "0" + hh : hh;
    minutes.innerHTML = (mm < 10) ? "0" + mm : mm;
    seconds.innerHTML = (ss < 10) ? "0" + ss : ss;
}
