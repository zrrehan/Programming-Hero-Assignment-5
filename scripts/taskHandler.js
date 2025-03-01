let totalTask = 6;
/*
<div class = "h-[68px] w-[318px] flex justify-center items-center bg-[#F4F7FF] p-[10px] rounded-2xl">
                    <p>You have Complete The Task Add Dark Mode at 12:48:15 PM</p>
                </div>
*/
let historyDiv = document.querySelector("#history");
console.log();
for(let item = 1; item <= 6; item++) {
    let completedButton = document.querySelector(`#task-button-${item}`);
    completedButton.addEventListener("click", function() {
        completedButton.setAttribute("disabled", "true");
        let time = new Date();
        let hr = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        console.log(typeof toString(sec), time.getHours(), "hello");
        let meridiem;
        if(hr == 0) {
            hr = 12;
            meridiem = "AM"
        } else if(hr < 12) {
            meridiem = "AM"
        } else {
            hr = hr % 12;
            meridiem = "PM"
        }
        if(min < 10) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        alert("Board updated Successfully");
        
        historyDiv.innerHTML += `
            <div class = " w-[318px] flex justify-center items-center bg-[#F4F7FF] p-[10px] rounded-2xl">
                    <p>You have Complete The Task ${document.querySelector(`#task-heading-${item}`).innerText} at ${hr}:${min}:${sec} ${meridiem}</p>
                </div>
        `;

        let completed = document.querySelector("#completed-task");
        let newCompleted = parseInt(completed.innerText) + 1 
        if (newCompleted.toString().length == 1) {
            completed.innerText = `0${newCompleted}`;
        } else {
            completed.innerText = newCompleted;
        }

        let remaining = document.querySelector("#remaining-task");
        let newRemaining = parseInt(remaining.innerText) - 1;
        if (newRemaining.toString().length == 1) {
            remaining.innerText = `0${newRemaining}`;
        } else {
            completed.innerText = newRemaining;
        }
    });
}


document.querySelector("#clear-history-button").addEventListener("click", function() {
    document.querySelector("#history").innerHTML = "";
});