// Changing Location Index.html -> discover.html
document.querySelector("#discover-card").addEventListener("click", function(){
    window.location.href = "discover.html";
});

// date and time 
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date = new Date(); 
console.log(date.getMonth(), date.getDay(), date.getFullYear(), date.getDate())

document.querySelector("#day").innerText = days[date.getDay()] + ",";
document.querySelector("#date").innerText = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;