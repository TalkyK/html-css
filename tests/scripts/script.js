let count = 0;

const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  count++;
  document.getElementById("countDisplay").innerHTML = count;
});