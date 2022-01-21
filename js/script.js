let time
let year = document.querySelector(".year")
let month = document.querySelector(".month")
let day = document.querySelector(".day")
let week = document.querySelector(".week")
let hours = document.querySelector(".hours")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    time = new Date()
    year.innerHTML = time.getFullYear()
    month.innerHTML =months[time.getMonth()]
    day.innerHTML = time.getDate()
    week.innerHTML = days[time.getDay()-1]+","
    hours.innerHTML = time.getHours()
    minute.innerHTML = time.getMinutes()
    second.innerHTML = time.getSeconds()
}, 1000);
