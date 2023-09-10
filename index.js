const currentDay = document.getElementById('currentDayOfTheWeek');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const d = new Date();
let day = days[d.getDay()];

currentDay.innerHTML = day;



function updateCurrentTime() {
const currentUTCTime = document.getElementById('currentUTCTime');
const getTime = Date.now();

currentUTCTime.innerHTML = getTime

}

setInterval(updateCurrentTime, 100)


