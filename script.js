const hourE1 = document.getElementById("hour");
const minsE1 = document.getElementById("mins");
const secsE1 = document.getElementById("secs");
const ampmE1 = document.getElementById("ampm");

function updateclock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourE1.innerText = h;
  minsE1.innerText = m;
  secsE1.innerText = s;
  ampmE1, (innerText = ampm);
  setTimeout(() => {
    updateclock();
  }, 500);
}
updateclock();
