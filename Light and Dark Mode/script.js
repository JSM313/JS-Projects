const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const settingValues = (key, value) => {};

// Dark or Light Images
const imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

// Creating the dark mode function
const darkMode = () => {
  // CHANGING THE BACKGROUND COLOR OF THE NAVBAR AND THE TEXT PARAGRAPH IN THE BUTTONS SECTION.
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";

  // CHANGING THE ICON AND TEXT MODE FROM LIGHT MODE TO DARK MODE.
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  // CHANGING THE IMAGE CONTENT
  imageMode("dark");
};

const lightMode = () => {
  // CHANGING THE BACKGROUND COLOR OF THE NAVBAR AND THE TEXT PARAGRAPH IN THE BUTTONS SECTION.
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";

  // CHANGING THE ICON AND TEXT MODE FROM DARK MODE TO LIGHT MODE.
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  // CHANGING THE IMAGE CONTENT
  imageMode("light");
};

// Switch theme dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
};

// We will use the onchange event instead of a click event
toggleSwitch.addEventListener("change", switchTheme);
