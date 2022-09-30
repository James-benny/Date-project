
// let dayss = new Date().getDay();
// // console.log(day)
// let month = new Date().getMonth();
// let yearss = new Date().getFullYear();
// let completeDate = {day, month, year}

// console.log(completeDate)
// document.querySelector('#date').innerHTML = completeDate



// let mainDate = new Date()
// document.querySelector('#date').innerHTML = mainDate


let days = ["Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"];
let day = new Date();
let mainDay = days[day.getDay()];
document.querySelector('#day1').innerHTML = mainDay;

let Months = ["January,","February,","March,","April,","May,","June,","July,","August,","September,","October,","November,","December,"];

let mainMonth = Months[day.getMonth()];
console.log(mainMonth)
document.querySelector('#month1').innerHTML = mainMonth;

let date = day.getDate()
document.querySelector('#date1').innerHTML = date;
console.log(date)

let year = day.getFullYear();
document.querySelector('#year1').innerHTML = year;

//greet project

let moment = ""
let hour1 = new Date().getHours()
console.log(hour1)
let newHour = 24
console.log(newHour)

if (hour1 > newHour) {
    moment = "Good Morning";
} else if (hour1 < newHour && hour1 > 4) {
    moment = "Good Afternoon"
} else {
    moment = "Good Evening"
}

document.querySelector("#time-display").innerHTML = moment

  



