const outerDivs = document.querySelectorAll(".outer-div");

console.log(outerDivs);

[...outerDivs].map((outerDiv) =>
  outerDiv.addEventListener("click", () => adjustUi(outerDiv))
);

const adjustUi = (outerDiv) => {
  if (outerDiv.style.justifyContent !== "flex-end") {
    outerDiv.style.justifyContent = "flex-end";
    outerDiv.style.backgroundColor = "palevioletred";
  } else if (outerDiv.style.justifyContent === "flex-end") {
    outerDiv.style.justifyContent = "flex-start";
    outerDiv.style.backgroundColor = "rgb(206, 202, 202)";
  }
};
