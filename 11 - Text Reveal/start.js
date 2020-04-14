(() => {
  // เริ่มเขียนโค้ด

  const sectionElems = Array.from(document.querySelectorAll("section"));

  function onScroll(event) {

    const scrollPosition = window.pageYOffset;

    sectionElems.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector("img");
      const textElem = sectionElem.querySelector(".text");

      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;

      if (scrollPosition > revealPosition)  {
        textElem.classList.add("reveal");
      }
      else {
        textElem.classList.remove("reveal");
      }
    })
    // console.log(`Scroll ${scrollPosition}`);
  }

  function run() {
    console.log(sectionElems);
    
    document.addEventListener("scroll", onScroll);
  }

  run();
})();
