var endDate = "18 Oct 2024";
const days  = document.querySelectorAll(".count");
const time  = document.querySelectorAll(".time");
const date  = document.querySelector(".date");
var changeDate = document.getElementById('yrDate');

// endDate = endDateInput.value
function updateDate() {
    var inputDate = document.getElementById('inputDate').value; // Get the value from the input date field
  
    if (inputDate) {
      var dateObj = new Date(inputDate); // Parse inputDate to a Date object
      // Format the date as "10 October 2024" using toLocaleDateString()
      var options = { day: 'numeric', month: 'long', year: 'numeric' };
      var formattedDate = dateObj.toLocaleDateString('en-GB', options);
        console.log(formattedDate);
        endDate = formattedDate;
        changeDate.innerText = endDate;
      // Print the formatted date to the page
    //   document.getElementById('dateOutput').textContent = formattedDate;
    } else {
      alert('Please select a valid date.'); // Alert if no date is selected
    }
  }
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;

   days[0].innerText = ` ${Math.floor(diff / 3600 / 24)}`;
   days[1].innerText = ` ${Math.floor(diff / 3600) % 24}`;
   if(days[1].innerText < 10 && days[1].innerText >= 0) days[1].innerText = ` 0${Math.floor(diff / 3600) % 24}`;

   days[2].innerText = ` ${Math.floor(diff / 60) % 60}`;
   if(days[2].innerText < 10 && days[2].innerText > 0) days[2].innerText = ` 0${Math.floor(diff / 60) % 60}`;
   
    days[3].innerText = `${Math.floor(diff) % 60}`;
    if(days[3].innerText < 10 && days[3].innerText >= 0) days[3].innerText = ` 0${Math.floor(diff) % 60}`;
};
clock();
setInterval(clock, 1000);
document.getElementById('updateButton').addEventListener('click', updateDate);
