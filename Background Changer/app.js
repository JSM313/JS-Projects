const change = document.getElementById("change");

const color = document.getElementById("color");

const body = document.body;

const changeBackground = () => {
  const color1 = getRandomBackground();
  const color2 = getRandomBackground();
  const color3 = getRandomBackground();

  const colorString = `rgb(${color1}, ${color2}, ${color3})`;

  body.style.background = colorString;
  color.textContent = colorString;
};

const getRandomBackground = () => Math.floor(Math.random() * 256);

change.addEventListener("click", changeBackground);
