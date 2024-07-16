const dateInitial = document.querySelector(".dateClock--date");
const clockInitial = document.querySelector(".dateClock--clock");

function getDateTime() {
  const newDate = new Date();
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = String(newDate.getFullYear());
  const day = dayList[newDate.getDay()];

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  dateInitial.innerText = `${date}/${month}/${year} (${day})`;
  clockInitial.innerText = `${hours}:${minutes}`;
}

// Initialise the date and time display
getDateTime();

// Update the date and time every 10 seconds
setInterval(getDateTime, 10000);
