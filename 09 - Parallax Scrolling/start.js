(() => {
  // เริ่มเขียนโค้ด
  const moonElem = document.querySelector(".moon");
  const wishElem = document.querySelector(".wish");

  function onScroll(event) {

    // console.log(window.scrollY);

    moonElem.style.transform = `translate(${window.scrollY * 0.7}%, ${window.scrollY * -0.7}%)`;
    wishElem.style.transform = `translateY(${window.scrollY * -1.2}%)`;
  }
  function run() {
    document.addEventListener("scroll",  onScroll);
  }
  run();
})();
