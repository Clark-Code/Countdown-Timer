
//grab elements 
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// New Years Date
const newYears = '1 Jan 2021';

// function to calculate countdown
function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    //finding days, hours, minutes, seconds
    const days = Math.floor((totalSeconds / 3600 / 24));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor((totalSeconds % 60));

    //display countdown on page
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

//format time - placing a 0 in front of single digit numbers
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countDown();

setInterval(countDown, 1000)

