const newYearDate = "01/01/2023";
const hourEl = document.getElementById("hours-count");
const daysEl = document.getElementById("days-count");
const minEl = document.getElementById("min-count");
const secEl = document.getElementById("sec-count");

const updateDate = () => {
    const todayDateC = new Date();
    const newYearDateC = new Date(newYearDate);

    const diff = newYearDateC - todayDateC;

    const totalSeconds = diff / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    hourEl.innerText = hours;
    daysEl.innerText = days;
    minEl.innerText = minutes;
    secEl.innerText = seconds;
}

setInterval(() => {
    updateDate();
}, 1000);