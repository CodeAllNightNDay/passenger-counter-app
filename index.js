let count = 0;

let passCount = document.getElementById("passenger-count");

let saveCount = document.getElementById("save-el");

function increment() {
  count += 1;
  passCount.textContent = count;
}

function save() {
  console.log(count);
  saveCount.textContent = saveCount.textContent + " - " + count;
  count = 0;
  passCount.textContent = count;
}

function reset() {
  count = 0;
  passCount.textContent = 0;
  saveCount.textContent = 0;
}
