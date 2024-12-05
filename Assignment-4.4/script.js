// color change code
const colorInp = document.getElementById("colorbox");
const textDiv = document.getElementById("text-container");
const setColor = () => {
  const colorVal = colorInp.value;
  textDiv.style.color = colorVal;
};

// text size
const sliderVal = document.getElementById("fontsize");
const changeFontSize = () => {
  textDiv.style.fontSize = `${sliderVal.value}px`;
};

// change style
const changeStyle = (e) => {
  textDiv.classList.toggle(e);
};

// font family
const changeFamily = (e) => {
  textDiv.style.fontFamily = e;
};

// show css
const showCss = () => {
    const styleCont=window.getComputedStyle(textDiv);
  const parent = document.getElementById("css-props");
  const cssTxt = `color:${colorInp.value|| 'black'}; 
  font-size: ${sliderVal.value}px; 
  font-family: ${styleCont.fontFamily};
  font-style: ${styleCont.fontStyle};
  font-decoration: ${styleCont.textDecoration};`;
  parent.innerText=cssTxt;
  console.log(textDiv.fontFamily)
};