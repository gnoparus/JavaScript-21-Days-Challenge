(() => {
  // เริ่มเขียนโค้ด

  const imageElems = document.querySelectorAll(".carousel > img");
  const prevBtnElem = document.querySelector(".previous");
  const nextBtnElem = document.querySelector(".next");

  let currentIndex = 0;

  function displayImage(imageElems, newIndex) {
    if (newIndex < 0) {
      newIndex = imageElems.length-1;
    }
    else if (newIndex > imageElems.length-1) {
      newIndex = 0;
    }
    
    const newImage = imageElems[newIndex];
    newImage.scrollIntoView({ behavior: "smooth" });
    currentIndex = newIndex;
  }
  
  function run() {

    prevBtnElem.addEventListener("click", () => {
      displayImage(imageElems, currentIndex-1);
    });
    nextBtnElem.addEventListener("click", () => {
      displayImage(imageElems, currentIndex+1);
    });

  }

  run();
})();
