function setcolor() {
    console.log("Color Change");
    const darkElem = "#333435";
    const darkBg = "#292b2c";
  
    const checkbox = document.getElementById("toggle");
    const bodyElement = document.body;
    const backgroundElement = document.querySelector(".background");
    const cardElement = document.querySelectorAll(".card");
    console.log(cardElement.length);
  
    if (!checkbox.checked) {
      bodyElement.style.setProperty("color", "white");
      backgroundElement.style.transition = "background 500ms";
      backgroundElement.style.setProperty("background", darkBg);
      cardElement.forEach((elem) => {
        elem.style.setProperty("background", darkElem);
        elem.style.setProperty("color", "white");
      });
    } else {
      bodyElement.style.setProperty("color", "black");
      backgroundElement.style.transition = "background 500ms";
      backgroundElement.style.setProperty("background", "white");
      cardElement.forEach((elem) => {
        elem.style.setProperty("background", "white");
        elem.style.setProperty("color", "black");
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("toggle");
    setcolor();
    checkbox.addEventListener("change", function () {
      setcolor();
    });
  });
  
  document.body.addEventListener("click", function () {
    setcolor();
  });
  