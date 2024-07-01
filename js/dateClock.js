const dateHTML = document.querySelector("#dateHTML");
const clockHTML = document.querySelector("#clockHTML");

function getDateTime() {
  const newDate = new Date();
  const dayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const date = String(newDate.getDate());
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = String(newDate.getFullYear());
  const day = String(dayList[newDate.getDay()]);

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");

  dateHTML.innerText = `${date}/${month}/${year} (${day})`;
  clockHTML.innerText = `${hours}:${minutes}`;
}

getDateTime();
setInterval(getDateTime, 10000);
