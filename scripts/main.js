// setInterval repeats a process every couple of miliseconds (in this case 1000)
window.setInterval(function() {
  let timeElement = document.querySelector("#time-text"); // The h1 holding the time text
  let titleElement = document.querySelector("title"); // The title of the page
  let d = new Date();

  // Ternary operations to add a 0 before every number, if that number is
  // lower than 10 (aka, if the number has less than 2 digits)
  let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  let minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  let seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

  // Append those values into a single string
  let timeString = hours + ":" + minutes + ":" + seconds;

  // Set the inner text of each element as the time string
  titleElement.innerText = timeString;
  timeElement.innerText = timeString;
}, 1000); // Repeat every 1000 miliseconds
