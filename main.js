
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "15px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "White"
    ? update("White", "Black")
    : update("Black", "White"),
);

/*const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "pexels-pavel-danilyuk-7521360.jpg") {
    myImage.setAttribute("src", "pexels-fauxels-3184328.jpg");
  } else {
    myImage.setAttribute("src", "pexels-pavel-danilyuk-7521360.jpg");
  }
};*/

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";



