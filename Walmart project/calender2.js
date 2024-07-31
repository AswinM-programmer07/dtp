// script.js
const calendar = {
    month: new Date().getMonth(),
    year: new Date().getFullYear()
};

const monthNames = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("prev-month").addEventListener("click", showPreviousMonth);
    document.getElementById("next-month").addEventListener("click", showNextMonth);
    displayCalendar();
});

function displayCalendar() {
    const daysContainer = document.querySelector(".days");
    daysContainer.innerHTML = "";

    const monthYear = document.getElementById("month-year");
    monthYear.textContent = `${monthNames[calendar.month]} ${calendar.year}`;

    const firstDay = new Date(calendar.year, calendar.month, 1).getDay();
    const daysInMonth = new Date(calendar.year, calendar.month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        daysContainer.appendChild(emptyDay);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        daysContainer.appendChild(day);
    }
}

function showPreviousMonth() {
    if (calendar.month === 0) {
        calendar.month = 11;
        calendar.year--;
    } else {
        calendar.month--;
    }
    displayCalendar();
}

function showNextMonth() {
    if (calendar.month === 11) {
        calendar.month = 0;
        calendar.year++;
    } else {
        calendar.month++;
    }
    displayCalendar();
}
