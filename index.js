const time = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const falgsDiv = document.getElementById('flags');

var hh = 0,
    mm = 0,
    ss = 0,
    id;
const start = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    id = setInterval(startStopWatch, 1000);
};
const startStopWatch = () => {
    ss = (ss + 1) % 60;
    if (ss === 0) {
        mm = (mm + 1) % 60;
        if (mm === 0) {
            hh = (hh + 1) % 24;
        }
    }

    const tempTime = `${hh < 10 ? '0' + hh : hh} : ${mm < 10 ? '0' + mm : mm
        } : ${ss < 10 ? '0' + ss : ss}`;
    time.innerHTML = tempTime;
};

const updateFlags = () => {
    var data = localStorage.getItem('flags');
    data = data ? JSON.parse(data) : [];
    const val = data.map(
        (elem) =>
            '<li><span>' +
            elem.index +
            ') </span>&nbsp;<span>' +
            elem.time +
            '</span></li>',
    );
    falgsDiv.innerHTML = val;
};

const setFlag = () => {
    const tempTime = `${hh < 10 ? '0' + hh : hh} : ${mm < 10 ? '0' + mm : mm
        } : ${ss < 10 ? '0' + ss : ss}`;
    var data = localStorage.getItem('flags');
    data = data ? JSON.parse(data) : [];
    data.push({ index: data.length + 1, time: tempTime });

    localStorage.setItem('flags', JSON.stringify(data));
    updateFlags();
};

const resetFlags = () => {
    localStorage.removeItem('flags');
    updateFlags();
};

const stop = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(id);
};
const reset = () => {
    startBtn.disabled = false;
    clearInterval(id);
    hh = mm = ss = 0;

    const tempTime = '0' + hh + ' : ' + '0' + mm + ' : ' + '0' + ss;
    time.innerHTML = tempTime;
};

updateFlags();