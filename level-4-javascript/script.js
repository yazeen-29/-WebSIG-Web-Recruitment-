let count = 0;
let darkMode = false;
const counter = document.getElementById('counter');
const description = document.getElementById('description');
const title = document.getElementById('title');
const incrementButton = document.getElementById('increaseBtn');
const resetButton = document.getElementById('resetBtn');
const toggleThemeButton = document.getElementById('toggleBtn');
function updatecounter() {
    counter.textContent = count;
}
function increaseCount() {
    count += 1;
    updatecounter();
    description.textContent = "You have clicked the button!,counter increased.";
}
function resetCount() {
    count = 0;
    updatecounter();
    description.textContent = "Counter reset to zero.";
}
function toggleTheme() {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#FFFFFF";
    description.textContent = "Dark Mode Activated";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
    description.textContent = "Light Mode Activated";
  }
}
increaseBtn.addEventListener('click', increaseCount);
resetBtn.addEventListener('click', resetCount);
toggleBtn.addEventListener('click', toggleTheme);
updatecounter();